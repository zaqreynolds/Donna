import {
  DEFAULT_TOUCH_TYPES,
  MOCK_COMPANIES,
  MOCK_LEADS,
  type Company,
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
  return {
    id: typeof raw.id === "string" ? raw.id : crypto.randomUUID(),
    type: typeof raw.type === "string" ? raw.type : "Phone",
    notes: typeof raw.notes === "string" ? raw.notes : "",
    date: typeof raw.date === "string" ? raw.date : new Date().toISOString(),
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
  const company =
    typeof companyRaw === "string"
      ? { id: "", name: companyRaw }
      : companyRaw &&
          typeof companyRaw === "object" &&
          "name" in companyRaw &&
          typeof (companyRaw as { name: unknown }).name === "string"
        ? {
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
          }
        : { id: "", name: "—" }

  return {
    id: typeof raw.id === "string" ? raw.id : "",
    firstName: firstName ?? "",
    lastName: lastName ?? "",
    title: typeof raw.title === "string" ? raw.title : null,
    email: typeof raw.email === "string" ? raw.email : null,
    phone: typeof raw.phone === "string" ? raw.phone : null,
    status: String(raw.status ?? "NEW").toUpperCase(),
    isVip: Boolean(raw.isVip),
    company,
    createdAt: typeof raw.createdAt === "string" ? raw.createdAt : undefined,
    notes: normalizeNotes(raw.notes),
    touches: normalizeTouches(raw.touches),
  }
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
    isVip: Boolean(raw.isVip),
    createdAt: typeof raw.createdAt === "string" ? raw.createdAt : "",
    updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : undefined,
    industry,
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
  input: { type: string; notes?: string; date?: string },
): Promise<LeadTouch> {
  const response = await fetch(`${LEADS_URL}/${leadId}/touches`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: input.type,
      notes: input.notes ?? "",
      ...(input.date ? { date: input.date } : {}),
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
  input: { type?: string; notes?: string; date?: string },
): Promise<LeadTouch> {
  const response = await fetch(`${LEADS_URL}/${leadId}/touches/${touchId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...(input.type !== undefined ? { type: input.type } : {}),
      ...(input.notes !== undefined ? { notes: input.notes } : {}),
      ...(input.date !== undefined ? { date: input.date } : {}),
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
