import { useEffect, useState } from "react"
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Settings,
  Activity,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

type Lead = {
  id: string
  name: string
  email: string
  company: string | null
  status: string
}

type HealthResponse = {
  status: string
  service: string
}

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Leads", icon: Users, active: false },
  { label: "Deals", icon: Briefcase, active: false },
  { label: "Settings", icon: Settings, active: false },
]

function App() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [health, setHealth] = useState<HealthResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)

        const [healthRes, leadsRes] = await Promise.all([
          fetch("/api/health"),
          fetch("/api/leads"),
        ])

        if (!healthRes.ok || !leadsRes.ok) {
          throw new Error("Unable to reach the Donna API")
        }

        const healthData = (await healthRes.json()) as HealthResponse
        const leadsData = (await leadsRes.json()) as { leads: Lead[] }

        if (!cancelled) {
          setHealth(healthData)
          setLeads(leadsData.leads)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load data")
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    void load()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="flex h-full w-full bg-background text-foreground">
      <aside className="flex w-60 shrink-0 flex-col border-r border-border bg-sidebar text-sidebar-foreground">
        <div className="flex h-14 items-center px-5">
          <span className="text-lg font-semibold tracking-tight">Donna</span>
        </div>
        <Separator />
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.label}
                variant={item.active ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-2",
                  item.active && "bg-sidebar-accent text-sidebar-accent-foreground",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Button>
            )
          })}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-6">
          <div className="flex flex-col">
            <h1 className="text-sm font-medium">Dashboard</h1>
            <p className="text-xs text-muted-foreground">
              Sales pipeline overview
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="size-3.5 text-muted-foreground" />
            {health ? (
              <Badge variant="secondary">{health.status}</Badge>
            ) : (
              <Badge variant="outline">{loading ? "connecting…" : "offline"}</Badge>
            )}
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-6 overflow-y-auto p-6">
          <section className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold tracking-tight">Welcome back</h2>
            <p className="text-sm text-muted-foreground">
              Track leads and keep your pipeline moving.
            </p>
          </section>

          <section className="flex flex-wrap gap-4">
            <Card className="min-w-[180px] flex-1">
              <CardHeader className="pb-2">
                <CardDescription>Total leads</CardDescription>
                <CardTitle className="text-3xl tabular-nums">
                  {loading ? "—" : leads.length}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="min-w-[180px] flex-1">
              <CardHeader className="pb-2">
                <CardDescription>API service</CardDescription>
                <CardTitle className="text-lg">
                  {health?.service ?? "Donna API"}
                </CardTitle>
              </CardHeader>
            </Card>
          </section>

          <Card className="flex min-h-0 flex-1 flex-col">
            <CardHeader>
              <CardTitle>Recent leads</CardTitle>
              <CardDescription>
                Live data from <code className="text-xs">GET /api/leads</code>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex min-h-0 flex-1 flex-col">
              {error ? (
                <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                  {error}. Start the server on port 3001, then refresh.
                </div>
              ) : loading ? (
                <p className="text-sm text-muted-foreground">Loading leads…</p>
              ) : leads.length === 0 ? (
                <p className="text-sm text-muted-foreground">No leads yet.</p>
              ) : (
                <ul className="flex flex-col gap-2 overflow-y-auto">
                  {leads.map((lead) => (
                    <li
                      key={lead.id}
                      className="flex items-center justify-between gap-4 rounded-lg border border-border px-4 py-3"
                    >
                      <div className="flex min-w-0 flex-col">
                        <span className="truncate text-sm font-medium">
                          {lead.name}
                        </span>
                        <span className="truncate text-xs text-muted-foreground">
                          {lead.email}
                          {lead.company ? ` · ${lead.company}` : ""}
                        </span>
                      </div>
                      <Badge variant="outline" className="shrink-0 capitalize">
                        {lead.status}
                      </Badge>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

export default App
