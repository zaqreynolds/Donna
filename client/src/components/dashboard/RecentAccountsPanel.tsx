import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { VipStarToggle } from "@/components/VipStarToggle"
import { formatEntityDate } from "@/lib/api"
import type { Account } from "@/lib/types"
import { cn } from "@/lib/utils"

type RecentAccountsPanelProps = {
  accounts: Account[]
  source: "api" | "mock"
  onVipToggle: (accountId: string, next: boolean) => void | Promise<void>
}

function statusTone(status: string): string {
  switch (status) {
    case "NEW":
      return "border-sky-500/30 bg-sky-500/10 text-sky-700"
    case "CONTACTED":
      return "border-amber-500/30 bg-amber-500/10 text-amber-700"
    case "QUALIFIED":
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-700"
    case "NURTURING":
      return "border-violet-500/30 bg-violet-500/10 text-violet-700"
    case "LOST":
      return "border-rose-500/30 bg-rose-500/10 text-rose-700"
    default:
      return ""
  }
}

export function RecentAccountsPanel({
  accounts,
  source,
  onVipToggle,
}: RecentAccountsPanelProps) {
  const recent = [...accounts]
    .sort((a, b) => {
      const aTime = a.createdAt ? Date.parse(a.createdAt) : 0
      const bTime = b.createdAt ? Date.parse(b.createdAt) : 0
      return bTime - aTime
    })
    .slice(0, 10)

  return (
    <aside className="flex h-full min-h-0 w-full max-w-md shrink-0 flex-col border-l border-border bg-card/40">
      <div className="flex shrink-0 flex-col gap-1 border-b border-border px-5 py-4">
        <h2 className="text-sm font-medium">Recent Activity</h2>
        <p className="text-xs text-muted-foreground">
          Top 10 recent accounts
          {source === "mock" ? " · mock data" : ""}
        </p>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        {recent.length === 0 ? (
          <p className="px-5 py-6 text-sm text-muted-foreground">
            No accounts yet.
          </p>
        ) : (
          <ul className="flex flex-col">
            {recent.map((account) => (
              <li
                key={account.id}
                className="flex flex-col gap-2 border-b border-border/70 px-5 py-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 flex-col gap-1">
                    <div className="flex min-w-0 items-center gap-1.5">
                      <VipStarToggle
                        isVip={Boolean(account.isVip)}
                        onToggle={(next) => onVipToggle(account.id, next)}
                        label={`Toggle VIP for ${account.name}`}
                      />
                      <Link
                        to="/accounts"
                        className="truncate text-sm font-medium underline-offset-2 hover:underline"
                      >
                        {account.name}
                      </Link>
                    </div>
                    <span className="truncate text-xs text-muted-foreground">
                      {account.industry?.name ?? "Uncategorized"}
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className={cn("shrink-0", statusTone(account.status))}
                  >
                    {account.status}
                  </Badge>
                </div>
                <span className="text-[11px] text-muted-foreground">
                  {formatEntityDate(account.createdAt)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  )
}
