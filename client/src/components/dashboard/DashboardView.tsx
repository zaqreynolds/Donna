import { useEffect, useState } from "react"
import { MetricSummary } from "@/components/dashboard/MetricSummary"
import { RecentLeadsPanel } from "@/components/dashboard/RecentLeadsPanel"
import { fetchLeads, updateLeadVip } from "@/lib/api"
import type { Lead } from "@/lib/types"

export function DashboardView() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [touchCount, setTouchCount] = useState(0)
  const [source, setSource] = useState<"api" | "mock">("mock")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      const result = await fetchLeads()
      if (!cancelled) {
        setLeads(result.leads)
        setTouchCount(result.touchCount)
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

  const qualifiedCount = leads.filter(
    (lead) => String(lead.status).toUpperCase() === "QUALIFIED",
  ).length
  const pipelineValue = `$${(qualifiedCount * 12500 + leads.length * 1800).toLocaleString()}`

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto p-6">
        {loading ? (
          <p className="text-sm text-muted-foreground">Loading dashboard…</p>
        ) : (
          <MetricSummary
            totalLeads={leads.length}
            activeTouches={touchCount}
            pipelineValue={pipelineValue}
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
