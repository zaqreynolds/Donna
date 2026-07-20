import { Route, Routes } from "react-router-dom"
import { AppShell } from "@/components/layout/AppShell"
import { DashboardView } from "@/components/dashboard/DashboardView"
import { CompaniesPage } from "@/pages/CompaniesPage"
import { PlaceholderPage } from "@/pages/PlaceholderPage"

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<DashboardView />} />
        <Route
          path="leads"
          element={
            <PlaceholderPage
              title="Leads"
              description="Lead management workspace coming next."
            />
          }
        />
        <Route path="companies" element={<CompaniesPage />} />
      </Route>
    </Routes>
  )
}
