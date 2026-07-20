import { useState, type FormEvent } from "react"
import { StickyNote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatNoteDateTime } from "@/lib/api"
import type { EntityNote } from "@/lib/types"
import { cn } from "@/lib/utils"

type NotesPanelProps = {
  title?: string
  notes: EntityNote[]
  loading?: boolean
  disabled?: boolean
  onAdd: (text: string) => Promise<void>
  className?: string
}

export function NotesPanel({
  title = "Notes",
  notes,
  loading = false,
  disabled = false,
  onAdd,
  className,
}: NotesPanelProps) {
  const [draft, setDraft] = useState("")
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = draft.trim()
    if (!text || saving || disabled) return

    setSaving(true)
    setError(null)
    try {
      await onAdd(text)
      setDraft("")
    } catch {
      setError("Couldn’t save note. Try again.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <section
      className={cn("flex min-h-0 flex-1 flex-col gap-3", className)}
      aria-label={title}
    >
      <div className="flex items-center gap-2">
        <StickyNote className="size-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
        <span className="text-xs text-muted-foreground">
          {loading ? "…" : `${notes.length}`}
        </span>
      </div>

      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Add a note…"
          rows={3}
          disabled={disabled || saving}
          className="min-h-20 w-full resize-none rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"
          aria-label="New note"
        />
        <div className="flex items-center justify-between gap-2">
          {error ? (
            <p className="text-xs text-destructive">{error}</p>
          ) : (
            <span className="text-xs text-muted-foreground">
              Saved with date & time
            </span>
          )}
          <Button
            type="submit"
            size="sm"
            disabled={disabled || saving || !draft.trim()}
          >
            {saving ? "Saving…" : "Add note"}
          </Button>
        </div>
      </form>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {loading ? (
          <p className="text-sm text-muted-foreground">Loading notes…</p>
        ) : notes.length === 0 ? (
          <p className="text-sm text-muted-foreground">No notes yet.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {notes.map((note) => (
              <li
                key={note.id}
                className="rounded-lg border border-border/70 bg-muted/30 px-3 py-2"
              >
                <time
                  dateTime={note.createdAt}
                  className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase"
                >
                  {formatNoteDateTime(note.createdAt)}
                </time>
                <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed">
                  {note.text}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
