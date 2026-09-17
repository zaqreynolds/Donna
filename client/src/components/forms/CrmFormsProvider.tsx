import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { AccountForm } from "@/components/forms/AccountForm"
import { ContactForm } from "@/components/forms/ContactForm"
import type { Account, Contact } from "@/lib/types"

type FormState =
  | { type: "closed" }
  | { type: "contact"; contactId?: string; defaultAccountId?: string }
  | { type: "account"; accountId?: string }

type CrmFormsContextValue = {
  openCreateContact: (defaultAccountId?: string) => void
  openEditContact: (contactId: string) => void
  openCreateAccount: () => void
  openEditAccount: (accountId: string) => void
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

  const openCreateContact = useCallback((defaultAccountId?: string) => {
    setState({
      type: "contact",
      ...(defaultAccountId ? { defaultAccountId } : {}),
    })
  }, [])

  const openEditContact = useCallback((contactId: string) => {
    setState({ type: "contact", contactId })
  }, [])

  const openCreateAccount = useCallback(() => {
    setState({ type: "account" })
  }, [])

  const openEditAccount = useCallback((accountId: string) => {
    setState({ type: "account", accountId })
  }, [])

  const close = useCallback(() => {
    setState({ type: "closed" })
  }, [])

  const value = useMemo(
    () => ({
      openCreateContact,
      openEditContact,
      openCreateAccount,
      openEditAccount,
      subscribe,
    }),
    [
      openCreateContact,
      openEditContact,
      openCreateAccount,
      openEditAccount,
      subscribe,
    ],
  )

  function handleContactSuccess(_contact: Contact) {
    close()
    notify()
  }

  function handleAccountSuccess(_account: Account) {
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
            if (target?.closest("[data-account-combobox]")) {
              event.preventDefault()
            }
          }}
          onInteractOutside={(event) => {
            const target = event.target as HTMLElement | null
            if (target?.closest("[data-account-combobox]")) {
              event.preventDefault()
            }
          }}
          onFocusOutside={(event) => {
            const target = event.target as HTMLElement | null
            if (target?.closest("[data-account-combobox]")) {
              event.preventDefault()
            }
          }}
        >
          {state.type === "contact" ? (
            <ContactForm
              contactId={state.contactId}
              defaultAccountId={state.defaultAccountId}
              onCancel={close}
              onSuccess={handleContactSuccess}
            />
          ) : null}
          {state.type === "account" ? (
            <AccountForm
              accountId={state.accountId}
              onCancel={close}
              onSuccess={handleAccountSuccess}
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
