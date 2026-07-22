import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react"
import { createPortal } from "react-dom"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { VipStarToggle } from "@/components/VipStarToggle"
import { useToast } from "@/components/ToastProvider"
import {
  createLead,
  fetchCompanies,
  fetchIndustries,
  fetchLeadDetail,
  updateLead,
  type CatalogItem,
} from "@/lib/api"
import type { Company, Lead } from "@/lib/types"
import { cn } from "@/lib/utils"

const STATUS_OPTIONS = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "NURTURING",
  "LOST",
] as const

type LeadFormProps = {
  leadId?: string | null
  onCancel: () => void
  onSuccess: (lead: Lead) => void
}

type FieldErrors = {
  firstName?: string
  lastName?: string
  company?: string
  industryId?: string
  form?: string
}

type CompanyMode =
  | { kind: "existing"; companyId: string; name: string }
  | { kind: "create"; name: string }
  | { kind: "none" }

export function LeadForm({ leadId, onCancel, onSuccess }: LeadFormProps) {
  const { toast } = useToast()
  const isEdit = Boolean(leadId)
  const comboboxRef = useRef<HTMLDivElement>(null)
  const companyInputRef = useRef<HTMLInputElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving] = useState(false)
  const [companies, setCompanies] = useState<Company[]>([])
  const [industries, setIndustries] = useState<CatalogItem[]>([])

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState<string>("NEW")
  const [isVip, setIsVip] = useState(false)
  const [companyQuery, setCompanyQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [companyMode, setCompanyMode] = useState<CompanyMode>({ kind: "none" })
  const [industryId, setIndustryId] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuRect, setMenuRect] = useState<{
    top: number
    left: number
    width: number
  } | null>(null)
  const [errors, setErrors] = useState<FieldErrors>({})

  useEffect(() => {
    const handle = window.setTimeout(() => {
      setDebouncedQuery(companyQuery.trim())
    }, 250)
    return () => window.clearTimeout(handle)
  }, [companyQuery])

  useEffect(() => {
    if (companyMode.kind !== "none") {
      setMenuOpen(false)
      return
    }
    setMenuOpen(debouncedQuery.length > 0)
  }, [debouncedQuery, companyMode.kind])

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      try {
        const [companyResult, industryRows] = await Promise.all([
          fetchCompanies(),
          fetchIndustries(),
        ])
        if (cancelled) return
        setCompanies(companyResult.companies)
        setIndustries(industryRows)

        if (leadId) {
          const lead = await fetchLeadDetail(leadId)
          if (cancelled) return
          setFirstName(lead.firstName)
          setLastName(lead.lastName)
          setEmail(lead.email ?? "")
          setPhone(lead.phone ?? "")
          setTitle(lead.title ?? "")
          setStatus(lead.status || "NEW")
          setIsVip(Boolean(lead.isVip))
          if (lead.company?.id) {
            setCompanyMode({
              kind: "existing",
              companyId: lead.company.id,
              name: lead.company.name,
            })
            setCompanyQuery(lead.company.name)
          }
        } else {
          setFirstName("")
          setLastName("")
          setEmail("")
          setPhone("")
          setTitle("")
          setStatus("NEW")
          setIsVip(false)
          setCompanyMode({ kind: "none" })
          setCompanyQuery("")
          setIndustryId("")
        }
      } catch {
        if (!cancelled) {
          setErrors({ form: "Couldn’t load lead details." })
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [leadId])

  const isDebouncing =
    companyQuery.trim().length > 0 &&
    companyQuery.trim() !== debouncedQuery &&
    companyMode.kind === "none"

  const filteredCompanies = useMemo(() => {
    const query = debouncedQuery.toLowerCase()
    if (!query) return []
    return companies
      .filter((company) => company.name.toLowerCase().includes(query))
      .slice(0, 8)
  }, [companies, debouncedQuery])

  const exactMatch = useMemo(() => {
    const query = debouncedQuery.toLowerCase()
    if (!query) return null
    return companies.find((company) => company.name.toLowerCase() === query) ?? null
  }, [companies, debouncedQuery])

  const showCreateOption = debouncedQuery.length > 0 && !exactMatch

  function selectExistingCompany(company: Company) {
    setCompanyMode({
      kind: "existing",
      companyId: company.id,
      name: company.name,
    })
    setCompanyQuery(company.name)
    setDebouncedQuery(company.name)
    setIndustryId("")
    setMenuOpen(false)
  }

  function selectCreateCompany(name: string) {
    const trimmed = name.trim()
    setCompanyMode({ kind: "create", name: trimmed })
    setCompanyQuery(trimmed)
    setDebouncedQuery(trimmed)
    setMenuOpen(false)
  }

  useLayoutEffect(() => {
    if (!menuOpen) {
      setMenuRect(null)
      return
    }

    function updatePosition() {
      const input = companyInputRef.current
      const container = input?.closest(
        '[data-slot="dialog-content"]',
      ) as HTMLElement | null
      if (!input || !container) return
      const inputRect = input.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      setMenuRect({
        top: inputRect.bottom - containerRect.top + 4,
        left: inputRect.left - containerRect.left,
        width: inputRect.width,
      })
    }

    updatePosition()
    window.addEventListener("resize", updatePosition)
    window.addEventListener("scroll", updatePosition, true)
    return () => {
      window.removeEventListener("resize", updatePosition)
      window.removeEventListener("scroll", updatePosition, true)
    }
  }, [menuOpen, companyQuery, filteredCompanies.length, showCreateOption])

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      const target = event.target as Node
      if (
        comboboxRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return
      }
      setMenuOpen(false)
    }
    document.addEventListener("mousedown", onPointerDown)
    return () => document.removeEventListener("mousedown", onPointerDown)
  }, [])

  function validate(): boolean {
    const next: FieldErrors = {}
    if (!firstName.trim()) next.firstName = "First name is required"
    if (!lastName.trim()) next.lastName = "Last name is required"

    if (companyMode.kind === "none") {
      next.company = "Select or create a company"
    } else if (companyMode.kind === "create" && !industryId) {
      next.industryId = "Industry is required for a new company"
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!validate() || saving) return

    setSaving(true)
    setErrors({})
    try {
      const payload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim() || null,
        phone: phone.trim() || null,
        title: title.trim() || null,
        status: isEdit ? status : status || "NEW",
        isVip,
        ...(companyMode.kind === "existing"
          ? { companyId: companyMode.companyId }
          : {
              companyName: companyMode.kind === "create" ? companyMode.name : "",
              industryId,
            }),
      }

      const lead =
        isEdit && leadId
          ? await updateLead(leadId, payload)
          : await createLead({
              ...payload,
              status: status || "NEW",
            })

      toast({
        title: isEdit ? "Lead updated" : "Lead created",
        description: `${lead.firstName} ${lead.lastName}`.trim(),
        tone: "success",
      })
      onSuccess(lead)
    } catch {
      setErrors({ form: "Couldn’t save lead. Please try again." })
      toast({
        title: "Save failed",
        description: "Couldn’t save lead.",
        tone: "error",
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <form className="flex min-h-0 flex-1 flex-col" onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>{isEdit ? "Edit lead" : "New lead"}</DialogTitle>
        <DialogDescription>
          {isEdit
            ? "Update contact details, status, and company."
            : "Add a person to your pipeline. New leads start as NEW."}
        </DialogDescription>
      </DialogHeader>

      <DialogBody className="flex flex-col gap-4">
        {loading ? (
          <p className="text-sm text-muted-foreground">Loading…</p>
        ) : (
          <>
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium">VIP</span>
              <VipStarToggle
                isVip={isVip}
                onToggle={(next) => setIsVip(next)}
                label="Toggle lead VIP"
                size="md"
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <label className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="text-sm font-medium">
                  First name <span className="text-destructive">*</span>
                </span>
                <Input
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="First name"
                  aria-invalid={Boolean(errors.firstName)}
                />
                {errors.firstName ? (
                  <span className="text-xs text-destructive">{errors.firstName}</span>
                ) : null}
              </label>

              <label className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="text-sm font-medium">
                  Last name <span className="text-destructive">*</span>
                </span>
                <Input
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Last name"
                  aria-invalid={Boolean(errors.lastName)}
                />
                {errors.lastName ? (
                  <span className="text-xs text-destructive">{errors.lastName}</span>
                ) : null}
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">Title / position</span>
              <Input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Job title"
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row">
              <label className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="text-sm font-medium">Email</span>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@example.com"
                />
              </label>
              <label className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="text-sm font-medium">Phone</span>
                <Input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="(555) 555-0123"
                  inputMode="tel"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">Status</span>
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {STATUS_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {!isEdit ? (
                <span className="text-xs text-muted-foreground">
                  Defaults to NEW for new leads.
                </span>
              ) : null}
            </label>

            <div ref={comboboxRef} className="relative flex flex-col gap-1.5">
              <span className="text-sm font-medium">
                Company <span className="text-destructive">*</span>
              </span>
              <Input
                ref={companyInputRef}
                value={companyQuery}
                onChange={(event) => {
                  const value = event.target.value
                  setCompanyQuery(value)
                  setCompanyMode({ kind: "none" })
                  setIndustryId("")
                }}
                placeholder="Type to search companies…"
                aria-invalid={Boolean(errors.company)}
                aria-expanded={menuOpen}
                aria-controls="company-combobox-list"
                role="combobox"
                autoComplete="off"
              />
              {isDebouncing ? (
                <p className="text-xs text-muted-foreground">Searching…</p>
              ) : null}
              {companyMode.kind === "existing" ? (
                <p className="text-xs text-muted-foreground">
                  Linked to existing company
                </p>
              ) : null}
              {companyMode.kind === "create" ? (
                <p className="text-xs text-amber-700">
                  Will create “{companyMode.name}” as a new company
                </p>
              ) : null}
              {errors.company ? (
                <span className="text-xs text-destructive">{errors.company}</span>
              ) : null}

              {menuOpen && menuRect
                ? createPortal(
                    <div
                      ref={menuRef}
                      id="company-combobox-list"
                      data-company-combobox=""
                      role="listbox"
                      className="absolute z-[100] max-h-56 overflow-y-auto rounded-lg border border-border bg-background pointer-events-auto shadow-lg"
                      style={{
                        top: menuRect.top,
                        left: menuRect.left,
                        width: menuRect.width,
                      }}
                      onPointerDown={(event) => {
                        event.stopPropagation()
                      }}
                    >
                      {showCreateOption ? (
                        <button
                          type="button"
                          role="option"
                          className="flex w-full items-start gap-2 border-b border-border px-3 py-2 text-left text-sm hover:bg-muted"
                          onPointerDown={(event) => {
                            event.preventDefault()
                            event.stopPropagation()
                            selectCreateCompany(debouncedQuery)
                          }}
                        >
                          <span className="font-medium text-sky-700">
                            + Create new company “{debouncedQuery}”
                          </span>
                        </button>
                      ) : null}
                      {filteredCompanies.length === 0 && !showCreateOption ? (
                        <p className="px-3 py-2 text-sm text-muted-foreground">
                          No companies found
                        </p>
                      ) : (
                        filteredCompanies.map((company) => (
                          <button
                            key={company.id}
                            type="button"
                            role="option"
                            className={cn(
                              "flex w-full flex-col px-3 py-2 text-left text-sm hover:bg-muted",
                              companyMode.kind === "existing" &&
                                companyMode.companyId === company.id &&
                                "bg-muted",
                            )}
                            onPointerDown={(event) => {
                              event.preventDefault()
                              event.stopPropagation()
                              selectExistingCompany(company)
                            }}
                          >
                            <span className="font-medium">{company.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {company.industry?.name ?? "Uncategorized"}
                            </span>
                          </button>
                        ))
                      )}
                    </div>,
                    companyInputRef.current?.closest(
                      '[data-slot="dialog-content"]',
                    ) ?? document.body,
                  )
                : null}
            </div>

            {companyMode.kind === "create" ? (
              <label className="flex flex-col gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3">
                <span className="text-sm font-medium">
                  Industry for new company{" "}
                  <span className="text-destructive">*</span>
                </span>
                <select
                  value={industryId}
                  onChange={(event) => setIndustryId(event.target.value)}
                  aria-invalid={Boolean(errors.industryId)}
                  className="h-8 w-full rounded-lg border border-input bg-background px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <option value="">Select industry…</option>
                  {industries.map((industry) => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name}
                    </option>
                  ))}
                </select>
                {errors.industryId ? (
                  <span className="text-xs text-destructive">
                    {errors.industryId}
                  </span>
                ) : null}
              </label>
            ) : null}

            {errors.form ? (
              <p className="text-sm text-destructive">{errors.form}</p>
            ) : null}
          </>
        )}
      </DialogBody>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel} disabled={saving}>
          Cancel
        </Button>
        <Button type="submit" disabled={saving || loading}>
          {saving ? (
            <>
              <Loader2 className="size-3.5 animate-spin" />
              Saving…
            </>
          ) : isEdit ? (
            "Save changes"
          ) : (
            "Create lead"
          )}
        </Button>
      </DialogFooter>
    </form>
  )
}
