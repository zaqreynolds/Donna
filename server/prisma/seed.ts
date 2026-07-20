import path from "path"
import "dotenv/config"
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"
import { PrismaClient } from "../generated/prisma"

const INDUSTRIES = [
  "Commercial Real Estate",
  "Apartments/Property Management",
  "Construction",
  "Healthcare",
  "Education",
  "Retail",
  "Manufacturing",
  "Religious",
  "Other",
] as const

function resolveDatabaseUrl(raw: string): string {
  if (!raw.startsWith("file:")) return raw
  const filePath = raw.slice("file:".length)
  if (path.isAbsolute(filePath)) return raw
  return `file:${path.resolve(process.cwd(), filePath)}`
}

const databaseUrl = resolveDatabaseUrl(
  process.env.DATABASE_URL ?? "file:./prisma/dev.db",
)
const adapter = new PrismaBetterSqlite3({ url: databaseUrl })
const prisma = new PrismaClient({ adapter })

async function main() {
  for (const name of INDUSTRIES) {
    await prisma.industry.upsert({
      where: { name },
      update: {},
      create: { name },
    })
  }

  const count = await prisma.industry.count()
  console.log(`Seeded industries. Total: ${count}`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
