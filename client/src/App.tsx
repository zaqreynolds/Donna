import { Route, Routes } from "react-router-dom"
import { AppShell } from "@/components/layout/AppShell"
import { DashboardView } from "@/components/dashboard/DashboardView"
import { CompaniesPage } from "@/pages/CompaniesPage"
import { LeadsPage } from "@/pages/LeadsPage"

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<DashboardView />} />
        <Route path="leads" element={<LeadsPage />} />
        <Route path="companies" element={<CompaniesPage />} />
      </Route>
    </Routes>
  )
}
