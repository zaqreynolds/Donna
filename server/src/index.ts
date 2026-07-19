import "dotenv/config"
import cors from "cors"
import express from "express"
import { prisma } from "./db"

const app = express()
const PORT = Number(process.env.PORT) || 3001

app.use(cors())
app.use(express.json())

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "Donna API",
    timestamp: new Date().toISOString(),
  })
})

app.get("/api/leads", async (_req, res) => {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    })

    if (leads.length === 0) {
      return res.json({
        leads: [
          {
            id: "seed-1",
            name: "Alex Morgan",
            email: "alex@northwind.io",
            company: "Northwind Labs",
            status: "new",
          },
          {
            id: "seed-2",
            name: "Jordan Lee",
            email: "jordan@acme.co",
            company: "Acme Co",
            status: "qualified",
          },
          {
            id: "seed-3",
            name: "Sam Rivera",
            email: "sam@brightline.com",
            company: "Brightline",
            status: "contacted",
          },
        ],
      })
    }

    return res.json({ leads })
  } catch (error) {
    console.error("Failed to fetch leads:", error)
    return res.status(500).json({ error: "Failed to fetch leads" })
  }
})

app.listen(PORT, () => {
  console.log(`Donna API listening on http://localhost:${PORT}`)
})
