import { MOCK_COMPANIES, MOCK_LEADS, type Company, type Lead } from "@/lib/types"

const API_BASE = "http://localhost:5000/api"
const LEADS_URL = `${API_BASE}/leads`
const COMPANIES_URL = `${API_BASE}/companies`

export type LeadsFetchResult = {
  leads: Lead[]
  source: "api" | "mock"
}

export type CompaniesFetchResult = {
  companies: Company[]
  source: "api" | "mock"
}

export async function fetchLeads(): Promise<LeadsFetchResult> {
  try {
    const response = await fetch(LEADS_URL)
    if (!response.ok) {
      throw new Error(`Leads request failed (${response.status})`)
    }

    const payload = (await response.json()) as { leads?: Lead[] }
    const leads = Array.isArray(payload.leads) ? payload.leads : []

    return { leads, source: "api" }
  } catch {
    return { leads: MOCK_LEADS, source: "mock" }
  }
}

export async function fetchCompanies(): Promise<CompaniesFetchResult> {
  try {
    const response = await fetch(COMPANIES_URL)
    if (!response.ok) {
      throw new Error(`Companies request failed (${response.status})`)
    }

    const payload = (await response.json()) as { companies?: Company[] }
    const companies = Array.isArray(payload.companies) ? payload.companies : []

    return { companies, source: "api" }
  } catch {
    return { companies: MOCK_COMPANIES, source: "mock" }
  }
}

export function formatLeadName(lead: Lead): string {
  return `${lead.firstName} ${lead.lastName}`.trim()
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
