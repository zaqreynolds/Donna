import type { AccountFreshness } from "@/lib/accountFreshness"

/** Left-border accent only. Fresh / LOST (null) stay clean. */
export function accountFreshnessRowClass(
  tone: AccountFreshness | null,
): string {
  switch (tone) {
    case "stale":
      return "border-l-4 border-l-amber-500"
    case "rotten":
      return "border-l-4 border-l-rose-500"
    case "fresh":
    case null:
    default:
      return "border-l-4 border-l-transparent"
  }
}
