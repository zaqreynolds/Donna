import { Outlet, useLocation } from "react-router-dom"
import { AppHeader } from "@/components/layout/AppHeader"
import { AppSidebar } from "@/components/layout/AppSidebar"

const pageMeta: Record<string, { title: string; subtitle: string }> = {
  "/": {
    title: "Dashboard",
    subtitle: "Sales pipeline overview",
  },
  "/leads": {
    title: "Leads",
    subtitle: "People in your pipeline",
  },
  "/companies": {
    title: "Companies",
    subtitle: "Accounts and notes",
  },
}

export function AppShell() {
  const { pathname } = useLocation()
  const meta = pageMeta[pathname] ?? {
    title: "Donna",
    subtitle: "CRM workspace",
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      <AppSidebar />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <AppHeader title={meta.title} subtitle={meta.subtitle} />
        <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
