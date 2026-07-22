import { useDeferredValue, useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowUpDown,
  Building2,
  Factory,
  Filter,
  Mail,
  Pencil,
  Phone,
  Search,
  User,
  X,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { NotesPanel } from "@/components/NotesPanel"
import {
  leadHealthRowClass,
} from "@/components/LeadHealthIndicator"
import { useLeadHealthSettings } from "@/components/LeadHealthSettingsProvider"
import {
  TouchesPanel,
  type CreateTouchInput,
  type UpdateTouchInput,
} from "@/components/TouchesPanel"
import { VipStarToggle } from "@/components/VipStarToggle"
import { useCrmForms } from "@/components/forms/CrmFormsProvider"
import {
  createLeadNote,
  createLeadTouch,
  fetchLeadDetail,
  fetchLeads,
  fetchTouchTypes,
  formatLeadDate,
  formatLeadName,
  uniqueTouchTypes,
  updateLeadStatus,
  updateLeadTouch,
  updateLeadVip,
} from "@/lib/api"
import { daysSinceLastTouch, resolveLeadHealth } from "@/lib/leadHealth"
import type { EntityNote, Lead, LeadStatus, LeadTouch } from "@/lib/types"
import { cn } from "@/lib/utils"

type SortKey =
  | "heat-oldest"
  | "name-asc"
  | "name-desc"
  | "company-asc"
  | "company-desc"
  | "status-asc"
  | "status-desc"
  | "date-newest"
  | "date-oldest"

const ALL_STATUSES = "all"
const ALL_INDUSTRIES = "all"

const STATUS_OPTIONS = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "NURTURING",
  "LOST",
] as const satisfies readonly LeadStatus[]

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "heat-oldest", label: "Heat / Inactivity (oldest first)" },
  { value: "name-asc", label: "Name (A–Z)" },
  { value: "name-desc", label: "Name (Z–A)" },
  { value: "company-asc", label: "Company (A–Z)" },
  { value: "company-desc", label: "Company (Z–A)" },
  { value: "status-asc", label: "Status (A–Z)" },
  { value: "status-desc", label: "Status (Z–A)" },
  { value: "date-newest", label: "Date added (newest)" },
  { value: "date-oldest", label: "Date added (oldest)" },
]

function compareText(a: string, b: string): number {
  return a.localeCompare(b, undefined, { sensitivity: "base" })
}

function statusTone(status: string): string {
  switch (status) {
    case "NEW":
      return "border-sky-500/40 bg-sky-500/10 text-sky-700"
    case "CONTACTED":
      return "border-amber-500/40 bg-amber-500/10 text-amber-700"
    case "QUALIFIED":
      return "border-emerald-500/40 bg-emerald-500/10 text-emerald-700"
    case "NURTURING":
      return "border-violet-500/40 bg-violet-500/10 text-violet-700"
    case "LOST":
      return "border-rose-500/40 bg-rose-500/10 text-rose-700"
    default:
      return ""
  }
}

function StatusSelect({
  value,
  disabled,
  onChange,
  className,
  "aria-label": ariaLabel = "Lead status",
}: {
  value: string
  disabled?: boolean
  onChange: (status: string) => void
  className?: string
  "aria-label"?: string
}) {
  return (
    <select
      value={value}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={(event) => event.stopPropagation()}
      onMouseDown={(event) => event.stopPropagation()}
      onChange={(event) => onChange(event.target.value)}
      className={cn(
        "h-7 shrink-0 rounded-md border px-2 text-xs font-medium outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50",
        statusTone(value),
        className,
      )}
    >
      {STATUS_OPTIONS.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
      {!STATUS_OPTIONS.includes(value as (typeof STATUS_OPTIONS)[number]) &&
      value ? (
        <option value={value}>{value}</option>
      ) : null}
    </select>
  )
}

function sortLeads(leads: Lead[], sort: SortKey): Lead[] {
  const sorted = [...leads]

  sorted.sort((a, b) => {
    switch (sort) {
      case "name-asc":
        return compareText(formatLeadName(a), formatLeadName(b))
      case "name-desc":
        return compareText(formatLeadName(b), formatLeadName(a))
      case "company-asc":
        return (
          compareText(a.company?.name ?? "", b.company?.name ?? "") ||
          compareText(formatLeadName(a), formatLeadName(b))
        )
      case "company-desc":
        return (
          compareText(b.company?.name ?? "", a.company?.name ?? "") ||
          compareText(formatLeadName(a), formatLeadName(b))
        )
      case "status-asc":
        return (
          compareText(a.status, b.status) ||
          compareText(formatLeadName(a), formatLeadName(b))
        )
      case "status-desc":
        return (
          compareText(b.status, a.status) ||
          compareText(formatLeadName(a), formatLeadName(b))
        )
      case "date-newest":
        return Date.parse(b.createdAt ?? "") - Date.parse(a.createdAt ?? "")
      case "date-oldest":
        return Date.parse(a.createdAt ?? "") - Date.parse(b.createdAt ?? "")
      case "heat-oldest": {
        const inactivity =
          daysSinceLastTouch(b.touches) - daysSinceLastTouch(a.touches)
        return (
          inactivity || compareText(formatLeadName(a), formatLeadName(b))
        )
      }
      default:
        return 0
    }
  })

  return sorted
}

function matchesSearch(lead: Lead, query: string): boolean {
  if (!query) return true
  const haystack = [
    lead.firstName,
    lead.lastName,
    lead.title,
    lead.email,
    lead.phone,
    lead.status,
    lead.company?.name,
    lead.company?.industry?.name,
    ...(lead.touches?.map((touch) => touch.type) ?? []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()

  return haystack.includes(query)
}

export function LeadsPage() {
  const { openEditLead, subscribe } = useCrmForms()
  const { settings: healthSettings } = useLeadHealthSettings()
  const [leads, setLeads] = useState<Lead[]>([])
  const [source, setSource] = useState<"api" | "mock">("mock")
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState(ALL_STATUSES)
  const [industryFilter, setIndustryFilter] = useState(ALL_INDUSTRIES)
  const [sort, setSort] = useState<SortKey>("heat-oldest")
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedNotes, setSelectedNotes] = useState<EntityNote[]>([])
  const [selectedTouches, setSelectedTouches] = useState<LeadTouch[]>([])
  const [touchTypes, setTouchTypes] = useState<string[]>([])
  const [detailLoading, setDetailLoading] = useState(false)
  const deferredSearch = useDeferredValue(search)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      const [result, types] = await Promise.all([
        fetchLeads(),
        fetchTouchTypes(),
      ])
      if (!cancelled) {
        setLeads(result.leads)
        setSource(result.source)
        setTouchTypes(types)
        setLoading(false)
      }
    }

    void load()
    const unsubscribe = subscribe(() => {
      void load()
    })

    return () => {
      cancelled = true
      unsubscribe()
    }
  }, [subscribe])

  useEffect(() => {
    if (!selectedId) {
      setSelectedNotes([])
      setSelectedTouches([])
      return
    }

    const leadId = selectedId
    let cancelled = false

    async function loadDetail() {
      setDetailLoading(true)
      try {
        if (source === "api") {
          const detail = await fetchLeadDetail(leadId)
          if (!cancelled) {
            setSelectedNotes(detail.notes ?? [])
            setSelectedTouches(detail.touches ?? [])
          }
        } else if (!cancelled) {
          setSelectedNotes([])
          setSelectedTouches([])
        }
      } catch {
        if (!cancelled) {
          setSelectedNotes([])
          setSelectedTouches([])
        }
      } finally {
        if (!cancelled) {
          setDetailLoading(false)
        }
      }
    }

    void loadDetail()

    return () => {
      cancelled = true
    }
  }, [selectedId, source])

  const industryOptions = useMemo(() => {
    const byId = new Map<string, string>()
    for (const lead of leads) {
      if (lead.company?.industry?.id && lead.company.industry.name) {
        byId.set(lead.company.industry.id, lead.company.industry.name)
      }
    }
    return [...byId.entries()]
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }))
  }, [leads])

  const visibleLeads = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase()
    const filtered = leads.filter((lead) => {
      const matchesStatus =
        statusFilter === ALL_STATUSES || lead.status === statusFilter
      const matchesIndustry =
        industryFilter === ALL_INDUSTRIES ||
        lead.company?.industry?.id === industryFilter
      return matchesStatus && matchesIndustry && matchesSearch(lead, query)
    })
    return sortLeads(filtered, sort)
  }, [leads, deferredSearch, statusFilter, industryFilter, sort])

  const selectedLead = useMemo(
    () => leads.find((lead) => lead.id === selectedId) ?? null,
    [leads, selectedId],
  )

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

  async function handleStatusChange(leadId: string, status: string) {
    const previous = leads
    setLeads((current) =>
      current.map((lead) =>
        lead.id === leadId ? { ...lead, status } : lead,
      ),
    )

    try {
      if (source === "api") {
        const updated = await updateLeadStatus(leadId, status)
        setLeads((current) =>
          current.map((lead) => (lead.id === leadId ? { ...lead, ...updated } : lead)),
        )
      }
    } catch {
      setLeads(previous)
    }
  }

  async function handleAddNote(text: string) {
    if (!selectedId) return

    if (source === "api") {
      const note = await createLeadNote(selectedId, text)
      setSelectedNotes((current) => [note, ...current])
      return
    }

    setSelectedNotes((current) => [
      {
        id: crypto.randomUUID(),
        text,
        createdAt: new Date().toISOString(),
      },
      ...current,
    ])
  }

  async function handleAddTouch(input: CreateTouchInput) {
    if (!selectedId) return

    if (source === "api") {
      const touch = await createLeadTouch(selectedId, input)
      setSelectedTouches((current) => [touch, ...current])
      setLeads((current) =>
        current.map((lead) =>
          lead.id === selectedId
            ? { ...lead, touches: [touch, ...(lead.touches ?? [])] }
            : lead,
        ),
      )
      return
    }

    const touch: LeadTouch = {
      id: crypto.randomUUID(),
      type: input.type,
      notes: input.notes,
      date: input.date ?? new Date().toISOString(),
    }
    setSelectedTouches((current) => [touch, ...current])
    setLeads((current) =>
      current.map((lead) =>
        lead.id === selectedId
          ? { ...lead, touches: [touch, ...(lead.touches ?? [])] }
          : lead,
      ),
    )
  }

  async function handleUpdateTouch(touchId: string, input: UpdateTouchInput) {
    if (!selectedId) return

    const applyUpdate = (touch: LeadTouch): LeadTouch =>
      touch.id === touchId
        ? {
            ...touch,
            type: input.type,
            notes: input.notes,
            date: input.date ?? touch.date,
          }
        : touch

    if (source === "api") {
      const touch = await updateLeadTouch(selectedId, touchId, input)
      setSelectedTouches((current) =>
        current
          .map((row) => (row.id === touchId ? touch : row))
          .sort(
            (a, b) => Date.parse(b.date) - Date.parse(a.date),
          ),
      )
      setLeads((current) =>
        current.map((lead) =>
          lead.id === selectedId
            ? {
                ...lead,
                touches: (lead.touches ?? [])
                  .map((row) => (row.id === touchId ? touch : row))
                  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
              }
            : lead,
        ),
      )
      return
    }

    setSelectedTouches((current) =>
      current
        .map(applyUpdate)
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
    )
    setLeads((current) =>
      current.map((lead) =>
        lead.id === selectedId
          ? {
              ...lead,
              touches: (lead.touches ?? [])
                .map(applyUpdate)
                .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
            }
          : lead,
      ),
    )
  }

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <div className="flex shrink-0 flex-col gap-4 border-b border-border px-6 py-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold tracking-tight">Leads</h2>
              <p className="text-sm text-muted-foreground">
                {loading
                  ? "Loading people…"
                  : `${visibleLeads.length} of ${leads.length} people`}
                {!loading && source === "mock" ? " · offline mock data" : ""}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[220px] flex-1">
              <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name, company, industry, email, status…"
                className="pl-8"
                aria-label="Search leads"
              />
            </div>

            <div className="flex min-w-[180px] items-center gap-2">
              <Filter className="size-3.5 shrink-0 text-muted-foreground" />
              <Select
                value={statusFilter}
                onValueChange={(value) => {
                  if (value) setStatusFilter(value)
                }}
              >
                <SelectTrigger className="w-full" aria-label="Filter by status">
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL_STATUSES}>All statuses</SelectItem>
                  {STATUS_OPTIONS.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex min-w-[200px] items-center gap-2">
              <Factory className="size-3.5 shrink-0 text-muted-foreground" />
              <select
                value={industryFilter}
                onChange={(event) => setIndustryFilter(event.target.value)}
                aria-label="Filter by industry"
                className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <option value={ALL_INDUSTRIES}>All industries</option>
                {industryOptions.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex min-w-[260px] flex-1 items-center gap-2 sm:max-w-xs">
              <ArrowUpDown className="size-3.5 shrink-0 text-muted-foreground" />
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                aria-label="Sort leads"
                className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          {loading ? (
            <p className="px-6 py-8 text-sm text-muted-foreground">Loading leads…</p>
          ) : visibleLeads.length === 0 ? (
            <div className="flex flex-col gap-2 px-6 py-8">
              <p className="text-sm font-medium">No leads found</p>
              <p className="text-sm text-muted-foreground">
                {leads.length === 0
                  ? "Add a lead to get started."
                  : "Try a different search, status, industry, or sort."}
              </p>
            </div>
          ) : (
            <ul className="flex flex-col">
              {visibleLeads.map((lead) => {
                const selected = lead.id === selectedId
                const health = resolveLeadHealth(lead, healthSettings)
                return (
                  <li key={lead.id}>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedId((current) =>
                          current === lead.id ? null : lead.id,
                        )
                      }
                      className={cn(
                        "flex w-full items-start justify-between gap-4 border-b border-border/70 px-6 py-4 text-left transition-colors hover:bg-muted/40",
                        leadHealthRowClass(health),
                        selected && "bg-muted/50",
                      )}
                    >
                      <div className="flex min-w-0 flex-1 flex-col gap-2">
                        <div className="flex min-w-0 flex-wrap items-center gap-2">
                          <span
                            onClick={(event) => event.stopPropagation()}
                            onKeyDown={(event) => event.stopPropagation()}
                          >
                            <VipStarToggle
                              isVip={Boolean(lead.isVip)}
                              onToggle={(next) => handleVipToggle(lead.id, next)}
                              label={`Toggle VIP for ${formatLeadName(lead)}`}
                            />
                          </span>
                          <User className="size-4 shrink-0 text-muted-foreground" />
                          <span className="truncate text-sm font-medium">
                            {formatLeadName(lead)}
                          </span>
                          {lead.title ? (
                            <span className="truncate text-xs text-muted-foreground">
                              {lead.title}
                            </span>
                          ) : null}
                          <StatusSelect
                            value={lead.status}
                            onChange={(status) =>
                              void handleStatusChange(lead.id, status)
                            }
                            aria-label={`Status for ${formatLeadName(lead)}`}
                          />
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          {lead.company?.name ? (
                            <Link
                              to="/companies"
                              onClick={(event) => event.stopPropagation()}
                              className="inline-flex items-center gap-1 underline-offset-2 hover:text-foreground hover:underline"
                            >
                              <Building2 className="size-3" />
                              {lead.company.name}
                            </Link>
                          ) : null}
                          {lead.email ? (
                            <span className="inline-flex items-center gap-1">
                              <Mail className="size-3" />
                              {lead.email}
                            </span>
                          ) : null}
                          {lead.phone ? (
                            <span className="inline-flex items-center gap-1">
                              <Phone className="size-3" />
                              {lead.phone}
                            </span>
                          ) : null}
                          <span>Added {formatLeadDate(lead.createdAt)}</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-xs text-muted-foreground">
                            {(lead.touches?.length ?? 0) === 1
                              ? "1 touch"
                              : `${lead.touches?.length ?? 0} touches`}
                          </span>
                          {uniqueTouchTypes(lead.touches).map((touchType) => (
                            <Badge
                              key={`${lead.id}-${touchType}`}
                              variant="outline"
                              className="text-[10px] font-normal"
                            >
                              {touchType}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <span
                        className="shrink-0"
                        onClick={(event) => event.stopPropagation()}
                        onKeyDown={(event) => event.stopPropagation()}
                      >
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon-sm"
                          aria-label={`Edit ${formatLeadName(lead)}`}
                          onClick={() => openEditLead(lead.id)}
                        >
                          <Pencil className="size-3.5" />
                        </Button>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      {selectedLead ? (
        <aside className="flex w-full max-w-md shrink-0 flex-col overflow-hidden border-l border-border bg-background">
          <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-4">
            <div className="min-w-0 flex flex-1 flex-col gap-2">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex flex-col gap-1">
                  <p className="truncate text-sm font-semibold">
                    {formatLeadName(selectedLead)}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {selectedLead.company?.name ?? "No company"}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => openEditLead(selectedLead.id)}
                    aria-label={`Edit ${formatLeadName(selectedLead)}`}
                  >
                    <Pencil className="size-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setSelectedId(null)}
                    aria-label="Close lead detail"
                  >
                    <X className="size-4" />
                  </Button>
                </div>
              </div>
              <label className="flex flex-col gap-1">
                <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                  Status
                </span>
                <StatusSelect
                  value={selectedLead.status}
                  onChange={(status) =>
                    void handleStatusChange(selectedLead.id, status)
                  }
                  aria-label={`Status for ${formatLeadName(selectedLead)}`}
                  className="h-8 w-full text-sm"
                />
              </label>
            </div>
          </div>
          <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-4">
            <TouchesPanel
              touches={selectedTouches}
              touchTypes={touchTypes}
              loading={detailLoading}
              onAdd={handleAddTouch}
              onUpdate={handleUpdateTouch}
            />
            <NotesPanel
              notes={selectedNotes}
              loading={detailLoading}
              onAdd={handleAddNote}
            />
          </div>
        </aside>
      ) : null}
    </div>
  )
}
