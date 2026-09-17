export type AccountFreshness = "fresh" | "stale" | "rotten"

export type AccountFreshnessSettings = {
  staleAfterDays: number
  rottenAfterDays: number
}

export const DEFAULT_ACCOUNT_FRESHNESS_SETTINGS: AccountFreshnessSettings = {
  staleAfterDays: 7,
  rottenAfterDays: 14,
}

const STORAGE_KEY = "donna.accountFreshnessSettings"
const LEGACY_STORAGE_KEY = "donna.leadHealthSettings"

/**
 * Classify account freshness from the last logged touch date.
 * - No touch, or daysSince > rottenAfterDays → rotten
 * - daysSince > staleAfterDays → stale
 * - otherwise → fresh
 */
export function getAccountFreshness(
  lastTouchDate: Date | string | null | undefined,
  staleAfterDays: number,
  rottenAfterDays: number,
): AccountFreshness {
  if (lastTouchDate == null || lastTouchDate === "") return "rotten"

  const time =
    typeof lastTouchDate === "string"
      ? Date.parse(lastTouchDate)
      : lastTouchDate.getTime()

  if (!Number.isFinite(time)) return "rotten"

  const daysSince = (Date.now() - time) / (1000 * 60 * 60 * 24)

  if (daysSince > rottenAfterDays) return "rotten"
  if (daysSince > staleAfterDays) return "stale"
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

export function resolveAccountFreshness(
  account: {
    status?: string
    touches?: { date: string }[] | null
  },
  settings: AccountFreshnessSettings,
): AccountFreshness | null {
  // LOST is a pipeline status only — no freshness styling.
  if (String(account.status ?? "").toUpperCase() === "LOST") return null
  return getAccountFreshness(
    getLastTouchDate(account.touches),
    settings.staleAfterDays,
    settings.rottenAfterDays,
  )
}

export function loadAccountFreshnessSettings(): AccountFreshnessSettings {
  try {
    const raw =
      localStorage.getItem(STORAGE_KEY) ??
      localStorage.getItem(LEGACY_STORAGE_KEY)
    if (!raw) return { ...DEFAULT_ACCOUNT_FRESHNESS_SETTINGS }
    const parsed = JSON.parse(raw) as Record<string, unknown>
    return normalizeAccountFreshnessSettings(migrateLegacySettings(parsed))
  } catch {
    return { ...DEFAULT_ACCOUNT_FRESHNESS_SETTINGS }
  }
}

export function saveAccountFreshnessSettings(
  settings: AccountFreshnessSettings,
): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(normalizeAccountFreshnessSettings(settings)),
  )
}

function migrateLegacySettings(
  input: Record<string, unknown>,
): Partial<AccountFreshnessSettings> {
  return {
    staleAfterDays:
      (input.staleAfterDays as number | undefined) ??
      (input.warningDays as number | undefined),
    rottenAfterDays:
      (input.rottenAfterDays as number | undefined) ??
      (input.dangerDays as number | undefined),
  }
}

export function normalizeAccountFreshnessSettings(
  input: Partial<AccountFreshnessSettings>,
): AccountFreshnessSettings {
  const staleAfterDays = clampDays(
    input.staleAfterDays,
    DEFAULT_ACCOUNT_FRESHNESS_SETTINGS.staleAfterDays,
  )
  let rottenAfterDays = clampDays(
    input.rottenAfterDays,
    DEFAULT_ACCOUNT_FRESHNESS_SETTINGS.rottenAfterDays,
  )

  if (rottenAfterDays <= staleAfterDays) {
    rottenAfterDays = staleAfterDays + 1
  }

  return { staleAfterDays, rottenAfterDays }
}

function clampDays(value: unknown, fallback: number): number {
  const n = typeof value === "number" ? value : Number(value)
  if (!Number.isFinite(n)) return fallback
  return Math.min(365, Math.max(1, Math.round(n)))
}
