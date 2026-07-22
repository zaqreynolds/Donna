import { useEffect, useState, type FormEvent } from "react"
import { Handshake, Pencil, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  formatLeadDate,
  formatNoteDateTime,
  touchIsEstimate,
  touchIsSocialMedia,
  touchSupportsAmount,
} from "@/lib/api"
import type { LeadTouch } from "@/lib/types"
import { cn } from "@/lib/utils"

export type CreateTouchInput = {
  type: string
  notes: string
  date?: string
  amount?: number | null
  estimateNumber?: string | null
  socialPlatform?: string | null
}

export type UpdateTouchInput = {
  type: string
  notes: string
  date?: string
  amount?: number | null
  estimateNumber?: string | null
  socialPlatform?: string | null
}

type TouchesPanelProps = {
  touches: LeadTouch[]
  touchTypes: string[]
  socialPlatforms?: string[]
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

function parseAmountInput(value: string): number | null {
  const trimmed = value.trim()
  if (!trimmed) return null
  const n = Number(trimmed)
  return Number.isFinite(n) && n >= 0 ? n : null
}

function formatAmount(value: number | null | undefined): string {
  if (value == null || !Number.isFinite(value)) return ""
  return value.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  })
}

export function TouchesPanel({
  touches,
  touchTypes,
  socialPlatforms = [],
  loading = false,
  disabled = false,
  onAdd,
  onUpdate,
  className,
}: TouchesPanelProps) {
  const [type, setType] = useState("")
  const [notes, setNotes] = useState("")
  const [date, setDate] = useState(todayInputValue)
  const [amount, setAmount] = useState("")
  const [estimateNumber, setEstimateNumber] = useState("")
  const [socialPlatform, setSocialPlatform] = useState("")
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [editingId, setEditingId] = useState<string | null>(null)
  const [editType, setEditType] = useState("")
  const [editNotes, setEditNotes] = useState("")
  const [editDate, setEditDate] = useState(todayInputValue)
  const [editAmount, setEditAmount] = useState("")
  const [editEstimateNumber, setEditEstimateNumber] = useState("")
  const [editSocialPlatform, setEditSocialPlatform] = useState("")
  const [editSaving, setEditSaving] = useState(false)
  const [editError, setEditError] = useState<string | null>(null)

  const showAmount = touchSupportsAmount(type)
  const showEstimateNumber = touchIsEstimate(type)
  const showSocialPlatform = touchIsSocialMedia(type)
  const showEditAmount = touchSupportsAmount(editType)
  const showEditEstimateNumber = touchIsEstimate(editType)
  const showEditSocialPlatform = touchIsSocialMedia(editType)

  useEffect(() => {
    if (type && touchTypes.length > 0 && !touchTypes.includes(type)) {
      setType("")
    }
  }, [touchTypes, type])

  useEffect(() => {
    if (!showAmount) setAmount("")
  }, [showAmount])

  useEffect(() => {
    if (!showEstimateNumber) setEstimateNumber("")
  }, [showEstimateNumber])

  useEffect(() => {
    if (!showSocialPlatform) setSocialPlatform("")
  }, [showSocialPlatform])

  useEffect(() => {
    if (!showEditEstimateNumber) setEditEstimateNumber("")
  }, [showEditEstimateNumber])

  useEffect(() => {
    if (
      editSocialPlatform &&
      socialPlatforms.length > 0 &&
      !socialPlatforms.includes(editSocialPlatform) &&
      !showEditSocialPlatform
    ) {
      setEditSocialPlatform("")
    }
  }, [editSocialPlatform, socialPlatforms, showEditSocialPlatform])

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
    setEditAmount(
      touch.amount != null && Number.isFinite(touch.amount)
        ? String(touch.amount)
        : "",
    )
    setEditEstimateNumber(touch.estimateNumber ?? "")
    setEditSocialPlatform(touch.socialPlatform ?? "")
    setEditError(null)
  }

  function cancelEditing() {
    setEditingId(null)
    setEditError(null)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!type || saving || disabled) return

    if (showSocialPlatform && !socialPlatform) {
      setError("Select a social platform.")
      return
    }

    if (showAmount && amount.trim() && parseAmountInput(amount) === null) {
      setError("Enter a valid dollar amount.")
      return
    }

    setSaving(true)
    setError(null)
    try {
      await onAdd({
        type,
        notes: notes.trim(),
        date: toIsoFromDateInput(date),
        amount: showAmount ? parseAmountInput(amount) : null,
        estimateNumber: showEstimateNumber
          ? estimateNumber.trim() || null
          : null,
        socialPlatform: showSocialPlatform ? socialPlatform : null,
      })
      setNotes("")
      setType("")
      setAmount("")
      setEstimateNumber("")
      setSocialPlatform("")
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

    if (showEditSocialPlatform && !editSocialPlatform) {
      setEditError("Select a social platform.")
      return
    }

    if (
      showEditAmount &&
      editAmount.trim() &&
      parseAmountInput(editAmount) === null
    ) {
      setEditError("Enter a valid dollar amount.")
      return
    }

    setEditSaving(true)
    setEditError(null)
    try {
      await onUpdate(editingId, {
        type: editType,
        notes: editNotes.trim(),
        date: toIsoFromDateInput(editDate),
        amount: showEditAmount ? parseAmountInput(editAmount) : null,
        estimateNumber: showEditEstimateNumber
          ? editEstimateNumber.trim() || null
          : null,
        socialPlatform: showEditSocialPlatform ? editSocialPlatform : null,
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

        {showSocialPlatform ? (
          <label className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground">
              Platform
            </span>
            <select
              value={socialPlatform}
              onChange={(event) => setSocialPlatform(event.target.value)}
              disabled={disabled || saving || socialPlatforms.length === 0}
              required
              className={fieldClassName}
              aria-label="Social media platform"
            >
              <option value="" disabled>
                Select platform…
              </option>
              {socialPlatforms.map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
          </label>
        ) : null}

        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          disabled={disabled || saving}
          className={fieldClassName}
          aria-label="Touch date"
        />

        {showEstimateNumber ? (
          <label className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground">
              Estimate number
            </span>
            <input
              type="text"
              value={estimateNumber}
              onChange={(event) => setEstimateNumber(event.target.value)}
              placeholder="POS / estimate #"
              disabled={disabled || saving}
              className={fieldClassName}
              aria-label="Estimate number"
            />
          </label>
        ) : null}

        {showAmount ? (
          <label className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground">
              {showEstimateNumber
                ? "Estimate amount ($) — not revenue"
                : "Sale amount ($)"}
            </span>
            <input
              type="number"
              min={0}
              step="0.01"
              inputMode="decimal"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="Optional"
              disabled={disabled || saving}
              className={fieldClassName}
              aria-label="Dollar amount"
            />
          </label>
        ) : null}

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
            disabled={
              disabled ||
              saving ||
              !type ||
              (showSocialPlatform && !socialPlatform)
            }
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
                        disabled={
                          disabled || editSaving || touchTypes.length === 0
                        }
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

                      {showEditSocialPlatform ? (
                        <label className="flex flex-col gap-1">
                          <span className="text-xs font-medium text-muted-foreground">
                            Platform
                          </span>
                          <select
                            value={editSocialPlatform}
                            onChange={(event) =>
                              setEditSocialPlatform(event.target.value)
                            }
                            disabled={
                              disabled ||
                              editSaving ||
                              socialPlatforms.length === 0
                            }
                            required
                            className={fieldClassName}
                            aria-label="Edit social media platform"
                          >
                            <option value="" disabled>
                              Select platform…
                            </option>
                            {socialPlatforms.map((platform) => (
                              <option key={platform} value={platform}>
                                {platform}
                              </option>
                            ))}
                            {editSocialPlatform &&
                            !socialPlatforms.includes(editSocialPlatform) ? (
                              <option value={editSocialPlatform}>
                                {editSocialPlatform}
                              </option>
                            ) : null}
                          </select>
                        </label>
                      ) : null}

                      <input
                        type="date"
                        value={editDate}
                        onChange={(event) => setEditDate(event.target.value)}
                        disabled={disabled || editSaving}
                        className={fieldClassName}
                        aria-label="Edit touch date"
                      />

                      {showEditEstimateNumber ? (
                        <label className="flex flex-col gap-1">
                          <span className="text-xs font-medium text-muted-foreground">
                            Estimate number
                          </span>
                          <input
                            type="text"
                            value={editEstimateNumber}
                            onChange={(event) =>
                              setEditEstimateNumber(event.target.value)
                            }
                            placeholder="POS / estimate #"
                            disabled={disabled || editSaving}
                            className={fieldClassName}
                            aria-label="Edit estimate number"
                          />
                        </label>
                      ) : null}

                      {showEditAmount ? (
                        <label className="flex flex-col gap-1">
                          <span className="text-xs font-medium text-muted-foreground">
                            {showEditEstimateNumber
                              ? "Estimate amount ($) — not revenue"
                              : "Sale amount ($)"}
                          </span>
                          <input
                            type="number"
                            min={0}
                            step="0.01"
                            inputMode="decimal"
                            value={editAmount}
                            onChange={(event) =>
                              setEditAmount(event.target.value)
                            }
                            placeholder="Optional"
                            disabled={disabled || editSaving}
                            className={fieldClassName}
                            aria-label="Edit dollar amount"
                          />
                        </label>
                      ) : null}

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
                            Update type, date, amount, or notes
                          </span>
                        )}
                        <Button
                          type="submit"
                          size="sm"
                          disabled={
                            disabled ||
                            editSaving ||
                            !editType ||
                            (showEditSocialPlatform && !editSocialPlatform)
                          }
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
                        {touch.socialPlatform ? (
                          <span className="text-xs text-muted-foreground">
                            · {touch.socialPlatform}
                          </span>
                        ) : null}
                        <time
                          dateTime={touch.date}
                          className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase"
                          title={formatNoteDateTime(touch.date)}
                        >
                          {formatLeadDate(touch.date)}
                        </time>
                      </div>
                      {touch.estimateNumber ? (
                        <p className="mt-1 text-xs text-muted-foreground">
                          Estimate # {touch.estimateNumber}
                        </p>
                      ) : null}
                      {touch.amount != null ? (
                        <p className="mt-1 text-xs font-medium text-emerald-700">
                          {formatAmount(touch.amount)}
                          {touchIsEstimate(touch.type)
                            ? " · estimate (not revenue)"
                            : " · sale"}
                        </p>
                      ) : null}
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
