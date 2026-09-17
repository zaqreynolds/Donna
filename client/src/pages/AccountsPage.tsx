import { useDeferredValue, useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowUpDown,
  Building2,
  Factory,
  Filter,
  Globe,
  Mail,
  Pencil,
  Phone,
  Search,
  Star,
  User,
  UserPlus,
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
import { accountFreshnessRowClass } from "@/components/AccountFreshnessIndicator"
import { useAccountFreshnessSettings } from "@/components/AccountFreshnessSettingsProvider"
import {
  TouchesPanel,
  type CreateTouchInput,
  type UpdateTouchInput,
} from "@/components/TouchesPanel"
import { VipStarToggle } from "@/components/VipStarToggle"
import { useCrmForms } from "@/components/forms/CrmFormsProvider"
import {
  createAccountNote,
  createAccountTouch,
  fetchAccountDetail,
  fetchAccounts,
  fetchSocialPlatforms,
  fetchTouchTypes,
  formatContactName,
  formatEntityDate,
  updateAccountStatus,
  updateAccountTouch,
  updateAccountVip,
} from "@/lib/api"
import {
  daysSinceLastTouch,
  getLastTouchDate,
  resolveAccountFreshness,
} from "@/lib/accountFreshness"
import type {
  Account,
  AccountStatus,
  ContactSummary,
  EntityNote,
  Touch,
} from "@/lib/types"
import { cn } from "@/lib/utils"

type SortKey =
  | "freshness-oldest"
  | "name-asc"
  | "name-desc"
  | "industry-asc"
  | "industry-desc"
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
] as const satisfies readonly AccountStatus[]

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "freshness-oldest", label: "Freshness (oldest first)" },
  { value: "name-asc", label: "Name (A–Z)" },
  { value: "name-desc", label: "Name (Z–A)" },
  { value: "industry-asc", label: "Industry (A–Z)" },
  { value: "industry-desc", label: "Industry (Z–A)" },
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

function isInteractiveRowTarget(target: EventTarget | null): boolean {
  return (
    target instanceof Element &&
    target.closest(
      "button, a, select, input, textarea, label, [data-no-row-click]",
    ) != null
  )
}

function StatusSelect({
  value,
  disabled,
  onChange,
  className,
  "aria-label": ariaLabel = "Account status",
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

function sortAccounts(accounts: Account[], sort: SortKey): Account[] {
  const sorted = [...accounts]

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
      case "status-asc":
        return (
          compareText(a.status, b.status) || compareText(a.name, b.name)
        )
      case "status-desc":
        return (
          compareText(b.status, a.status) || compareText(a.name, b.name)
        )
      case "date-newest":
        return Date.parse(b.createdAt) - Date.parse(a.createdAt)
      case "date-oldest":
        return Date.parse(a.createdAt) - Date.parse(b.createdAt)
      case "freshness-oldest": {
        const inactivity =
          daysSinceLastTouch(b.touches) - daysSinceLastTouch(a.touches)
        return inactivity || compareText(a.name, b.name)
      }
      default:
        return 0
    }
  })

  return sorted
}

function matchesSearch(account: Account, query: string): boolean {
  if (!query) return true
  const haystack = [
    account.name,
    account.industry?.name,
    account.phone,
    account.website,
    account.address,
    account.status,
    ...(account.socials?.map((link) => `${link.platform} ${link.handle}`) ??
      []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()

  return haystack.includes(query)
}

export function AccountsPage() {
  const { openEditAccount, openCreateContact, subscribe } = useCrmForms()
  const { settings: freshnessSettings } = useAccountFreshnessSettings()
  const [accounts, setAccounts] = useState<Account[]>([])
  const [source, setSource] = useState<"api" | "mock">("mock")
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState(ALL_STATUSES)
  const [industryFilter, setIndustryFilter] = useState(ALL_INDUSTRIES)
  const [vipOnly, setVipOnly] = useState(false)
  const [hideLost, setHideLost] = useState(true)
  const [sort, setSort] = useState<SortKey>("freshness-oldest")
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedNotes, setSelectedNotes] = useState<EntityNote[]>([])
  const [selectedTouches, setSelectedTouches] = useState<Touch[]>([])
  const [selectedContacts, setSelectedContacts] = useState<ContactSummary[]>([])
  const [touchTypes, setTouchTypes] = useState<string[]>([])
  const [socialPlatforms, setSocialPlatforms] = useState<string[]>([])
  const [detailLoading, setDetailLoading] = useState(false)
  const deferredSearch = useDeferredValue(search)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      const [result, types, platforms] = await Promise.all([
        fetchAccounts(),
        fetchTouchTypes(),
        fetchSocialPlatforms(),
      ])
      if (!cancelled) {
        setAccounts(result.accounts)
        setSource(result.source)
        setTouchTypes(types)
        setSocialPlatforms(platforms)
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
      setSelectedContacts([])
      return
    }

    const accountId = selectedId
    let cancelled = false

    async function loadDetail() {
      setDetailLoading(true)
      try {
        if (source === "api") {
          const detail = await fetchAccountDetail(accountId)
          if (!cancelled) {
            setSelectedNotes(detail.notes ?? [])
            setSelectedTouches(detail.touches ?? [])
            setSelectedContacts(detail.contacts ?? [])
            setAccounts((current) =>
              current.map((account) =>
                account.id === accountId
                  ? {
                      ...account,
                      touches: detail.touches ?? account.touches,
                      contacts: detail.contacts,
                      contactCount:
                        detail.contactCount ??
                        detail.contacts?.length ??
                        account.contactCount,
                    }
                  : account,
              ),
            )
          }
        } else if (!cancelled) {
          setSelectedNotes([])
          setSelectedTouches([])
          setSelectedContacts([])
        }
      } catch {
        if (!cancelled) {
          setSelectedNotes([])
          setSelectedTouches([])
          setSelectedContacts([])
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
    for (const account of accounts) {
      if (account.industry?.id && account.industry?.name) {
        byId.set(account.industry.id, account.industry.name)
      }
    }
    return [...byId.entries()]
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => compareText(a.name, b.name))
  }, [accounts])

  const visibleAccounts = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase()
    const filtered = accounts.filter((account) => {
      const isLost = String(account.status).toUpperCase() === "LOST"
      if (hideLost && isLost && statusFilter !== "LOST") return false

      const matchesStatus =
        statusFilter === ALL_STATUSES || account.status === statusFilter
      const matchesIndustry =
        industryFilter === ALL_INDUSTRIES ||
        account.industry?.id === industryFilter
      const matchesVip = !vipOnly || Boolean(account.isVip)
      return (
        matchesStatus &&
        matchesIndustry &&
        matchesVip &&
        matchesSearch(account, query)
      )
    })
    return sortAccounts(filtered, sort)
  }, [
    accounts,
    deferredSearch,
    statusFilter,
    industryFilter,
    vipOnly,
    hideLost,
    sort,
  ])

  const selectedAccount = useMemo(
    () => accounts.find((account) => account.id === selectedId) ?? null,
    [accounts, selectedId],
  )

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

  async function handleStatusChange(accountId: string, status: string) {
    const previous = accounts
    setAccounts((current) =>
      current.map((account) =>
        account.id === accountId ? { ...account, status } : account,
      ),
    )

    try {
      if (source === "api") {
        const updated = await updateAccountStatus(accountId, status)
        setAccounts((current) =>
          current.map((account) =>
            account.id === accountId ? { ...account, ...updated } : account,
          ),
        )
      }
    } catch {
      setAccounts(previous)
    }
  }

  async function handleAddNote(text: string) {
    if (!selectedId) return

    if (source === "api") {
      const note = await createAccountNote(selectedId, text)
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
      const touch = await createAccountTouch(selectedId, input)
      setSelectedTouches((current) => [touch, ...current])
      setAccounts((current) =>
        current.map((account) =>
          account.id === selectedId
            ? { ...account, touches: [touch, ...(account.touches ?? [])] }
            : account,
        ),
      )
      return
    }

    const touch: Touch = {
      id: crypto.randomUUID(),
      type: input.type,
      notes: input.notes,
      date: input.date ?? new Date().toISOString(),
      amount: input.amount ?? null,
      estimateNumber: input.estimateNumber ?? null,
      socialPlatform: input.socialPlatform ?? null,
      contactId: input.contactId ?? null,
      outcome: input.outcome ?? null,
    }
    setSelectedTouches((current) => [touch, ...current])
    setAccounts((current) =>
      current.map((account) =>
        account.id === selectedId
          ? { ...account, touches: [touch, ...(account.touches ?? [])] }
          : account,
      ),
    )
  }

  async function handleUpdateTouch(touchId: string, input: UpdateTouchInput) {
    if (!selectedId) return

    const applyUpdate = (touch: Touch): Touch =>
      touch.id === touchId
        ? {
            ...touch,
            type: input.type,
            notes: input.notes,
            date: input.date ?? touch.date,
            amount: input.amount !== undefined ? input.amount : touch.amount,
            estimateNumber:
              input.estimateNumber !== undefined
                ? input.estimateNumber
                : touch.estimateNumber,
            socialPlatform:
              input.socialPlatform !== undefined
                ? input.socialPlatform
                : touch.socialPlatform,
            contactId:
              input.contactId !== undefined ? input.contactId : touch.contactId,
            outcome:
              input.outcome !== undefined ? input.outcome : touch.outcome,
          }
        : touch

    if (source === "api") {
      const touch = await updateAccountTouch(selectedId, touchId, input)
      setSelectedTouches((current) =>
        current
          .map((row) => (row.id === touchId ? touch : row))
          .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
      )
      setAccounts((current) =>
        current.map((account) =>
          account.id === selectedId
            ? {
                ...account,
                touches: (account.touches ?? [])
                  .map((row) => (row.id === touchId ? touch : row))
                  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
              }
            : account,
        ),
      )
      return
    }

    setSelectedTouches((current) =>
      current
        .map(applyUpdate)
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
    )
    setAccounts((current) =>
      current.map((account) =>
        account.id === selectedId
          ? {
              ...account,
              touches: (account.touches ?? [])
                .map(applyUpdate)
                .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
            }
          : account,
      ),
    )
  }

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <div className="flex shrink-0 flex-col gap-4 border-b border-border px-6 py-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold tracking-tight">Accounts</h2>
              <p className="text-sm text-muted-foreground">
                {loading
                  ? "Loading accounts…"
                  : `${visibleAccounts.length} of ${accounts.length} accounts`}
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
                aria-label="Search accounts"
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
                <SelectTrigger className="w-full" aria-label="Sort accounts">
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

            <label className="inline-flex h-8 shrink-0 cursor-pointer items-center gap-2 rounded-lg border border-input px-2.5 text-sm">
              <input
                type="checkbox"
                checked={hideLost}
                onChange={(event) => setHideLost(event.target.checked)}
                className="size-3.5 rounded border-input accent-foreground"
              />
              <span className="whitespace-nowrap">Hide lost</span>
            </label>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          {loading ? (
            <p className="px-6 py-8 text-sm text-muted-foreground">
              Loading accounts…
            </p>
          ) : visibleAccounts.length === 0 ? (
            <div className="flex flex-col gap-2 px-6 py-8">
              <p className="text-sm font-medium">No accounts found</p>
              <p className="text-sm text-muted-foreground">
                {accounts.length === 0
                  ? "Add an account to get started."
                  : "Try a different search, status, industry, VIP, or sort."}
              </p>
            </div>
          ) : (
            <ul className="flex flex-col">
              {visibleAccounts.map((account) => {
                const selected = account.id === selectedId
                const freshness = resolveAccountFreshness(
                  account,
                  freshnessSettings,
                )
                const contactCount =
                  account.contactCount ?? account.contacts?.length ?? 0
                return (
                  <li key={account.id}>
                    <div
                      onClick={(event) => {
                        if (isInteractiveRowTarget(event.target)) return
                        setSelectedId((current) =>
                          current === account.id ? null : account.id,
                        )
                      }}
                      className={cn(
                        "flex w-full cursor-pointer items-start justify-between gap-4 border-b border-border/70 px-6 py-4 text-left transition-colors hover:bg-muted/40",
                        accountFreshnessRowClass(freshness),
                        selected && "bg-muted/50",
                      )}
                    >
                      <div className="flex min-w-0 flex-1 flex-col gap-2">
                        <div className="flex min-w-0 flex-wrap items-center gap-2">
                          <VipStarToggle
                            isVip={Boolean(account.isVip)}
                            onToggle={(next) =>
                              handleVipToggle(account.id, next)
                            }
                            label={`Toggle VIP for ${account.name}`}
                          />
                          <Building2 className="size-4 shrink-0 text-muted-foreground" />
                          <span className="truncate text-sm font-medium">
                            {account.name}
                          </span>
                          <Badge variant="outline" className="shrink-0">
                            {account.industry?.name ?? "Uncategorized"}
                          </Badge>
                          <StatusSelect
                            value={account.status}
                            onChange={(status) =>
                              void handleStatusChange(account.id, status)
                            }
                            aria-label={`Status for ${account.name}`}
                          />
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          {account.phone ? (
                            <span className="inline-flex items-center gap-1">
                              <Phone className="size-3" />
                              {account.phone}
                            </span>
                          ) : null}
                          {account.website ? (
                            <a
                              href={
                                /^https?:\/\//i.test(account.website)
                                  ? account.website
                                  : `https://${account.website}`
                              }
                              target="_blank"
                              rel="noreferrer"
                              onClick={(event) => event.stopPropagation()}
                              className="inline-flex max-w-[220px] items-center gap-1 truncate underline-offset-2 hover:text-foreground hover:underline"
                            >
                              <Globe className="size-3 shrink-0" />
                              {account.website.replace(/^https?:\/\//i, "")}
                            </a>
                          ) : null}
                          {(account.socials ?? []).slice(0, 3).map((link) => (
                            <span
                              key={`${account.id}-${link.platform}`}
                              className="inline-flex items-center gap-1"
                              title={`${link.platform}: ${link.handle}`}
                            >
                              <span className="text-[10px] uppercase tracking-wide">
                                {link.platform}
                              </span>
                              {link.handle}
                            </span>
                          ))}
                          {account.address ? (
                            <span className="truncate">{account.address}</span>
                          ) : null}
                          <span className="inline-flex items-center gap-1">
                            <User className="size-3" />
                            {contactCount === 1
                              ? "1 contact"
                              : `${contactCount} contacts`}
                          </span>
                          <span>Added {formatEntityDate(account.createdAt)}</span>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        aria-label={`Edit ${account.name}`}
                        onClick={() => openEditAccount(account.id)}
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

      {selectedAccount ? (
        <aside className="flex w-full max-w-md shrink-0 flex-col overflow-hidden border-l border-border bg-background">
          <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-4">
            <div className="min-w-0 flex flex-1 flex-col gap-2">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex flex-col gap-1">
                  <p className="truncate text-sm font-semibold">
                    {selectedAccount.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {selectedAccount.industry?.name ?? "Uncategorized"}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => openEditAccount(selectedAccount.id)}
                    aria-label={`Edit ${selectedAccount.name}`}
                  >
                    <Pencil className="size-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setSelectedId(null)}
                    aria-label="Close account detail"
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
                  value={selectedAccount.status}
                  onChange={(status) =>
                    void handleStatusChange(selectedAccount.id, status)
                  }
                  aria-label={`Status for ${selectedAccount.name}`}
                  className="h-8 w-full text-sm"
                />
              </label>
            </div>
          </div>
          <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-4">
            {(selectedAccount.website ||
              (selectedAccount.socials ?? []).length > 0) && (
              <div className="flex flex-col gap-2 rounded-lg border border-border/70 p-3">
                {selectedAccount.website ? (
                  <a
                    href={
                      /^https?:\/\//i.test(selectedAccount.website)
                        ? selectedAccount.website
                        : `https://${selectedAccount.website}`
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm underline-offset-2 hover:underline"
                  >
                    <Globe className="size-3.5 shrink-0 text-muted-foreground" />
                    {selectedAccount.website.replace(/^https?:\/\//i, "")}
                  </a>
                ) : null}
                {(selectedAccount.socials ?? []).map((link) => (
                  <div
                    key={`${selectedAccount.id}-${link.platform}`}
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

            <section className="flex flex-col gap-3" aria-label="Contacts">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <User className="size-4 text-muted-foreground" />
                  <h3 className="text-sm font-semibold tracking-tight">
                    Contacts
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {detailLoading ? "…" : selectedContacts.length}
                  </span>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => openCreateContact(selectedAccount.id)}
                >
                  <UserPlus className="size-3.5" />
                  Add contact
                </Button>
              </div>
              {detailLoading ? (
                <p className="text-sm text-muted-foreground">Loading contacts…</p>
              ) : selectedContacts.length === 0 ? (
                <p className="text-sm text-muted-foreground">No contacts yet.</p>
              ) : (
                <ul className="flex flex-col gap-2">
                  {selectedContacts.map((contact) => {
                    const lastTouch = getLastTouchDate(contact.touches)
                    return (
                      <li
                        key={contact.id}
                        className="rounded-lg border border-border/70 px-3 py-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex flex-col gap-1">
                            <Link
                              to="/contacts"
                              className="truncate text-sm font-medium underline-offset-2 hover:underline"
                            >
                              {formatContactName(contact)}
                            </Link>
                            {contact.title ? (
                              <span className="text-xs text-muted-foreground">
                                {contact.title}
                              </span>
                            ) : null}
                            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                              {contact.email ? (
                                <span className="inline-flex items-center gap-1">
                                  <Mail className="size-3" />
                                  {contact.email}
                                </span>
                              ) : null}
                              {contact.phone ? (
                                <span className="inline-flex items-center gap-1">
                                  <Phone className="size-3" />
                                  {contact.phone}
                                </span>
                              ) : null}
                              <span>
                                Last contacted{" "}
                                {lastTouch
                                  ? formatEntityDate(lastTouch)
                                  : "—"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              )}
            </section>

            <TouchesPanel
              touches={selectedTouches}
              touchTypes={touchTypes}
              socialPlatforms={socialPlatforms}
              contacts={selectedContacts}
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
