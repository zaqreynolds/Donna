import { useEffect, useState, type FormEvent } from "react"
import { Thermometer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLeadHealthSettings } from "@/components/LeadHealthSettingsProvider"
import { useToast } from "@/components/ToastProvider"
import { DEFAULT_LEAD_HEALTH_SETTINGS } from "@/lib/leadHealth"

export function SettingsView() {
  const { settings, updateSettings, resetSettings } = useLeadHealthSettings()
  const { toast } = useToast()
  const [warningDays, setWarningDays] = useState(String(settings.warningDays))
  const [dangerDays, setDangerDays] = useState(String(settings.dangerDays))
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setWarningDays(String(settings.warningDays))
    setDangerDays(String(settings.dangerDays))
  }, [settings.warningDays, settings.dangerDays])

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const warning = Number(warningDays)
    const danger = Number(dangerDays)

    if (!Number.isFinite(warning) || !Number.isFinite(danger)) {
      setError("Enter valid whole numbers for both thresholds.")
      return
    }
    if (warning < 1 || danger < 1) {
      setError("Thresholds must be at least 1 day.")
      return
    }
    if (danger <= warning) {
      setError("Danger threshold must be greater than the warning threshold.")
      return
    }

    setError(null)
    const next = updateSettings({
      warningDays: warning,
      dangerDays: danger,
    })
    toast({
      title: "Lead heat settings saved",
      description: `Warning at ${next.warningDays} days · Danger at ${next.dangerDays} days`,
      tone: "success",
    })
  }

  function handleReset() {
    const next = resetSettings()
    setWarningDays(String(next.warningDays))
    setDangerDays(String(next.dangerDays))
    setError(null)
    toast({
      title: "Defaults restored",
      description: `Warning ${DEFAULT_LEAD_HEALTH_SETTINGS.warningDays} · Danger ${DEFAULT_LEAD_HEALTH_SETTINGS.dangerDays}`,
      tone: "success",
    })
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Thermometer className="size-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold tracking-tight">
          Lead Decay / Heat
        </h3>
      </div>
      <p className="text-sm text-muted-foreground">
        Color-code active leads by days since their last logged touch. LOST
        leads are excluded from heat and stay in the status filter only.
      </p>

      <form
        onSubmit={handleSave}
        className="flex flex-col gap-4 rounded-xl border border-border bg-card/50 p-4"
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <label className="flex min-w-0 flex-1 flex-col gap-1.5">
            <span className="text-sm font-medium">Warning threshold (days)</span>
            <Input
              type="number"
              min={1}
              max={364}
              inputMode="numeric"
              value={warningDays}
              onChange={(event) => setWarningDays(event.target.value)}
              aria-describedby="warning-hint"
            />
            <span id="warning-hint" className="text-xs text-muted-foreground">
              Amber when older than this many days. Default{" "}
              {DEFAULT_LEAD_HEALTH_SETTINGS.warningDays}.
            </span>
          </label>

          <label className="flex min-w-0 flex-1 flex-col gap-1.5">
            <span className="text-sm font-medium">Danger threshold (days)</span>
            <Input
              type="number"
              min={2}
              max={365}
              inputMode="numeric"
              value={dangerDays}
              onChange={(event) => setDangerDays(event.target.value)}
              aria-describedby="danger-hint"
            />
            <span id="danger-hint" className="text-xs text-muted-foreground">
              Red when older than this many days (or no touches). Default{" "}
              {DEFAULT_LEAD_HEALTH_SETTINGS.dangerDays}.
            </span>
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-muted-foreground/40" /> Active
            (clean)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-amber-500" /> Warning
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-rose-500" /> Danger
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
