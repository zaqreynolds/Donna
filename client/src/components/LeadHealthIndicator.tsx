import type { LeadHealth } from "@/lib/leadHealth"

/** Left-border accent only. Fresh / LOST (null) stay clean. */
export function leadHealthRowClass(tone: LeadHealth | null): string {
  switch (tone) {
    case "warning":
      return "border-l-4 border-l-amber-500"
    case "danger":
      return "border-l-4 border-l-rose-500"
    case "fresh":
    case null:
    default:
      return "border-l-4 border-l-transparent"
  }
}
