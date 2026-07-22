import { useEffect, useMemo, useState } from "react"
import { CalendarRange, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  fetchWeeklyScorecard,
  type WeeklyScorecardMetrics,
} from "@/lib/api"
import { cn } from "@/lib/utils"

export type ScorecardGoals = {
  calls: number
  emails: number
  meetings: number
  estimates: number
  estimateValue: number
  revenue: number
}

export const DEFAULT_SCORECARD_GOALS: ScorecardGoals = {
  calls: 50,
  emails: 50,
  meetings: 10,
  estimates: 10,
  estimateValue: 10000,
  revenue: 2500,
}

const GOALS_STORAGE_KEY = "donna.weeklyScorecardGoals"

type MetricDef = {
  key: keyof ScorecardGoals
  label: string
  isCurrency?: boolean
}

const METRICS: MetricDef[] = [
  { key: "calls", label: "Outbound Calls" },
  { key: "emails", label: "Emails Sent" },
  { key: "meetings", label: "Face-to-Face Meetings" },
  { key: "estimates", label: "New Estimates" },
  {
    key: "estimateValue",
    label: "Estimate Pipeline ($)",
    isCurrency: true,
  },
  { key: "revenue", label: "Revenue Booked (Sales)", isCurrency: true },
]

function toDateKey(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, "0")
  const d = String(date.getDate()).padStart(2, "0")
  return `${y}-${m}-${d}`
}

function getCurrentWeekRange(): { start: string; end: string } {
  const now = new Date()
  const day = now.getDay()
  const daysFromMonday = day === 0 ? 6 : day - 1
  const monday = new Date(now)
  monday.setHours(0, 0, 0, 0)
  monday.setDate(now.getDate() - daysFromMonday)
  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)
  return { start: toDateKey(monday), end: toDateKey(sunday) }
}

function shiftWeek(
  startKey: string,
  deltaWeeks: number,
): { start: string; end: string } {
  const [y, m, d] = startKey.split("-").map(Number)
  const monday = new Date(y, m - 1, d)
  monday.setDate(monday.getDate() + deltaWeeks * 7)
  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)
  return { start: toDateKey(monday), end: toDateKey(sunday) }
}

function loadGoals(): ScorecardGoals {
  try {
    const raw = localStorage.getItem(GOALS_STORAGE_KEY)
    if (!raw) return { ...DEFAULT_SCORECARD_GOALS }
    const parsed = JSON.parse(raw) as Partial<ScorecardGoals>
    return {
      calls: Number(parsed.calls) || DEFAULT_SCORECARD_GOALS.calls,
      emails: Number(parsed.emails) || DEFAULT_SCORECARD_GOALS.emails,
      meetings: Number(parsed.meetings) || DEFAULT_SCORECARD_GOALS.meetings,
      estimates: Number(parsed.estimates) || DEFAULT_SCORECARD_GOALS.estimates,
      estimateValue:
        Number(parsed.estimateValue) || DEFAULT_SCORECARD_GOALS.estimateValue,
      revenue: Number(parsed.revenue) || DEFAULT_SCORECARD_GOALS.revenue,
    }
  } catch {
    return { ...DEFAULT_SCORECARD_GOALS }
  }
}

function saveGoals(goals: ScorecardGoals) {
  localStorage.setItem(GOALS_STORAGE_KEY, JSON.stringify(goals))
}

function formatValue(value: number, isCurrency?: boolean): string {
  if (isCurrency) {
    return value.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    })
  }
  return value.toLocaleString()
}

function formatDelta(delta: number, isCurrency?: boolean): string {
  const abs = Math.abs(delta)
  const formatted = formatValue(abs, isCurrency)
  if (delta === 0) return isCurrency ? "$0" : "0"
  return delta > 0 ? `+${formatted}` : `−${formatted}`
}

export function ScorecardView() {
  const initialRange = useMemo(() => getCurrentWeekRange(), [])
  const [start, setStart] = useState(initialRange.start)
  const [end, setEnd] = useState(initialRange.end)
  const [goals, setGoals] = useState<ScorecardGoals>(() => loadGoals())
  const [goalDraft, setGoalDraft] = useState<ScorecardGoals>(() => loadGoals())
  const [editingGoals, setEditingGoals] = useState(false)
  const [metrics, setMetrics] = useState<WeeklyScorecardMetrics>({
    calls: 0,
    emails: 0,
    meetings: 0,
    estimates: 0,
    estimateValue: 0,
    revenue: 0,
  })
  const [loading, setLoading] = useState(true)
  const [source, setSource] = useState<"api" | "mock">("mock")

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      const result = await fetchWeeklyScorecard(start, end)
      if (!cancelled) {
        setMetrics(result.metrics)
        setSource(result.source)
        if (result.range.start && result.range.end) {
          setStart(result.range.start)
          setEnd(result.range.end)
        }
        setLoading(false)
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [start, end])

  function goToCurrentWeek() {
    const range = getCurrentWeekRange()
    setStart(range.start)
    setEnd(range.end)
  }

  function shift(delta: number) {
    const next = shiftWeek(start, delta)
    setStart(next.start)
    setEnd(next.end)
  }

  function handleSaveGoals() {
    const next: ScorecardGoals = {
      calls: Math.max(0, Math.round(Number(goalDraft.calls) || 0)),
      emails: Math.max(0, Math.round(Number(goalDraft.emails) || 0)),
      meetings: Math.max(0, Math.round(Number(goalDraft.meetings) || 0)),
      estimates: Math.max(0, Math.round(Number(goalDraft.estimates) || 0)),
      estimateValue: Math.max(
        0,
        Math.round(Number(goalDraft.estimateValue) || 0),
      ),
      revenue: Math.max(0, Math.round(Number(goalDraft.revenue) || 0)),
    }
    setGoals(next)
    setGoalDraft(next)
    saveGoals(next)
    setEditingGoals(false)
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Target className="size-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold tracking-tight">
              Weekly Scorecard
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Activity and revenue vs weekly goals
            {source === "mock" ? " · offline mock data" : ""}.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button type="button" variant="outline" size="sm" onClick={() => shift(-1)}>
            Prev week
          </Button>
          <Button type="button" variant="outline" size="sm" onClick={goToCurrentWeek}>
            This week
          </Button>
          <Button type="button" variant="outline" size="sm" onClick={() => shift(1)}>
            Next week
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap items-end gap-3 rounded-xl border border-border bg-card/50 p-4">
        <label className="flex min-w-[140px] flex-col gap-1.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <CalendarRange className="size-3.5" />
            Week start
          </span>
          <Input
            type="date"
            value={start}
            onChange={(event) => {
              const nextStart = event.target.value
              setStart(nextStart)
              const shifted = shiftWeek(nextStart, 0)
              setEnd(shifted.end)
            }}
          />
        </label>
        <label className="flex min-w-[140px] flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">
            Week end
          </span>
          <Input
            type="date"
            value={end}
            onChange={(event) => setEnd(event.target.value)}
          />
        </label>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mb-0.5"
          onClick={() => {
            setGoalDraft(goals)
            setEditingGoals((open) => !open)
          }}
        >
          {editingGoals ? "Hide goals" : "Edit goals"}
        </Button>
      </div>

      {editingGoals ? (
        <div className="flex flex-col gap-3 rounded-xl border border-border bg-muted/20 p-4">
          <p className="text-sm font-medium">Weekly targets</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {METRICS.map((metric) => (
              <label key={metric.key} className="flex flex-col gap-1.5">
                <span className="text-xs text-muted-foreground">
                  {metric.label}
                </span>
                <Input
                  type="number"
                  min={0}
                  value={goalDraft[metric.key]}
                  onChange={(event) =>
                    setGoalDraft((current) => ({
                      ...current,
                      [metric.key]: event.target.valueAsNumber || 0,
                    }))
                  }
                />
              </label>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="button" size="sm" onClick={handleSaveGoals}>
              Save goals
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => {
                setGoalDraft({ ...DEFAULT_SCORECARD_GOALS })
              }}
            >
              Reset defaults
            </Button>
          </div>
        </div>
      ) : null}

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="border-b border-border bg-muted/40 text-xs tracking-wide text-muted-foreground uppercase">
            <tr>
              <th className="px-4 py-3 font-medium">Metric</th>
              <th className="px-4 py-3 font-medium">Weekly Goal</th>
              <th className="px-4 py-3 font-medium">Actual (This Week)</th>
              <th className="px-4 py-3 font-medium">Ahead / Behind</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-8 text-muted-foreground"
                >
                  Loading scorecard…
                </td>
              </tr>
            ) : (
              METRICS.map((metric) => {
                const goal = goals[metric.key]
                const actual = metrics[metric.key]
                const delta = actual - goal
                const ahead = delta >= 0
                return (
                  <tr
                    key={metric.key}
                    className="border-b border-border/70 last:border-b-0"
                  >
                    <td className="px-4 py-3 font-medium">{metric.label}</td>
                    <td className="px-4 py-3 tabular-nums text-muted-foreground">
                      {formatValue(goal, metric.isCurrency)}
                    </td>
                    <td className="px-4 py-3 tabular-nums">
                      {formatValue(actual, metric.isCurrency)}
                    </td>
                    <td
                      className={cn(
                        "px-4 py-3 tabular-nums font-medium",
                        ahead ? "text-emerald-700" : "text-rose-700/80",
                      )}
                    >
                      {formatDelta(delta, metric.isCurrency)}
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
