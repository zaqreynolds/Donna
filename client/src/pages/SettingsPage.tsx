import { useEffect, useState, type FormEvent } from "react"
import { Factory, Handshake, Lock, Pencil, Trash2, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SettingsView } from "@/components/SettingsView"
import {
  createIndustry,
  createTouchType,
  deleteIndustry,
  deleteTouchType,
  fetchIndustries,
  fetchTouchTypeCatalog,
  updateIndustry,
  updateTouchType,
  type CatalogItem,
} from "@/lib/api"

type CatalogSectionProps = {
  title: string
  icon: typeof Factory
  items: CatalogItem[]
  draft: string
  onDraftChange: (value: string) => void
  placeholder: string
  error: string | null
  saving: boolean
  onAdd: (event: FormEvent<HTMLFormElement>) => void
  onRename: (id: string, name: string) => Promise<void>
  onDelete: (id: string) => Promise<void>
}

function CatalogSection({
  title,
  icon: Icon,
  items,
  draft,
  onDraftChange,
  placeholder,
  error,
  saving,
  onAdd,
  onRename,
  onDelete,
}: CatalogSectionProps) {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editName, setEditName] = useState("")
  const [editSaving, setEditSaving] = useState(false)
  const [rowError, setRowError] = useState<string | null>(null)

  function startEdit(item: CatalogItem) {
    if (item.isSystem) return
    setEditingId(item.id)
    setEditName(item.name)
    setRowError(null)
  }

  function cancelEdit() {
    setEditingId(null)
    setEditName("")
    setRowError(null)
  }

  async function saveEdit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!editingId || !editName.trim() || editSaving) return

    setEditSaving(true)
    setRowError(null)
    try {
      await onRename(editingId, editName.trim())
      cancelEdit()
    } catch {
      setRowError("Couldn’t rename. It may already exist.")
    } finally {
      setEditSaving(false)
    }
  }

  async function handleDelete(item: CatalogItem) {
    if (item.isSystem) return
    const confirmed = window.confirm(`Delete “${item.name}”?`)
    if (!confirmed) return

    setRowError(null)
    try {
      await onDelete(item.id)
      if (editingId === item.id) cancelEdit()
    } catch {
      setRowError("Couldn’t delete. It may still be in use.")
    }
  }

  const systemItems = items.filter((item) => item.isSystem)
  const customItems = items.filter((item) => !item.isSystem)

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Icon className="size-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
        <span className="text-xs text-muted-foreground">{items.length}</span>
      </div>

      <form className="flex flex-wrap items-center gap-2" onSubmit={onAdd}>
        <Input
          value={draft}
          onChange={(event) => onDraftChange(event.target.value)}
          placeholder={placeholder}
          className="min-w-[200px] flex-1"
          aria-label={placeholder}
        />
        <Button type="submit" size="sm" disabled={saving || !draft.trim()}>
          {saving ? "Adding…" : "Add"}
        </Button>
      </form>
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
      {rowError ? <p className="text-xs text-destructive">{rowError}</p> : null}

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Built-in
          </p>
          <div className="flex flex-wrap gap-2">
            {systemItems.map((item) => (
              <Badge
                key={item.id}
                variant="outline"
                className="gap-1.5 text-muted-foreground"
              >
                <Lock className="size-3" />
                {item.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Custom
          </p>
          {customItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No custom entries yet. Add one above.
            </p>
          ) : (
            <ul className="flex flex-col gap-2">
              {customItems.map((item) => {
                const isEditing = editingId === item.id
                if (isEditing) {
                  return (
                    <li
                      key={item.id}
                      className="rounded-lg border border-border bg-background px-3 py-2"
                    >
                      <form
                        className="flex flex-wrap items-center gap-2"
                        onSubmit={saveEdit}
                      >
                        <Input
                          value={editName}
                          onChange={(event) => setEditName(event.target.value)}
                          className="min-w-[160px] flex-1"
                          aria-label={`Rename ${item.name}`}
                          autoFocus
                        />
                        <Button
                          type="submit"
                          size="sm"
                          disabled={editSaving || !editName.trim()}
                        >
                          {editSaving ? "Saving…" : "Save"}
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon-sm"
                          onClick={cancelEdit}
                          aria-label="Cancel rename"
                        >
                          <X className="size-4" />
                        </Button>
                      </form>
                    </li>
                  )
                }

                return (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-3 rounded-lg border border-border/70 bg-muted/30 px-3 py-2"
                  >
                    <span className="truncate text-sm font-medium">
                      {item.name}
                    </span>
                    <div className="flex shrink-0 items-center gap-1">
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-xs"
                        onClick={() => startEdit(item)}
                        aria-label={`Edit ${item.name}`}
                      >
                        <Pencil className="size-3.5" />
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-xs"
                        onClick={() => void handleDelete(item)}
                        aria-label={`Delete ${item.name}`}
                      >
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export function SettingsPage() {
  const [industries, setIndustries] = useState<CatalogItem[]>([])
  const [touchTypes, setTouchTypes] = useState<CatalogItem[]>([])
  const [industryDraft, setIndustryDraft] = useState("")
  const [touchDraft, setTouchDraft] = useState("")
  const [loading, setLoading] = useState(true)
  const [industryError, setIndustryError] = useState<string | null>(null)
  const [touchError, setTouchError] = useState<string | null>(null)
  const [savingIndustry, setSavingIndustry] = useState(false)
  const [savingTouch, setSavingTouch] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      const [industryRows, touchRows] = await Promise.all([
        fetchIndustries(),
        fetchTouchTypeCatalog(),
      ])
      if (!cancelled) {
        setIndustries(industryRows)
        setTouchTypes(touchRows)
        setLoading(false)
      }
    }

    void load()

    return () => {
      cancelled = true
    }
  }, [])

  async function handleAddIndustry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const name = industryDraft.trim()
    if (!name || savingIndustry) return

    setSavingIndustry(true)
    setIndustryError(null)
    try {
      const industry = await createIndustry(name)
      setIndustries((current) =>
        [...current, industry].sort((a, b) => {
          if (a.isSystem !== b.isSystem) return a.isSystem ? -1 : 1
          return a.name.localeCompare(b.name)
        }),
      )
      setIndustryDraft("")
    } catch {
      setIndustryError("Couldn’t add industry. It may already exist.")
    } finally {
      setSavingIndustry(false)
    }
  }

  async function handleAddTouchType(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const name = touchDraft.trim()
    if (!name || savingTouch) return

    setSavingTouch(true)
    setTouchError(null)
    try {
      const touchType = await createTouchType(name)
      setTouchTypes((current) =>
        [...current, touchType].sort((a, b) => {
          if (a.isSystem !== b.isSystem) return a.isSystem ? -1 : 1
          return a.name.localeCompare(b.name)
        }),
      )
      setTouchDraft("")
    } catch {
      setTouchError("Couldn’t add touch type. It may already exist.")
    } finally {
      setSavingTouch(false)
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold tracking-tight">Settings</h2>
          <p className="text-sm text-muted-foreground">
            Configure lead heat thresholds, industries, and touch types.
          </p>
        </div>

        <SettingsView />

        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold tracking-tight">Catalogs</h3>
          <p className="text-sm text-muted-foreground">
            Built-in industries and touch types are locked. Custom ones you add
            can be renamed or deleted.
          </p>
        </div>

        {loading ? (
          <p className="text-sm text-muted-foreground">Loading catalogs…</p>
        ) : (
          <>
            <CatalogSection
              title="Industries"
              icon={Factory}
              items={industries}
              draft={industryDraft}
              onDraftChange={setIndustryDraft}
              placeholder="Add industry…"
              error={industryError}
              saving={savingIndustry}
              onAdd={handleAddIndustry}
              onRename={async (id, name) => {
                const updated = await updateIndustry(id, name)
                setIndustries((current) =>
                  current.map((row) => (row.id === id ? updated : row)),
                )
              }}
              onDelete={async (id) => {
                await deleteIndustry(id)
                setIndustries((current) =>
                  current.filter((row) => row.id !== id),
                )
              }}
            />

            <CatalogSection
              title="Touch types"
              icon={Handshake}
              items={touchTypes}
              draft={touchDraft}
              onDraftChange={setTouchDraft}
              placeholder="Add touch type…"
              error={touchError}
              saving={savingTouch}
              onAdd={handleAddTouchType}
              onRename={async (id, name) => {
                const updated = await updateTouchType(id, name)
                setTouchTypes((current) =>
                  current.map((row) => (row.id === id ? updated : row)),
                )
              }}
              onDelete={async (id) => {
                await deleteTouchType(id)
                setTouchTypes((current) =>
                  current.filter((row) => row.id !== id),
                )
              }}
            />
          </>
        )}
      </div>
    </div>
  )
}
