import { useState, type MouseEvent } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

type VipStarToggleProps = {
  isVip: boolean
  onToggle: (next: boolean) => void | Promise<void>
  label?: string
  className?: string
  size?: "sm" | "md"
}

export function VipStarToggle({
  isVip,
  onToggle,
  label = "Toggle VIP",
  className,
  size = "sm",
}: VipStarToggleProps) {
  const [pending, setPending] = useState(false)

  async function handleClick(event: MouseEvent) {
    event.preventDefault()
    event.stopPropagation()
    if (pending) return

    const next = !isVip
    setPending(true)
    try {
      await onToggle(next)
    } finally {
      setPending(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={pending}
      aria-label={label}
      aria-pressed={isVip}
      title={isVip ? "Remove VIP" : "Mark as VIP"}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-md transition-colors",
        "hover:bg-amber-500/10 focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:outline-none",
        "disabled:opacity-60",
        size === "sm" ? "size-6" : "size-7",
        className,
      )}
    >
      <Star
        className={cn(
          size === "sm" ? "size-3.5" : "size-4",
          isVip
            ? "fill-amber-400 text-amber-500"
            : "fill-transparent text-muted-foreground/50 hover:text-amber-500",
        )}
      />
    </button>
  )
}
