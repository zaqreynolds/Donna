import {
  DEFAULT_TOUCH_TYPES,
  MOCK_COMPANIES,
  MOCK_LEADS,
  type Company,
  type CompanySocialLink,
  type EntityNote,
  type Lead,
  type LeadTouch,
} from "@/lib/types"

/** Prefer same-origin `/api` so Vite can proxy to the Express server. */
const API_BASE = "/api"
const LEADS_URL = `${API_BASE}/leads`
const COMPANIES_URL = `${API_BASE}/companies`
const INDUSTRIES_URL = `${API_BASE}/industries`
const TOUCH_TYPES_URL = `${API_BASE}/touch-types`

export type LeadsFetchResult = {
  leads: Lead[]
  touchCount: number
  source: "api" | "mock"
}

export type CompaniesFetchResult = {
  companies: Company[]
  source: "api" | "mock"
}

function normalizeNote(raw: Record<string, unknown>): EntityNote {
  return {
    id: typeof raw.id === "string" ? raw.id : crypto.randomUUID(),
    text: typeof raw.text === "string" ? raw.text : "",
    createdAt:
      typeof raw.createdAt === "string"
        ? raw.createdAt
        : new Date().toISOString(),
  }
}

function normalizeNotes(value: unknown): EntityNote[] {
  if (!Array.isArray(value)) return []
  return value
    .map((note) => normalizeNote((note ?? {}) as Record<string, unknown>))
    .filter((note) => note.text.trim().length > 0)
}

function normalizeTouch(raw: Record<string, unknown>): LeadTouch {
  const amountRaw = raw.amount
  const amount =
    typeof amountRaw === "number" && Number.isFinite(amountRaw)
      ? amountRaw
      : amountRaw == null
        ? null
        : Number.isFinite(Number(amountRaw))
          ? Number(amountRaw)
          : null

  return {
    id: typeof raw.id === "string" ? raw.id : crypto.randomUUID(),
    type: typeof raw.type === "string" ? raw.type : "Phone",
    notes: typeof raw.notes === "string" ? raw.notes : "",
    date: typeof raw.date === "string" ? raw.date : new Date().toISOString(),
    amount,
    estimateNumber:
      typeof raw.estimateNumber === "string" ? raw.estimateNumber : null,
    socialPlatform:
      typeof raw.socialPlatform === "string" ? raw.socialPlatform : null,
  }
}

function normalizeTouches(value: unknown): LeadTouch[] {
  if (!Array.isArray(value)) return []
  return value.map((touch) =>
    normalizeTouch((touch ?? {}) as Record<string, unknown>),
  )
}

function normalizeLead(raw: Record<string, unknown>): Lead {
  let firstName =
    typeof raw.firstName === "string" ? raw.firstName : undefined
  let lastName = typeof raw.lastName === "string" ? raw.lastName : undefined

  if (!firstName && !lastName && typeof raw.name === "string") {
    const parts = raw.name.trim().split(/\s+/)
    firstName = parts[0] ?? ""
    lastName = parts.slice(1).join(" ")
  }

  const companyRaw = raw.company
  let company: Lead["company"] = { id: "", name: "—" }

  if (typeof companyRaw === "string") {
    company = { id: "", name: companyRaw }
  } else if (
    companyRaw &&
    typeof companyRaw === "object" &&
    "name" in companyRaw &&
    typeof (companyRaw as { name: unknown }).name === "string"
  ) {
    const industryRaw = (companyRaw as { industry?: unknown }).industry
    const industry =
      industryRaw &&
      typeof industryRaw === "object" &&
      "name" in industryRaw &&
      typeof (industryRaw as { name: unknown }).name === "string"
        ? {
            id:
              "id" in industryRaw &&
              typeof (industryRaw as { id: unknown }).id === "string"
                ? (industryRaw as { id: string }).id
                : "",
            name: (industryRaw as { name: string }).name,
          }
        : null

    company = {
      id:
        "id" in companyRaw &&
        typeof (companyRaw as { id: unknown }).id === "string"
          ? (companyRaw as { id: string }).id
          : "",
      name: (companyRaw as { name: string }).name,
      isVip:
        "isVip" in companyRaw
          ? Boolean((companyRaw as { isVip: unknown }).isVip)
          : undefined,
      industry,
    }
  }

  return {
    id: typeof raw.id === "string" ? raw.id : "",
    firstName: firstName ?? "",
    lastName: lastName ?? "",
    title: typeof raw.title === "string" ? raw.title : null,
    email: typeof raw.email === "string" ? raw.email : null,
    phone: typeof raw.phone === "string" ? raw.phone : null,
    officePhone: typeof raw.officePhone === "string" ? raw.officePhone : null,
    status: String(raw.status ?? "NEW").toUpperCase(),
    isVip: Boolean(raw.isVip),
    company,
    createdAt: typeof raw.createdAt === "string" ? raw.createdAt : undefined,
    notes: normalizeNotes(raw.notes),
    touches: normalizeTouches(raw.touches),
  }
}

function normalizeCompanySocials(value: unknown): CompanySocialLink[] {
  if (!Array.isArray(value)) return []
  const links: CompanySocialLink[] = []
  for (const row of value) {
    if (!row || typeof row !== "object") continue
    const platform = (row as { platform?: unknown }).platform
    const handle = (row as { handle?: unknown }).handle
    if (typeof platform !== "string" || typeof handle !== "string") continue
    const trimmedPlatform = platform.trim()
    const trimmedHandle = handle.trim()
    if (!trimmedPlatform || !trimmedHandle) continue
    const id = (row as { id?: unknown }).id
    links.push({
      ...(typeof id === "string" ? { id } : {}),
      platform: trimmedPlatform,
      handle: trimmedHandle,
    })
  }
  return links
}

function normalizeCompany(raw: Record<string, unknown>): Company {
  const industryRaw = raw.industry
  const industry =
    industryRaw &&
    typeof industryRaw === "object" &&
    "name" in industryRaw &&
    typeof (industryRaw as { name: unknown }).name === "string"
      ? {
          id:
            "id" in industryRaw &&
            typeof (industryRaw as { id: unknown }).id === "string"
              ? (industryRaw as { id: string }).id
              : "",
          name: (industryRaw as { name: string }).name,
        }
      : { id: "", name: "—" }

  return {
    id: typeof raw.id === "string" ? raw.id : "",
    name: typeof raw.name === "string" ? raw.name : "—",
    address: typeof raw.address === "string" ? raw.address : null,
    phone: typeof raw.phone === "string" ? raw.phone : null,
    website: typeof raw.website === "string" ? raw.website : null,
    isVip: Boolean(raw.isVip),
    createdAt: typeof raw.createdAt === "string" ? raw.createdAt : "",
    updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : undefined,
    industry,
    socials: normalizeCompanySocials(raw.socials),
    notes: normalizeNotes(raw.notes),
  }
}

export async function fetchLeads(): Promise<LeadsFetchResult> {
  try {
    const response = await fetch(LEADS_URL)
    if (!response.ok) {
      throw new Error(`Leads request failed (${response.status})`)
    }

    const payload = (await response.json()) as {
      leads?: unknown[]
      touchCount?: number
    }
    const leads = Array.isArray(payload.leads)
      ? payload.leads.map((lead) =>
          normalizeLead((lead ?? {}) as Record<string, unknown>),
        )
      : []
    const touchCount =
      typeof payload.touchCount === "number"
        ? payload.touchCount
        : leads.reduce((sum, lead) => sum + (lead.touches?.length ?? 0), 0)

    return { leads, touchCount, source: "api" }
  } catch {
    return { leads: MOCK_LEADS, touchCount: MOCK_LEADS.length, source: "mock" }
  }
}

export async function fetchCompanies(): Promise<CompaniesFetchResult> {
  try {
    const response = await fetch(COMPANIES_URL)
    if (!response.ok) {
      throw new Error(`Companies request failed (${response.status})`)
    }

    const payload = (await response.json()) as { companies?: unknown[] }
    const companies = Array.isArray(payload.companies)
      ? payload.companies.map((company) =>
          normalizeCompany((company ?? {}) as Record<string, unknown>),
        )
      : []

    return { companies, source: "api" }
  } catch {
    return { companies: MOCK_COMPANIES, source: "mock" }
  }
}

export async function fetchLeadDetail(leadId: string): Promise<Lead> {
  const response = await fetch(`${LEADS_URL}/${leadId}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch lead (${response.status})`)
  }
  const payload = (await response.json()) as { lead: unknown }
  return normalizeLead((payload.lead ?? {}) as Record<string, unknown>)
}

export async function fetchCompanyDetail(companyId: string): Promise<Company> {
  const response = await fetch(`${COMPANIES_URL}/${companyId}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch company (${response.status})`)
  }
  const payload = (await response.json()) as { company: unknown }
  return normalizeCompany((payload.company ?? {}) as Record<string, unknown>)
}

export type CompanyInput = {
  name: string
  industryId: string
  phone?: string | null
  website?: string | null
  address?: string | null
  isVip?: boolean
  socials?: Array<{ platform: string; handle: string }>
}

export type LeadInput = {
  firstName: string
  lastName: string
  email?: string | null
  phone?: string | null
  officePhone?: string | null
  title?: string | null
  status?: string
  isVip?: boolean
  companyId?: string
  companyName?: string
  industryId?: string
}

export async function createCompany(input: CompanyInput): Promise<Company> {
  const response = await fetch(COMPANIES_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })
  if (!response.ok) {
    throw new Error(`Failed to create company (${response.status})`)
  }
  const payload = (await response.json()) as { company: unknown }
  return normalizeCompany((payload.company ?? {}) as Record<string, unknown>)
}

export async function updateCompany(
  companyId: string,
  input: CompanyInput,
): Promise<Company> {
  const response = await fetch(`${COMPANIES_URL}/${companyId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })
  if (!response.ok) {
    throw new Error(`Failed to update company (${response.status})`)
  }
  const payload = (await response.json()) as { company: unknown }
  return normalizeCompany((payload.company ?? {}) as Record<string, unknown>)
}

export async function createLead(input: LeadInput): Promise<Lead> {
  const response = await fetch(LEADS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })
  if (!response.ok) {
    throw new Error(`Failed to create lead (${response.status})`)
  }
  const payload = (await response.json()) as { lead: unknown }
  return normalizeLead((payload.lead ?? {}) as Record<string, unknown>)
}

export async function updateLead(leadId: string, input: LeadInput): Promise<Lead> {
  const response = await fetch(`${LEADS_URL}/${leadId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })
  if (!response.ok) {
    throw new Error(`Failed to update lead (${response.status})`)
  }
  const payload = (await response.json()) as { lead: unknown }
  return normalizeLead((payload.lead ?? {}) as Record<string, unknown>)
}

export async function createLeadNote(
  leadId: string,
  text: string,
): Promise<EntityNote> {
  const response = await fetch(`${LEADS_URL}/${leadId}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  })
  if (!response.ok) {
    throw new Error(`Failed to create lead note (${response.status})`)
  }
  const payload = (await response.json()) as { note: unknown }
  return normalizeNote((payload.note ?? {}) as Record<string, unknown>)
}

export async function createCompanyNote(
  companyId: string,
  text: string,
): Promise<EntityNote> {
  const response = await fetch(`${COMPANIES_URL}/${companyId}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  })
  if (!response.ok) {
    throw new Error(`Failed to create company note (${response.status})`)
  }
  const payload = (await response.json()) as { note: unknown }
  return normalizeNote((payload.note ?? {}) as Record<string, unknown>)
}

export async function createLeadTouch(
  leadId: string,
  input: {
    type: string
    notes?: string
    date?: string
    amount?: number | null
    estimateNumber?: string | null
    socialPlatform?: string | null
  },
): Promise<LeadTouch> {
  const response = await fetch(`${LEADS_URL}/${leadId}/touches`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: input.type,
      notes: input.notes ?? "",
      ...(input.date ? { date: input.date } : {}),
      ...(input.amount !== undefined ? { amount: input.amount } : {}),
      ...(input.estimateNumber !== undefined
        ? { estimateNumber: input.estimateNumber }
        : {}),
      ...(input.socialPlatform !== undefined
        ? { socialPlatform: input.socialPlatform }
        : {}),
    }),
  })
  if (!response.ok) {
    throw new Error(`Failed to create lead touch (${response.status})`)
  }
  const payload = (await response.json()) as { touch: unknown }
  return normalizeTouch((payload.touch ?? {}) as Record<string, unknown>)
}

export async function updateLeadTouch(
  leadId: string,
  touchId: string,
  input: {
    type?: string
    notes?: string
    date?: string
    amount?: number | null
    estimateNumber?: string | null
    socialPlatform?: string | null
  },
): Promise<LeadTouch> {
  const response = await fetch(`${LEADS_URL}/${leadId}/touches/${touchId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...(input.type !== undefined ? { type: input.type } : {}),
      ...(input.notes !== undefined ? { notes: input.notes } : {}),
      ...(input.date !== undefined ? { date: input.date } : {}),
      ...(input.amount !== undefined ? { amount: input.amount } : {}),
      ...(input.estimateNumber !== undefined
        ? { estimateNumber: input.estimateNumber }
        : {}),
      ...(input.socialPlatform !== undefined
        ? { socialPlatform: input.socialPlatform }
        : {}),
    }),
  })
  if (!response.ok) {
    throw new Error(`Failed to update lead touch (${response.status})`)
  }
  const payload = (await response.json()) as { touch: unknown }
  return normalizeTouch((payload.touch ?? {}) as Record<string, unknown>)
}

export type CatalogItem = {
  id: string
  name: string
  isSystem: boolean
}

function normalizeCatalogItem(raw: Record<string, unknown>): CatalogItem {
  return {
    id: typeof raw.id === "string" ? raw.id : "",
    name: typeof raw.name === "string" ? raw.name : "",
    isSystem: Boolean(raw.isSystem),
  }
}

export async function fetchIndustries(): Promise<CatalogItem[]> {
  try {
    const response = await fetch(INDUSTRIES_URL)
    if (!response.ok) {
      throw new Error(`Industries request failed (${response.status})`)
    }
    const payload = (await response.json()) as { industries?: unknown[] }
    return Array.isArray(payload.industries)
      ? payload.industries.map((row) =>
          normalizeCatalogItem((row ?? {}) as Record<string, unknown>),
        )
      : []
  } catch {
    return []
  }
}

export async function createIndustry(name: string): Promise<CatalogItem> {
  const response = await fetch(INDUSTRIES_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
  if (!response.ok) {
    throw new Error(`Failed to create industry (${response.status})`)
  }
  const payload = (await response.json()) as { industry: unknown }
  return normalizeCatalogItem((payload.industry ?? {}) as Record<string, unknown>)
}

export async function updateIndustry(
  id: string,
  name: string,
): Promise<CatalogItem> {
  const response = await fetch(`${INDUSTRIES_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
  if (!response.ok) {
    throw new Error(`Failed to update industry (${response.status})`)
  }
  const payload = (await response.json()) as { industry: unknown }
  return normalizeCatalogItem((payload.industry ?? {}) as Record<string, unknown>)
}

export async function deleteIndustry(id: string): Promise<void> {
  const response = await fetch(`${INDUSTRIES_URL}/${id}`, { method: "DELETE" })
  if (!response.ok) {
    throw new Error(`Failed to delete industry (${response.status})`)
  }
}

export async function fetchTouchTypeCatalog(): Promise<CatalogItem[]> {
  try {
    const response = await fetch(TOUCH_TYPES_URL)
    if (!response.ok) {
      throw new Error(`Touch types request failed (${response.status})`)
    }
    const payload = (await response.json()) as { touchTypes?: unknown[] }
    const rows = Array.isArray(payload.touchTypes)
      ? payload.touchTypes.map((row) =>
          normalizeCatalogItem((row ?? {}) as Record<string, unknown>),
        )
      : []
    return rows.length > 0
      ? rows
      : DEFAULT_TOUCH_TYPES.map((name) => ({
          id: name,
          name,
          isSystem: true,
        }))
  } catch {
    return DEFAULT_TOUCH_TYPES.map((name) => ({
      id: name,
      name,
      isSystem: true,
    }))
  }
}

export async function fetchTouchTypes(): Promise<string[]> {
  const rows = await fetchTouchTypeCatalog()
  return rows.map((row) => row.name)
}

export async function createTouchType(name: string): Promise<CatalogItem> {
  const response = await fetch(TOUCH_TYPES_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
  if (!response.ok) {
    throw new Error(`Failed to create touch type (${response.status})`)
  }
  const payload = (await response.json()) as { touchType: unknown }
  return normalizeCatalogItem((payload.touchType ?? {}) as Record<string, unknown>)
}

export async function updateTouchType(
  id: string,
  name: string,
): Promise<CatalogItem> {
  const response = await fetch(`${TOUCH_TYPES_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
  if (!response.ok) {
    throw new Error(`Failed to update touch type (${response.status})`)
  }
  const payload = (await response.json()) as { touchType: unknown }
  return normalizeCatalogItem((payload.touchType ?? {}) as Record<string, unknown>)
}

export async function deleteTouchType(id: string): Promise<void> {
  const response = await fetch(`${TOUCH_TYPES_URL}/${id}`, { method: "DELETE" })
  if (!response.ok) {
    throw new Error(`Failed to delete touch type (${response.status})`)
  }
}

const SOCIAL_PLATFORMS_URL = `${API_BASE}/social-platforms`

export async function fetchSocialPlatformCatalog(): Promise<CatalogItem[]> {
  try {
    const response = await fetch(SOCIAL_PLATFORMS_URL)
    if (!response.ok) {
      throw new Error(`Social platforms request failed (${response.status})`)
    }
    const payload = (await response.json()) as { socialPlatforms?: unknown[] }
    return Array.isArray(payload.socialPlatforms)
      ? payload.socialPlatforms.map((row) =>
          normalizeCatalogItem((row ?? {}) as Record<string, unknown>),
        )
      : []
  } catch {
    return [
      "Instagram",
      "Facebook",
      "LinkedIn",
      "X",
      "TikTok",
      "YouTube",
      "Nextdoor",
      "Other",
    ].map((name, index) => ({
      id: `mock-sp-${index}`,
      name,
      isSystem: true,
    }))
  }
}

export async function fetchSocialPlatforms(): Promise<string[]> {
  const rows = await fetchSocialPlatformCatalog()
  return rows.map((row) => row.name)
}

export async function createSocialPlatform(name: string): Promise<CatalogItem> {
  const response = await fetch(SOCIAL_PLATFORMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
  if (!response.ok) {
    throw new Error(`Failed to create social platform (${response.status})`)
  }
  const payload = (await response.json()) as { socialPlatform: unknown }
  return normalizeCatalogItem(
    (payload.socialPlatform ?? {}) as Record<string, unknown>,
  )
}

export async function updateSocialPlatform(
  id: string,
  name: string,
): Promise<CatalogItem> {
  const response = await fetch(`${SOCIAL_PLATFORMS_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
  if (!response.ok) {
    throw new Error(`Failed to update social platform (${response.status})`)
  }
  const payload = (await response.json()) as { socialPlatform: unknown }
  return normalizeCatalogItem(
    (payload.socialPlatform ?? {}) as Record<string, unknown>,
  )
}

export async function deleteSocialPlatform(id: string): Promise<void> {
  const response = await fetch(`${SOCIAL_PLATFORMS_URL}/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) {
    throw new Error(`Failed to delete social platform (${response.status})`)
  }
}

export async function updateCompanyVip(
  companyId: string,
  isVip: boolean,
): Promise<Company> {
  const response = await fetch(`${COMPANIES_URL}/${companyId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isVip }),
  })
  if (!response.ok) {
    throw new Error(`Failed to update company VIP (${response.status})`)
  }
  const payload = (await response.json()) as { company: unknown }
  return normalizeCompany((payload.company ?? {}) as Record<string, unknown>)
}

export async function updateLeadVip(leadId: string, isVip: boolean): Promise<Lead> {
  const response = await fetch(`${LEADS_URL}/${leadId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isVip }),
  })
  if (!response.ok) {
    throw new Error(`Failed to update lead VIP (${response.status})`)
  }
  const payload = (await response.json()) as { lead: unknown }
  return normalizeLead((payload.lead ?? {}) as Record<string, unknown>)
}

export async function updateLeadStatus(
  leadId: string,
  status: string,
): Promise<Lead> {
  const response = await fetch(`${LEADS_URL}/${leadId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  })
  if (!response.ok) {
    throw new Error(`Failed to update lead status (${response.status})`)
  }
  const payload = (await response.json()) as { lead: unknown }
  return normalizeLead((payload.lead ?? {}) as Record<string, unknown>)
}

export function formatLeadName(lead: Lead): string {
  const name = `${lead.firstName ?? ""} ${lead.lastName ?? ""}`.trim()
  return name || "Unnamed lead"
}

export function formatLeadDate(value?: string): string {
  if (!value) return "—"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "—"
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export function formatNoteDateTime(value?: string): string {
  if (!value) return "—"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "—"
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
}

export function uniqueTouchTypes(touches: LeadTouch[] | undefined): string[] {
  if (!touches?.length) return []
  const seen = new Set<string>()
  for (const touch of touches) {
    if (touch.type) seen.add(touch.type)
  }
  return [...seen]
}

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

export type WeeklyScorecardMetrics = {
  calls: number
  emails: number
  meetings: number
  estimates: number
  estimateValue: number
  revenue: number
}

export type WeeklyScorecardResult = {
  range: { start: string; end: string }
  metrics: WeeklyScorecardMetrics
  touchCount: number
  source: "api" | "mock"
}

export async function fetchWeeklyScorecard(
  start?: string,
  end?: string,
): Promise<WeeklyScorecardResult> {
  try {
    const params = new URLSearchParams()
    if (start) params.set("start", start)
    if (end) params.set("end", end)
    const query = params.toString()
    const response = await fetch(
      `${API_BASE}/scorecard/weekly${query ? `?${query}` : ""}`,
    )
    if (!response.ok) {
      throw new Error(`Scorecard request failed (${response.status})`)
    }
    const payload = (await response.json()) as {
      range?: { start?: string; end?: string }
      metrics?: Partial<WeeklyScorecardMetrics>
      touchCount?: number
    }
    return {
      range: {
        start: payload.range?.start ?? start ?? "",
        end: payload.range?.end ?? end ?? "",
      },
      metrics: {
        calls: Number(payload.metrics?.calls ?? 0),
        emails: Number(payload.metrics?.emails ?? 0),
        meetings: Number(payload.metrics?.meetings ?? 0),
        estimates: Number(payload.metrics?.estimates ?? 0),
        estimateValue: Number(payload.metrics?.estimateValue ?? 0),
        revenue: Number(payload.metrics?.revenue ?? 0),
      },
      touchCount: Number(payload.touchCount ?? 0),
      source: "api",
    }
  } catch {
    return {
      range: { start: start ?? "", end: end ?? "" },
      metrics: {
        calls: 0,
        emails: 0,
        meetings: 0,
        estimates: 0,
        estimateValue: 0,
        revenue: 0,
      },
      touchCount: 0,
      source: "mock",
    }
  }
}
