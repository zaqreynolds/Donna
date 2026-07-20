import { NavLink } from "react-router-dom"
import { Building2, LayoutDashboard, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/leads", label: "Leads", icon: Users, end: false },
  { to: "/companies", label: "Companies", icon: Building2, end: false },
] as const

export function AppSidebar() {
  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      <div className="flex h-14 shrink-0 items-center px-5">
        <span className="text-lg font-semibold tracking-tight text-sidebar-foreground">
          Donna
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 pb-4">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground",
                )
              }
            >
              <Icon className="size-4 shrink-0" />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
