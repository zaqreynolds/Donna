import { Router, type Request, type Response } from "express"
import { Prisma } from "../../generated/prisma"
import { prisma } from "../db"

const router = Router()

/** Standard sales pipeline statuses for Lead.status */
export const LEAD_STATUSES = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "NURTURING",
  "LOST",
] as const

/** Predefined outreach channels for Touch.type (UI-facing labels) */
export const TOUCH_TYPES = [
  "Phone",
  "Email",
  "Networking",
  "Canvassing",
  "Cold Call",
  "Face to Face",
  "LinkedIn",
  "Retreva",
  "Text",
  "Voicemail",
  "Video Message",
  "Post Card",
  "Social Media",
  "Estimate",
  "Invoice",
] as const

type LeadStatus = (typeof LEAD_STATUSES)[number]
type TouchTypeLabel = (typeof TOUCH_TYPES)[number]

function isLeadStatus(value: unknown): value is LeadStatus {
  return typeof value === "string" && (LEAD_STATUSES as readonly string[]).includes(value)
}

function isTouchType(value: unknown): value is TouchTypeLabel {
  return typeof value === "string" && (TOUCH_TYPES as readonly string[]).includes(value)
}

function parseDate(value: unknown): Date | null {
  if (value === undefined || value === null) return null
  if (typeof value !== "string" && typeof value !== "number") return null
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : date
}

function asOptionalBoolean(value: unknown): boolean | undefined {
  if (value === undefined) return undefined
  if (typeof value === "boolean") return value
  return undefined
}

function asOptionalString(value: unknown): string | null | undefined {
  if (value === undefined) return undefined
  if (value === null) return null
  if (typeof value !== "string") return undefined
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
}

function requireString(value: unknown): string | null {
  if (typeof value !== "string" || !value.trim()) {
    return null
  }
  return value.trim()
}

function routeParam(req: Request, key: string): string | null {
  const value = req.params[key]
  if (typeof value === "string" && value.trim()) {
    return value.trim()
  }
  if (Array.isArray(value) && typeof value[0] === "string" && value[0].trim()) {
    return value[0].trim()
  }
  return null
}

function handlePrismaError(error: unknown, res: Response, fallback: string) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2003") {
      return res.status(400).json({ error: "Related record not found (foreign key)" })
    }
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Record not found" })
    }
    if (error.code === "P2002") {
      return res.status(409).json({ error: "Record already exists" })
    }
  }

  console.error(error)
  return res.status(500).json({ error: fallback })
}

// ─── Industries ───────────────────────────────────────────────────────────────

router.get("/industries", async (_req, res) => {
  try {
    const industries = await prisma.industry.findMany({
      orderBy: { name: "asc" },
    })
    return res.json({ industries })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to fetch industries")
  }
})

// ─── Companies ────────────────────────────────────────────────────────────────

router.get("/companies", async (_req, res) => {
  try {
    const companies = await prisma.company.findMany({
      include: {
        industry: { select: { id: true, name: true } },
      },
      orderBy: { name: "asc" },
    })
    return res.json({ companies })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to fetch companies")
  }
})

router.post("/companies", async (req, res) => {
  try {
    const name = requireString(req.body?.name)
    const industryId = requireString(req.body?.industryId)
    const address = asOptionalString(req.body?.address)
    const phone = asOptionalString(req.body?.phone)
    const isVip = asOptionalBoolean(req.body?.isVip)

    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }
    if (!industryId) {
      return res.status(400).json({ error: "industryId is required" })
    }

    const industry = await prisma.industry.findUnique({ where: { id: industryId } })
    if (!industry) {
      return res.status(400).json({ error: "industryId does not match an industry" })
    }

    const company = await prisma.company.create({
      data: {
        name,
        address: address ?? null,
        phone: phone ?? null,
        industryId,
        ...(isVip !== undefined ? { isVip } : {}),
      },
      include: {
        industry: { select: { id: true, name: true } },
      },
    })

    return res.status(201).json({ company })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create company")
  }
})

router.patch("/companies/:id", async (req, res) => {
  try {
    const companyId = routeParam(req, "id")
    if (!companyId) {
      return res.status(400).json({ error: "company id is required" })
    }

    const name = asOptionalString(req.body?.name)
    const address = asOptionalString(req.body?.address)
    const phone = asOptionalString(req.body?.phone)
    const industryId = asOptionalString(req.body?.industryId) ?? undefined
    const isVip = asOptionalBoolean(req.body?.isVip)

    if (
      name === undefined &&
      address === undefined &&
      phone === undefined &&
      industryId === undefined &&
      isVip === undefined
    ) {
      return res.status(400).json({ error: "No fields to update" })
    }

    if (name !== undefined && !name) {
      return res.status(400).json({ error: "name cannot be empty" })
    }

    if (industryId) {
      const industry = await prisma.industry.findUnique({ where: { id: industryId } })
      if (!industry) {
        return res.status(400).json({ error: "industryId does not match an industry" })
      }
    }

    const company = await prisma.company.update({
      where: { id: companyId },
      data: {
        ...(typeof name === "string" ? { name } : {}),
        ...(address !== undefined ? { address } : {}),
        ...(phone !== undefined ? { phone } : {}),
        ...(industryId !== undefined ? { industryId } : {}),
        ...(isVip !== undefined ? { isVip } : {}),
      },
      include: {
        industry: { select: { id: true, name: true } },
      },
    })

    return res.json({ company })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to update company")
  }
})

router.get("/companies/:id", async (req, res) => {
  try {
    const companyId = routeParam(req, "id")
    if (!companyId) {
      return res.status(400).json({ error: "company id is required" })
    }

    const company = await prisma.company.findUnique({
      where: { id: companyId },
      include: {
        industry: { select: { id: true, name: true } },
        notes: { orderBy: { createdAt: "desc" } },
      },
    })

    if (!company) {
      return res.status(404).json({ error: "Company not found" })
    }

    return res.json({ company })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to fetch company")
  }
})

router.post("/companies/:id/notes", async (req, res) => {
  try {
    const companyId = routeParam(req, "id")
    const text = requireString(req.body?.text)

    if (!companyId) {
      return res.status(400).json({ error: "company id is required" })
    }
    if (!text) {
      return res.status(400).json({ error: "text is required" })
    }

    const company = await prisma.company.findUnique({ where: { id: companyId } })
    if (!company) {
      return res.status(404).json({ error: "Company not found" })
    }

    const note = await prisma.companyNote.create({
      data: {
        text,
        companyId,
      },
    })

    return res.status(201).json({ note })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Failed to create company note" })
  }
})

// ─── Leads ────────────────────────────────────────────────────────────────────

router.get("/leads", async (_req, res) => {
  try {
    const [leads, touchCount] = await Promise.all([
      prisma.lead.findMany({
        include: {
          company: { select: { id: true, name: true, isVip: true } },
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.touch.count(),
    ])
    return res.json({ leads, touchCount })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Failed to fetch leads" })
  }
})

router.get("/leads/:id", async (req, res) => {
  try {
    const leadId = routeParam(req, "id")
    if (!leadId) {
      return res.status(400).json({ error: "lead id is required" })
    }

    const lead = await prisma.lead.findUnique({
      where: { id: leadId },
      include: {
        company: { select: { id: true, name: true, isVip: true } },
        notes: { orderBy: { createdAt: "desc" } },
      },
    })

    if (!lead) {
      return res.status(404).json({ error: "Lead not found" })
    }

    return res.json({ lead })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to fetch lead")
  }
})

router.post("/leads", async (req, res) => {
  try {
    const firstName = requireString(req.body?.firstName)
    const lastName = requireString(req.body?.lastName)
    const title = asOptionalString(req.body?.title)
    const email = asOptionalString(req.body?.email)
    const phone = asOptionalString(req.body?.phone)
    const status = req.body?.status as string | undefined
    const isVip = asOptionalBoolean(req.body?.isVip)
    const companyId = asOptionalString(req.body?.companyId) ?? undefined
    const companyName = asOptionalString(req.body?.companyName) ?? undefined
    const industryId = asOptionalString(req.body?.industryId) ?? undefined
    const companyAddress = asOptionalString(req.body?.companyAddress)
    const companyPhone = asOptionalString(req.body?.companyPhone)
    const companyIsVip = asOptionalBoolean(req.body?.companyIsVip)

    if (!firstName) {
      return res.status(400).json({ error: "firstName is required" })
    }
    if (!lastName) {
      return res.status(400).json({ error: "lastName is required" })
    }
    if (status !== undefined && !isLeadStatus(status)) {
      return res.status(400).json({
        error: "status must be one of the standard pipeline values",
        leadStatuses: LEAD_STATUSES,
      })
    }

    const hasExistingCompany = Boolean(companyId)
    const hasNewCompany = Boolean(companyName && industryId)

    if (hasExistingCompany === hasNewCompany) {
      return res.status(400).json({
        error:
          "Provide either companyId (existing company) or companyName + industryId (create company)",
      })
    }

    const leadFields = {
      firstName,
      lastName,
      title: title ?? null,
      email: email ?? null,
      phone: phone ?? null,
      ...(status !== undefined ? { status } : {}),
      ...(isVip !== undefined ? { isVip } : {}),
    }

    if (hasExistingCompany && companyId) {
      const company = await prisma.company.findUnique({ where: { id: companyId } })
      if (!company) {
        return res.status(400).json({ error: "companyId does not match a company" })
      }

      const lead = await prisma.lead.create({
        data: {
          ...leadFields,
          companyId,
        },
        include: {
          company: { select: { id: true, name: true, isVip: true } },
        },
      })
      return res.status(201).json({ lead })
    }

    if (!companyName || !industryId) {
      return res.status(400).json({
        error: "companyName and industryId are required when creating a company",
      })
    }

    const industry = await prisma.industry.findUnique({ where: { id: industryId } })
    if (!industry) {
      return res.status(400).json({ error: "industryId does not match an industry" })
    }

    const lead = await prisma.lead.create({
      data: {
        ...leadFields,
        company: {
          create: {
            name: companyName,
            address: companyAddress ?? null,
            phone: companyPhone ?? null,
            industryId,
            ...(companyIsVip !== undefined ? { isVip: companyIsVip } : {}),
          },
        },
      },
      include: {
        company: { select: { id: true, name: true, isVip: true } },
      },
    })

    return res.status(201).json({ lead })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create lead")
  }
})

router.patch("/leads/:id", async (req, res) => {
  try {
    const leadId = routeParam(req, "id")
    if (!leadId) {
      return res.status(400).json({ error: "lead id is required" })
    }

    const firstName = asOptionalString(req.body?.firstName)
    const lastName = asOptionalString(req.body?.lastName)
    const title = asOptionalString(req.body?.title)
    const email = asOptionalString(req.body?.email)
    const phone = asOptionalString(req.body?.phone)
    const status = req.body?.status as string | undefined
    const isVip = asOptionalBoolean(req.body?.isVip)
    const companyId = asOptionalString(req.body?.companyId) ?? undefined

    if (status !== undefined && !isLeadStatus(status)) {
      return res.status(400).json({
        error: "status must be one of the standard pipeline values",
        leadStatuses: LEAD_STATUSES,
      })
    }

    if (
      firstName === undefined &&
      lastName === undefined &&
      title === undefined &&
      email === undefined &&
      phone === undefined &&
      status === undefined &&
      isVip === undefined &&
      companyId === undefined
    ) {
      return res.status(400).json({ error: "No fields to update" })
    }

    if (companyId) {
      const company = await prisma.company.findUnique({ where: { id: companyId } })
      if (!company) {
        return res.status(400).json({ error: "companyId does not match a company" })
      }
    }

    const lead = await prisma.lead.update({
      where: { id: leadId },
      data: {
        ...(firstName !== undefined ? { firstName: firstName ?? undefined } : {}),
        ...(lastName !== undefined ? { lastName: lastName ?? undefined } : {}),
        ...(title !== undefined ? { title } : {}),
        ...(email !== undefined ? { email } : {}),
        ...(phone !== undefined ? { phone } : {}),
        ...(status !== undefined ? { status } : {}),
        ...(isVip !== undefined ? { isVip } : {}),
        ...(companyId !== undefined ? { companyId } : {}),
      },
      include: {
        company: { select: { id: true, name: true, isVip: true } },
      },
    })

    return res.json({ lead })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to update lead")
  }
})

router.post("/leads/:id/notes", async (req, res) => {
  try {
    const leadId = routeParam(req, "id")
    const text = requireString(req.body?.text)

    if (!leadId) {
      return res.status(400).json({ error: "lead id is required" })
    }
    if (!text) {
      return res.status(400).json({ error: "text is required" })
    }

    const lead = await prisma.lead.findUnique({ where: { id: leadId } })
    if (!lead) {
      return res.status(404).json({ error: "Lead not found" })
    }

    const note = await prisma.leadNote.create({
      data: {
        text,
        leadId,
      },
    })

    return res.status(201).json({ note })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create lead note")
  }
})

router.post("/leads/:id/touches", async (req, res) => {
  try {
    const leadId = routeParam(req, "id")
    if (!leadId) {
      return res.status(400).json({ error: "lead id is required" })
    }

    const { type, notes, date } = req.body as {
      type?: string
      notes?: string
      date?: string
    }

    if (!isTouchType(type)) {
      return res.status(400).json({
        error: "type is required and must be a predefined touch type",
        touchTypes: TOUCH_TYPES,
      })
    }
    if (typeof notes !== "string" || !notes.trim()) {
      return res.status(400).json({ error: "notes is required" })
    }

    const parsedDate = date !== undefined ? parseDate(date) : null
    if (date !== undefined && !parsedDate) {
      return res.status(400).json({ error: "date must be a valid DateTime" })
    }

    const lead = await prisma.lead.findUnique({ where: { id: leadId } })
    if (!lead) {
      return res.status(404).json({ error: "Lead not found" })
    }

    const touch = await prisma.touch.create({
      data: {
        type,
        notes: notes.trim(),
        leadId,
        ...(parsedDate ? { date: parsedDate } : {}),
      },
    })

    return res.status(201).json({ touch })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create touch")
  }
})

export default router
