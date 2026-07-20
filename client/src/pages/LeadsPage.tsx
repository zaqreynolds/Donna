import { useDeferredValue, useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowUpDown,
  Building2,
  Filter,
  Mail,
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
import { VipStarToggle } from "@/components/VipStarToggle"
import {
  createLeadNote,
  fetchLeadDetail,
  fetchLeads,
  formatLeadDate,
  formatLeadName,
  updateLeadVip,
} from "@/lib/api"
import type { EntityNote, Lead } from "@/lib/types"
import { cn } from "@/lib/utils"

type SortKey =
  | "name-asc"
  | "name-desc"
  | "company-asc"
  | "company-desc"
  | "status-asc"
  | "status-desc"
  | "date-newest"
  | "date-oldest"

const ALL_STATUSES = "all"

const STATUS_OPTIONS = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "NURTURING",
  "LOST",
] as const

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
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
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()

  return haystack.includes(query)
}

export function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [source, setSource] = useState<"api" | "mock">("mock")
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState(ALL_STATUSES)
  const [sort, setSort] = useState<SortKey>("name-asc")
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedNotes, setSelectedNotes] = useState<EntityNote[]>([])
  const [notesLoading, setNotesLoading] = useState(false)
  const deferredSearch = useDeferredValue(search)

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

  useEffect(() => {
    if (!selectedId) {
      setSelectedNotes([])
      return
    }

    const leadId = selectedId
    let cancelled = false

    async function loadNotes() {
      setNotesLoading(true)
      try {
        if (source === "api") {
          const detail = await fetchLeadDetail(leadId)
          if (!cancelled) {
            setSelectedNotes(detail.notes ?? [])
          }
        } else if (!cancelled) {
          setSelectedNotes([])
        }
      } catch {
        if (!cancelled) {
          setSelectedNotes([])
        }
      } finally {
        if (!cancelled) {
          setNotesLoading(false)
        }
      }
    }

    void loadNotes()

    return () => {
      cancelled = true
    }
  }, [selectedId, source])

  const visibleLeads = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase()
    const filtered = leads.filter((lead) => {
      const matchesStatus =
        statusFilter === ALL_STATUSES || lead.status === statusFilter
      return matchesStatus && matchesSearch(lead, query)
    })
    return sortLeads(filtered, sort)
  }, [leads, deferredSearch, statusFilter, sort])

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
                placeholder="Search name, company, email, status…"
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
              <ArrowUpDown className="size-3.5 shrink-0 text-muted-foreground" />
              <Select
                value={sort}
                onValueChange={(value) => {
                  if (value) setSort(value as SortKey)
                }}
              >
                <SelectTrigger className="w-full" aria-label="Sort leads">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {SORT_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                  : "Try a different search, status, or sort."}
              </p>
            </div>
          ) : (
            <ul className="flex flex-col">
              {visibleLeads.map((lead) => {
                const selected = lead.id === selectedId
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
                          <Badge
                            variant="outline"
                            className={cn("shrink-0", statusTone(lead.status))}
                          >
                            {lead.status}
                          </Badge>
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
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      {selectedLead ? (
        <aside className="flex w-full max-w-sm shrink-0 flex-col overflow-hidden border-l border-border bg-background">
          <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-4">
            <div className="min-w-0 flex flex-col gap-1">
              <p className="truncate text-sm font-semibold">
                {formatLeadName(selectedLead)}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {selectedLead.company?.name ?? "No company"}
              </p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setSelectedId(null)}
              aria-label="Close notes panel"
            >
              <X className="size-4" />
            </Button>
          </div>
          <div className="flex min-h-0 flex-1 flex-col p-4">
            <NotesPanel
              notes={selectedNotes}
              loading={notesLoading}
              onAdd={handleAddNote}
            />
          </div>
        </aside>
      ) : null}
    </div>
  )
}
