import path from "path"
import "dotenv/config"
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"
import { PrismaClient } from "../generated/prisma"

const DEFAULT_ORG_ID = "00000000-0000-4000-8000-000000000001"

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

const TOUCH_TYPES = [
  "Phone",
  "Email",
  "Meeting",
  "Estimate",
  "Sale",
  "Networking",
  "Canvassing",
  "Cold Call",
  "Face to Face",
  "Retreva",
  "Text",
  "Voicemail",
  "Video Message",
  "Post Card",
  "Social Media",
  "Invoice",
] as const

const DEMO_ACCOUNTS = [
  {
    name: "Northwind Labs",
    address: "120 Market St, Austin, TX",
    phone: "555-0100",
    isVip: true,
    status: "NEW",
    industry: "Commercial Real Estate",
  },
  {
    name: "Acme Co",
    address: "88 Industrial Blvd, Dallas, TX",
    phone: "555-0142",
    isVip: false,
    status: "CONTACTED",
    industry: "Manufacturing",
  },
  {
    name: "Brightline",
    address: "400 Clinic Way, Houston, TX",
    phone: "555-0199",
    isVip: false,
    status: "QUALIFIED",
    industry: "Healthcare",
  },
  {
    name: "Harbor Property",
    address: "12 Lakeview Dr, Seattle, WA",
    phone: null,
    isVip: true,
    status: "NURTURING",
    industry: "Apartments/Property Management",
  },
  {
    name: "Summit Build",
    address: "900 Crane Ave, Denver, CO",
    phone: "555-0177",
    isVip: false,
    status: "NEW",
    industry: "Construction",
  },
  {
    name: "Oakcrest Schools",
    address: "1 Campus Rd, Portland, OR",
    phone: "555-0111",
    isVip: false,
    status: "CONTACTED",
    industry: "Education",
  },
  {
    name: "Retail North",
    address: "220 Commerce Ave, Chicago, IL",
    phone: "555-0166",
    isVip: false,
    status: "LOST",
    industry: "Retail",
  },
  {
    name: "Faith Hall",
    address: "45 Chapel St, Nashville, TN",
    phone: null,
    isVip: false,
    status: "NEW",
    industry: "Religious",
  },
  {
    name: "Forgeworks",
    address: "77 Foundry Ln, Pittsburgh, PA",
    phone: "555-0188",
    isVip: true,
    status: "QUALIFIED",
    industry: "Manufacturing",
  },
  {
    name: "Crest Medical",
    address: "900 Care Blvd, Phoenix, AZ",
    phone: "555-0122",
    isVip: false,
    status: "NURTURING",
    industry: "Healthcare",
  },
] as const

const DEMO_CONTACTS = [
  {
    firstName: "Alex",
    lastName: "Morgan",
    title: "VP Sales",
    email: "alex@northwind.io",
    isVip: true,
    account: "Northwind Labs",
    createdAt: new Date("2026-07-18T16:12:00.000Z"),
  },
  {
    firstName: "Jordan",
    lastName: "Lee",
    title: "Director",
    email: "jordan@acme.co",
    isVip: false,
    account: "Acme Co",
    createdAt: new Date("2026-07-18T14:40:00.000Z"),
  },
  {
    firstName: "Sam",
    lastName: "Rivera",
    title: null,
    email: "sam@brightline.com",
    isVip: true,
    account: "Brightline",
    createdAt: new Date("2026-07-17T21:05:00.000Z"),
  },
  {
    firstName: "Casey",
    lastName: "Nguyen",
    title: "Owner",
    email: "casey@harborpm.com",
    isVip: false,
    account: "Harbor Property",
    createdAt: new Date("2026-07-17T18:22:00.000Z"),
  },
  {
    firstName: "Riley",
    lastName: "Chen",
    title: "Facilities Lead",
    email: "riley@summitbuild.com",
    isVip: false,
    account: "Summit Build",
    createdAt: new Date("2026-07-16T12:10:00.000Z"),
  },
  {
    firstName: "Taylor",
    lastName: "Brooks",
    title: null,
    email: "taylor@oakcrest.edu",
    isVip: false,
    account: "Oakcrest Schools",
    createdAt: new Date("2026-07-16T09:45:00.000Z"),
  },
  {
    firstName: "Morgan",
    lastName: "Patel",
    title: "Buyer",
    email: "morgan@retailnorth.com",
    isVip: false,
    account: "Retail North",
    createdAt: new Date("2026-07-15T20:00:00.000Z"),
  },
  {
    firstName: "Avery",
    lastName: "Kim",
    title: "Coordinator",
    email: "avery@faithhall.org",
    isVip: false,
    account: "Faith Hall",
    createdAt: new Date("2026-07-15T15:30:00.000Z"),
  },
  {
    firstName: "Quinn",
    lastName: "Foster",
    title: "Ops Manager",
    email: "quinn@forgeworks.com",
    isVip: true,
    account: "Forgeworks",
    createdAt: new Date("2026-07-14T11:18:00.000Z"),
  },
  {
    firstName: "Jamie",
    lastName: "Ortiz",
    title: null,
    email: "jamie@crestmed.com",
    isVip: false,
    account: "Crest Medical",
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
  const organization = await prisma.organization.upsert({
    where: { id: DEFAULT_ORG_ID },
    update: { name: "Local Center", slug: "local-center" },
    create: {
      id: DEFAULT_ORG_ID,
      name: "Local Center",
      slug: "local-center",
    },
  })
  const organizationId = organization.id

  for (const name of INDUSTRIES) {
    await prisma.industry.upsert({
      where: {
        organizationId_name: { organizationId, name },
      },
      update: { isSystem: true },
      create: { name, isSystem: true, organizationId },
    })
  }

  for (const name of TOUCH_TYPES) {
    await prisma.touchType.upsert({
      where: {
        organizationId_name: { organizationId, name },
      },
      update: { isSystem: true },
      create: { name, isSystem: true, organizationId },
    })
  }

  const SOCIAL_PLATFORMS = [
    "Instagram",
    "Facebook",
    "LinkedIn",
    "X",
    "TikTok",
    "YouTube",
    "Nextdoor",
    "Other",
  ] as const

  for (const name of SOCIAL_PLATFORMS) {
    await prisma.socialPlatform.upsert({
      where: {
        organizationId_name: { organizationId, name },
      },
      update: { isSystem: true },
      create: { name, isSystem: true, organizationId },
    })
  }

  const industries = await prisma.industry.findMany({ where: { organizationId } })
  const touchTypeCount = await prisma.touchType.count({ where: { organizationId } })
  const industryByName = Object.fromEntries(
    industries.map((industry) => [industry.name, industry.id]),
  )

  // Reset demo CRM rows so seed is idempotent.
  await prisma.touch.deleteMany({ where: { organizationId } })
  await prisma.contactNote.deleteMany({ where: { organizationId } })
  await prisma.accountNote.deleteMany({ where: { organizationId } })
  await prisma.accountSocialLink.deleteMany({ where: { organizationId } })
  await prisma.contact.deleteMany({ where: { organizationId } })
  await prisma.account.deleteMany({ where: { organizationId } })

  const accountByName: Record<string, string> = {}
  for (const account of DEMO_ACCOUNTS) {
    const created = await prisma.account.create({
      data: {
        name: account.name,
        address: account.address,
        phone: account.phone,
        isVip: account.isVip,
        status: account.status,
        organizationId,
        industryId: industryByName[account.industry],
      },
    })
    accountByName[account.name] = created.id
  }

  const contactIds: string[] = []
  for (const contact of DEMO_CONTACTS) {
    const accountId = accountByName[contact.account]
    const created = await prisma.contact.create({
      data: {
        firstName: contact.firstName,
        lastName: contact.lastName,
        title: contact.title,
        email: contact.email,
        isVip: contact.isVip,
        accountId,
        organizationId,
        createdAt: contact.createdAt,
      },
    })
    contactIds.push(created.id)
  }

  const touchSeeds = [
    { contactIndex: 0, type: "Email", notes: "Intro email sent" },
    { contactIndex: 0, type: "Phone", notes: "Discovery call scheduled" },
    {
      contactIndex: 1,
      type: "Social Media",
      socialPlatform: "LinkedIn",
      notes: "Connected on LinkedIn",
    },
    { contactIndex: 2, type: "Face to Face", notes: "Site walkthrough" },
    { contactIndex: 2, type: "Estimate", notes: "Sent preliminary estimate" },
    { contactIndex: 3, type: "Voicemail", notes: "Left voicemail" },
    { contactIndex: 4, type: "Cold Call", notes: "Initial outreach" },
    { contactIndex: 5, type: "Email", notes: "Follow-up with brochure" },
    { contactIndex: 8, type: "Networking", notes: "Met at industry mixer" },
    { contactIndex: 9, type: "Text", notes: "Confirmed next steps" },
  ] as const

  for (const touch of touchSeeds) {
    const contactId = contactIds[touch.contactIndex]
    const contact = await prisma.contact.findUniqueOrThrow({
      where: { id: contactId },
      select: { accountId: true },
    })
    await prisma.touch.create({
      data: {
        type: touch.type,
        notes: touch.notes,
        accountId: contact.accountId,
        contactId,
        organizationId,
        ...("socialPlatform" in touch && touch.socialPlatform
          ? { socialPlatform: touch.socialPlatform }
          : {}),
      },
    })
  }

  const [accountCount, contactCount, touchCount] = await Promise.all([
    prisma.account.count({ where: { organizationId } }),
    prisma.contact.count({ where: { organizationId } }),
    prisma.touch.count({ where: { organizationId } }),
  ])

  console.log(
    `Seeded org (${organization.name}), industries (${industries.length}), touch types (${touchTypeCount}), accounts (${accountCount}), contacts (${contactCount}), touches (${touchCount})`,
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
