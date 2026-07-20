import "dotenv/config"
import cors from "cors"
import express from "express"
import crmRoutes from "./routes/crm"

const app = express()
const PORT = Number(process.env.PORT) || 5000

app.use(cors())
app.use(express.json())

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "Donna API",
    timestamp: new Date().toISOString(),
  })
})

app.use("/api", crmRoutes)

app.listen(PORT, () => {
  console.log(`Donna API listening on http://localhost:${PORT}`)
})
