import { useDeferredValue, useEffect, useMemo, useState } from "react"
import {
  ArrowUpDown,
  Building2,
  Factory,
  Globe,
  Pencil,
  Phone,
  Search,
  Star,
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
import { useCrmForms } from "@/components/forms/CrmFormsProvider"
import {
  createCompanyNote,
  fetchCompanies,
  fetchCompanyDetail,
  formatLeadDate,
  updateCompanyVip,
} from "@/lib/api"
import type { Company, EntityNote } from "@/lib/types"
import { cn } from "@/lib/utils"

type SortKey =
  | "name-asc"
  | "name-desc"
  | "industry-asc"
  | "industry-desc"
  | "date-newest"
  | "date-oldest"

const ALL_INDUSTRIES = "all"

function isInteractiveRowTarget(target: EventTarget | null): boolean {
  return (
    target instanceof Element &&
    target.closest(
      "button, a, select, input, textarea, label, [data-no-row-click]",
    ) != null
  )
}

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "name-asc", label: "Name (A–Z)" },
  { value: "name-desc", label: "Name (Z–A)" },
  { value: "industry-asc", label: "Industry (A–Z)" },
  { value: "industry-desc", label: "Industry (Z–A)" },
  { value: "date-newest", label: "Date added (newest)" },
  { value: "date-oldest", label: "Date added (oldest)" },
]

function compareText(a: string, b: string): number {
  return a.localeCompare(b, undefined, { sensitivity: "base" })
}

function sortCompanies(companies: Company[], sort: SortKey): Company[] {
  const sorted = [...companies]

  sorted.sort((a, b) => {
    switch (sort) {
      case "name-asc":
        return compareText(a.name, b.name)
      case "name-desc":
        return compareText(b.name, a.name)
      case "industry-asc":
        return (
          compareText(a.industry?.name ?? "", b.industry?.name ?? "") ||
          compareText(a.name, b.name)
        )
      case "industry-desc":
        return (
          compareText(b.industry?.name ?? "", a.industry?.name ?? "") ||
          compareText(a.name, b.name)
        )
      case "date-newest":
        return Date.parse(b.createdAt) - Date.parse(a.createdAt)
      case "date-oldest":
        return Date.parse(a.createdAt) - Date.parse(b.createdAt)
      default:
        return 0
    }
  })

  return sorted
}

function matchesSearch(company: Company, query: string): boolean {
  if (!query) return true
  const haystack = [
    company.name,
    company.industry?.name,
    company.phone,
    company.website,
    company.address,
    ...(company.socials?.map((link) => `${link.platform} ${link.handle}`) ?? []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()

  return haystack.includes(query)
}

export function CompaniesPage() {
  const { openEditCompany, subscribe } = useCrmForms()
  const [companies, setCompanies] = useState<Company[]>([])
  const [source, setSource] = useState<"api" | "mock">("mock")
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [industryFilter, setIndustryFilter] = useState(ALL_INDUSTRIES)
  const [vipOnly, setVipOnly] = useState(false)
  const [sort, setSort] = useState<SortKey>("name-asc")
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedNotes, setSelectedNotes] = useState<EntityNote[]>([])
  const [notesLoading, setNotesLoading] = useState(false)
  const deferredSearch = useDeferredValue(search)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      const result = await fetchCompanies()
      if (!cancelled) {
        setCompanies(result.companies)
        setSource(result.source)
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
      return
    }

    const companyId = selectedId
    let cancelled = false

    async function loadNotes() {
      setNotesLoading(true)
      try {
        if (source === "api") {
          const detail = await fetchCompanyDetail(companyId)
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

  const industryOptions = useMemo(() => {
    const byId = new Map<string, string>()
    for (const company of companies) {
      if (company.industry?.id && company.industry?.name) {
        byId.set(company.industry.id, company.industry.name)
      }
    }
    return [...byId.entries()]
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => compareText(a.name, b.name))
  }, [companies])

  const visibleCompanies = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase()
    const filtered = companies.filter((company) => {
      const matchesIndustry =
        industryFilter === ALL_INDUSTRIES ||
        company.industry?.id === industryFilter
      const matchesVip = !vipOnly || Boolean(company.isVip)
      return matchesIndustry && matchesVip && matchesSearch(company, query)
    })
    return sortCompanies(filtered, sort)
  }, [companies, deferredSearch, industryFilter, vipOnly, sort])

  const selectedCompany = useMemo(
    () => companies.find((company) => company.id === selectedId) ?? null,
    [companies, selectedId],
  )

  async function handleVipToggle(companyId: string, next: boolean) {
    const previous = companies
    setCompanies((current) =>
      current.map((company) =>
        company.id === companyId ? { ...company, isVip: next } : company,
      ),
    )

    try {
      if (source === "api") {
        await updateCompanyVip(companyId, next)
      }
    } catch {
      setCompanies(previous)
    }
  }

  async function handleAddNote(text: string) {
    if (!selectedId) return

    if (source === "api") {
      const note = await createCompanyNote(selectedId, text)
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
              <h2 className="text-xl font-semibold tracking-tight">Companies</h2>
              <p className="text-sm text-muted-foreground">
                {loading
                  ? "Loading accounts…"
                  : `${visibleCompanies.length} of ${companies.length} accounts`}
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
                placeholder="Search name, industry, phone, address…"
                className="pl-8"
                aria-label="Search companies"
              />
            </div>

            <div className="flex min-w-[200px] items-center gap-2">
              <Factory className="size-3.5 shrink-0 text-muted-foreground" />
              <Select
                value={industryFilter}
                onValueChange={(value) => {
                  if (value) setIndustryFilter(value)
                }}
              >
                <SelectTrigger className="w-full" aria-label="Filter by industry">
                  <SelectValue placeholder="All industries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL_INDUSTRIES}>All industries</SelectItem>
                  {industryOptions.map((industry) => (
                    <SelectItem key={industry.id} value={industry.id}>
                      {industry.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <button
              type="button"
              aria-pressed={vipOnly}
              aria-label="Show VIP only"
              title={vipOnly ? "Showing VIP only" : "Show VIP only"}
              onClick={() => setVipOnly((current) => !current)}
              className={cn(
                "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg border px-2.5 text-sm font-medium transition-colors",
                vipOnly
                  ? "border-amber-500/40 bg-amber-500/10 text-amber-700"
                  : "border-input text-muted-foreground hover:bg-muted/60 hover:text-foreground",
              )}
            >
              <Star
                className={cn(
                  "size-3.5",
                  vipOnly
                    ? "fill-amber-400 text-amber-500"
                    : "fill-transparent text-muted-foreground",
                )}
              />
              VIP
            </button>

            <div className="flex min-w-[200px] items-center gap-2">
              <ArrowUpDown className="size-3.5 shrink-0 text-muted-foreground" />
              <Select
                value={sort}
                onValueChange={(value) => {
                  if (value) setSort(value as SortKey)
                }}
              >
                <SelectTrigger className="w-full" aria-label="Sort companies">
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
            <p className="px-6 py-8 text-sm text-muted-foreground">
              Loading companies…
            </p>
          ) : visibleCompanies.length === 0 ? (
            <div className="flex flex-col gap-2 px-6 py-8">
              <p className="text-sm font-medium">No companies found</p>
              <p className="text-sm text-muted-foreground">
                {companies.length === 0
                  ? "Add a company to get started."
                  : "Try a different search, industry, VIP, or sort."}
              </p>
            </div>
          ) : (
            <ul className="flex flex-col">
              {visibleCompanies.map((company) => {
                const selected = company.id === selectedId
                return (
                  <li key={company.id}>
                    <div
                      onClick={(event) => {
                        if (isInteractiveRowTarget(event.target)) return
                        setSelectedId((current) =>
                          current === company.id ? null : company.id,
                        )
                      }}
                      className={cn(
                        "flex w-full cursor-pointer items-start justify-between gap-4 border-b border-border/70 px-6 py-4 text-left transition-colors hover:bg-muted/40",
                        selected && "bg-muted/50",
                      )}
                    >
                      <div className="flex min-w-0 flex-1 flex-col gap-2">
                        <div className="flex min-w-0 flex-wrap items-center gap-2">
                          <VipStarToggle
                            isVip={Boolean(company.isVip)}
                            onToggle={(next) =>
                              handleVipToggle(company.id, next)
                            }
                            label={`Toggle VIP for ${company.name}`}
                          />
                          <Building2 className="size-4 shrink-0 text-muted-foreground" />
                          <span className="truncate text-sm font-medium">
                            {company.name}
                          </span>
                          <Badge variant="outline" className="shrink-0">
                            {company.industry?.name ?? "Uncategorized"}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          {company.phone ? (
                            <span className="inline-flex items-center gap-1">
                              <Phone className="size-3" />
                              {company.phone}
                            </span>
                          ) : null}
                          {company.website ? (
                            <a
                              href={
                                /^https?:\/\//i.test(company.website)
                                  ? company.website
                                  : `https://${company.website}`
                              }
                              target="_blank"
                              rel="noreferrer"
                              onClick={(event) => event.stopPropagation()}
                              className="inline-flex max-w-[220px] items-center gap-1 truncate underline-offset-2 hover:text-foreground hover:underline"
                            >
                              <Globe className="size-3 shrink-0" />
                              {company.website.replace(/^https?:\/\//i, "")}
                            </a>
                          ) : null}
                          {(company.socials ?? []).slice(0, 3).map((link) => (
                            <span
                              key={`${company.id}-${link.platform}`}
                              className="inline-flex items-center gap-1"
                              title={`${link.platform}: ${link.handle}`}
                            >
                              <span className="text-[10px] uppercase tracking-wide">
                                {link.platform}
                              </span>
                              {link.handle}
                            </span>
                          ))}
                          {company.address ? (
                            <span className="truncate">{company.address}</span>
                          ) : null}
                          <span>Added {formatLeadDate(company.createdAt)}</span>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        aria-label={`Edit ${company.name}`}
                        onClick={() => openEditCompany(company.id)}
                      >
                        <Pencil className="size-3.5" />
                      </Button>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      {selectedCompany ? (
        <aside className="flex w-full max-w-sm shrink-0 flex-col overflow-hidden border-l border-border bg-background">
          <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-4">
            <div className="min-w-0 flex flex-col gap-1">
              <p className="truncate text-sm font-semibold">
                {selectedCompany.name}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {selectedCompany.industry?.name ?? "Uncategorized"}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => openEditCompany(selectedCompany.id)}
                aria-label={`Edit ${selectedCompany.name}`}
              >
                <Pencil className="size-4" />
              </Button>
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
          </div>
          <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-4">
            {(selectedCompany.website ||
              (selectedCompany.socials ?? []).length > 0) && (
              <div className="flex flex-col gap-2 rounded-lg border border-border/70 p-3">
                {selectedCompany.website ? (
                  <a
                    href={
                      /^https?:\/\//i.test(selectedCompany.website)
                        ? selectedCompany.website
                        : `https://${selectedCompany.website}`
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm underline-offset-2 hover:underline"
                  >
                    <Globe className="size-3.5 shrink-0 text-muted-foreground" />
                    {selectedCompany.website.replace(/^https?:\/\//i, "")}
                  </a>
                ) : null}
                {(selectedCompany.socials ?? []).map((link) => (
                  <div
                    key={`${selectedCompany.id}-${link.platform}`}
                    className="flex items-baseline justify-between gap-2 text-sm"
                  >
                    <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {link.platform}
                    </span>
                    <span className="truncate">{link.handle}</span>
                  </div>
                ))}
              </div>
            )}
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
