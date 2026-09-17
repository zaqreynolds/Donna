import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App.tsx"
import { ToastProvider } from "@/components/ToastProvider"
import { CrmFormsProvider } from "@/components/forms/CrmFormsProvider"
import { AccountFreshnessSettingsProvider } from "@/components/AccountFreshnessSettingsProvider"

document.documentElement.classList.remove("dark")

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <AccountFreshnessSettingsProvider>
          <CrmFormsProvider>
            <App />
          </CrmFormsProvider>
        </AccountFreshnessSettingsProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
)
