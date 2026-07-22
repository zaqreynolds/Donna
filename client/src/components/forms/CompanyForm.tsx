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
  createCompany,
  fetchCompanyDetail,
  fetchIndustries,
  updateCompany,
  type CatalogItem,
} from "@/lib/api"
import { useToast } from "@/components/ToastProvider"
import type { Company } from "@/lib/types"

type CompanyFormProps = {
  companyId?: string | null
  onCancel: () => void
  onSuccess: (company: Company) => void
}

type FieldErrors = {
  name?: string
  industryId?: string
  form?: string
}

export function CompanyForm({ companyId, onCancel, onSuccess }: CompanyFormProps) {
  const { toast } = useToast()
  const isEdit = Boolean(companyId)

  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving] = useState(false)
  const [industries, setIndustries] = useState<CatalogItem[]>([])
  const [name, setName] = useState("")
  const [industryId, setIndustryId] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [isVip, setIsVip] = useState(false)
  const [errors, setErrors] = useState<FieldErrors>({})

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      try {
        const industryRows = await fetchIndustries()
        if (cancelled) return
        setIndustries(industryRows)

        if (companyId) {
          const company = await fetchCompanyDetail(companyId)
          if (cancelled) return
          setName(company.name)
          setIndustryId(company.industry?.id ?? "")
          setPhone(company.phone ?? "")
          setAddress(company.address ?? "")
          setIsVip(Boolean(company.isVip))
        } else {
          setName("")
          setIndustryId("")
          setPhone("")
          setAddress("")
          setIsVip(false)
        }
      } catch {
        if (!cancelled) {
          setErrors({ form: "Couldn’t load company details." })
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [companyId])

  function validate(): boolean {
    const next: FieldErrors = {}
    if (!name.trim()) next.name = "Company name is required"
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
      const payload = {
        name: name.trim(),
        industryId,
        phone: phone.trim() || null,
        address: address.trim() || null,
        isVip,
      }
      const company = isEdit && companyId
        ? await updateCompany(companyId, payload)
        : await createCompany(payload)

      toast({
        title: isEdit ? "Company updated" : "Company created",
        description: company.name,
        tone: "success",
      })
      onSuccess(company)
    } catch {
      setErrors({ form: "Couldn’t save company. Please try again." })
      toast({
        title: "Save failed",
        description: "Couldn’t save company.",
        tone: "error",
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <form className="flex min-h-0 flex-1 flex-col" onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>{isEdit ? "Edit company" : "New company"}</DialogTitle>
        <DialogDescription>
          {isEdit
            ? "Update account details and VIP status."
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
                label="Toggle company VIP"
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
                placeholder="Company name"
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
                <span className="text-xs text-destructive">{errors.industryId}</span>
              ) : null}
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">Main phone</span>
              <Input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="(555) 555-0123"
                inputMode="tel"
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
            "Create company"
          )}
        </Button>
      </DialogFooter>
    </form>
  )
}
