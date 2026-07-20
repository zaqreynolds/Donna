import { useEffect, useState } from "react"
import { MetricSummary } from "@/components/dashboard/MetricSummary"
import { RecentLeadsPanel } from "@/components/dashboard/RecentLeadsPanel"
import { fetchLeads } from "@/lib/api"
import type { Lead } from "@/lib/types"

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

  const qualifiedCount = leads.filter((lead) => lead.status === "QUALIFIED").length
  const activeTouches = Math.max(leads.length * 2, qualifiedCount * 3)
  const pipelineValue = `$${(qualifiedCount * 12500 + leads.length * 1800).toLocaleString()}`

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto p-6">
        {loading ? (
          <p className="text-sm text-muted-foreground">Loading dashboard…</p>
        ) : (
          <MetricSummary
            totalLeads={leads.length}
            activeTouches={activeTouches}
            pipelineValue={pipelineValue}
          />
        )}
      </div>

      <RecentLeadsPanel leads={leads} source={source} />
    </div>
  )
}
