import { useEffect, useState, type FormEvent } from "react"
import { Handshake, Pencil, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatLeadDate, formatNoteDateTime } from "@/lib/api"
import type { LeadTouch } from "@/lib/types"
import { cn } from "@/lib/utils"

export type CreateTouchInput = {
  type: string
  notes: string
  date?: string
}

export type UpdateTouchInput = {
  type: string
  notes: string
  date?: string
}

type TouchesPanelProps = {
  touches: LeadTouch[]
  touchTypes: string[]
  loading?: boolean
  disabled?: boolean
  onAdd: (input: CreateTouchInput) => Promise<void>
  onUpdate: (touchId: string, input: UpdateTouchInput) => Promise<void>
  className?: string
}

const fieldClassName =
  "h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"

const textareaClassName =
  "min-h-14 w-full resize-none rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"

function todayInputValue(): string {
  const now = new Date()
  const offset = now.getTimezoneOffset()
  const local = new Date(now.getTime() - offset * 60_000)
  return local.toISOString().slice(0, 10)
}

function toDateInputValue(value: string): string {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return todayInputValue()
  const offset = date.getTimezoneOffset()
  const local = new Date(date.getTime() - offset * 60_000)
  return local.toISOString().slice(0, 10)
}

function toIsoFromDateInput(value: string): string | undefined {
  if (!value) return undefined
  return new Date(`${value}T12:00:00`).toISOString()
}

export function TouchesPanel({
  touches,
  touchTypes,
  loading = false,
  disabled = false,
  onAdd,
  onUpdate,
  className,
}: TouchesPanelProps) {
  const [type, setType] = useState("")
  const [notes, setNotes] = useState("")
  const [date, setDate] = useState(todayInputValue)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [editingId, setEditingId] = useState<string | null>(null)
  const [editType, setEditType] = useState("")
  const [editNotes, setEditNotes] = useState("")
  const [editDate, setEditDate] = useState(todayInputValue)
  const [editSaving, setEditSaving] = useState(false)
  const [editError, setEditError] = useState<string | null>(null)

  useEffect(() => {
    if (type && touchTypes.length > 0 && !touchTypes.includes(type)) {
      setType("")
    }
  }, [touchTypes, type])

  useEffect(() => {
    if (!editingId) return
    if (touches.every((touch) => touch.id !== editingId)) {
      setEditingId(null)
    }
  }, [touches, editingId])

  function startEditing(touch: LeadTouch) {
    setEditingId(touch.id)
    setEditType(touch.type)
    setEditNotes(touch.notes ?? "")
    setEditDate(toDateInputValue(touch.date))
    setEditError(null)
  }

  function cancelEditing() {
    setEditingId(null)
    setEditError(null)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!type || saving || disabled) return

    setSaving(true)
    setError(null)
    try {
      await onAdd({
        type,
        notes: notes.trim(),
        date: toIsoFromDateInput(date),
      })
      setNotes("")
      setType("")
      setDate(todayInputValue())
    } catch {
      setError("Couldn’t save touch. Try again.")
    } finally {
      setSaving(false)
    }
  }

  async function handleUpdate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!editingId || !editType || editSaving || disabled) return

    setEditSaving(true)
    setEditError(null)
    try {
      await onUpdate(editingId, {
        type: editType,
        notes: editNotes.trim(),
        date: toIsoFromDateInput(editDate),
      })
      setEditingId(null)
    } catch {
      setEditError("Couldn’t update touch. Try again.")
    } finally {
      setEditSaving(false)
    }
  }

  return (
    <section
      className={cn("flex min-h-0 flex-col gap-3", className)}
      aria-label="Touches"
    >
      <div className="flex items-center gap-2">
        <Handshake className="size-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold tracking-tight">Touches</h3>
        <span className="text-xs text-muted-foreground">
          {loading ? "…" : `${touches.length}`}
        </span>
      </div>

      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
          disabled={disabled || saving || touchTypes.length === 0}
          required
          className={fieldClassName}
          aria-label="Touch type"
        >
          <option value="" disabled>
            Select touch type…
          </option>
          {touchTypes.map((touchType) => (
            <option key={touchType} value={touchType}>
              {touchType}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          disabled={disabled || saving}
          className={fieldClassName}
          aria-label="Touch date"
        />

        <textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Optional notes…"
          rows={2}
          disabled={disabled || saving}
          className={textareaClassName}
          aria-label="Touch notes"
        />

        <div className="flex items-center justify-between gap-2">
          {error ? (
            <p className="text-xs text-destructive">{error}</p>
          ) : (
            <span className="text-xs text-muted-foreground">
              Logged with date
            </span>
          )}
          <Button
            type="submit"
            size="sm"
            disabled={disabled || saving || !type}
          >
            {saving ? "Saving…" : "Add touch"}
          </Button>
        </div>
      </form>

      <div className="min-h-0 max-h-72 overflow-y-auto">
        {loading ? (
          <p className="text-sm text-muted-foreground">Loading touches…</p>
        ) : touches.length === 0 ? (
          <p className="text-sm text-muted-foreground">No touches yet.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {touches.map((touch) => {
              const isEditing = editingId === touch.id

              if (isEditing) {
                return (
                  <li
                    key={touch.id}
                    className="rounded-lg border border-border bg-background px-3 py-3"
                  >
                    <form className="flex flex-col gap-2" onSubmit={handleUpdate}>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-medium text-muted-foreground">
                          Edit touch
                        </p>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon-xs"
                          onClick={cancelEditing}
                          aria-label="Cancel editing touch"
                        >
                          <X className="size-3.5" />
                        </Button>
                      </div>

                      <select
                        value={editType}
                        onChange={(event) => setEditType(event.target.value)}
                        disabled={disabled || editSaving || touchTypes.length === 0}
                        required
                        className={fieldClassName}
                        aria-label="Edit touch type"
                      >
                        {touchTypes.map((touchType) => (
                          <option key={touchType} value={touchType}>
                            {touchType}
                          </option>
                        ))}
                        {!touchTypes.includes(editType) && editType ? (
                          <option value={editType}>{editType}</option>
                        ) : null}
                      </select>

                      <input
                        type="date"
                        value={editDate}
                        onChange={(event) => setEditDate(event.target.value)}
                        disabled={disabled || editSaving}
                        className={fieldClassName}
                        aria-label="Edit touch date"
                      />

                      <textarea
                        value={editNotes}
                        onChange={(event) => setEditNotes(event.target.value)}
                        placeholder="Optional notes…"
                        rows={2}
                        disabled={disabled || editSaving}
                        className={textareaClassName}
                        aria-label="Edit touch notes"
                      />

                      <div className="flex items-center justify-between gap-2">
                        {editError ? (
                          <p className="text-xs text-destructive">{editError}</p>
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            Update type, date, or notes
                          </span>
                        )}
                        <Button
                          type="submit"
                          size="sm"
                          disabled={disabled || editSaving || !editType}
                        >
                          {editSaving ? "Saving…" : "Save"}
                        </Button>
                      </div>
                    </form>
                  </li>
                )
              }

              return (
                <li
                  key={touch.id}
                  className="rounded-lg border border-border/70 bg-muted/30 px-3 py-2"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-sm font-medium">{touch.type}</span>
                        <time
                          dateTime={touch.date}
                          className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase"
                          title={formatNoteDateTime(touch.date)}
                        >
                          {formatLeadDate(touch.date)}
                        </time>
                      </div>
                      {touch.notes ? (
                        <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                          {touch.notes}
                        </p>
                      ) : (
                        <p className="mt-1 text-xs text-muted-foreground/80">
                          No notes
                        </p>
                      )}
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-xs"
                      disabled={disabled}
                      onClick={() => startEditing(touch)}
                      aria-label={`Edit ${touch.type} touch`}
                    >
                      <Pencil className="size-3.5" />
                    </Button>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}
