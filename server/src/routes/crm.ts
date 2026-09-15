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
  "Meeting",
  "Estimate",
  "Sale",
  "Networking",
  "Canvassing",
  "Cold Call",
  "Face to Face",
  "Retreva",
  "Text",
  "Voicemail",
  "Video Message",
  "Post Card",
  "Social Media",
  "Invoice",
] as const

export const DEFAULT_SOCIAL_PLATFORMS = [
  "Instagram",
  "Facebook",
  "LinkedIn",
  "X",
  "TikTok",
  "YouTube",
  "Nextdoor",
  "Other",
] as const

export type ScorecardMetricKey =
  | "calls"
  | "emails"
  | "meetings"
  | "estimates"
  | "estimateValue"
  | "revenue"

export function touchSupportsAmount(type: string): boolean {
  const key = type.trim().toUpperCase().replace(/[\s-]+/g, "_")
  return key === "ESTIMATE" || key === "SALE" || key === "DEAL_WON"
}

export function touchIsEstimate(type: string): boolean {
  const key = type.trim().toUpperCase().replace(/[\s-]+/g, "_")
  return key === "ESTIMATE"
}

export function touchIsSocialMedia(type: string): boolean {
  const key = type.trim().toUpperCase().replace(/[\s-]+/g, "_")
  return key === "SOCIAL_MEDIA"
}

export function scorecardCategory(
  type: string,
): Exclude<ScorecardMetricKey, "revenue" | "estimateValue"> | "sale" | null {
  const key = type.trim().toUpperCase().replace(/[\s-]+/g, "_")
  if (
    key === "PHONE" ||
    key === "COLD_CALL" ||
    key === "VOICEMAIL"
  ) {
    return "calls"
  }
  if (key === "EMAIL") return "emails"
  if (key === "MEETING" || key === "FACE_TO_FACE") return "meetings"
  if (key === "ESTIMATE") return "estimates"
  if (key === "SALE" || key === "DEAL_WON") return "sale"
  return null
}

export function parseOptionalAmount(value: unknown): number | null | undefined {
  if (value === undefined) return undefined
  if (value === null || value === "") return null
  const n = typeof value === "number" ? value : Number(value)
  if (!Number.isFinite(n) || n < 0) return undefined
  return n
}

function startOfLocalDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)
}

function endOfLocalDay(date: Date): Date {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    23,
    59,
    59,
    999,
  )
}

/** Monday 00:00 → Sunday 23:59:59.999 of the week containing `anchor`. */
export function getWeekRange(anchor = new Date()): { start: Date; end: Date } {
  const day = anchor.getDay() // 0 Sun … 6 Sat
  const daysFromMonday = day === 0 ? 6 : day - 1
  const monday = new Date(anchor)
  monday.setDate(anchor.getDate() - daysFromMonday)
  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)
  return { start: startOfLocalDay(monday), end: endOfLocalDay(sunday) }
}

export function parseDayBound(value: string, edge: "start" | "end"): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim())
  if (!match) return null
  const year = Number(match[1])
  const month = Number(match[2]) - 1
  const day = Number(match[3])
  const date = new Date(year, month, day)
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month ||
    date.getDate() !== day
  ) {
    return null
  }
  return edge === "start" ? startOfLocalDay(date) : endOfLocalDay(date)
}

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

async function getSocialPlatformNames(): Promise<string[]> {
  const rows = await prisma.socialPlatform.findMany({
    select: { name: true },
  })
  const names = rows.map((row) => row.name)
  if (names.length === 0) {
    return [...DEFAULT_SOCIAL_PLATFORMS]
  }

  const defaultSet = new Set<string>(DEFAULT_SOCIAL_PLATFORMS)
  const orderedDefaults = DEFAULT_SOCIAL_PLATFORMS.filter((name) =>
    names.includes(name),
  )
  const custom = names
    .filter((name) => !defaultSet.has(name))
    .sort((a, b) => a.localeCompare(b))
  return [...orderedDefaults, ...custom]
}

async function isKnownSocialPlatform(value: unknown): Promise<boolean> {
  if (typeof value !== "string" || !value.trim()) return false
  const names = await getSocialPlatformNames()
  return names.includes(value.trim())
}

async function ensureSocialPlatformsSeeded(): Promise<void> {
  const count = await prisma.socialPlatform.count()
  if (count > 0) return
  await prisma.socialPlatform.createMany({
    data: DEFAULT_SOCIAL_PLATFORMS.map((name) => ({ name, isSystem: true })),
  })
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

type CompanySocialInput = { platform: string; handle: string }

const companyDetailInclude = {
  industry: { select: { id: true, name: true } },
  socials: {
    select: { id: true, platform: true, handle: true },
    orderBy: { platform: "asc" as const },
  },
} as const

const companyListInclude = {
  industry: { select: { id: true, name: true } },
  socials: {
    select: { id: true, platform: true, handle: true },
    orderBy: { platform: "asc" as const },
  },
} as const

async function parseSocialLinksBody(
  value: unknown,
): Promise<
  | { status: "omit" }
  | { status: "ok"; links: CompanySocialInput[] }
  | { status: "error"; error: string; socialPlatforms?: string[] }
> {
  if (value === undefined) return { status: "omit" }
  if (value === null) return { status: "ok", links: [] }
  if (!Array.isArray(value)) {
    return { status: "error", error: "socials must be an array" }
  }

  await ensureSocialPlatformsSeeded()
  const known = new Set(await getSocialPlatformNames())
  const byPlatform = new Map<string, string>()

  for (const row of value) {
    if (!row || typeof row !== "object") {
      return { status: "error", error: "each social entry must be an object" }
    }
    const platform = asOptionalString((row as { platform?: unknown }).platform)
    const handle = asOptionalString((row as { handle?: unknown }).handle)
    if (!platform && !handle) continue
    if (!platform || !handle) {
      return {
        status: "error",
        error: "each social entry needs platform and handle",
      }
    }
    if (!known.has(platform)) {
      return {
        status: "error",
        error: `unknown social platform: ${platform}`,
        socialPlatforms: [...known],
      }
    }
    byPlatform.set(platform, handle)
  }

  return {
    status: "ok",
    links: [...byPlatform.entries()].map(([platform, handle]) => ({
      platform,
      handle,
    })),
  }
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

router.get("/social-platforms", async (_req, res) => {
  try {
    await ensureSocialPlatformsSeeded()
    let socialPlatforms = await prisma.socialPlatform.findMany()
    const names = await getSocialPlatformNames()
    const byName = Object.fromEntries(
      socialPlatforms.map((row) => [row.name, row]),
    )
    return res.json({
      socialPlatforms: names.map((name) => byName[name]).filter(Boolean),
    })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to fetch social platforms")
  }
})

router.post("/social-platforms", async (req, res) => {
  try {
    await ensureSocialPlatformsSeeded()
    const name = requireString(req.body?.name)
    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }

    const socialPlatform = await prisma.socialPlatform.create({
      data: { name, isSystem: false },
    })
    return res.status(201).json({ socialPlatform })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create social platform")
  }
})

router.patch("/social-platforms/:id", async (req, res) => {
  try {
    const platformId = routeParam(req, "id")
    if (!platformId) {
      return res.status(400).json({ error: "social platform id is required" })
    }

    const name = requireString(req.body?.name)
    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }

    const existing = await prisma.socialPlatform.findUnique({
      where: { id: platformId },
    })
    if (!existing) {
      return res.status(404).json({ error: "Social platform not found" })
    }
    if (existing.isSystem) {
      return res
        .status(403)
        .json({ error: "Built-in social platforms cannot be edited" })
    }

    const socialPlatform = await prisma.$transaction(async (tx) => {
      const updated = await tx.socialPlatform.update({
        where: { id: platformId },
        data: { name },
      })
      if (existing.name !== name) {
        await tx.touch.updateMany({
          where: { socialPlatform: existing.name },
          data: { socialPlatform: name },
        })
      }
      return updated
    })

    return res.json({ socialPlatform })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to update social platform")
  }
})

router.delete("/social-platforms/:id", async (req, res) => {
  try {
    const platformId = routeParam(req, "id")
    if (!platformId) {
      return res.status(400).json({ error: "social platform id is required" })
    }

    const existing = await prisma.socialPlatform.findUnique({
      where: { id: platformId },
    })
    if (!existing) {
      return res.status(404).json({ error: "Social platform not found" })
    }
    if (existing.isSystem) {
      return res
        .status(403)
        .json({ error: "Built-in social platforms cannot be deleted" })
    }

    const inUse = await prisma.touch.count({
      where: { socialPlatform: existing.name },
    })
    if (inUse > 0) {
      return res.status(409).json({
        error: "Social platform is in use by one or more touches",
      })
    }

    await prisma.socialPlatform.delete({ where: { id: platformId } })
    return res.status(204).send()
  } catch (error) {
    return handlePrismaError(error, res, "Failed to delete social platform")
  }
})

// ─── Companies ────────────────────────────────────────────────────────────────

router.get("/companies", async (_req, res) => {
  try {
    const companies = await prisma.company.findMany({
      include: companyListInclude,
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
    const website = asOptionalString(req.body?.website)
    const isVip = asOptionalBoolean(req.body?.isVip)
    const socialsParsed = await parseSocialLinksBody(req.body?.socials)

    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }
    if (!industryId) {
      return res.status(400).json({ error: "industryId is required" })
    }
    if (socialsParsed.status === "error") {
      return res.status(400).json({
        error: socialsParsed.error,
        ...(socialsParsed.socialPlatforms
          ? { socialPlatforms: socialsParsed.socialPlatforms }
          : {}),
      })
    }

    const industry = await prisma.industry.findUnique({ where: { id: industryId } })
    if (!industry) {
      return res.status(400).json({ error: "industryId does not match an industry" })
    }

    const socials =
      socialsParsed.status === "ok" ? socialsParsed.links : []

    const company = await prisma.company.create({
      data: {
        name,
        address: address ?? null,
        phone: phone ?? null,
        website: website ?? null,
        industryId,
        ...(isVip !== undefined ? { isVip } : {}),
        ...(socials.length > 0
          ? {
              socials: {
                create: socials,
              },
            }
          : {}),
      },
      include: companyListInclude,
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
    const website = asOptionalString(req.body?.website)
    const industryId = asOptionalString(req.body?.industryId) ?? undefined
    const isVip = asOptionalBoolean(req.body?.isVip)
    const socialsParsed = await parseSocialLinksBody(req.body?.socials)

    if (socialsParsed.status === "error") {
      return res.status(400).json({
        error: socialsParsed.error,
        ...(socialsParsed.socialPlatforms
          ? { socialPlatforms: socialsParsed.socialPlatforms }
          : {}),
      })
    }

    if (
      name === undefined &&
      address === undefined &&
      phone === undefined &&
      website === undefined &&
      industryId === undefined &&
      isVip === undefined &&
      socialsParsed.status === "omit"
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
        ...(website !== undefined ? { website } : {}),
        ...(industryId !== undefined ? { industryId } : {}),
        ...(isVip !== undefined ? { isVip } : {}),
        ...(socialsParsed.status === "ok"
          ? {
              socials: {
                deleteMany: {},
                create: socialsParsed.links,
              },
            }
          : {}),
      },
      include: companyListInclude,
    })

    return res.json({ company })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to update company")
  }
})

router.put("/companies/:id", async (req, res) => {
  try {
    const companyId = routeParam(req, "id")
    if (!companyId) {
      return res.status(400).json({ error: "company id is required" })
    }

    const name = requireString(req.body?.name)
    const industryId = requireString(req.body?.industryId)
    const address = asOptionalString(req.body?.address)
    const phone = asOptionalString(req.body?.phone)
    const website = asOptionalString(req.body?.website)
    const isVip = asOptionalBoolean(req.body?.isVip)
    const socialsParsed = await parseSocialLinksBody(
      req.body?.socials === undefined ? [] : req.body?.socials,
    )

    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }
    if (!industryId) {
      return res.status(400).json({ error: "industryId is required" })
    }
    if (socialsParsed.status === "error") {
      return res.status(400).json({
        error: socialsParsed.error,
        ...(socialsParsed.socialPlatforms
          ? { socialPlatforms: socialsParsed.socialPlatforms }
          : {}),
      })
    }

    const industry = await prisma.industry.findUnique({ where: { id: industryId } })
    if (!industry) {
      return res.status(400).json({ error: "industryId does not match an industry" })
    }

    const socials = socialsParsed.status === "ok" ? socialsParsed.links : []

    const company = await prisma.company.update({
      where: { id: companyId },
      data: {
        name,
        industryId,
        address: address ?? null,
        phone: phone ?? null,
        website: website ?? null,
        ...(isVip !== undefined ? { isVip } : {}),
        socials: {
          deleteMany: {},
          create: socials,
        },
      },
      include: companyListInclude,
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
        ...companyDetailInclude,
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
          company: {
            select: {
              id: true,
              name: true,
              isVip: true,
              industry: { select: { id: true, name: true } },
            },
          },
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
        company: {
          select: {
            id: true,
            name: true,
            isVip: true,
            industry: { select: { id: true, name: true } },
          },
        },
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
    const officePhone = asOptionalString(req.body?.officePhone)
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
      officePhone: officePhone ?? null,
      // New leads always start as NEW unless an explicit valid status is provided.
      status: status !== undefined ? status : "NEW",
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
          company: {
          select: {
            id: true,
            name: true,
            isVip: true,
            industry: { select: { id: true, name: true } },
          },
        },
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
        company: {
          select: {
            id: true,
            name: true,
            isVip: true,
            industry: { select: { id: true, name: true } },
          },
        },
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
    const officePhone = asOptionalString(req.body?.officePhone)
    const status = req.body?.status as string | undefined
    const isVip = asOptionalBoolean(req.body?.isVip)
    const companyId = asOptionalString(req.body?.companyId) ?? undefined
    const companyName = asOptionalString(req.body?.companyName) ?? undefined
    const industryId = asOptionalString(req.body?.industryId) ?? undefined

    if (status !== undefined && !isLeadStatus(status)) {
      return res.status(400).json({
        error: "status must be one of the standard pipeline values",
        leadStatuses: LEAD_STATUSES,
      })
    }

    const creatingCompany = Boolean(companyName && industryId)

    if (
      firstName === undefined &&
      lastName === undefined &&
      title === undefined &&
      email === undefined &&
      phone === undefined &&
      officePhone === undefined &&
      status === undefined &&
      isVip === undefined &&
      companyId === undefined &&
      !creatingCompany
    ) {
      return res.status(400).json({ error: "No fields to update" })
    }

    if (companyId && creatingCompany) {
      return res.status(400).json({
        error: "Provide either companyId or companyName + industryId, not both",
      })
    }

    if (companyId) {
      const company = await prisma.company.findUnique({ where: { id: companyId } })
      if (!company) {
        return res.status(400).json({ error: "companyId does not match a company" })
      }
    }

    if (creatingCompany) {
      const industry = await prisma.industry.findUnique({ where: { id: industryId } })
      if (!industry) {
        return res.status(400).json({ error: "industryId does not match an industry" })
      }
    }

    const lead = await prisma.$transaction(async (tx) => {
      let nextCompanyId = companyId

      if (creatingCompany && companyName && industryId) {
        const company = await tx.company.create({
          data: {
            name: companyName,
            industryId,
          },
        })
        nextCompanyId = company.id
      }

      return tx.lead.update({
        where: { id: leadId },
        data: {
          ...(firstName !== undefined ? { firstName: firstName ?? undefined } : {}),
          ...(lastName !== undefined ? { lastName: lastName ?? undefined } : {}),
          ...(title !== undefined ? { title } : {}),
          ...(email !== undefined ? { email } : {}),
          ...(phone !== undefined ? { phone } : {}),
          ...(officePhone !== undefined ? { officePhone } : {}),
          ...(status !== undefined ? { status } : {}),
          ...(isVip !== undefined ? { isVip } : {}),
          ...(nextCompanyId !== undefined ? { companyId: nextCompanyId } : {}),
        },
        include: {
          company: {
          select: {
            id: true,
            name: true,
            isVip: true,
            industry: { select: { id: true, name: true } },
          },
        },
        },
      })
    })

    return res.json({ lead })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to update lead")
  }
})

router.put("/leads/:id", async (req, res) => {
  try {
    const leadId = routeParam(req, "id")
    if (!leadId) {
      return res.status(400).json({ error: "lead id is required" })
    }

    const firstName = requireString(req.body?.firstName)
    const lastName = requireString(req.body?.lastName)
    const title = asOptionalString(req.body?.title)
    const email = asOptionalString(req.body?.email)
    const phone = asOptionalString(req.body?.phone)
    const officePhone = asOptionalString(req.body?.officePhone)
    const status = (req.body?.status as string | undefined) ?? "NEW"
    const isVip = asOptionalBoolean(req.body?.isVip)
    const companyId = asOptionalString(req.body?.companyId) ?? undefined
    const companyName = asOptionalString(req.body?.companyName) ?? undefined
    const industryId = asOptionalString(req.body?.industryId) ?? undefined

    if (!firstName) {
      return res.status(400).json({ error: "firstName is required" })
    }
    if (!lastName) {
      return res.status(400).json({ error: "lastName is required" })
    }
    if (!isLeadStatus(status)) {
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

    if (companyId) {
      const company = await prisma.company.findUnique({ where: { id: companyId } })
      if (!company) {
        return res.status(400).json({ error: "companyId does not match a company" })
      }
    }

    if (hasNewCompany && industryId) {
      const industry = await prisma.industry.findUnique({ where: { id: industryId } })
      if (!industry) {
        return res.status(400).json({ error: "industryId does not match an industry" })
      }
    }

    const lead = await prisma.$transaction(async (tx) => {
      let nextCompanyId = companyId

      if (hasNewCompany && companyName && industryId) {
        const company = await tx.company.create({
          data: {
            name: companyName,
            industryId,
          },
        })
        nextCompanyId = company.id
      }

      if (!nextCompanyId) {
        throw new Error("companyId is required")
      }

      return tx.lead.update({
        where: { id: leadId },
        data: {
          firstName,
          lastName,
          title: title ?? null,
          email: email ?? null,
          phone: phone ?? null,
          officePhone: officePhone ?? null,
          status,
          companyId: nextCompanyId,
          ...(isVip !== undefined ? { isVip } : {}),
        },
        include: {
          company: {
          select: {
            id: true,
            name: true,
            isVip: true,
            industry: { select: { id: true, name: true } },
          },
        },
        },
      })
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
    const amountParsed = parseOptionalAmount(req.body?.amount)
    const estimateNumberRaw = asOptionalString(req.body?.estimateNumber)
    const socialPlatformRaw = asOptionalString(req.body?.socialPlatform)

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
    if (amountParsed === undefined && req.body?.amount !== undefined) {
      return res.status(400).json({ error: "amount must be a non-negative number" })
    }

    if (touchIsSocialMedia(type)) {
      await ensureSocialPlatformsSeeded()
      if (!socialPlatformRaw || !(await isKnownSocialPlatform(socialPlatformRaw))) {
        const socialPlatforms = await getSocialPlatformNames()
        return res.status(400).json({
          error: "socialPlatform is required for Social Media touches",
          socialPlatforms,
        })
      }
    }

    const parsedDate = date !== undefined ? parseDate(date) : null
    if (date !== undefined && !parsedDate) {
      return res.status(400).json({ error: "date must be a valid DateTime" })
    }

    const lead = await prisma.lead.findUnique({ where: { id: leadId } })
    if (!lead) {
      return res.status(404).json({ error: "Lead not found" })
    }

    const amount =
      touchSupportsAmount(type)
        ? amountParsed === undefined
          ? null
          : amountParsed
        : null
    const estimateNumber = touchIsEstimate(type)
      ? estimateNumberRaw?.trim() || null
      : null
    const socialPlatform = touchIsSocialMedia(type)
      ? socialPlatformRaw!.trim()
      : null

    const touch = await prisma.touch.create({
      data: {
        type,
        notes,
        leadId,
        amount,
        estimateNumber,
        socialPlatform,
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
    const amountProvided = Object.prototype.hasOwnProperty.call(
      req.body ?? {},
      "amount",
    )
    const amountParsed = amountProvided
      ? parseOptionalAmount(req.body?.amount)
      : undefined
    const estimateNumberProvided = Object.prototype.hasOwnProperty.call(
      req.body ?? {},
      "estimateNumber",
    )
    const estimateNumberRaw = estimateNumberProvided
      ? asOptionalString(req.body?.estimateNumber)
      : undefined
    const socialPlatformProvided = Object.prototype.hasOwnProperty.call(
      req.body ?? {},
      "socialPlatform",
    )
    const socialPlatformRaw = socialPlatformProvided
      ? asOptionalString(req.body?.socialPlatform)
      : undefined

    if (
      type === undefined &&
      notes === undefined &&
      !dateProvided &&
      !amountProvided &&
      !estimateNumberProvided &&
      !socialPlatformProvided
    ) {
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
    if (amountProvided && amountParsed === undefined) {
      return res.status(400).json({ error: "amount must be a non-negative number" })
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

    const nextType = type ?? existing.type
    const amountUpdate = !touchSupportsAmount(nextType)
      ? null
      : amountProvided
        ? (amountParsed ?? null)
        : undefined
    const estimateNumberUpdate = !touchIsEstimate(nextType)
      ? null
      : estimateNumberProvided
        ? estimateNumberRaw?.trim() || null
        : undefined

    let socialPlatformUpdate: string | null | undefined
    if (!touchIsSocialMedia(nextType)) {
      socialPlatformUpdate = null
    } else if (socialPlatformProvided || type !== undefined) {
      const candidate =
        socialPlatformRaw?.trim() ||
        (touchIsSocialMedia(existing.type) ? existing.socialPlatform : null)
      if (!candidate || !(await isKnownSocialPlatform(candidate))) {
        await ensureSocialPlatformsSeeded()
        const socialPlatforms = await getSocialPlatformNames()
        return res.status(400).json({
          error: "socialPlatform is required for Social Media touches",
          socialPlatforms,
        })
      }
      socialPlatformUpdate = candidate
    }

    const touch = await prisma.touch.update({
      where: { id: touchId },
      data: {
        ...(type !== undefined ? { type } : {}),
        ...(notes !== undefined ? { notes } : {}),
        ...(parsedDate ? { date: parsedDate } : {}),
        ...(amountUpdate !== undefined ? { amount: amountUpdate } : {}),
        ...(estimateNumberUpdate !== undefined
          ? { estimateNumber: estimateNumberUpdate }
          : {}),
        ...(socialPlatformUpdate !== undefined
          ? { socialPlatform: socialPlatformUpdate }
          : {}),
      },
    })

    return res.json({ touch })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to update touch")
  }
})

router.get("/scorecard/weekly", async (req, res) => {
  try {
    const startParam =
      typeof req.query.start === "string" ? req.query.start : undefined
    const endParam = typeof req.query.end === "string" ? req.query.end : undefined

    let start: Date
    let end: Date

    if (startParam || endParam) {
      const parsedStart = startParam ? parseDayBound(startParam, "start") : null
      const parsedEnd = endParam ? parseDayBound(endParam, "end") : null
      if (!parsedStart || !parsedEnd) {
        return res.status(400).json({
          error: "start and end must be YYYY-MM-DD when provided",
        })
      }
      if (parsedStart.getTime() > parsedEnd.getTime()) {
        return res.status(400).json({ error: "start must be on or before end" })
      }
      start = parsedStart
      end = parsedEnd
    } else {
      ;({ start, end } = getWeekRange())
    }

    const touches = await prisma.touch.findMany({
      where: {
        date: {
          gte: start,
          lte: end,
        },
      },
      select: {
        type: true,
        amount: true,
      },
    })

    const metrics = {
      calls: 0,
      emails: 0,
      meetings: 0,
      estimates: 0,
      estimateValue: 0,
      revenue: 0,
    }

    for (const touch of touches) {
      const category = scorecardCategory(touch.type)
      if (category === "calls") metrics.calls += 1
      else if (category === "emails") metrics.emails += 1
      else if (category === "meetings") metrics.meetings += 1
      else if (category === "estimates") {
        metrics.estimates += 1
        // Pipeline $ only — never counted as booked revenue.
        if (typeof touch.amount === "number") {
          metrics.estimateValue += touch.amount
        }
      } else if (category === "sale") {
        // Booked revenue from Sale / DEAL_WON only.
        if (typeof touch.amount === "number") {
          metrics.revenue += touch.amount
        }
      }
    }

    const toDateKey = (date: Date) => {
      const y = date.getFullYear()
      const m = String(date.getMonth() + 1).padStart(2, "0")
      const d = String(date.getDate()).padStart(2, "0")
      return `${y}-${m}-${d}`
    }

    return res.json({
      range: {
        start: toDateKey(start),
        end: toDateKey(end),
      },
      metrics,
      touchCount: touches.length,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Failed to load weekly scorecard" })
  }
})

export default router
