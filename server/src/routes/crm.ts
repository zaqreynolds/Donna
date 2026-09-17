import { Router, type Request, type Response } from "express"
import { Prisma } from "../../generated/prisma"
import { prisma } from "../db"

const router = Router()

/** Bootstrap organization id used by the Account/Contact migration. */
export const DEFAULT_ORG_ID = "00000000-0000-4000-8000-000000000001"

/** Standard sales pipeline statuses for Account.status */
export const ACCOUNT_STATUSES = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "NURTURING",
  "LOST",
] as const

/** @deprecated Use ACCOUNT_STATUSES */
export const LEAD_STATUSES = ACCOUNT_STATUSES

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

type AccountStatus = (typeof ACCOUNT_STATUSES)[number]

function isAccountStatus(value: unknown): value is AccountStatus {
  return (
    typeof value === "string" &&
    (ACCOUNT_STATUSES as readonly string[]).includes(value)
  )
}

/** Find the first organization, or create the local bootstrap org. */
export async function getDefaultOrganizationId(): Promise<string> {
  const existing = await prisma.organization.findFirst({
    orderBy: { createdAt: "asc" },
    select: { id: true },
  })
  if (existing) return existing.id

  const created = await prisma.organization.create({
    data: {
      id: DEFAULT_ORG_ID,
      name: "Local Center",
      slug: "local-center",
    },
    select: { id: true },
  })
  return created.id
}

async function getTouchTypeNames(organizationId: string): Promise<string[]> {
  const rows = await prisma.touchType.findMany({
    where: { organizationId },
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

async function isKnownTouchType(
  organizationId: string,
  value: unknown,
): Promise<boolean> {
  if (typeof value !== "string" || !value.trim()) return false
  const names = await getTouchTypeNames(organizationId)
  return names.includes(value.trim())
}

async function getSocialPlatformNames(organizationId: string): Promise<string[]> {
  const rows = await prisma.socialPlatform.findMany({
    where: { organizationId },
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

async function isKnownSocialPlatform(
  organizationId: string,
  value: unknown,
): Promise<boolean> {
  if (typeof value !== "string" || !value.trim()) return false
  const names = await getSocialPlatformNames(organizationId)
  return names.includes(value.trim())
}

async function ensureSocialPlatformsSeeded(organizationId: string): Promise<void> {
  const count = await prisma.socialPlatform.count({ where: { organizationId } })
  if (count > 0) return
  await prisma.socialPlatform.createMany({
    data: DEFAULT_SOCIAL_PLATFORMS.map((name) => ({
      name,
      isSystem: true,
      organizationId,
    })),
  })
}

async function ensureTouchTypesSeeded(organizationId: string): Promise<void> {
  const count = await prisma.touchType.count({ where: { organizationId } })
  if (count > 0) return
  await prisma.touchType.createMany({
    data: DEFAULT_TOUCH_TYPES.map((name) => ({
      name,
      isSystem: true,
      organizationId,
    })),
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

type AccountSocialInput = { platform: string; handle: string }

const accountListInclude = {
  industry: { select: { id: true, name: true } },
  socials: {
    select: { id: true, platform: true, handle: true },
    orderBy: { platform: "asc" as const },
  },
  _count: { select: { contacts: true } },
  touches: {
    select: { id: true, date: true, type: true },
    orderBy: { date: "desc" as const },
    take: 1,
  },
} as const

const accountDetailInclude = {
  industry: { select: { id: true, name: true } },
  socials: {
    select: { id: true, platform: true, handle: true },
    orderBy: { platform: "asc" as const },
  },
  notes: { orderBy: { createdAt: "desc" as const } },
  contacts: {
    orderBy: [{ lastName: "asc" as const }, { firstName: "asc" as const }] as [
      { lastName: "asc" },
      { firstName: "asc" },
    ],
    include: {
      touches: {
        select: { id: true, date: true, type: true },
        orderBy: { date: "desc" as const },
        take: 1,
      },
    },
  },
  touches: { orderBy: { date: "desc" as const } },
}

const contactAccountSelect = {
  id: true,
  name: true,
  industry: { select: { id: true, name: true } },
} as const

const contactListInclude = {
  account: { select: contactAccountSelect },
  touches: {
    select: { id: true, type: true, date: true, notes: true },
    orderBy: { date: "desc" as const },
  },
  notes: { orderBy: { createdAt: "desc" as const } },
} as const

const contactDetailInclude = {
  account: { select: contactAccountSelect },
  notes: { orderBy: { createdAt: "desc" as const } },
  touches: { orderBy: { date: "desc" as const } },
} as const

async function parseSocialLinksBody(
  value: unknown,
  organizationId: string,
): Promise<
  | { status: "omit" }
  | { status: "ok"; links: AccountSocialInput[] }
  | { status: "error"; error: string; socialPlatforms?: string[] }
> {
  if (value === undefined) return { status: "omit" }
  if (value === null) return { status: "ok", links: [] }
  if (!Array.isArray(value)) {
    return { status: "error", error: "socials must be an array" }
  }

  await ensureSocialPlatformsSeeded(organizationId)
  const known = new Set(await getSocialPlatformNames(organizationId))
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

type TouchCreateBody = {
  type: unknown
  notes: unknown
  date: unknown
  amount: unknown
  estimateNumber: unknown
  socialPlatform: unknown
  contactId?: unknown
  outcome?: unknown
  source?: unknown
  isAutomated?: unknown
}

async function createTouchForAccount(
  accountId: string,
  body: TouchCreateBody,
  options?: { contactId?: string | null },
): Promise<
  | { ok: true; touch: unknown; status: 201 }
  | { ok: false; status: number; body: Record<string, unknown> }
> {
  const account = await prisma.account.findUnique({ where: { id: accountId } })
  if (!account) {
    return { ok: false, status: 404, body: { error: "Account not found" } }
  }

  const organizationId = account.organizationId
  const type = requireString(body.type)
  const notesRaw = body.notes
  const notes =
    typeof notesRaw === "string" ? notesRaw.trim() : notesRaw == null ? "" : null
  const date = body.date as string | undefined
  const amountParsed = parseOptionalAmount(body.amount)
  const estimateNumberRaw = asOptionalString(body.estimateNumber)
  const socialPlatformRaw = asOptionalString(body.socialPlatform)
  const outcome = asOptionalString(body.outcome)
  const source = asOptionalString(body.source)
  const isAutomated = asOptionalBoolean(body.isAutomated)

  let contactId =
    options?.contactId !== undefined
      ? options.contactId
      : (asOptionalString(body.contactId) ?? null)

  if (!type || !(await isKnownTouchType(organizationId, type))) {
    const touchTypes = await getTouchTypeNames(organizationId)
    return {
      ok: false,
      status: 400,
      body: {
        error: "type is required and must match a configured touch type",
        touchTypes,
      },
    }
  }
  if (notes === null) {
    return {
      ok: false,
      status: 400,
      body: { error: "notes must be a string when provided" },
    }
  }
  if (amountParsed === undefined && body.amount !== undefined) {
    return {
      ok: false,
      status: 400,
      body: { error: "amount must be a non-negative number" },
    }
  }

  if (touchIsSocialMedia(type)) {
    await ensureSocialPlatformsSeeded(organizationId)
    if (
      !socialPlatformRaw ||
      !(await isKnownSocialPlatform(organizationId, socialPlatformRaw))
    ) {
      const socialPlatforms = await getSocialPlatformNames(organizationId)
      return {
        ok: false,
        status: 400,
        body: {
          error: "socialPlatform is required for Social Media touches",
          socialPlatforms,
        },
      }
    }
  }

  const parsedDate = date !== undefined ? parseDate(date) : null
  if (date !== undefined && !parsedDate) {
    return {
      ok: false,
      status: 400,
      body: { error: "date must be a valid DateTime" },
    }
  }

  if (contactId) {
    const contact = await prisma.contact.findUnique({ where: { id: contactId } })
    if (!contact || contact.accountId !== accountId) {
      return {
        ok: false,
        status: 400,
        body: { error: "contactId must belong to this account" },
      }
    }
  }

  const amount = touchSupportsAmount(type)
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
      accountId,
      organizationId,
      contactId: contactId ?? null,
      amount,
      estimateNumber,
      socialPlatform,
      ...(outcome !== undefined ? { outcome } : {}),
      ...(source !== undefined ? { source } : {}),
      ...(isAutomated !== undefined ? { isAutomated } : {}),
      ...(parsedDate ? { date: parsedDate } : {}),
    },
  })

  return { ok: true, touch, status: 201 }
}

// ─── Industries ───────────────────────────────────────────────────────────────

router.get("/industries", async (_req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const industries = await prisma.industry.findMany({
      where: { organizationId },
      orderBy: [{ isSystem: "desc" }, { name: "asc" }],
    })
    return res.json({ industries })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to fetch industries")
  }
})

router.post("/industries", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const name = requireString(req.body?.name)
    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }

    const industry = await prisma.industry.create({
      data: { name, isSystem: false, organizationId },
    })
    return res.status(201).json({ industry })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create industry")
  }
})

router.patch("/industries/:id", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const industryId = routeParam(req, "id")
    if (!industryId) {
      return res.status(400).json({ error: "industry id is required" })
    }

    const name = requireString(req.body?.name)
    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }

    const existing = await prisma.industry.findFirst({
      where: { id: industryId, organizationId },
    })
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
    const organizationId = await getDefaultOrganizationId()
    const industryId = routeParam(req, "id")
    if (!industryId) {
      return res.status(400).json({ error: "industry id is required" })
    }

    const existing = await prisma.industry.findFirst({
      where: { id: industryId, organizationId },
      include: { _count: { select: { accounts: true } } },
    })
    if (!existing) {
      return res.status(404).json({ error: "Industry not found" })
    }
    if (existing.isSystem) {
      return res.status(403).json({ error: "Built-in industries cannot be deleted" })
    }
    if (existing._count.accounts > 0) {
      return res.status(409).json({
        error: "Industry is in use by one or more accounts",
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
    const organizationId = await getDefaultOrganizationId()
    await ensureTouchTypesSeeded(organizationId)
    const touchTypes = await prisma.touchType.findMany({
      where: { organizationId },
    })

    const names = await getTouchTypeNames(organizationId)
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
    const organizationId = await getDefaultOrganizationId()
    const name = requireString(req.body?.name)
    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }

    const touchType = await prisma.touchType.create({
      data: { name, isSystem: false, organizationId },
    })
    return res.status(201).json({ touchType })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create touch type")
  }
})

router.patch("/touch-types/:id", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const touchTypeId = routeParam(req, "id")
    if (!touchTypeId) {
      return res.status(400).json({ error: "touch type id is required" })
    }

    const name = requireString(req.body?.name)
    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }

    const existing = await prisma.touchType.findFirst({
      where: { id: touchTypeId, organizationId },
    })
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
          where: { type: existing.name, organizationId },
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
    const organizationId = await getDefaultOrganizationId()
    const touchTypeId = routeParam(req, "id")
    if (!touchTypeId) {
      return res.status(400).json({ error: "touch type id is required" })
    }

    const existing = await prisma.touchType.findFirst({
      where: { id: touchTypeId, organizationId },
    })
    if (!existing) {
      return res.status(404).json({ error: "Touch type not found" })
    }
    if (existing.isSystem) {
      return res.status(403).json({ error: "Built-in touch types cannot be deleted" })
    }

    const inUse = await prisma.touch.count({
      where: { type: existing.name, organizationId },
    })
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
    const organizationId = await getDefaultOrganizationId()
    await ensureSocialPlatformsSeeded(organizationId)
    const socialPlatforms = await prisma.socialPlatform.findMany({
      where: { organizationId },
    })
    const names = await getSocialPlatformNames(organizationId)
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
    const organizationId = await getDefaultOrganizationId()
    await ensureSocialPlatformsSeeded(organizationId)
    const name = requireString(req.body?.name)
    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }

    const socialPlatform = await prisma.socialPlatform.create({
      data: { name, isSystem: false, organizationId },
    })
    return res.status(201).json({ socialPlatform })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create social platform")
  }
})

router.patch("/social-platforms/:id", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const platformId = routeParam(req, "id")
    if (!platformId) {
      return res.status(400).json({ error: "social platform id is required" })
    }

    const name = requireString(req.body?.name)
    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }

    const existing = await prisma.socialPlatform.findFirst({
      where: { id: platformId, organizationId },
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
          where: { socialPlatform: existing.name, organizationId },
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
    const organizationId = await getDefaultOrganizationId()
    const platformId = routeParam(req, "id")
    if (!platformId) {
      return res.status(400).json({ error: "social platform id is required" })
    }

    const existing = await prisma.socialPlatform.findFirst({
      where: { id: platformId, organizationId },
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
      where: { socialPlatform: existing.name, organizationId },
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

// ─── Accounts ─────────────────────────────────────────────────────────────────

router.get("/accounts", async (_req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const accounts = await prisma.account.findMany({
      where: { organizationId },
      include: accountListInclude,
      orderBy: { name: "asc" },
    })
    return res.json({ accounts })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to fetch accounts")
  }
})

router.post("/accounts", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const name = requireString(req.body?.name)
    const industryId = requireString(req.body?.industryId)
    const address = asOptionalString(req.body?.address)
    const phone = asOptionalString(req.body?.phone)
    const website = asOptionalString(req.body?.website)
    const source = asOptionalString(req.body?.source)
    const status = req.body?.status as string | undefined
    const isVip = asOptionalBoolean(req.body?.isVip)
    const socialsParsed = await parseSocialLinksBody(
      req.body?.socials,
      organizationId,
    )

    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }
    if (!industryId) {
      return res.status(400).json({ error: "industryId is required" })
    }
    if (status !== undefined && !isAccountStatus(status)) {
      return res.status(400).json({
        error: "status must be one of the standard pipeline values",
        accountStatuses: ACCOUNT_STATUSES,
      })
    }
    if (socialsParsed.status === "error") {
      return res.status(400).json({
        error: socialsParsed.error,
        ...(socialsParsed.socialPlatforms
          ? { socialPlatforms: socialsParsed.socialPlatforms }
          : {}),
      })
    }

    const industry = await prisma.industry.findFirst({
      where: { id: industryId, organizationId },
    })
    if (!industry) {
      return res.status(400).json({ error: "industryId does not match an industry" })
    }

    const socials = socialsParsed.status === "ok" ? socialsParsed.links : []

    const account = await prisma.account.create({
      data: {
        name,
        organizationId,
        address: address ?? null,
        phone: phone ?? null,
        website: website ?? null,
        source: source ?? null,
        industryId,
        status: status !== undefined ? status : "NEW",
        ...(isVip !== undefined ? { isVip } : {}),
        ...(socials.length > 0
          ? {
              socials: {
                create: socials.map((link) => ({
                  ...link,
                  organizationId,
                })),
              },
            }
          : {}),
      },
      include: accountListInclude,
    })

    return res.status(201).json({ account })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create account")
  }
})

router.patch("/accounts/:id", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const accountId = routeParam(req, "id")
    if (!accountId) {
      return res.status(400).json({ error: "account id is required" })
    }

    const name = asOptionalString(req.body?.name)
    const address = asOptionalString(req.body?.address)
    const phone = asOptionalString(req.body?.phone)
    const website = asOptionalString(req.body?.website)
    const source = asOptionalString(req.body?.source)
    const industryId = asOptionalString(req.body?.industryId) ?? undefined
    const status = req.body?.status as string | undefined
    const isVip = asOptionalBoolean(req.body?.isVip)
    const socialsParsed = await parseSocialLinksBody(
      req.body?.socials,
      organizationId,
    )

    if (status !== undefined && !isAccountStatus(status)) {
      return res.status(400).json({
        error: "status must be one of the standard pipeline values",
        accountStatuses: ACCOUNT_STATUSES,
      })
    }

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
      source === undefined &&
      industryId === undefined &&
      status === undefined &&
      isVip === undefined &&
      socialsParsed.status === "omit"
    ) {
      return res.status(400).json({ error: "No fields to update" })
    }

    if (name !== undefined && !name) {
      return res.status(400).json({ error: "name cannot be empty" })
    }

    if (industryId) {
      const industry = await prisma.industry.findFirst({
        where: { id: industryId, organizationId },
      })
      if (!industry) {
        return res.status(400).json({ error: "industryId does not match an industry" })
      }
    }

    const existing = await prisma.account.findFirst({
      where: { id: accountId, organizationId },
    })
    if (!existing) {
      return res.status(404).json({ error: "Account not found" })
    }

    const account = await prisma.account.update({
      where: { id: accountId },
      data: {
        ...(typeof name === "string" ? { name } : {}),
        ...(address !== undefined ? { address } : {}),
        ...(phone !== undefined ? { phone } : {}),
        ...(website !== undefined ? { website } : {}),
        ...(source !== undefined ? { source } : {}),
        ...(industryId !== undefined ? { industryId } : {}),
        ...(status !== undefined ? { status } : {}),
        ...(isVip !== undefined ? { isVip } : {}),
        ...(socialsParsed.status === "ok"
          ? {
              socials: {
                deleteMany: {},
                create: socialsParsed.links.map((link) => ({
                  ...link,
                  organizationId,
                })),
              },
            }
          : {}),
      },
      include: accountListInclude,
    })

    return res.json({ account })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to update account")
  }
})

router.put("/accounts/:id", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const accountId = routeParam(req, "id")
    if (!accountId) {
      return res.status(400).json({ error: "account id is required" })
    }

    const name = requireString(req.body?.name)
    const industryId = requireString(req.body?.industryId)
    const address = asOptionalString(req.body?.address)
    const phone = asOptionalString(req.body?.phone)
    const website = asOptionalString(req.body?.website)
    const source = asOptionalString(req.body?.source)
    const status = (req.body?.status as string | undefined) ?? "NEW"
    const isVip = asOptionalBoolean(req.body?.isVip)
    const socialsParsed = await parseSocialLinksBody(
      req.body?.socials === undefined ? [] : req.body?.socials,
      organizationId,
    )

    if (!name) {
      return res.status(400).json({ error: "name is required" })
    }
    if (!industryId) {
      return res.status(400).json({ error: "industryId is required" })
    }
    if (!isAccountStatus(status)) {
      return res.status(400).json({
        error: "status must be one of the standard pipeline values",
        accountStatuses: ACCOUNT_STATUSES,
      })
    }
    if (socialsParsed.status === "error") {
      return res.status(400).json({
        error: socialsParsed.error,
        ...(socialsParsed.socialPlatforms
          ? { socialPlatforms: socialsParsed.socialPlatforms }
          : {}),
      })
    }

    const industry = await prisma.industry.findFirst({
      where: { id: industryId, organizationId },
    })
    if (!industry) {
      return res.status(400).json({ error: "industryId does not match an industry" })
    }

    const existing = await prisma.account.findFirst({
      where: { id: accountId, organizationId },
    })
    if (!existing) {
      return res.status(404).json({ error: "Account not found" })
    }

    const socials = socialsParsed.status === "ok" ? socialsParsed.links : []

    const account = await prisma.account.update({
      where: { id: accountId },
      data: {
        name,
        industryId,
        address: address ?? null,
        phone: phone ?? null,
        website: website ?? null,
        source: source ?? null,
        status,
        ...(isVip !== undefined ? { isVip } : {}),
        socials: {
          deleteMany: {},
          create: socials.map((link) => ({
            ...link,
            organizationId,
          })),
        },
      },
      include: accountListInclude,
    })

    return res.json({ account })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to update account")
  }
})

router.get("/accounts/:id", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const accountId = routeParam(req, "id")
    if (!accountId) {
      return res.status(400).json({ error: "account id is required" })
    }

    const account = await prisma.account.findFirst({
      where: { id: accountId, organizationId },
      include: accountDetailInclude,
    })

    if (!account) {
      return res.status(404).json({ error: "Account not found" })
    }

    return res.json({ account })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to fetch account")
  }
})

router.post("/accounts/:id/notes", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const accountId = routeParam(req, "id")
    const text = requireString(req.body?.text)

    if (!accountId) {
      return res.status(400).json({ error: "account id is required" })
    }
    if (!text) {
      return res.status(400).json({ error: "text is required" })
    }

    const account = await prisma.account.findFirst({
      where: { id: accountId, organizationId },
    })
    if (!account) {
      return res.status(404).json({ error: "Account not found" })
    }

    const note = await prisma.accountNote.create({
      data: {
        text,
        accountId,
        organizationId: account.organizationId,
      },
    })

    return res.status(201).json({ note })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Failed to create account note" })
  }
})

router.post("/accounts/:id/touches", async (req, res) => {
  try {
    const accountId = routeParam(req, "id")
    if (!accountId) {
      return res.status(400).json({ error: "account id is required" })
    }

    const result = await createTouchForAccount(accountId, req.body ?? {})
    if (!result.ok) {
      return res.status(result.status).json(result.body)
    }
    return res.status(201).json({ touch: result.touch })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create touch")
  }
})

router.patch("/accounts/:id/touches/:touchId", async (req, res) => {
  try {
    const accountId = routeParam(req, "id")
    const touchId = routeParam(req, "touchId")
    if (!accountId) {
      return res.status(400).json({ error: "account id is required" })
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
    const contactIdProvided = Object.prototype.hasOwnProperty.call(
      req.body ?? {},
      "contactId",
    )
    const contactIdRaw = contactIdProvided
      ? asOptionalString(req.body?.contactId)
      : undefined
    const outcomeProvided = Object.prototype.hasOwnProperty.call(
      req.body ?? {},
      "outcome",
    )
    const outcome = outcomeProvided ? asOptionalString(req.body?.outcome) : undefined
    const sourceProvided = Object.prototype.hasOwnProperty.call(
      req.body ?? {},
      "source",
    )
    const source = sourceProvided ? asOptionalString(req.body?.source) : undefined
    const isAutomated = asOptionalBoolean(req.body?.isAutomated)

    if (
      type === undefined &&
      notes === undefined &&
      !dateProvided &&
      !amountProvided &&
      !estimateNumberProvided &&
      !socialPlatformProvided &&
      !contactIdProvided &&
      !outcomeProvided &&
      !sourceProvided &&
      isAutomated === undefined
    ) {
      return res.status(400).json({ error: "No fields to update" })
    }

    const existing = await prisma.touch.findFirst({
      where: { id: touchId, accountId },
    })
    if (!existing) {
      return res.status(404).json({ error: "Touch not found" })
    }

    const organizationId = existing.organizationId

    if (type !== undefined && !(await isKnownTouchType(organizationId, type))) {
      const touchTypes = await getTouchTypeNames(organizationId)
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

    if (contactIdProvided && contactIdRaw) {
      const contact = await prisma.contact.findUnique({
        where: { id: contactIdRaw },
      })
      if (!contact || contact.accountId !== accountId) {
        return res.status(400).json({
          error: "contactId must belong to this account",
        })
      }
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
      if (!candidate || !(await isKnownSocialPlatform(organizationId, candidate))) {
        await ensureSocialPlatformsSeeded(organizationId)
        const socialPlatforms = await getSocialPlatformNames(organizationId)
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
        ...(contactIdProvided ? { contactId: contactIdRaw } : {}),
        ...(outcomeProvided ? { outcome } : {}),
        ...(sourceProvided ? { source } : {}),
        ...(isAutomated !== undefined ? { isAutomated } : {}),
      },
    })

    return res.json({ touch })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to update touch")
  }
})

// ─── Contacts ─────────────────────────────────────────────────────────────────

router.get("/contacts", async (_req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const [contacts, touchCount] = await Promise.all([
      prisma.contact.findMany({
        where: { organizationId },
        include: contactListInclude,
        orderBy: { createdAt: "desc" },
      }),
      prisma.touch.count({ where: { organizationId } }),
    ])
    return res.json({ contacts, touchCount })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Failed to fetch contacts" })
  }
})

router.get("/contacts/:id", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const contactId = routeParam(req, "id")
    if (!contactId) {
      return res.status(400).json({ error: "contact id is required" })
    }

    const contact = await prisma.contact.findFirst({
      where: { id: contactId, organizationId },
      include: contactDetailInclude,
    })

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" })
    }

    return res.json({ contact })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to fetch contact")
  }
})

router.post("/contacts", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const firstName = requireString(req.body?.firstName)
    const lastName = requireString(req.body?.lastName)
    const title = asOptionalString(req.body?.title)
    const email = asOptionalString(req.body?.email)
    const phone = asOptionalString(req.body?.phone)
    const officePhone = asOptionalString(req.body?.officePhone)
    const source = asOptionalString(req.body?.source)
    const isVip = asOptionalBoolean(req.body?.isVip)
    const accountId = asOptionalString(req.body?.accountId) ?? undefined
    const accountName = asOptionalString(req.body?.accountName) ?? undefined
    const industryId = asOptionalString(req.body?.industryId) ?? undefined
    const accountAddress = asOptionalString(req.body?.accountAddress)
    const accountPhone = asOptionalString(req.body?.accountPhone)
    const accountIsVip = asOptionalBoolean(req.body?.accountIsVip)
    const accountStatus = req.body?.accountStatus as string | undefined

    if (!firstName) {
      return res.status(400).json({ error: "firstName is required" })
    }
    if (!lastName) {
      return res.status(400).json({ error: "lastName is required" })
    }
    if (accountStatus !== undefined && !isAccountStatus(accountStatus)) {
      return res.status(400).json({
        error: "accountStatus must be one of the standard pipeline values",
        accountStatuses: ACCOUNT_STATUSES,
      })
    }

    const hasExistingAccount = Boolean(accountId)
    const hasNewAccount = Boolean(accountName && industryId)

    if (hasExistingAccount === hasNewAccount) {
      return res.status(400).json({
        error:
          "Provide either accountId (existing account) or accountName + industryId (create account)",
      })
    }

    const contactFields = {
      firstName,
      lastName,
      title: title ?? null,
      email: email ?? null,
      phone: phone ?? null,
      officePhone: officePhone ?? null,
      source: source ?? null,
      organizationId,
      ...(isVip !== undefined ? { isVip } : {}),
    }

    if (hasExistingAccount && accountId) {
      const account = await prisma.account.findFirst({
        where: { id: accountId, organizationId },
      })
      if (!account) {
        return res.status(400).json({ error: "accountId does not match an account" })
      }

      const contact = await prisma.contact.create({
        data: {
          ...contactFields,
          accountId,
          organizationId: account.organizationId,
        },
        include: {
          account: { select: contactAccountSelect },
        },
      })
      return res.status(201).json({ contact })
    }

    if (!accountName || !industryId) {
      return res.status(400).json({
        error: "accountName and industryId are required when creating an account",
      })
    }

    const industry = await prisma.industry.findFirst({
      where: { id: industryId, organizationId },
    })
    if (!industry) {
      return res.status(400).json({ error: "industryId does not match an industry" })
    }

    const contact = await prisma.$transaction(async (tx) => {
      const account = await tx.account.create({
        data: {
          name: accountName,
          organizationId,
          address: accountAddress ?? null,
          phone: accountPhone ?? null,
          industryId,
          status: accountStatus !== undefined ? accountStatus : "NEW",
          ...(accountIsVip !== undefined ? { isVip: accountIsVip } : {}),
        },
      })

      return tx.contact.create({
        data: {
          ...contactFields,
          accountId: account.id,
          organizationId,
        },
        include: {
          account: { select: contactAccountSelect },
        },
      })
    })

    return res.status(201).json({ contact })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create contact")
  }
})

router.patch("/contacts/:id", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const contactId = routeParam(req, "id")
    if (!contactId) {
      return res.status(400).json({ error: "contact id is required" })
    }

    const firstName = asOptionalString(req.body?.firstName)
    const lastName = asOptionalString(req.body?.lastName)
    const title = asOptionalString(req.body?.title)
    const email = asOptionalString(req.body?.email)
    const phone = asOptionalString(req.body?.phone)
    const officePhone = asOptionalString(req.body?.officePhone)
    const source = asOptionalString(req.body?.source)
    const isVip = asOptionalBoolean(req.body?.isVip)
    const accountId = asOptionalString(req.body?.accountId) ?? undefined
    const accountName = asOptionalString(req.body?.accountName) ?? undefined
    const industryId = asOptionalString(req.body?.industryId) ?? undefined

    const creatingAccount = Boolean(accountName && industryId)

    if (
      firstName === undefined &&
      lastName === undefined &&
      title === undefined &&
      email === undefined &&
      phone === undefined &&
      officePhone === undefined &&
      source === undefined &&
      isVip === undefined &&
      accountId === undefined &&
      !creatingAccount
    ) {
      return res.status(400).json({ error: "No fields to update" })
    }

    if (accountId && creatingAccount) {
      return res.status(400).json({
        error: "Provide either accountId or accountName + industryId, not both",
      })
    }

    if (accountId) {
      const account = await prisma.account.findFirst({
        where: { id: accountId, organizationId },
      })
      if (!account) {
        return res.status(400).json({ error: "accountId does not match an account" })
      }
    }

    if (creatingAccount) {
      const industry = await prisma.industry.findFirst({
        where: { id: industryId!, organizationId },
      })
      if (!industry) {
        return res.status(400).json({ error: "industryId does not match an industry" })
      }
    }

    const existing = await prisma.contact.findFirst({
      where: { id: contactId, organizationId },
    })
    if (!existing) {
      return res.status(404).json({ error: "Contact not found" })
    }

    const contact = await prisma.$transaction(async (tx) => {
      let nextAccountId = accountId

      if (creatingAccount && accountName && industryId) {
        const account = await tx.account.create({
          data: {
            name: accountName,
            industryId,
            organizationId,
          },
        })
        nextAccountId = account.id
      }

      return tx.contact.update({
        where: { id: contactId },
        data: {
          ...(firstName !== undefined ? { firstName: firstName ?? undefined } : {}),
          ...(lastName !== undefined ? { lastName: lastName ?? undefined } : {}),
          ...(title !== undefined ? { title } : {}),
          ...(email !== undefined ? { email } : {}),
          ...(phone !== undefined ? { phone } : {}),
          ...(officePhone !== undefined ? { officePhone } : {}),
          ...(source !== undefined ? { source } : {}),
          ...(isVip !== undefined ? { isVip } : {}),
          ...(nextAccountId !== undefined ? { accountId: nextAccountId } : {}),
        },
        include: {
          account: { select: contactAccountSelect },
        },
      })
    })

    return res.json({ contact })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to update contact")
  }
})

router.put("/contacts/:id", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const contactId = routeParam(req, "id")
    if (!contactId) {
      return res.status(400).json({ error: "contact id is required" })
    }

    const firstName = requireString(req.body?.firstName)
    const lastName = requireString(req.body?.lastName)
    const title = asOptionalString(req.body?.title)
    const email = asOptionalString(req.body?.email)
    const phone = asOptionalString(req.body?.phone)
    const officePhone = asOptionalString(req.body?.officePhone)
    const source = asOptionalString(req.body?.source)
    const isVip = asOptionalBoolean(req.body?.isVip)
    const accountId = asOptionalString(req.body?.accountId) ?? undefined
    const accountName = asOptionalString(req.body?.accountName) ?? undefined
    const industryId = asOptionalString(req.body?.industryId) ?? undefined

    if (!firstName) {
      return res.status(400).json({ error: "firstName is required" })
    }
    if (!lastName) {
      return res.status(400).json({ error: "lastName is required" })
    }

    const hasExistingAccount = Boolean(accountId)
    const hasNewAccount = Boolean(accountName && industryId)

    if (hasExistingAccount === hasNewAccount) {
      return res.status(400).json({
        error:
          "Provide either accountId (existing account) or accountName + industryId (create account)",
      })
    }

    if (accountId) {
      const account = await prisma.account.findFirst({
        where: { id: accountId, organizationId },
      })
      if (!account) {
        return res.status(400).json({ error: "accountId does not match an account" })
      }
    }

    if (hasNewAccount && industryId) {
      const industry = await prisma.industry.findFirst({
        where: { id: industryId, organizationId },
      })
      if (!industry) {
        return res.status(400).json({ error: "industryId does not match an industry" })
      }
    }

    const existing = await prisma.contact.findFirst({
      where: { id: contactId, organizationId },
    })
    if (!existing) {
      return res.status(404).json({ error: "Contact not found" })
    }

    const contact = await prisma.$transaction(async (tx) => {
      let nextAccountId = accountId

      if (hasNewAccount && accountName && industryId) {
        const account = await tx.account.create({
          data: {
            name: accountName,
            industryId,
            organizationId,
          },
        })
        nextAccountId = account.id
      }

      if (!nextAccountId) {
        throw new Error("accountId is required")
      }

      return tx.contact.update({
        where: { id: contactId },
        data: {
          firstName,
          lastName,
          title: title ?? null,
          email: email ?? null,
          phone: phone ?? null,
          officePhone: officePhone ?? null,
          source: source ?? null,
          accountId: nextAccountId,
          ...(isVip !== undefined ? { isVip } : {}),
        },
        include: {
          account: { select: contactAccountSelect },
        },
      })
    })

    return res.json({ contact })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to update contact")
  }
})

router.post("/contacts/:id/notes", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
    const contactId = routeParam(req, "id")
    const text = requireString(req.body?.text)

    if (!contactId) {
      return res.status(400).json({ error: "contact id is required" })
    }
    if (!text) {
      return res.status(400).json({ error: "text is required" })
    }

    const contact = await prisma.contact.findFirst({
      where: { id: contactId, organizationId },
    })
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" })
    }

    const note = await prisma.contactNote.create({
      data: {
        text,
        contactId,
        organizationId: contact.organizationId,
      },
    })

    return res.status(201).json({ note })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create contact note")
  }
})

router.post("/contacts/:id/touches", async (req, res) => {
  try {
    const contactId = routeParam(req, "id")
    if (!contactId) {
      return res.status(400).json({ error: "contact id is required" })
    }

    const contact = await prisma.contact.findUnique({ where: { id: contactId } })
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" })
    }

    const result = await createTouchForAccount(contact.accountId, req.body ?? {}, {
      contactId: contact.id,
    })
    if (!result.ok) {
      return res.status(result.status).json(result.body)
    }
    return res.status(201).json({ touch: result.touch })
  } catch (error) {
    return handlePrismaError(error, res, "Failed to create touch")
  }
})

router.get("/scorecard/weekly", async (req, res) => {
  try {
    const organizationId = await getDefaultOrganizationId()
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
        organizationId,
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
