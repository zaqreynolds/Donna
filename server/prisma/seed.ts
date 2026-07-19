import "dotenv/config"
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"
import { PrismaClient } from "@prisma/client"

const databaseUrl = process.env.DATABASE_URL ?? "file:./prisma/dev.db"
const adapter = new PrismaBetterSqlite3({ url: databaseUrl })
const prisma = new PrismaClient({ adapter })

async function main() {
  const count = await prisma.lead.count()
  if (count > 0) {
    console.log(`Seed skipped — ${count} lead(s) already exist.`)
    return
  }

  await prisma.lead.createMany({
    data: [
      {
        name: "Alex Morgan",
        email: "alex@northwind.io",
        company: "Northwind Labs",
        status: "new",
      },
      {
        name: "Jordan Lee",
        email: "jordan@acme.co",
        company: "Acme Co",
        status: "qualified",
      },
      {
        name: "Sam Rivera",
        email: "sam@brightline.com",
        company: "Brightline",
        status: "contacted",
      },
    ],
  })

  console.log("Seeded 3 sample leads.")
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
