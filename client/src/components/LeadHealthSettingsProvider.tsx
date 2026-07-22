import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import {
  DEFAULT_LEAD_HEALTH_SETTINGS,
  loadLeadHealthSettings,
  normalizeLeadHealthSettings,
  saveLeadHealthSettings,
  type LeadHealthSettings,
} from "@/lib/leadHealth"

type LeadHealthSettingsContextValue = {
  settings: LeadHealthSettings
  updateSettings: (next: Partial<LeadHealthSettings>) => LeadHealthSettings
  resetSettings: () => LeadHealthSettings
}

const LeadHealthSettingsContext =
  createContext<LeadHealthSettingsContextValue | null>(null)

export function LeadHealthSettingsProvider({
  children,
}: {
  children: ReactNode
}) {
  const [settings, setSettings] = useState<LeadHealthSettings>(() =>
    loadLeadHealthSettings(),
  )

  const updateSettings = useCallback((next: Partial<LeadHealthSettings>) => {
    const normalized = normalizeLeadHealthSettings({
      ...loadLeadHealthSettings(),
      ...next,
    })
    saveLeadHealthSettings(normalized)
    setSettings(normalized)
    return normalized
  }, [])

  const resetSettings = useCallback(() => {
    const defaults = { ...DEFAULT_LEAD_HEALTH_SETTINGS }
    saveLeadHealthSettings(defaults)
    setSettings(defaults)
    return defaults
  }, [])

  const value = useMemo(
    () => ({ settings, updateSettings, resetSettings }),
    [settings, updateSettings, resetSettings],
  )

  return (
    <LeadHealthSettingsContext.Provider value={value}>
      {children}
    </LeadHealthSettingsContext.Provider>
  )
}

export function useLeadHealthSettings() {
  const context = useContext(LeadHealthSettingsContext)
  if (!context) {
    throw new Error(
      "useLeadHealthSettings must be used within LeadHealthSettingsProvider",
    )
  }
  return context
}
