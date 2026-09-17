import { useEffect, useMemo, useState } from "react"
import { MetricSummary } from "@/components/dashboard/MetricSummary"
import { RecentAccountsPanel } from "@/components/dashboard/RecentAccountsPanel"
import { ScorecardView } from "@/components/dashboard/ScorecardView"
import { fetchAccounts, updateAccountVip } from "@/lib/api"
import type { Account } from "@/lib/types"

const FOLLOW_UP_WINDOW_MS = 14 * 24 * 60 * 60 * 1000

function accountStatus(account: Account): string {
  return String(account.status).toUpperCase()
}

function hasRecentTouch(account: Account, sinceMs: number): boolean {
  const touches = account.touches ?? []
  if (touches.length === 0) return false
  return touches.some((touch) => {
    const time = new Date(touch.date).getTime()
    return Number.isFinite(time) && time >= sinceMs
  })
}

function accountNeedsFollowUp(account: Account, sinceMs: number): boolean {
  if (accountStatus(account) === "CONTACTED") return true
  return !hasRecentTouch(account, sinceMs)
}

export function DashboardView() {
  const [accounts, setAccounts] = useState<Account[]>([])
  const [source, setSource] = useState<"api" | "mock">("mock")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      const result = await fetchAccounts()
      if (!cancelled) {
        setAccounts(result.accounts)
        setSource(result.source)
        setLoading(false)
      }
    }

    void load()

    return () => {
      cancelled = true
    }
  }, [])

  async function handleVipToggle(accountId: string, next: boolean) {
    const previous = accounts
    setAccounts((current) =>
      current.map((account) =>
        account.id === accountId ? { ...account, isVip: next } : account,
      ),
    )

    try {
      if (source === "api") {
        await updateAccountVip(accountId, next)
      }
    } catch {
      setAccounts(previous)
    }
  }

  const metrics = useMemo(() => {
    const sinceMs = Date.now() - FOLLOW_UP_WINDOW_MS
    return {
      newUncontacted: accounts.filter(
        (account) => accountStatus(account) === "NEW",
      ).length,
      qualifiedPipeline: accounts.filter(
        (account) =>
          accountStatus(account) === "QUALIFIED" || account.isVip,
      ).length,
      needsFollowUp: accounts.filter((account) =>
        accountNeedsFollowUp(account, sinceMs),
      ).length,
    }
  }, [accounts])

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-8 overflow-y-auto p-6">
        {loading ? (
          <p className="text-sm text-muted-foreground">Loading dashboard…</p>
        ) : (
          <MetricSummary
            newUncontacted={metrics.newUncontacted}
            qualifiedPipeline={metrics.qualifiedPipeline}
            needsFollowUp={metrics.needsFollowUp}
          />
        )}
        <ScorecardView />
      </div>

      <RecentAccountsPanel
        accounts={accounts}
        source={source}
        onVipToggle={handleVipToggle}
      />
    </div>
  )
}
