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

const DEMO_COMPANIES = [
  {
    name: "Northwind Labs",
    address: "120 Market St, Austin, TX",
    phone: "555-0100",
    isVip: true,
    industry: "Commercial Real Estate",
  },
  {
    name: "Acme Co",
    address: "88 Industrial Blvd, Dallas, TX",
    phone: "555-0142",
    isVip: false,
    industry: "Manufacturing",
  },
  {
    name: "Brightline",
    address: "400 Clinic Way, Houston, TX",
    phone: "555-0199",
    isVip: false,
    industry: "Healthcare",
  },
  {
    name: "Harbor Property",
    address: "12 Lakeview Dr, Seattle, WA",
    phone: null,
    isVip: true,
    industry: "Apartments/Property Management",
  },
  {
    name: "Summit Build",
    address: "900 Crane Ave, Denver, CO",
    phone: "555-0177",
    isVip: false,
    industry: "Construction",
  },
  {
    name: "Oakcrest Schools",
    address: "1 Campus Rd, Portland, OR",
    phone: "555-0111",
    isVip: false,
    industry: "Education",
  },
  {
    name: "Retail North",
    address: "220 Commerce Ave, Chicago, IL",
    phone: "555-0166",
    isVip: false,
    industry: "Retail",
  },
  {
    name: "Faith Hall",
    address: "45 Chapel St, Nashville, TN",
    phone: null,
    isVip: false,
    industry: "Religious",
  },
  {
    name: "Forgeworks",
    address: "77 Foundry Ln, Pittsburgh, PA",
    phone: "555-0188",
    isVip: true,
    industry: "Manufacturing",
  },
  {
    name: "Crest Medical",
    address: "900 Care Blvd, Phoenix, AZ",
    phone: "555-0122",
    isVip: false,
    industry: "Healthcare",
  },
] as const

const DEMO_LEADS = [
  {
    firstName: "Alex",
    lastName: "Morgan",
    title: "VP Sales",
    email: "alex@northwind.io",
    status: "NEW",
    isVip: true,
    company: "Northwind Labs",
    createdAt: new Date("2026-07-18T16:12:00.000Z"),
  },
  {
    firstName: "Jordan",
    lastName: "Lee",
    title: "Director",
    email: "jordan@acme.co",
    status: "CONTACTED",
    isVip: false,
    company: "Acme Co",
    createdAt: new Date("2026-07-18T14:40:00.000Z"),
  },
  {
    firstName: "Sam",
    lastName: "Rivera",
    title: null,
    email: "sam@brightline.com",
    status: "QUALIFIED",
    isVip: true,
    company: "Brightline",
    createdAt: new Date("2026-07-17T21:05:00.000Z"),
  },
  {
    firstName: "Casey",
    lastName: "Nguyen",
    title: "Owner",
    email: "casey@harborpm.com",
    status: "NURTURING",
    isVip: false,
    company: "Harbor Property",
    createdAt: new Date("2026-07-17T18:22:00.000Z"),
  },
  {
    firstName: "Riley",
    lastName: "Chen",
    title: "Facilities Lead",
    email: "riley@summitbuild.com",
    status: "NEW",
    isVip: false,
    company: "Summit Build",
    createdAt: new Date("2026-07-16T12:10:00.000Z"),
  },
  {
    firstName: "Taylor",
    lastName: "Brooks",
    title: null,
    email: "taylor@oakcrest.edu",
    status: "CONTACTED",
    isVip: false,
    company: "Oakcrest Schools",
    createdAt: new Date("2026-07-16T09:45:00.000Z"),
  },
  {
    firstName: "Morgan",
    lastName: "Patel",
    title: "Buyer",
    email: "morgan@retailnorth.com",
    status: "LOST",
    isVip: false,
    company: "Retail North",
    createdAt: new Date("2026-07-15T20:00:00.000Z"),
  },
  {
    firstName: "Avery",
    lastName: "Kim",
    title: "Coordinator",
    email: "avery@faithhall.org",
    status: "NEW",
    isVip: false,
    company: "Faith Hall",
    createdAt: new Date("2026-07-15T15:30:00.000Z"),
  },
  {
    firstName: "Quinn",
    lastName: "Foster",
    title: "Ops Manager",
    email: "quinn@forgeworks.com",
    status: "QUALIFIED",
    isVip: true,
    company: "Forgeworks",
    createdAt: new Date("2026-07-14T11:18:00.000Z"),
  },
  {
    firstName: "Jamie",
    lastName: "Ortiz",
    title: null,
    email: "jamie@crestmed.com",
    status: "NURTURING",
    isVip: false,
    company: "Crest Medical",
    createdAt: new Date("2026-07-14T08:05:00.000Z"),
  },
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

  const industries = await prisma.industry.findMany()
  const industryByName = Object.fromEntries(
    industries.map((industry) => [industry.name, industry.id]),
  )

  // Reset demo CRM rows so seed is idempotent.
  await prisma.touch.deleteMany()
  await prisma.leadNote.deleteMany()
  await prisma.companyNote.deleteMany()
  await prisma.lead.deleteMany()
  await prisma.company.deleteMany()

  const companyByName: Record<string, string> = {}
  for (const company of DEMO_COMPANIES) {
    const created = await prisma.company.create({
      data: {
        name: company.name,
        address: company.address,
        phone: company.phone,
        isVip: company.isVip,
        industryId: industryByName[company.industry],
      },
    })
    companyByName[company.name] = created.id
  }

  const leadIds: string[] = []
  for (const lead of DEMO_LEADS) {
    const created = await prisma.lead.create({
      data: {
        firstName: lead.firstName,
        lastName: lead.lastName,
        title: lead.title,
        email: lead.email,
        status: lead.status,
        isVip: lead.isVip,
        companyId: companyByName[lead.company],
        createdAt: lead.createdAt,
      },
    })
    leadIds.push(created.id)
  }

  const touchSeeds = [
    { leadIndex: 0, type: "Email", notes: "Intro email sent" },
    { leadIndex: 0, type: "Phone", notes: "Discovery call scheduled" },
    { leadIndex: 1, type: "LinkedIn", notes: "Connected on LinkedIn" },
    { leadIndex: 2, type: "Face to Face", notes: "Site walkthrough" },
    { leadIndex: 2, type: "Estimate", notes: "Sent preliminary estimate" },
    { leadIndex: 3, type: "Voicemail", notes: "Left voicemail" },
    { leadIndex: 4, type: "Cold Call", notes: "Initial outreach" },
    { leadIndex: 5, type: "Email", notes: "Follow-up with brochure" },
    { leadIndex: 8, type: "Networking", notes: "Met at industry mixer" },
    { leadIndex: 9, type: "Text", notes: "Confirmed next steps" },
  ] as const

  for (const touch of touchSeeds) {
    await prisma.touch.create({
      data: {
        type: touch.type,
        notes: touch.notes,
        leadId: leadIds[touch.leadIndex],
      },
    })
  }

  const [companyCount, leadCount, touchCount] = await Promise.all([
    prisma.company.count(),
    prisma.lead.count(),
    prisma.touch.count(),
  ])

  console.log(
    `Seeded industries (${industries.length}), companies (${companyCount}), leads (${leadCount}), touches (${touchCount})`,
  )
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
