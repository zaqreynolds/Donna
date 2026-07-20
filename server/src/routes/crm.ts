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
    const leads = await prisma.lead.findMany({
      include: {
        company: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: "desc" },
    })
    return res.json({ leads })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Failed to fetch leads" })
  }
})

router.post("/leads", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      title,
      email,
      phone,
      status,
      companyId,
      companyName,
      industryId,
      companyAddress,
      companyPhone,
    } = req.body as {
      firstName?: string
      lastName?: string
      title?: string | null
      email?: string | null
      phone?: string | null
      status?: string
      companyId?: string
      companyName?: string
      industryId?: string
      companyAddress?: string | null
      companyPhone?: string | null
    }

    if (!firstName?.trim()) {
      return res.status(400).json({ error: "firstName is required" })
    }
    if (!lastName?.trim()) {
      return res.status(400).json({ error: "lastName is required" })
    }
    if (status !== undefined && !isLeadStatus(status)) {
      return res.status(400).json({
        error: "status must be one of the standard pipeline values",
        leadStatuses: LEAD_STATUSES,
      })
    }

    const hasExistingCompany = Boolean(companyId?.trim())
    const hasNewCompany = Boolean(companyName?.trim() && industryId?.trim())

    if (hasExistingCompany === hasNewCompany) {
      return res.status(400).json({
        error:
          "Provide either companyId (existing company) or companyName + industryId (create company)",
      })
    }

    const leadFields = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      title: title?.trim() || null,
      email: email?.trim() || null,
      phone: phone?.trim() || null,
      ...(status !== undefined ? { status } : {}),
    }

    const lead = hasExistingCompany
      ? await prisma.lead.create({
          data: {
            ...leadFields,
            companyId: companyId!.trim(),
          },
          include: {
            company: { select: { id: true, name: true } },
          },
        })
      : await prisma.lead.create({
          data: {
            ...leadFields,
            company: {
              create: {
                name: companyName!.trim(),
                address: companyAddress?.trim() || null,
                phone: companyPhone?.trim() || null,
                industryId: industryId!.trim(),
              },
            },
          },
          include: {
            company: { select: { id: true, name: true } },
          },
        })

    return res.status(201).json({ lead })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Failed to create lead" })
  }
})

router.post("/leads/:id/touches", async (req, res) => {
  try {
    const leadId = req.params.id
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
    console.error(error)
    return res.status(500).json({ error: "Failed to create touch" })
  }
})

export default router
