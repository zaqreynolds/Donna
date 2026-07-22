import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

type ToastTone = "success" | "error" | "info"

type ToastItem = {
  id: string
  title: string
  description?: string
  tone: ToastTone
}

type ToastContextValue = {
  toast: (input: {
    title: string
    description?: string
    tone?: ToastTone
  }) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([])

  const toast = useCallback(
    (input: { title: string; description?: string; tone?: ToastTone }) => {
      const id = crypto.randomUUID()
      const item: ToastItem = {
        id,
        title: input.title,
        description: input.description,
        tone: input.tone ?? "info",
      }
      setItems((current) => [...current, item])
      window.setTimeout(() => {
        setItems((current) => current.filter((row) => row.id !== id))
      }, 3200)
    },
    [],
  )

  const value = useMemo(() => ({ toast }), [toast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed right-4 bottom-4 z-[100] flex w-full max-w-sm flex-col gap-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              "pointer-events-auto rounded-lg border px-3 py-2 shadow-lg backdrop-blur",
              item.tone === "success" &&
                "border-emerald-500/30 bg-emerald-50 text-emerald-900",
              item.tone === "error" &&
                "border-rose-500/30 bg-rose-50 text-rose-900",
              item.tone === "info" &&
                "border-border bg-background/95 text-foreground",
            )}
            role="status"
          >
            <p className="text-sm font-medium">{item.title}</p>
            {item.description ? (
              <p className="mt-0.5 text-xs opacity-80">{item.description}</p>
            ) : null}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within ToastProvider")
  }
  return context
}
