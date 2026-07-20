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

export const DEFAULT_INDUSTRIES = [
  "Commercial Real Estate",
  "Apartments/Property Management",
  "Construction",
  "Healthcare",
  "Education",
  "Retail",
  "Manufacturing",
  "Religious",
  "Other",
] as const

/** Default outreach channels — seeded as system (locked) TouchType rows */
export const DEFAULT_TOUCH_TYPES = [
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

function isLeadStatus(value: unknown): value is LeadStatus {
  return typeof value === "string" && (LEAD_STATUSES as readonly string[]).includes(value)
}

async function getTouchTypeNames(): Promise<string[]> {
  const rows = await prisma.touchType.findMany({
    select: { name: true },
  })
  const names = rows.map((row) => row.name)
  if (names.length === 0) {
    return [...DEFAULT_TOUCH_TYPES]
  }

  const defaultSet = new Set<string>(DEFAULT_TOUCH_TYPES)
  const orderedDefaults = DEFAULT_TOUCH_TYPES.filter((name) => names.includes(name))
  const custom = names
    .filter((name) => !defaultSet.has(name))
    .sort((a, b) => a.localeCompare(b))
  return [...orderedDefaults, ...custom]
}

async function isKnownTouchType(value: unknown): Promise<boolean> {
  if (typeof value !== "string" || !value.trim()) return false
  const names = await getTouchTypeNames()
  return names.includes(value.trim())
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
      orderBy: [{ isSystem: "desc" }, { name: "asc" }],
    })
    return res.json({ industries })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to fetch industries")
  }
})

router.post("/industries", async (req, res) => {
  try {
    const name = requireString(req.body?.name)
    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }

    const industry = await prisma.industry.create({
      data: { name, isSystem: false },
    })
    return res.status(201).json({ industry })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create industry")
  }
})

router.patch("/industries/:id", async (req, res) => {
  try {
    const industryId = routeParam(req, "id")
    if (!industryId) {
      return res.status(400).json({ error: "industry id is required" })
    }

    const name = requireString(req.body?.name)
    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }

    const existing = await prisma.industry.findUnique({ where: { id: industryId } })
    if (!existing) {
      return res.status(404).json({ error: "Industry not found" })
    }
    if (existing.isSystem) {
      return res.status(403).json({ error: "Built-in industries cannot be edited" })
    }

    const industry = await prisma.industry.update({
      where: { id: industryId },
      data: { name },
    })
    return res.json({ industry })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to update industry")
  }
})

router.delete("/industries/:id", async (req, res) => {
  try {
    const industryId = routeParam(req, "id")
    if (!industryId) {
      return res.status(400).json({ error: "industry id is required" })
    }

    const existing = await prisma.industry.findUnique({
      where: { id: industryId },
      include: { _count: { select: { companies: true } } },
    })
    if (!existing) {
      return res.status(404).json({ error: "Industry not found" })
    }
    if (existing.isSystem) {
      return res.status(403).json({ error: "Built-in industries cannot be deleted" })
    }
    if (existing._count.companies > 0) {
      return res.status(409).json({
        error: "Industry is in use by one or more companies",
      })
    }

    await prisma.industry.delete({ where: { id: industryId } })
    return res.status(204).send()
  } catch (error) {
    return handlePrismaError(error, res, "Failed to delete industry")
  }
})

router.get("/touch-types", async (_req, res) => {
  try {
    let touchTypes = await prisma.touchType.findMany()

    if (touchTypes.length === 0) {
      await prisma.touchType.createMany({
        data: DEFAULT_TOUCH_TYPES.map((name) => ({ name, isSystem: true })),
      })
      touchTypes = await prisma.touchType.findMany()
    }

    const names = await getTouchTypeNames()
    const byName = Object.fromEntries(touchTypes.map((row) => [row.name, row]))
    return res.json({
      touchTypes: names.map((name) => byName[name]).filter(Boolean),
    })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to fetch touch types")
  }
})

router.post("/touch-types", async (req, res) => {
  try {
    const name = requireString(req.body?.name)
    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }

    const touchType = await prisma.touchType.create({
      data: { name, isSystem: false },
    })
    return res.status(201).json({ touchType })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create touch type")
  }
})

router.patch("/touch-types/:id", async (req, res) => {
  try {
    const touchTypeId = routeParam(req, "id")
    if (!touchTypeId) {
      return res.status(400).json({ error: "touch type id is required" })
    }

    const name = requireString(req.body?.name)
    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }

    const existing = await prisma.touchType.findUnique({ where: { id: touchTypeId } })
    if (!existing) {
      return res.status(404).json({ error: "Touch type not found" })
    }
    if (existing.isSystem) {
      return res.status(403).json({ error: "Built-in touch types cannot be edited" })
    }

    const touchType = await prisma.$transaction(async (tx) => {
      const updated = await tx.touchType.update({
        where: { id: touchTypeId },
        data: { name },
      })
      if (existing.name !== name) {
        await tx.touch.updateMany({
          where: { type: existing.name },
          data: { type: name },
        })
      }
      return updated
    })

    return res.json({ touchType })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to update touch type")
  }
})

router.delete("/touch-types/:id", async (req, res) => {
  try {
    const touchTypeId = routeParam(req, "id")
    if (!touchTypeId) {
      return res.status(400).json({ error: "touch type id is required" })
    }

    const existing = await prisma.touchType.findUnique({ where: { id: touchTypeId } })
    if (!existing) {
      return res.status(404).json({ error: "Touch type not found" })
    }
    if (existing.isSystem) {
      return res.status(403).json({ error: "Built-in touch types cannot be deleted" })
    }

    const inUse = await prisma.touch.count({ where: { type: existing.name } })
    if (inUse > 0) {
      return res.status(409).json({
        error: "Touch type is in use by one or more touches",
      })
    }

    await prisma.touchType.delete({ where: { id: touchTypeId } })
    return res.status(204).send()
  } catch (error) {
    return handlePrismaError(error, res, "Failed to delete touch type")
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
          touches: {
            select: { id: true, type: true, date: true, notes: true },
            orderBy: { date: "desc" },
          },
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
        touches: { orderBy: { date: "desc" } },
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

    const type = requireString(req.body?.type)
    const notesRaw = req.body?.notes
    const notes =
      typeof notesRaw === "string" ? notesRaw.trim() : notesRaw == null ? "" : null
    const date = req.body?.date as string | undefined

    if (!type || !(await isKnownTouchType(type))) {
      const touchTypes = await getTouchTypeNames()
      return res.status(400).json({
        error: "type is required and must match a configured touch type",
        touchTypes,
      })
    }
    if (notes === null) {
      return res.status(400).json({ error: "notes must be a string when provided" })
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
        notes,
        leadId,
        ...(parsedDate ? { date: parsedDate } : {}),
      },
    })

    return res.status(201).json({ touch })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create touch")
  }
})

router.patch("/leads/:id/touches/:touchId", async (req, res) => {
  try {
    const leadId = routeParam(req, "id")
    const touchId = routeParam(req, "touchId")
    if (!leadId) {
      return res.status(400).json({ error: "lead id is required" })
    }
    if (!touchId) {
      return res.status(400).json({ error: "touch id is required" })
    }

    const type = asOptionalString(req.body?.type) ?? undefined
    const notesProvided = Object.prototype.hasOwnProperty.call(req.body ?? {}, "notes")
    const notesRaw = req.body?.notes
    const notes = notesProvided
      ? typeof notesRaw === "string"
        ? notesRaw.trim()
        : notesRaw == null
          ? ""
          : null
      : undefined
    const dateProvided = Object.prototype.hasOwnProperty.call(req.body ?? {}, "date")
    const date = req.body?.date as string | undefined

    if (type === undefined && notes === undefined && !dateProvided) {
      return res.status(400).json({ error: "No fields to update" })
    }

    if (type !== undefined && !(await isKnownTouchType(type))) {
      const touchTypes = await getTouchTypeNames()
      return res.status(400).json({
        error: "type must match a configured touch type",
        touchTypes,
      })
    }
    if (notes === null) {
      return res.status(400).json({ error: "notes must be a string when provided" })
    }

    const parsedDate = dateProvided ? parseDate(date) : undefined
    if (dateProvided && !parsedDate) {
      return res.status(400).json({ error: "date must be a valid DateTime" })
    }

    const existing = await prisma.touch.findFirst({
      where: { id: touchId, leadId },
    })
    if (!existing) {
      return res.status(404).json({ error: "Touch not found" })
    }

    const touch = await prisma.touch.update({
      where: { id: touchId },
      data: {
        ...(type !== undefined ? { type } : {}),
        ...(notes !== undefined ? { notes } : {}),
        ...(parsedDate ? { date: parsedDate } : {}),
      },
    })

    return res.json({ touch })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to update touch")
  }
})

export default router
