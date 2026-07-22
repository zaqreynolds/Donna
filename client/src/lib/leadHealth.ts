export type LeadHealth = "fresh" | "warning" | "danger"

export type LeadHealthSettings = {
  warningDays: number
  dangerDays: number
}

export const DEFAULT_LEAD_HEALTH_SETTINGS: LeadHealthSettings = {
  warningDays: 7,
  dangerDays: 14,
}

const STORAGE_KEY = "donna.leadHealthSettings"

/**
 * Classify lead freshness from the last logged touch date.
 * - No touch, or daysSince > dangerDays → danger
 * - daysSince > warningDays → warning
 * - otherwise → fresh
 */
export function getLeadHealth(
  lastTouchDate: Date | string | null | undefined,
  warningDays: number,
  dangerDays: number,
): LeadHealth {
  if (lastTouchDate == null || lastTouchDate === "") return "danger"

  const time =
    typeof lastTouchDate === "string"
      ? Date.parse(lastTouchDate)
      : lastTouchDate.getTime()

  if (!Number.isFinite(time)) return "danger"

  const daysSince = (Date.now() - time) / (1000 * 60 * 60 * 24)

  if (daysSince > dangerDays) return "danger"
  if (daysSince > warningDays) return "warning"
  return "fresh"
}

export function getLastTouchDate(
  touches: { date: string }[] | null | undefined,
): string | null {
  if (!touches?.length) return null

  let latest: number | null = null
  for (const touch of touches) {
    const time = Date.parse(touch.date)
    if (!Number.isFinite(time)) continue
    if (latest === null || time > latest) latest = time
  }

  return latest === null ? null : new Date(latest).toISOString()
}

/** Days since the latest touch. `Infinity` when no valid touch exists. */
export function daysSinceLastTouch(
  touches: { date: string }[] | null | undefined,
): number {
  const last = getLastTouchDate(touches)
  if (!last) return Number.POSITIVE_INFINITY
  const time = Date.parse(last)
  if (!Number.isFinite(time)) return Number.POSITIVE_INFINITY
  return (Date.now() - time) / (1000 * 60 * 60 * 24)
}

export function resolveLeadHealth(
  lead: {
    status?: string
    touches?: { date: string }[] | null
  },
  settings: LeadHealthSettings,
): LeadHealth | null {
  // LOST is a pipeline status only — no heat styling.
  if (String(lead.status ?? "").toUpperCase() === "LOST") return null
  return getLeadHealth(
    getLastTouchDate(lead.touches),
    settings.warningDays,
    settings.dangerDays,
  )
}

export function loadLeadHealthSettings(): LeadHealthSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT_LEAD_HEALTH_SETTINGS }
    const parsed = JSON.parse(raw) as Partial<LeadHealthSettings>
    return normalizeLeadHealthSettings(parsed)
  } catch {
    return { ...DEFAULT_LEAD_HEALTH_SETTINGS }
  }
}

export function saveLeadHealthSettings(settings: LeadHealthSettings): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(normalizeLeadHealthSettings(settings)),
  )
}

export function normalizeLeadHealthSettings(
  input: Partial<LeadHealthSettings>,
): LeadHealthSettings {
  const warningDays = clampDays(
    input.warningDays,
    DEFAULT_LEAD_HEALTH_SETTINGS.warningDays,
  )
  let dangerDays = clampDays(
    input.dangerDays,
    DEFAULT_LEAD_HEALTH_SETTINGS.dangerDays,
  )

  if (dangerDays <= warningDays) {
    dangerDays = warningDays + 1
  }

  return { warningDays, dangerDays }
}

function clampDays(value: unknown, fallback: number): number {
  const n = typeof value === "number" ? value : Number(value)
  if (!Number.isFinite(n)) return fallback
  return Math.min(365, Math.max(1, Math.round(n)))
}
