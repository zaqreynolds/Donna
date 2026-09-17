import { Route, Routes } from "react-router-dom"
import { AppShell } from "@/components/layout/AppShell"
import { DashboardView } from "@/components/dashboard/DashboardView"
import { AccountsPage } from "@/pages/AccountsPage"
import { ContactsPage } from "@/pages/ContactsPage"
import { SettingsPage } from "@/pages/SettingsPage"

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<DashboardView />} />
        <Route path="accounts" element={<AccountsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}
