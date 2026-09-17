import { useDeferredValue, useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowUpDown,
  Building2,
  Factory,
  Mail,
  Pencil,
  Phone,
  Search,
  Star,
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
  TouchesPanel,
  type CreateTouchInput,
  type UpdateTouchInput,
} from "@/components/TouchesPanel"
import { VipStarToggle } from "@/components/VipStarToggle"
import { useCrmForms } from "@/components/forms/CrmFormsProvider"
import {
  createContactNote,
  createContactTouch,
  fetchContactDetail,
  fetchContacts,
  fetchSocialPlatforms,
  fetchTouchTypes,
  formatContactName,
  formatEntityDate,
  uniqueTouchTypes,
  updateAccountTouch,
  updateContactVip,
} from "@/lib/api"
import type { Contact, EntityNote, Touch } from "@/lib/types"
import { cn } from "@/lib/utils"

type SortKey =
  | "name-asc"
  | "name-desc"
  | "account-asc"
  | "account-desc"
  | "date-newest"
  | "date-oldest"

const ALL_INDUSTRIES = "all"

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "name-asc", label: "Name (A–Z)" },
  { value: "name-desc", label: "Name (Z–A)" },
  { value: "account-asc", label: "Account (A–Z)" },
  { value: "account-desc", label: "Account (Z–A)" },
  { value: "date-newest", label: "Date added (newest)" },
  { value: "date-oldest", label: "Date added (oldest)" },
]

function compareText(a: string, b: string): number {
  return a.localeCompare(b, undefined, { sensitivity: "base" })
}

function isInteractiveRowTarget(target: EventTarget | null): boolean {
  return (
    target instanceof Element &&
    target.closest(
      "button, a, select, input, textarea, label, [data-no-row-click]",
    ) != null
  )
}

function sortContacts(contacts: Contact[], sort: SortKey): Contact[] {
  const sorted = [...contacts]

  sorted.sort((a, b) => {
    switch (sort) {
      case "name-asc":
        return compareText(formatContactName(a), formatContactName(b))
      case "name-desc":
        return compareText(formatContactName(b), formatContactName(a))
      case "account-asc":
        return (
          compareText(a.account?.name ?? "", b.account?.name ?? "") ||
          compareText(formatContactName(a), formatContactName(b))
        )
      case "account-desc":
        return (
          compareText(b.account?.name ?? "", a.account?.name ?? "") ||
          compareText(formatContactName(a), formatContactName(b))
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

function matchesSearch(contact: Contact, query: string): boolean {
  if (!query) return true
  const haystack = [
    contact.firstName,
    contact.lastName,
    contact.title,
    contact.email,
    contact.phone,
    contact.officePhone,
    contact.account?.name,
    contact.account?.industry?.name,
    ...(contact.touches?.map((touch) => touch.type) ?? []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()

  return haystack.includes(query)
}

export function ContactsPage() {
  const { openEditContact, subscribe } = useCrmForms()
  const [contacts, setContacts] = useState<Contact[]>([])
  const [source, setSource] = useState<"api" | "mock">("mock")
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [industryFilter, setIndustryFilter] = useState(ALL_INDUSTRIES)
  const [vipOnly, setVipOnly] = useState(false)
  const [sort, setSort] = useState<SortKey>("name-asc")
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedNotes, setSelectedNotes] = useState<EntityNote[]>([])
  const [selectedTouches, setSelectedTouches] = useState<Touch[]>([])
  const [touchTypes, setTouchTypes] = useState<string[]>([])
  const [socialPlatforms, setSocialPlatforms] = useState<string[]>([])
  const [detailLoading, setDetailLoading] = useState(false)
  const deferredSearch = useDeferredValue(search)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      const [result, types, platforms] = await Promise.all([
        fetchContacts(),
        fetchTouchTypes(),
        fetchSocialPlatforms(),
      ])
      if (!cancelled) {
        setContacts(result.contacts)
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
      return
    }

    const contactId = selectedId
    let cancelled = false

    async function loadDetail() {
      setDetailLoading(true)
      try {
        if (source === "api") {
          const detail = await fetchContactDetail(contactId)
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
    for (const contact of contacts) {
      if (contact.account?.industry?.id && contact.account.industry.name) {
        byId.set(contact.account.industry.id, contact.account.industry.name)
      }
    }
    return [...byId.entries()]
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
      )
  }, [contacts])

  const visibleContacts = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase()
    const filtered = contacts.filter((contact) => {
      const matchesIndustry =
        industryFilter === ALL_INDUSTRIES ||
        contact.account?.industry?.id === industryFilter
      const matchesVip = !vipOnly || Boolean(contact.isVip)
      return matchesIndustry && matchesVip && matchesSearch(contact, query)
    })
    return sortContacts(filtered, sort)
  }, [contacts, deferredSearch, industryFilter, vipOnly, sort])

  const selectedContact = useMemo(
    () => contacts.find((contact) => contact.id === selectedId) ?? null,
    [contacts, selectedId],
  )

  async function handleVipToggle(contactId: string, next: boolean) {
    const previous = contacts
    setContacts((current) =>
      current.map((contact) =>
        contact.id === contactId ? { ...contact, isVip: next } : contact,
      ),
    )

    try {
      if (source === "api") {
        await updateContactVip(contactId, next)
      }
    } catch {
      setContacts(previous)
    }
  }

  async function handleAddNote(text: string) {
    if (!selectedId) return

    if (source === "api") {
      const note = await createContactNote(selectedId, text)
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
      const touch = await createContactTouch(selectedId, {
        ...input,
        contactId: selectedId,
      })
      setSelectedTouches((current) => [touch, ...current])
      setContacts((current) =>
        current.map((contact) =>
          contact.id === selectedId
            ? { ...contact, touches: [touch, ...(contact.touches ?? [])] }
            : contact,
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
      contactId: selectedId,
      outcome: input.outcome ?? null,
    }
    setSelectedTouches((current) => [touch, ...current])
    setContacts((current) =>
      current.map((contact) =>
        contact.id === selectedId
          ? { ...contact, touches: [touch, ...(contact.touches ?? [])] }
          : contact,
      ),
    )
  }

  async function handleUpdateTouch(touchId: string, input: UpdateTouchInput) {
    if (!selectedId || !selectedContact) return

    const accountId = selectedContact.accountId || selectedContact.account?.id
    if (!accountId && source === "api") return

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
            outcome:
              input.outcome !== undefined ? input.outcome : touch.outcome,
          }
        : touch

    if (source === "api" && accountId) {
      const touch = await updateAccountTouch(accountId, touchId, {
        ...input,
        contactId: selectedId,
      })
      setSelectedTouches((current) =>
        current
          .map((row) => (row.id === touchId ? touch : row))
          .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
      )
      setContacts((current) =>
        current.map((contact) =>
          contact.id === selectedId
            ? {
                ...contact,
                touches: (contact.touches ?? [])
                  .map((row) => (row.id === touchId ? touch : row))
                  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
              }
            : contact,
        ),
      )
      return
    }

    setSelectedTouches((current) =>
      current
        .map(applyUpdate)
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
    )
    setContacts((current) =>
      current.map((contact) =>
        contact.id === selectedId
          ? {
              ...contact,
              touches: (contact.touches ?? [])
                .map(applyUpdate)
                .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
            }
          : contact,
      ),
    )
  }

  return (
    <div className="flex min-h-0 flex-1 overflow-hidden">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <div className="flex shrink-0 flex-col gap-4 border-b border-border px-6 py-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold tracking-tight">Contacts</h2>
              <p className="text-sm text-muted-foreground">
                {loading
                  ? "Loading people…"
                  : `${visibleContacts.length} of ${contacts.length} people`}
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
                placeholder="Search name, account, industry, email…"
                className="pl-8"
                aria-label="Search contacts"
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
                <SelectTrigger className="w-full" aria-label="Sort contacts">
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
              Loading contacts…
            </p>
          ) : visibleContacts.length === 0 ? (
            <div className="flex flex-col gap-2 px-6 py-8">
              <p className="text-sm font-medium">No contacts found</p>
              <p className="text-sm text-muted-foreground">
                {contacts.length === 0
                  ? "Add a contact to get started."
                  : "Try a different search, industry, VIP, or sort."}
              </p>
            </div>
          ) : (
            <ul className="flex flex-col">
              {visibleContacts.map((contact) => {
                const selected = contact.id === selectedId
                return (
                  <li key={contact.id}>
                    <div
                      onClick={(event) => {
                        if (isInteractiveRowTarget(event.target)) return
                        setSelectedId((current) =>
                          current === contact.id ? null : contact.id,
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
                            isVip={Boolean(contact.isVip)}
                            onToggle={(next) =>
                              handleVipToggle(contact.id, next)
                            }
                            label={`Toggle VIP for ${formatContactName(contact)}`}
                          />
                          <User className="size-4 shrink-0 text-muted-foreground" />
                          <span className="truncate text-sm font-medium">
                            {formatContactName(contact)}
                          </span>
                          {contact.title ? (
                            <span className="truncate text-xs text-muted-foreground">
                              {contact.title}
                            </span>
                          ) : null}
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          {contact.account?.name ? (
                            <Link
                              to="/accounts"
                              onClick={(event) => event.stopPropagation()}
                              className="inline-flex items-center gap-1 underline-offset-2 hover:text-foreground hover:underline"
                            >
                              <Building2 className="size-3" />
                              {contact.account.name}
                            </Link>
                          ) : null}
                          {contact.email ? (
                            <span className="inline-flex items-center gap-1">
                              <Mail className="size-3" />
                              {contact.email}
                            </span>
                          ) : null}
                          {contact.phone || contact.officePhone ? (
                            <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
                              {contact.phone ? (
                                <span className="inline-flex items-center gap-1">
                                  <Phone className="size-3" />
                                  <span className="text-[10px] uppercase tracking-wide">
                                    Cell
                                  </span>
                                  {contact.phone}
                                </span>
                              ) : null}
                              {contact.officePhone ? (
                                <span className="inline-flex items-center gap-1">
                                  <Phone className="size-3" />
                                  <span className="text-[10px] uppercase tracking-wide">
                                    Office
                                  </span>
                                  {contact.officePhone}
                                </span>
                              ) : null}
                            </span>
                          ) : null}
                          <span>
                            Added {formatEntityDate(contact.createdAt)}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-xs text-muted-foreground">
                            {(contact.touches?.length ?? 0) === 1
                              ? "1 touch"
                              : `${contact.touches?.length ?? 0} touches`}
                          </span>
                          {uniqueTouchTypes(contact.touches).map(
                            (touchType) => (
                              <Badge
                                key={`${contact.id}-${touchType}`}
                                variant="outline"
                                className="text-[10px] font-normal"
                              >
                                {touchType}
                              </Badge>
                            ),
                          )}
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        aria-label={`Edit ${formatContactName(contact)}`}
                        onClick={() => openEditContact(contact.id)}
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

      {selectedContact ? (
        <aside className="flex w-full max-w-md shrink-0 flex-col overflow-hidden border-l border-border bg-background">
          <div className="flex items-start justify-between gap-3 border-b border-border px-4 py-4">
            <div className="min-w-0 flex flex-1 flex-col gap-2">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex flex-col gap-1">
                  <p className="truncate text-sm font-semibold">
                    {formatContactName(selectedContact)}
                  </p>
                  <Link
                    to="/accounts"
                    className="truncate text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                  >
                    {selectedContact.account?.name ?? "No account"}
                  </Link>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => openEditContact(selectedContact.id)}
                    aria-label={`Edit ${formatContactName(selectedContact)}`}
                  >
                    <Pencil className="size-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setSelectedId(null)}
                    aria-label="Close contact detail"
                  >
                    <X className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-4">
            <TouchesPanel
              touches={selectedTouches}
              touchTypes={touchTypes}
              socialPlatforms={socialPlatforms}
              contactId={selectedContact.id}
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
