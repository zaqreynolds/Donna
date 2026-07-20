import { useDeferredValue, useEffect, useMemo, useState } from "react"
import { ArrowUpDown, Building2, Factory, Phone, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { fetchCompanies, formatLeadDate } from "@/lib/api"
import type { Company } from "@/lib/types"

type SortKey =
  | "name-asc"
  | "name-desc"
  | "industry-asc"
  | "industry-desc"
  | "date-newest"
  | "date-oldest"

const ALL_INDUSTRIES = "all"

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
    company.address,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()

  return haystack.includes(query)
}

export function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([])
  const [source, setSource] = useState<"api" | "mock">("mock")
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [industryFilter, setIndustryFilter] = useState(ALL_INDUSTRIES)
  const [sort, setSort] = useState<SortKey>("name-asc")
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

    return () => {
      cancelled = true
    }
  }, [])

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
      return matchesIndustry && matchesSearch(company, query)
    })
    return sortCompanies(filtered, sort)
  }, [companies, deferredSearch, industryFilter, sort])

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
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
          <p className="px-6 py-8 text-sm text-muted-foreground">Loading companies…</p>
        ) : visibleCompanies.length === 0 ? (
          <div className="flex flex-col gap-2 px-6 py-8">
            <p className="text-sm font-medium">No companies found</p>
            <p className="text-sm text-muted-foreground">
              {companies.length === 0
                ? "Add a company to get started."
                : "Try a different search, industry, or sort."}
            </p>
          </div>
        ) : (
          <ul className="flex flex-col">
            {visibleCompanies.map((company) => (
              <li
                key={company.id}
                className="flex items-start justify-between gap-4 border-b border-border/70 px-6 py-4 transition-colors hover:bg-muted/40"
              >
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    <Building2 className="size-4 shrink-0 text-muted-foreground" />
                    <span className="truncate text-sm font-medium">{company.name}</span>
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
                    {company.address ? (
                      <span className="truncate">{company.address}</span>
                    ) : null}
                    <span>Added {formatLeadDate(company.createdAt)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
