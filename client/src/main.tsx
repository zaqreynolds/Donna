import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App.tsx"
import { ToastProvider } from "@/components/ToastProvider"
import { CrmFormsProvider } from "@/components/forms/CrmFormsProvider"
import { LeadHealthSettingsProvider } from "@/components/LeadHealthSettingsProvider"

document.documentElement.classList.remove("dark")

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <LeadHealthSettingsProvider>
          <CrmFormsProvider>
            <App />
          </CrmFormsProvider>
        </LeadHealthSettingsProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
)
