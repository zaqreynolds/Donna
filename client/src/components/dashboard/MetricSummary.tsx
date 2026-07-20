import {
  Activity,
  DollarSign,
  Users,
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
  totalLeads: number
  activeTouches: number
  pipelineValue: string
}

export function MetricSummary({
  totalLeads,
  activeTouches,
  pipelineValue,
}: MetricSummaryProps) {
  const metrics: Metric[] = [
    {
      label: "Total Leads",
      value: String(totalLeads),
      hint: "People in the CRM",
      icon: Users,
    },
    {
      label: "Active Touches",
      value: String(activeTouches),
      hint: "Recent outreach volume",
      icon: Activity,
    },
    {
      label: "Pipeline Value",
      value: pipelineValue,
      hint: "Qualified opportunity estimate",
      icon: DollarSign,
    },
  ]

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
        <p className="text-sm text-muted-foreground">
          High-level sales health across your pipeline.
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
