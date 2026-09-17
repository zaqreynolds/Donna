import { useEffect, useState, type FormEvent } from "react"
import { Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAccountFreshnessSettings } from "@/components/AccountFreshnessSettingsProvider"
import { useToast } from "@/components/ToastProvider"
import { DEFAULT_ACCOUNT_FRESHNESS_SETTINGS } from "@/lib/accountFreshness"

export function SettingsView() {
  const { settings, updateSettings, resetSettings } =
    useAccountFreshnessSettings()
  const { toast } = useToast()
  const [staleAfterDays, setStaleAfterDays] = useState(
    String(settings.staleAfterDays),
  )
  const [rottenAfterDays, setRottenAfterDays] = useState(
    String(settings.rottenAfterDays),
  )
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setStaleAfterDays(String(settings.staleAfterDays))
    setRottenAfterDays(String(settings.rottenAfterDays))
  }, [settings.staleAfterDays, settings.rottenAfterDays])

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const stale = Number(staleAfterDays)
    const rotten = Number(rottenAfterDays)

    if (!Number.isFinite(stale) || !Number.isFinite(rotten)) {
      setError("Enter valid whole numbers for both thresholds.")
      return
    }
    if (stale < 1 || rotten < 1) {
      setError("Thresholds must be at least 1 day.")
      return
    }
    if (rotten <= stale) {
      setError("Rotten threshold must be greater than the stale threshold.")
      return
    }

    setError(null)
    const next = updateSettings({
      staleAfterDays: stale,
      rottenAfterDays: rotten,
    })
    toast({
      title: "Account freshness settings saved",
      description: `Stale at ${next.staleAfterDays} days · Rotten at ${next.rottenAfterDays} days`,
      tone: "success",
    })
  }

  function handleReset() {
    const next = resetSettings()
    setStaleAfterDays(String(next.staleAfterDays))
    setRottenAfterDays(String(next.rottenAfterDays))
    setError(null)
    toast({
      title: "Defaults restored",
      description: `Stale ${DEFAULT_ACCOUNT_FRESHNESS_SETTINGS.staleAfterDays} · Rotten ${DEFAULT_ACCOUNT_FRESHNESS_SETTINGS.rottenAfterDays}`,
      tone: "success",
    })
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Leaf className="size-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold tracking-tight">
          Account Freshness
        </h3>
      </div>
      <p className="text-sm text-muted-foreground">
        Color-code accounts by days since their last logged touch. LOST accounts
        are excluded from freshness and stay in the status filter only.
      </p>

      <form
        onSubmit={handleSave}
        className="flex flex-col gap-4 rounded-xl border border-border bg-card/50 p-4"
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <label className="flex min-w-0 flex-1 flex-col gap-1.5">
            <span className="text-sm font-medium">Stale after (days)</span>
            <Input
              type="number"
              min={1}
              max={364}
              inputMode="numeric"
              value={staleAfterDays}
              onChange={(event) => setStaleAfterDays(event.target.value)}
              aria-describedby="stale-hint"
            />
            <span id="stale-hint" className="text-xs text-muted-foreground">
              Amber when older than this many days. Default{" "}
              {DEFAULT_ACCOUNT_FRESHNESS_SETTINGS.staleAfterDays}.
            </span>
          </label>

          <label className="flex min-w-0 flex-1 flex-col gap-1.5">
            <span className="text-sm font-medium">Rotten after (days)</span>
            <Input
              type="number"
              min={2}
              max={365}
              inputMode="numeric"
              value={rottenAfterDays}
              onChange={(event) => setRottenAfterDays(event.target.value)}
              aria-describedby="rotten-hint"
            />
            <span id="rotten-hint" className="text-xs text-muted-foreground">
              Red when older than this many days (or no touches). Default{" "}
              {DEFAULT_ACCOUNT_FRESHNESS_SETTINGS.rottenAfterDays}.
            </span>
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-muted-foreground/40" /> Fresh
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-amber-500" /> Stale
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-rose-500" /> Rotten
          </span>
        </div>

        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        <div className="flex flex-wrap gap-2">
          <Button type="submit">Save thresholds</Button>
          <Button type="button" variant="outline" onClick={handleReset}>
            Reset to defaults
          </Button>
        </div>
      </form>
    </section>
  )
}
