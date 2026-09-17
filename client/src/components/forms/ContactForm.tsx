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
  createContact,
  fetchAccounts,
  fetchContactDetail,
  fetchIndustries,
  updateContact,
  type CatalogItem,
} from "@/lib/api"
import type { Account, Contact } from "@/lib/types"
import { cn } from "@/lib/utils"

type ContactFormProps = {
  contactId?: string | null
  /** Prefill account when creating from an account detail panel */
  defaultAccountId?: string | null
  onCancel: () => void
  onSuccess: (contact: Contact) => void
}

type FieldErrors = {
  firstName?: string
  lastName?: string
  account?: string
  industryId?: string
  form?: string
}

type AccountMode =
  | { kind: "existing"; accountId: string; name: string }
  | { kind: "create"; name: string }
  | { kind: "none" }

export function ContactForm({
  contactId,
  defaultAccountId,
  onCancel,
  onSuccess,
}: ContactFormProps) {
  const { toast } = useToast()
  const isEdit = Boolean(contactId)
  const comboboxRef = useRef<HTMLDivElement>(null)
  const accountInputRef = useRef<HTMLInputElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving] = useState(false)
  const [accounts, setAccounts] = useState<Account[]>([])
  const [industries, setIndustries] = useState<CatalogItem[]>([])

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [officePhone, setOfficePhone] = useState("")
  const [title, setTitle] = useState("")
  const [isVip, setIsVip] = useState(false)
  const [accountQuery, setAccountQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [accountMode, setAccountMode] = useState<AccountMode>({ kind: "none" })
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
      setDebouncedQuery(accountQuery.trim())
    }, 250)
    return () => window.clearTimeout(handle)
  }, [accountQuery])

  useEffect(() => {
    if (accountMode.kind !== "none") {
      setMenuOpen(false)
      return
    }
    setMenuOpen(debouncedQuery.length > 0)
  }, [debouncedQuery, accountMode.kind])

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      try {
        const [accountResult, industryRows] = await Promise.all([
          fetchAccounts(),
          fetchIndustries(),
        ])
        if (cancelled) return
        setAccounts(accountResult.accounts)
        setIndustries(industryRows)

        if (contactId) {
          const contact = await fetchContactDetail(contactId)
          if (cancelled) return
          setFirstName(contact.firstName)
          setLastName(contact.lastName)
          setEmail(contact.email ?? "")
          setPhone(contact.phone ?? "")
          const accountPhone =
            accountResult.accounts.find(
              (account) => account.id === contact.account?.id,
            )?.phone ?? null
          setOfficePhone(contact.officePhone ?? accountPhone ?? "")
          setTitle(contact.title ?? "")
          setIsVip(Boolean(contact.isVip))
          if (contact.account?.id) {
            setAccountMode({
              kind: "existing",
              accountId: contact.account.id,
              name: contact.account.name,
            })
            setAccountQuery(contact.account.name)
          }
        } else {
          setFirstName("")
          setLastName("")
          setEmail("")
          setPhone("")
          setOfficePhone("")
          setTitle("")
          setIsVip(false)
          setIndustryId("")

          if (defaultAccountId) {
            const match = accountResult.accounts.find(
              (account) => account.id === defaultAccountId,
            )
            if (match) {
              setAccountMode({
                kind: "existing",
                accountId: match.id,
                name: match.name,
              })
              setAccountQuery(match.name)
              if (match.phone) setOfficePhone(match.phone)
            } else {
              setAccountMode({ kind: "none" })
              setAccountQuery("")
            }
          } else {
            setAccountMode({ kind: "none" })
            setAccountQuery("")
          }
        }
      } catch {
        if (!cancelled) {
          setErrors({ form: "Couldn’t load contact details." })
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [contactId, defaultAccountId])

  const isDebouncing =
    accountQuery.trim().length > 0 &&
    accountQuery.trim() !== debouncedQuery &&
    accountMode.kind === "none"

  const filteredAccounts = useMemo(() => {
    const query = debouncedQuery.toLowerCase()
    if (!query) return []
    return accounts
      .filter((account) => account.name.toLowerCase().includes(query))
      .slice(0, 8)
  }, [accounts, debouncedQuery])

  const exactMatch = useMemo(() => {
    const query = debouncedQuery.toLowerCase()
    if (!query) return null
    return (
      accounts.find((account) => account.name.toLowerCase() === query) ?? null
    )
  }, [accounts, debouncedQuery])

  const showCreateOption = debouncedQuery.length > 0 && !exactMatch

  function selectExistingAccount(account: Account) {
    setAccountMode({
      kind: "existing",
      accountId: account.id,
      name: account.name,
    })
    setAccountQuery(account.name)
    setDebouncedQuery(account.name)
    setIndustryId("")
    setMenuOpen(false)
    if (account.phone) {
      setOfficePhone(account.phone)
    }
  }

  function selectCreateAccount(name: string) {
    const trimmed = name.trim()
    setAccountMode({ kind: "create", name: trimmed })
    setAccountQuery(trimmed)
    setDebouncedQuery(trimmed)
    setMenuOpen(false)
  }

  useLayoutEffect(() => {
    if (!menuOpen) {
      setMenuRect(null)
      return
    }

    function updatePosition() {
      const input = accountInputRef.current
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
  }, [menuOpen, accountQuery, filteredAccounts.length, showCreateOption])

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

    if (accountMode.kind === "none") {
      next.account = "Select or create an account"
    } else if (accountMode.kind === "create" && !industryId) {
      next.industryId = "Industry is required for a new account"
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
        officePhone: officePhone.trim() || null,
        title: title.trim() || null,
        isVip,
        ...(accountMode.kind === "existing"
          ? { accountId: accountMode.accountId }
          : {
              accountName: accountMode.kind === "create" ? accountMode.name : "",
              industryId,
            }),
      }

      const contact =
        isEdit && contactId
          ? await updateContact(contactId, payload)
          : await createContact(payload)

      toast({
        title: isEdit ? "Contact updated" : "Contact created",
        description: `${contact.firstName} ${contact.lastName}`.trim(),
        tone: "success",
      })
      onSuccess(contact)
    } catch {
      setErrors({ form: "Couldn’t save contact. Please try again." })
      toast({
        title: "Save failed",
        description: "Couldn’t save contact.",
        tone: "error",
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <form className="flex min-h-0 flex-1 flex-col" onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>{isEdit ? "Edit contact" : "New contact"}</DialogTitle>
        <DialogDescription>
          {isEdit
            ? "Update contact details and account."
            : "Add a person linked to an account."}
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
                label="Toggle contact VIP"
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
                  <span className="text-xs text-destructive">
                    {errors.firstName}
                  </span>
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
                  <span className="text-xs text-destructive">
                    {errors.lastName}
                  </span>
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

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">Email</span>
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@example.com"
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row">
              <label className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="text-sm font-medium">Cell</span>
                <Input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="(555) 555-0123"
                  inputMode="tel"
                />
              </label>
              <label className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="text-sm font-medium">Office</span>
                <Input
                  value={officePhone}
                  onChange={(event) => setOfficePhone(event.target.value)}
                  placeholder="(555) 555-0199"
                  inputMode="tel"
                />
              </label>
            </div>

            <div ref={comboboxRef} className="relative flex flex-col gap-1.5">
              <span className="text-sm font-medium">
                Account <span className="text-destructive">*</span>
              </span>
              <Input
                ref={accountInputRef}
                value={accountQuery}
                onChange={(event) => {
                  const value = event.target.value
                  setAccountQuery(value)
                  setAccountMode({ kind: "none" })
                  setIndustryId("")
                }}
                placeholder="Type to search accounts…"
                aria-invalid={Boolean(errors.account)}
                aria-expanded={menuOpen}
                aria-controls="account-combobox-list"
                role="combobox"
                autoComplete="off"
              />
              {isDebouncing ? (
                <p className="text-xs text-muted-foreground">Searching…</p>
              ) : null}
              {accountMode.kind === "existing" ? (
                <p className="text-xs text-muted-foreground">
                  Linked to existing account
                </p>
              ) : null}
              {accountMode.kind === "create" ? (
                <p className="text-xs text-amber-700">
                  Will create “{accountMode.name}” as a new account
                </p>
              ) : null}
              {errors.account ? (
                <span className="text-xs text-destructive">{errors.account}</span>
              ) : null}

              {menuOpen && menuRect
                ? createPortal(
                    <div
                      ref={menuRef}
                      id="account-combobox-list"
                      data-account-combobox=""
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
                            selectCreateAccount(debouncedQuery)
                          }}
                        >
                          <span className="font-medium text-sky-700">
                            + Create new account “{debouncedQuery}”
                          </span>
                        </button>
                      ) : null}
                      {filteredAccounts.length === 0 && !showCreateOption ? (
                        <p className="px-3 py-2 text-sm text-muted-foreground">
                          No accounts found
                        </p>
                      ) : (
                        filteredAccounts.map((account) => (
                          <button
                            key={account.id}
                            type="button"
                            role="option"
                            className={cn(
                              "flex w-full flex-col px-3 py-2 text-left text-sm hover:bg-muted",
                              accountMode.kind === "existing" &&
                                accountMode.accountId === account.id &&
                                "bg-muted",
                            )}
                            onPointerDown={(event) => {
                              event.preventDefault()
                              event.stopPropagation()
                              selectExistingAccount(account)
                            }}
                          >
                            <span className="font-medium">{account.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {account.industry?.name ?? "Uncategorized"}
                            </span>
                          </button>
                        ))
                      )}
                    </div>,
                    accountInputRef.current?.closest(
                      '[data-slot="dialog-content"]',
                    ) ?? document.body,
                  )
                : null}
            </div>

            {accountMode.kind === "create" ? (
              <label className="flex flex-col gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3">
                <span className="text-sm font-medium">
                  Industry for new account{" "}
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
            "Create contact"
          )}
        </Button>
      </DialogFooter>
    </form>
  )
}
