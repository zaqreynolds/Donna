import { useEffect, useState, type FormEvent } from "react"
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
import {
  createAccount,
  fetchAccountDetail,
  fetchIndustries,
  fetchSocialPlatforms,
  updateAccount,
  type CatalogItem,
} from "@/lib/api"
import { useToast } from "@/components/ToastProvider"
import type { Account, AccountStatus } from "@/lib/types"

const STATUS_OPTIONS = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "NURTURING",
  "LOST",
] as const satisfies readonly AccountStatus[]

type AccountFormProps = {
  accountId?: string | null
  onCancel: () => void
  onSuccess: (account: Account) => void
}

type FieldErrors = {
  name?: string
  industryId?: string
  form?: string
}

export function AccountForm({
  accountId,
  onCancel,
  onSuccess,
}: AccountFormProps) {
  const { toast } = useToast()
  const isEdit = Boolean(accountId)

  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving] = useState(false)
  const [industries, setIndustries] = useState<CatalogItem[]>([])
  const [platforms, setPlatforms] = useState<string[]>([])
  const [name, setName] = useState("")
  const [industryId, setIndustryId] = useState("")
  const [status, setStatus] = useState<string>("NEW")
  const [phone, setPhone] = useState("")
  const [website, setWebsite] = useState("")
  const [address, setAddress] = useState("")
  const [isVip, setIsVip] = useState(false)
  const [socialHandles, setSocialHandles] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<FieldErrors>({})

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      try {
        const [industryRows, platformNames] = await Promise.all([
          fetchIndustries(),
          fetchSocialPlatforms(),
        ])
        if (cancelled) return
        setIndustries(industryRows)
        setPlatforms(platformNames)

        if (accountId) {
          const account = await fetchAccountDetail(accountId)
          if (cancelled) return
          setName(account.name)
          setIndustryId(account.industry?.id ?? "")
          setStatus(account.status || "NEW")
          setPhone(account.phone ?? "")
          setWebsite(account.website ?? "")
          setAddress(account.address ?? "")
          setIsVip(Boolean(account.isVip))
          const handles: Record<string, string> = {}
          for (const link of account.socials ?? []) {
            handles[link.platform] = link.handle
          }
          setSocialHandles(handles)
        } else {
          setName("")
          setIndustryId("")
          setStatus("NEW")
          setPhone("")
          setWebsite("")
          setAddress("")
          setIsVip(false)
          setSocialHandles({})
        }
      } catch {
        if (!cancelled) {
          setErrors({ form: "Couldn’t load account details." })
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [accountId])

  function validate(): boolean {
    const next: FieldErrors = {}
    if (!name.trim()) next.name = "Account name is required"
    if (!industryId) next.industryId = "Industry is required"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!validate() || saving) return

    setSaving(true)
    setErrors({})
    try {
      const socials = platforms
        .map((platform) => ({
          platform,
          handle: (socialHandles[platform] ?? "").trim(),
        }))
        .filter((row) => row.handle.length > 0)

      const payload = {
        name: name.trim(),
        industryId,
        status: status || "NEW",
        phone: phone.trim() || null,
        website: website.trim() || null,
        address: address.trim() || null,
        isVip,
        socials,
      }
      const account =
        isEdit && accountId
          ? await updateAccount(accountId, payload)
          : await createAccount(payload)

      toast({
        title: isEdit ? "Account updated" : "Account created",
        description: account.name,
        tone: "success",
      })
      onSuccess(account)
    } catch {
      setErrors({ form: "Couldn’t save account. Please try again." })
      toast({
        title: "Save failed",
        description: "Couldn’t save account.",
        tone: "error",
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <form className="flex min-h-0 flex-1 flex-col" onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>{isEdit ? "Edit account" : "New account"}</DialogTitle>
        <DialogDescription>
          {isEdit
            ? "Update account details, status, and VIP."
            : "Add an account to your CRM."}
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
                label="Toggle account VIP"
                size="md"
              />
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">
                Name <span className="text-destructive">*</span>
              </span>
              <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Account name"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name ? (
                <span className="text-xs text-destructive">{errors.name}</span>
              ) : null}
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">
                Industry <span className="text-destructive">*</span>
              </span>
              <select
                value={industryId}
                onChange={(event) => setIndustryId(event.target.value)}
                aria-invalid={Boolean(errors.industryId)}
                className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
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
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">Phone</span>
              <Input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="(555) 555-0123"
                inputMode="tel"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">Website</span>
              <Input
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
                placeholder="https://example.com"
                inputMode="url"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">Address</span>
              <Input
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Street, city, state"
              />
            </label>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Social media</span>
              <p className="text-xs text-muted-foreground">
                Handles or profile URLs for this account.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {platforms.map((platform) => (
                  <label key={platform} className="flex flex-col gap-1">
                    <span className="text-xs font-medium text-muted-foreground">
                      {platform}
                    </span>
                    <Input
                      value={socialHandles[platform] ?? ""}
                      onChange={(event) =>
                        setSocialHandles((current) => ({
                          ...current,
                          [platform]: event.target.value,
                        }))
                      }
                      placeholder={`@${platform.toLowerCase()}`}
                    />
                  </label>
                ))}
              </div>
            </div>

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
            "Create account"
          )}
        </Button>
      </DialogFooter>
    </form>
  )
}
