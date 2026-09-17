import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import {
  DEFAULT_ACCOUNT_FRESHNESS_SETTINGS,
  loadAccountFreshnessSettings,
  normalizeAccountFreshnessSettings,
  saveAccountFreshnessSettings,
  type AccountFreshnessSettings,
} from "@/lib/accountFreshness"

type AccountFreshnessSettingsContextValue = {
  settings: AccountFreshnessSettings
  updateSettings: (
    next: Partial<AccountFreshnessSettings>,
  ) => AccountFreshnessSettings
  resetSettings: () => AccountFreshnessSettings
}

const AccountFreshnessSettingsContext =
  createContext<AccountFreshnessSettingsContextValue | null>(null)

export function AccountFreshnessSettingsProvider({
  children,
}: {
  children: ReactNode
}) {
  const [settings, setSettings] = useState<AccountFreshnessSettings>(() =>
    loadAccountFreshnessSettings(),
  )

  const updateSettings = useCallback(
    (next: Partial<AccountFreshnessSettings>) => {
      const normalized = normalizeAccountFreshnessSettings({
        ...loadAccountFreshnessSettings(),
        ...next,
      })
      saveAccountFreshnessSettings(normalized)
      setSettings(normalized)
      return normalized
    },
    [],
  )

  const resetSettings = useCallback(() => {
    const defaults = { ...DEFAULT_ACCOUNT_FRESHNESS_SETTINGS }
    saveAccountFreshnessSettings(defaults)
    setSettings(defaults)
    return defaults
  }, [])

  const value = useMemo(
    () => ({ settings, updateSettings, resetSettings }),
    [settings, updateSettings, resetSettings],
  )

  return (
    <AccountFreshnessSettingsContext.Provider value={value}>
      {children}
    </AccountFreshnessSettingsContext.Provider>
  )
}

export function useAccountFreshnessSettings() {
  const context = useContext(AccountFreshnessSettingsContext)
  if (!context) {
    throw new Error(
      "useAccountFreshnessSettings must be used within AccountFreshnessSettingsProvider",
    )
  }
  return context
}
