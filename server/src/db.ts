import path from "path"
import "dotenv/config"
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"
import { PrismaClient } from "../generated/prisma"

function resolveDatabaseUrl(raw: string): string {
  if (!raw.startsWith("file:")) {
    return raw
  }

  const filePath = raw.slice("file:".length)
  if (path.isAbsolute(filePath)) {
    return raw
  }

  return `file:${path.resolve(process.cwd(), filePath)}`
}

const databaseUrl = resolveDatabaseUrl(
  process.env.DATABASE_URL ?? "file:./prisma/dev.db",
)

const adapter = new PrismaBetterSqlite3({ url: databaseUrl })

export const prisma = new PrismaClient({ adapter })
