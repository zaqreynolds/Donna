import { useEffect, useMemo, useState } from "react"
import { MetricSummary } from "@/components/dashboard/MetricSummary"
import { RecentLeadsPanel } from "@/components/dashboard/RecentLeadsPanel"
import { fetchLeads, updateLeadVip } from "@/lib/api"
import type { Lead } from "@/lib/types"

const FOLLOW_UP_WINDOW_MS = 14 * 24 * 60 * 60 * 1000

function leadStatus(lead: Lead): string {
  return String(lead.status).toUpperCase()
}

function hasRecentTouch(lead: Lead, sinceMs: number): boolean {
  const touches = lead.touches ?? []
  if (touches.length === 0) return false
  return touches.some((touch) => {
    const time = new Date(touch.date).getTime()
    return Number.isFinite(time) && time >= sinceMs
  })
}

function leadNeedsFollowUp(lead: Lead, sinceMs: number): boolean {
  if (leadStatus(lead) === "CONTACTED") return true
  return !hasRecentTouch(lead, sinceMs)
}

export function DashboardView() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [source, setSource] = useState<"api" | "mock">("mock")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      const result = await fetchLeads()
      if (!cancelled) {
        setLeads(result.leads)
        setSource(result.source)
        setLoading(false)
      }
    }

    void load()

    return () => {
      cancelled = true
    }
  }, [])

  async function handleVipToggle(leadId: string, next: boolean) {
    const previous = leads
    setLeads((current) =>
      current.map((lead) =>
        lead.id === leadId ? { ...lead, isVip: next } : lead,
      ),
    )

    try {
      if (source === "api") {
        await updateLeadVip(leadId, next)
      }
    } catch {
      setLeads(previous)
    }
  }

  const metrics = useMemo(() => {
    const sinceMs = Date.now() - FOLLOW_UP_WINDOW_MS
    return {
      newUncontacted: leads.filter((lead) => leadStatus(lead) === "NEW").length,
      qualifiedPipeline: leads.filter(
        (lead) => leadStatus(lead) === "QUALIFIED" || lead.isVip,
      ).length,
      needsFollowUp: leads.filter((lead) => leadNeedsFollowUp(lead, sinceMs))
        .length,
    }
  }, [leads])

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto p-6">
        {loading ? (
          <p className="text-sm text-muted-foreground">Loading dashboard…</p>
        ) : (
          <MetricSummary
            newUncontacted={metrics.newUncontacted}
            qualifiedPipeline={metrics.qualifiedPipeline}
            needsFollowUp={metrics.needsFollowUp}
          />
        )}
      </div>

      <RecentLeadsPanel
        leads={leads}
        source={source}
        onVipToggle={handleVipToggle}
      />
    </div>
  )
}
