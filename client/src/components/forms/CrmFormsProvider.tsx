import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { CompanyForm } from "@/components/forms/CompanyForm"
import { LeadForm } from "@/components/forms/LeadForm"
import type { Company, Lead } from "@/lib/types"

type FormState =
  | { type: "closed" }
  | { type: "lead"; leadId?: string }
  | { type: "company"; companyId?: string }

type CrmFormsContextValue = {
  openCreateLead: () => void
  openEditLead: (leadId: string) => void
  openCreateCompany: () => void
  openEditCompany: (companyId: string) => void
  subscribe: (listener: () => void) => () => void
}

const CrmFormsContext = createContext<CrmFormsContextValue | null>(null)

export function CrmFormsProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FormState>({ type: "closed" })
  const [listeners] = useState(() => new Set<() => void>())

  const notify = useCallback(() => {
    for (const listener of listeners) listener()
  }, [listeners])

  const subscribe = useCallback(
    (listener: () => void) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    [listeners],
  )

  const openCreateLead = useCallback(() => {
    setState({ type: "lead" })
  }, [])

  const openEditLead = useCallback((leadId: string) => {
    setState({ type: "lead", leadId })
  }, [])

  const openCreateCompany = useCallback(() => {
    setState({ type: "company" })
  }, [])

  const openEditCompany = useCallback((companyId: string) => {
    setState({ type: "company", companyId })
  }, [])

  const close = useCallback(() => {
    setState({ type: "closed" })
  }, [])

  const value = useMemo(
    () => ({
      openCreateLead,
      openEditLead,
      openCreateCompany,
      openEditCompany,
      subscribe,
    }),
    [
      openCreateLead,
      openEditLead,
      openCreateCompany,
      openEditCompany,
      subscribe,
    ],
  )

  function handleLeadSuccess(_lead: Lead) {
    close()
    notify()
  }

  function handleCompanySuccess(_company: Company) {
    close()
    notify()
  }

  const open = state.type !== "closed"

  return (
    <CrmFormsContext.Provider value={value}>
      {children}
      <Dialog
        open={open}
        onOpenChange={(next) => {
          if (!next) close()
        }}
      >
        <DialogContent
          className="p-0"
          onPointerDownOutside={(event) => {
            const target = event.target as HTMLElement | null
            if (target?.closest("[data-company-combobox]")) {
              event.preventDefault()
            }
          }}
          onInteractOutside={(event) => {
            const target = event.target as HTMLElement | null
            if (target?.closest("[data-company-combobox]")) {
              event.preventDefault()
            }
          }}
          onFocusOutside={(event) => {
            const target = event.target as HTMLElement | null
            if (target?.closest("[data-company-combobox]")) {
              event.preventDefault()
            }
          }}
        >
          {state.type === "lead" ? (
            <LeadForm
              leadId={state.leadId}
              onCancel={close}
              onSuccess={handleLeadSuccess}
            />
          ) : null}
          {state.type === "company" ? (
            <CompanyForm
              companyId={state.companyId}
              onCancel={close}
              onSuccess={handleCompanySuccess}
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </CrmFormsContext.Provider>
  )
}

export function useCrmForms() {
  const context = useContext(CrmFormsContext)
  if (!context) {
    throw new Error("useCrmForms must be used within CrmFormsProvider")
  }
  return context
}
