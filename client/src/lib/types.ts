export type LeadStatus = "NEW" | "CONTACTED" | "QUALIFIED" | "NURTURING" | "LOST" | string

export type EntityNote = {
  id: string
  text: string
  createdAt: string
}

export type Company = {
  id: string
  name: string
  address: string | null
  phone: string | null
  isVip: boolean
  createdAt: string
  updatedAt?: string
  industry: {
    id: string
    name: string
  }
  notes?: EntityNote[]
}

export type Lead = {
  id: string
  firstName: string
  lastName: string
  title: string | null
  email: string | null
  phone: string | null
  status: LeadStatus
  isVip: boolean
  company: {
    id: string
    name: string
    isVip?: boolean
  }
  createdAt?: string
  notes?: EntityNote[]
}

export const MOCK_COMPANIES: Company[] = [
  {
    id: "mock-c1",
    name: "Northwind Labs",
    address: "120 Market St, Austin, TX",
    phone: "555-0100",
    isVip: true,
    createdAt: "2026-07-18T16:00:00.000Z",
    industry: { id: "i1", name: "Commercial Real Estate" },
  },
  {
    id: "mock-c2",
    name: "Acme Co",
    address: "88 Industrial Blvd, Dallas, TX",
    phone: "555-0142",
    isVip: false,
    createdAt: "2026-07-17T12:00:00.000Z",
    industry: { id: "i2", name: "Manufacturing" },
  },
  {
    id: "mock-c3",
    name: "Brightline Health",
    address: "400 Clinic Way, Houston, TX",
    phone: "555-0199",
    isVip: false,
    createdAt: "2026-07-16T09:30:00.000Z",
    industry: { id: "i3", name: "Healthcare" },
  },
  {
    id: "mock-c4",
    name: "Harbor Property",
    address: "12 Lakeview Dr, Seattle, WA",
    phone: null,
    isVip: true,
    createdAt: "2026-07-15T18:20:00.000Z",
    industry: { id: "i4", name: "Apartments/Property Management" },
  },
  {
    id: "mock-c5",
    name: "Summit Build",
    address: "900 Crane Ave, Denver, CO",
    phone: "555-0177",
    isVip: false,
    createdAt: "2026-07-14T11:10:00.000Z",
    industry: { id: "i5", name: "Construction" },
  },
]

export const MOCK_LEADS: Lead[] = [
  {
    id: "mock-1",
    firstName: "Alex",
    lastName: "Morgan",
    title: "VP Sales",
    email: "alex@northwind.io",
    phone: null,
    status: "NEW",
    isVip: true,
    company: { id: "c1", name: "Northwind Labs" },
    createdAt: "2026-07-18T16:12:00.000Z",
  },
  {
    id: "mock-2",
    firstName: "Jordan",
    lastName: "Lee",
    title: "Director",
    email: "jordan@acme.co",
    phone: null,
    status: "CONTACTED",
    isVip: false,
    company: { id: "c2", name: "Acme Co" },
    createdAt: "2026-07-18T14:40:00.000Z",
  },
  {
    id: "mock-3",
    firstName: "Sam",
    lastName: "Rivera",
    title: null,
    email: "sam@brightline.com",
    phone: null,
    status: "QUALIFIED",
    isVip: true,
    company: { id: "c3", name: "Brightline" },
    createdAt: "2026-07-17T21:05:00.000Z",
  },
  {
    id: "mock-4",
    firstName: "Casey",
    lastName: "Nguyen",
    title: "Owner",
    email: "casey@harborpm.com",
    phone: null,
    status: "NURTURING",
    isVip: false,
    company: { id: "c4", name: "Harbor Property" },
    createdAt: "2026-07-17T18:22:00.000Z",
  },
  {
    id: "mock-5",
    firstName: "Riley",
    lastName: "Chen",
    title: "Facilities Lead",
    email: "riley@summitbuild.com",
    phone: null,
    status: "NEW",
    isVip: false,
    company: { id: "c5", name: "Summit Build" },
    createdAt: "2026-07-16T12:10:00.000Z",
  },
  {
    id: "mock-6",
    firstName: "Taylor",
    lastName: "Brooks",
    title: null,
    email: "taylor@oakcrest.edu",
    phone: null,
    status: "CONTACTED",
    isVip: false,
    company: { id: "c6", name: "Oakcrest Schools" },
    createdAt: "2026-07-16T09:45:00.000Z",
  },
  {
    id: "mock-7",
    firstName: "Morgan",
    lastName: "Patel",
    title: "Buyer",
    email: "morgan@retailnorth.com",
    phone: null,
    status: "LOST",
    isVip: false,
    company: { id: "c7", name: "Retail North" },
    createdAt: "2026-07-15T20:00:00.000Z",
  },
  {
    id: "mock-8",
    firstName: "Avery",
    lastName: "Kim",
    title: "Coordinator",
    email: "avery@faithhall.org",
    phone: null,
    status: "NEW",
    isVip: false,
    company: { id: "c8", name: "Faith Hall" },
    createdAt: "2026-07-15T15:30:00.000Z",
  },
  {
    id: "mock-9",
    firstName: "Quinn",
    lastName: "Foster",
    title: "Ops Manager",
    email: "quinn@forgeworks.com",
    phone: null,
    status: "QUALIFIED",
    isVip: true,
    company: { id: "c9", name: "Forgeworks" },
    createdAt: "2026-07-14T11:18:00.000Z",
  },
  {
    id: "mock-10",
    firstName: "Jamie",
    lastName: "Ortiz",
    title: null,
    email: "jamie@crestmed.com",
    phone: null,
    status: "NURTURING",
    isVip: false,
    company: { id: "c10", name: "Crest Medical" },
    createdAt: "2026-07-14T08:05:00.000Z",
  },
]
