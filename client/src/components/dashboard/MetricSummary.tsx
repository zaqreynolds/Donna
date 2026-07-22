import {
  AlertCircle,
  Inbox,
  Target,
  type LucideIcon,
} from "lucide-react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Metric = {
  label: string
  value: string
  hint: string
  icon: LucideIcon
}

type MetricSummaryProps = {
  newUncontacted: number
  qualifiedPipeline: number
  needsFollowUp: number
}

export function MetricSummary({
  newUncontacted,
  qualifiedPipeline,
  needsFollowUp,
}: MetricSummaryProps) {
  const metrics: Metric[] = [
    {
      label: "New / Uncontacted",
      value: String(newUncontacted),
      hint: "Leads still marked NEW",
      icon: Inbox,
    },
    {
      label: "Qualified Pipeline",
      value: String(qualifiedPipeline),
      hint: "Qualified or VIP leads",
      icon: Target,
    },
    {
      label: "Needs Follow-Up",
      value: String(needsFollowUp),
      hint: "Contacted or quiet 14+ days",
      icon: AlertCircle,
    },
  ]

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
        <p className="text-sm text-muted-foreground">
          Actionable lead counts across your pipeline.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card key={metric.label} className="min-w-[180px] flex-1 bg-card/80">
              <CardHeader className="gap-3">
                <div className="flex items-center justify-between gap-3">
                  <CardDescription>{metric.label}</CardDescription>
                  <Icon className="size-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-3xl tabular-nums tracking-tight">
                  {metric.value}
                </CardTitle>
                <p className="text-xs text-muted-foreground">{metric.hint}</p>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
