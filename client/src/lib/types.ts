export type AccountStatus =
  | "NEW"
  | "CONTACTED"
  | "QUALIFIED"
  | "NURTURING"
  | "LOST"
  | string

export type EntityNote = {
  id: string
  text: string
  createdAt: string
}

export type Touch = {
  id: string
  type: string
  notes: string
  date: string
  amount?: number | null
  estimateNumber?: string | null
  socialPlatform?: string | null
  accountId?: string
  contactId?: string | null
  outcome?: string | null
  source?: string | null
  isAutomated?: boolean
  createdByUserId?: string | null
}

/** @deprecated Use Touch */
export type LeadTouch = Touch

export type AccountSocialLink = {
  id?: string
  platform: string
  handle: string
}

export type Account = {
  id: string
  organizationId?: string
  name: string
  address: string | null
  phone: string | null
  website: string | null
  status: AccountStatus
  isVip: boolean
  source?: string | null
  ownerUserId?: string | null
  createdByUserId?: string | null
  nextTouchAt?: string | null
  nextTouchType?: string | null
  nextTouchNote?: string | null
  industry: {
    id: string
    name: string
  }
  socials?: AccountSocialLink[]
  notes?: EntityNote[]
  contacts?: ContactSummary[]
  touches?: Touch[]
  contactCount?: number
  createdAt: string
  updatedAt?: string
}

/** Lightweight contact row embedded on account detail */
export type ContactSummary = {
  id: string
  firstName: string
  lastName: string
  title: string | null
  email: string | null
  phone: string | null
  officePhone?: string | null
  isVip?: boolean
  touches?: Touch[]
}

export type Contact = {
  id: string
  organizationId?: string
  accountId: string
  account: {
    id: string
    name: string
    industry?: {
      id: string
      name: string
    } | null
  }
  firstName: string
  lastName: string
  title: string | null
  email: string | null
  phone: string | null
  officePhone: string | null
  isVip: boolean
  source?: string | null
  notes?: EntityNote[]
  touches?: Touch[]
  createdAt?: string
  updatedAt?: string
}

export const DEFAULT_TOUCH_TYPES = [
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

export const DEFAULT_TOUCH_OUTCOMES = [
  "Connected",
  "No answer",
  "Voicemail",
  "Busy",
  "Wrong number",
  "Not interested",
  "Follow up later",
  "Meeting booked",
] as const

export const MOCK_ACCOUNTS: Account[] = [
  {
    id: "mock-c1",
    name: "Northwind Labs",
    address: "120 Market St, Austin, TX",
    phone: "555-0100",
    website: null,
    socials: [],
    status: "NEW",
    isVip: true,
    createdAt: "2026-07-18T16:00:00.000Z",
    industry: { id: "i1", name: "Commercial Real Estate" },
    contactCount: 1,
    touches: [{ id: "t1", type: "Phone", notes: "", date: "2026-09-10T12:00:00.000Z" }],
  },
  {
    id: "mock-c2",
    name: "Acme Co",
    address: "88 Industrial Blvd, Dallas, TX",
    phone: "555-0142",
    website: null,
    socials: [],
    status: "CONTACTED",
    isVip: false,
    createdAt: "2026-07-17T12:00:00.000Z",
    industry: { id: "i2", name: "Manufacturing" },
    contactCount: 1,
    touches: [{ id: "t2", type: "Email", notes: "", date: "2026-08-01T12:00:00.000Z" }],
  },
  {
    id: "mock-c3",
    name: "Brightline Health",
    address: "400 Clinic Way, Houston, TX",
    phone: "555-0199",
    website: null,
    socials: [],
    status: "QUALIFIED",
    isVip: false,
    createdAt: "2026-07-16T09:30:00.000Z",
    industry: { id: "i3", name: "Healthcare" },
    contactCount: 1,
  },
  {
    id: "mock-c4",
    name: "Harbor Property",
    address: "12 Lakeview Dr, Seattle, WA",
    phone: null,
    website: null,
    socials: [],
    status: "NURTURING",
    isVip: true,
    createdAt: "2026-07-15T18:20:00.000Z",
    industry: { id: "i4", name: "Apartments/Property Management" },
    contactCount: 1,
  },
  {
    id: "mock-c5",
    name: "Summit Build",
    address: "900 Crane Ave, Denver, CO",
    phone: "555-0177",
    website: null,
    socials: [],
    status: "NEW",
    isVip: false,
    createdAt: "2026-07-14T11:10:00.000Z",
    industry: { id: "i5", name: "Construction" },
    contactCount: 1,
  },
]

export const MOCK_CONTACTS: Contact[] = [
  {
    id: "mock-1",
    accountId: "mock-c1",
    firstName: "Alex",
    lastName: "Morgan",
    title: "VP Sales",
    email: "alex@northwind.io",
    phone: null,
    officePhone: null,
    isVip: true,
    account: { id: "mock-c1", name: "Northwind Labs" },
    createdAt: "2026-07-18T16:12:00.000Z",
  },
  {
    id: "mock-2",
    accountId: "mock-c2",
    firstName: "Jordan",
    lastName: "Lee",
    title: "Director",
    email: "jordan@acme.co",
    phone: null,
    officePhone: null,
    isVip: false,
    account: { id: "mock-c2", name: "Acme Co" },
    createdAt: "2026-07-18T14:40:00.000Z",
  },
  {
    id: "mock-3",
    accountId: "mock-c3",
    firstName: "Sam",
    lastName: "Rivera",
    title: null,
    email: "sam@brightline.com",
    phone: null,
    officePhone: null,
    isVip: true,
    account: { id: "mock-c3", name: "Brightline Health" },
    createdAt: "2026-07-17T21:05:00.000Z",
  },
  {
    id: "mock-4",
    accountId: "mock-c4",
    firstName: "Casey",
    lastName: "Nguyen",
    title: "Owner",
    email: "casey@harborpm.com",
    phone: null,
    officePhone: null,
    isVip: false,
    account: { id: "mock-c4", name: "Harbor Property" },
    createdAt: "2026-07-17T18:22:00.000Z",
  },
  {
    id: "mock-5",
    accountId: "mock-c5",
    firstName: "Riley",
    lastName: "Chen",
    title: "Facilities Lead",
    email: "riley@summitbuild.com",
    phone: null,
    officePhone: null,
    isVip: false,
    account: { id: "mock-c5", name: "Summit Build" },
    createdAt: "2026-07-16T12:10:00.000Z",
  },
]
