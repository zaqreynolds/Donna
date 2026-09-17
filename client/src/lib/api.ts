import {
  DEFAULT_TOUCH_TYPES,
  MOCK_ACCOUNTS,
  MOCK_CONTACTS,
  type Account,
  type AccountSocialLink,
  type Contact,
  type ContactSummary,
  type EntityNote,
  type Touch,
} from "@/lib/types"

/** Prefer same-origin `/api` so Vite can proxy to the Express server. */
const API_BASE = "/api"
const ACCOUNTS_URL = `${API_BASE}/accounts`
const CONTACTS_URL = `${API_BASE}/contacts`
const INDUSTRIES_URL = `${API_BASE}/industries`
const TOUCH_TYPES_URL = `${API_BASE}/touch-types`

export type AccountsFetchResult = {
  accounts: Account[]
  source: "api" | "mock"
}

export type ContactsFetchResult = {
  contacts: Contact[]
  touchCount: number
  source: "api" | "mock"
}

export type TouchInput = {
  type: string
  notes?: string
  date?: string
  amount?: number | null
  estimateNumber?: string | null
  socialPlatform?: string | null
  contactId?: string | null
  outcome?: string | null
  source?: string | null
  isAutomated?: boolean
}

function normalizeNote(raw: Record<string, unknown>): EntityNote {
  return {
    id: typeof raw.id === "string" ? raw.id : crypto.randomUUID(),
    text: typeof raw.text === "string" ? raw.text : "",
    createdAt:
      typeof raw.createdAt === "string"
        ? raw.createdAt
        : new Date().toISOString(),
  }
}

function normalizeNotes(value: unknown): EntityNote[] {
  if (!Array.isArray(value)) return []
  return value
    .map((note) => normalizeNote((note ?? {}) as Record<string, unknown>))
    .filter((note) => note.text.trim().length > 0)
}

function normalizeTouch(raw: Record<string, unknown>): Touch {
  const amountRaw = raw.amount
  const amount =
    typeof amountRaw === "number" && Number.isFinite(amountRaw)
      ? amountRaw
      : amountRaw == null
        ? null
        : Number.isFinite(Number(amountRaw))
          ? Number(amountRaw)
          : null

  return {
    id: typeof raw.id === "string" ? raw.id : crypto.randomUUID(),
    type: typeof raw.type === "string" ? raw.type : "Phone",
    notes: typeof raw.notes === "string" ? raw.notes : "",
    date: typeof raw.date === "string" ? raw.date : new Date().toISOString(),
    amount,
    estimateNumber:
      typeof raw.estimateNumber === "string" ? raw.estimateNumber : null,
    socialPlatform:
      typeof raw.socialPlatform === "string" ? raw.socialPlatform : null,
    accountId: typeof raw.accountId === "string" ? raw.accountId : undefined,
    contactId:
      typeof raw.contactId === "string"
        ? raw.contactId
        : raw.contactId === null
          ? null
          : undefined,
    outcome: typeof raw.outcome === "string" ? raw.outcome : null,
    source: typeof raw.source === "string" ? raw.source : null,
    isAutomated: raw.isAutomated === undefined ? undefined : Boolean(raw.isAutomated),
    createdByUserId:
      typeof raw.createdByUserId === "string" ? raw.createdByUserId : null,
  }
}

function normalizeTouches(value: unknown): Touch[] {
  if (!Array.isArray(value)) return []
  return value.map((touch) =>
    normalizeTouch((touch ?? {}) as Record<string, unknown>),
  )
}

function normalizeAccountSocials(value: unknown): AccountSocialLink[] {
  if (!Array.isArray(value)) return []
  const links: AccountSocialLink[] = []
  for (const row of value) {
    if (!row || typeof row !== "object") continue
    const platform = (row as { platform?: unknown }).platform
    const handle = (row as { handle?: unknown }).handle
    if (typeof platform !== "string" || typeof handle !== "string") continue
    const trimmedPlatform = platform.trim()
    const trimmedHandle = handle.trim()
    if (!trimmedPlatform || !trimmedHandle) continue
    const id = (row as { id?: unknown }).id
    links.push({
      ...(typeof id === "string" ? { id } : {}),
      platform: trimmedPlatform,
      handle: trimmedHandle,
    })
  }
  return links
}

function normalizeContactSummary(raw: Record<string, unknown>): ContactSummary {
  return {
    id: typeof raw.id === "string" ? raw.id : "",
    firstName: typeof raw.firstName === "string" ? raw.firstName : "",
    lastName: typeof raw.lastName === "string" ? raw.lastName : "",
    title: typeof raw.title === "string" ? raw.title : null,
    email: typeof raw.email === "string" ? raw.email : null,
    phone: typeof raw.phone === "string" ? raw.phone : null,
    officePhone: typeof raw.officePhone === "string" ? raw.officePhone : null,
    isVip: raw.isVip === undefined ? undefined : Boolean(raw.isVip),
    touches: normalizeTouches(raw.touches),
  }
}

function normalizeIndustry(raw: unknown): { id: string; name: string } {
  if (
    raw &&
    typeof raw === "object" &&
    "name" in raw &&
    typeof (raw as { name: unknown }).name === "string"
  ) {
    return {
      id:
        "id" in raw && typeof (raw as { id: unknown }).id === "string"
          ? (raw as { id: string }).id
          : "",
      name: (raw as { name: string }).name,
    }
  }
  return { id: "", name: "—" }
}

export function normalizeAccount(raw: Record<string, unknown>): Account {
  const countRaw = raw._count
  let contactCount: number | undefined
  if (typeof raw.contactCount === "number") {
    contactCount = raw.contactCount
  } else if (
    countRaw &&
    typeof countRaw === "object" &&
    "contacts" in countRaw &&
    typeof (countRaw as { contacts: unknown }).contacts === "number"
  ) {
    contactCount = (countRaw as { contacts: number }).contacts
  }

  const contacts = Array.isArray(raw.contacts)
    ? raw.contacts.map((row) =>
        normalizeContactSummary((row ?? {}) as Record<string, unknown>),
      )
    : undefined

  return {
    id: typeof raw.id === "string" ? raw.id : "",
    organizationId:
      typeof raw.organizationId === "string" ? raw.organizationId : undefined,
    name: typeof raw.name === "string" ? raw.name : "—",
    address: typeof raw.address === "string" ? raw.address : null,
    phone: typeof raw.phone === "string" ? raw.phone : null,
    website: typeof raw.website === "string" ? raw.website : null,
    status: String(raw.status ?? "NEW").toUpperCase(),
    isVip: Boolean(raw.isVip),
    source: typeof raw.source === "string" ? raw.source : null,
    ownerUserId:
      typeof raw.ownerUserId === "string" ? raw.ownerUserId : null,
    createdByUserId:
      typeof raw.createdByUserId === "string" ? raw.createdByUserId : null,
    nextTouchAt:
      typeof raw.nextTouchAt === "string" ? raw.nextTouchAt : null,
    nextTouchType:
      typeof raw.nextTouchType === "string" ? raw.nextTouchType : null,
    nextTouchNote:
      typeof raw.nextTouchNote === "string" ? raw.nextTouchNote : null,
    createdAt: typeof raw.createdAt === "string" ? raw.createdAt : "",
    updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : undefined,
    industry: normalizeIndustry(raw.industry),
    socials: normalizeAccountSocials(raw.socials),
    notes: normalizeNotes(raw.notes),
    contacts,
    touches: normalizeTouches(raw.touches),
    contactCount:
      contactCount ??
      (contacts !== undefined ? contacts.length : undefined),
  }
}

export function normalizeContact(raw: Record<string, unknown>): Contact {
  let firstName =
    typeof raw.firstName === "string" ? raw.firstName : undefined
  let lastName = typeof raw.lastName === "string" ? raw.lastName : undefined

  if (!firstName && !lastName && typeof raw.name === "string") {
    const parts = raw.name.trim().split(/\s+/)
    firstName = parts[0] ?? ""
    lastName = parts.slice(1).join(" ")
  }

  const accountRaw = raw.account
  let account: Contact["account"] = { id: "", name: "—" }

  if (typeof accountRaw === "string") {
    account = { id: "", name: accountRaw }
  } else if (
    accountRaw &&
    typeof accountRaw === "object" &&
    "name" in accountRaw &&
    typeof (accountRaw as { name: unknown }).name === "string"
  ) {
    const industryRaw = (accountRaw as { industry?: unknown }).industry
    const industry =
      industryRaw &&
      typeof industryRaw === "object" &&
      "name" in industryRaw &&
      typeof (industryRaw as { name: unknown }).name === "string"
        ? {
            id:
              "id" in industryRaw &&
              typeof (industryRaw as { id: unknown }).id === "string"
                ? (industryRaw as { id: string }).id
                : "",
            name: (industryRaw as { name: string }).name,
          }
        : null

    account = {
      id:
        "id" in accountRaw &&
        typeof (accountRaw as { id: unknown }).id === "string"
          ? (accountRaw as { id: string }).id
          : "",
      name: (accountRaw as { name: string }).name,
      industry,
    }
  }

  const accountId =
    typeof raw.accountId === "string" && raw.accountId
      ? raw.accountId
      : account.id

  return {
    id: typeof raw.id === "string" ? raw.id : "",
    organizationId:
      typeof raw.organizationId === "string" ? raw.organizationId : undefined,
    accountId,
    account,
    firstName: firstName ?? "",
    lastName: lastName ?? "",
    title: typeof raw.title === "string" ? raw.title : null,
    email: typeof raw.email === "string" ? raw.email : null,
    phone: typeof raw.phone === "string" ? raw.phone : null,
    officePhone: typeof raw.officePhone === "string" ? raw.officePhone : null,
    isVip: Boolean(raw.isVip),
    source: typeof raw.source === "string" ? raw.source : null,
    createdAt: typeof raw.createdAt === "string" ? raw.createdAt : undefined,
    updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : undefined,
    notes: normalizeNotes(raw.notes),
    touches: normalizeTouches(raw.touches),
  }
}

export async function fetchAccounts(): Promise<AccountsFetchResult> {
  try {
    const response = await fetch(ACCOUNTS_URL)
    if (!response.ok) {
      throw new Error(`Accounts request failed (${response.status})`)
    }

    const payload = (await response.json()) as { accounts?: unknown[] }
    const accounts = Array.isArray(payload.accounts)
      ? payload.accounts.map((account) =>
          normalizeAccount((account ?? {}) as Record<string, unknown>),
        )
      : []

    return { accounts, source: "api" }
  } catch {
    return { accounts: MOCK_ACCOUNTS, source: "mock" }
  }
}

export async function fetchContacts(): Promise<ContactsFetchResult> {
  try {
    const response = await fetch(CONTACTS_URL)
    if (!response.ok) {
      throw new Error(`Contacts request failed (${response.status})`)
    }

    const payload = (await response.json()) as {
      contacts?: unknown[]
      touchCount?: number
    }
    const contacts = Array.isArray(payload.contacts)
      ? payload.contacts.map((contact) =>
          normalizeContact((contact ?? {}) as Record<string, unknown>),
        )
      : []
    const touchCount =
      typeof payload.touchCount === "number"
        ? payload.touchCount
        : contacts.reduce(
            (sum, contact) => sum + (contact.touches?.length ?? 0),
            0,
          )

    return { contacts, touchCount, source: "api" }
  } catch {
    return {
      contacts: MOCK_CONTACTS,
      touchCount: MOCK_CONTACTS.length,
      source: "mock",
    }
  }
}

export async function fetchAccountDetail(accountId: string): Promise<Account> {
  const response = await fetch(`${ACCOUNTS_URL}/${accountId}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch account (${response.status})`)
  }
  const payload = (await response.json()) as { account: unknown }
  return normalizeAccount((payload.account ?? {}) as Record<string, unknown>)
}

export async function fetchContactDetail(contactId: string): Promise<Contact> {
  const response = await fetch(`${CONTACTS_URL}/${contactId}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch contact (${response.status})`)
  }
  const payload = (await response.json()) as { contact: unknown }
  return normalizeContact((payload.contact ?? {}) as Record<string, unknown>)
}

export type AccountInput = {
  name: string
  industryId: string
  phone?: string | null
  website?: string | null
  address?: string | null
  status?: string
  isVip?: boolean
  socials?: Array<{ platform: string; handle: string }>
  source?: string | null
}

export type ContactInput = {
  firstName: string
  lastName: string
  email?: string | null
  phone?: string | null
  officePhone?: string | null
  title?: string | null
  isVip?: boolean
  accountId?: string
  accountName?: string
  industryId?: string
  source?: string | null
}

export async function createAccount(input: AccountInput): Promise<Account> {
  const response = await fetch(ACCOUNTS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })
  if (!response.ok) {
    throw new Error(`Failed to create account (${response.status})`)
  }
  const payload = (await response.json()) as { account: unknown }
  return normalizeAccount((payload.account ?? {}) as Record<string, unknown>)
}

export async function updateAccount(
  accountId: string,
  input: AccountInput,
): Promise<Account> {
  const response = await fetch(`${ACCOUNTS_URL}/${accountId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })
  if (!response.ok) {
    throw new Error(`Failed to update account (${response.status})`)
  }
  const payload = (await response.json()) as { account: unknown }
  return normalizeAccount((payload.account ?? {}) as Record<string, unknown>)
}

export async function createContact(input: ContactInput): Promise<Contact> {
  const response = await fetch(CONTACTS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })
  if (!response.ok) {
    throw new Error(`Failed to create contact (${response.status})`)
  }
  const payload = (await response.json()) as { contact: unknown }
  return normalizeContact((payload.contact ?? {}) as Record<string, unknown>)
}

export async function updateContact(
  contactId: string,
  input: ContactInput,
): Promise<Contact> {
  const response = await fetch(`${CONTACTS_URL}/${contactId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })
  if (!response.ok) {
    throw new Error(`Failed to update contact (${response.status})`)
  }
  const payload = (await response.json()) as { contact: unknown }
  return normalizeContact((payload.contact ?? {}) as Record<string, unknown>)
}

export async function createAccountNote(
  accountId: string,
  text: string,
): Promise<EntityNote> {
  const response = await fetch(`${ACCOUNTS_URL}/${accountId}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  })
  if (!response.ok) {
    throw new Error(`Failed to create account note (${response.status})`)
  }
  const payload = (await response.json()) as { note: unknown }
  return normalizeNote((payload.note ?? {}) as Record<string, unknown>)
}

export async function createContactNote(
  contactId: string,
  text: string,
): Promise<EntityNote> {
  const response = await fetch(`${CONTACTS_URL}/${contactId}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  })
  if (!response.ok) {
    throw new Error(`Failed to create contact note (${response.status})`)
  }
  const payload = (await response.json()) as { note: unknown }
  return normalizeNote((payload.note ?? {}) as Record<string, unknown>)
}

function serializeTouchInput(input: TouchInput): Record<string, unknown> {
  return {
    type: input.type,
    notes: input.notes ?? "",
    ...(input.date ? { date: input.date } : {}),
    ...(input.amount !== undefined ? { amount: input.amount } : {}),
    ...(input.estimateNumber !== undefined
      ? { estimateNumber: input.estimateNumber }
      : {}),
    ...(input.socialPlatform !== undefined
      ? { socialPlatform: input.socialPlatform }
      : {}),
    ...(input.contactId !== undefined ? { contactId: input.contactId } : {}),
    ...(input.outcome !== undefined ? { outcome: input.outcome } : {}),
    ...(input.source !== undefined ? { source: input.source } : {}),
    ...(input.isAutomated !== undefined
      ? { isAutomated: input.isAutomated }
      : {}),
  }
}

export async function createAccountTouch(
  accountId: string,
  input: TouchInput,
): Promise<Touch> {
  const response = await fetch(`${ACCOUNTS_URL}/${accountId}/touches`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(serializeTouchInput(input)),
  })
  if (!response.ok) {
    throw new Error(`Failed to create account touch (${response.status})`)
  }
  const payload = (await response.json()) as { touch: unknown }
  return normalizeTouch((payload.touch ?? {}) as Record<string, unknown>)
}

export async function updateAccountTouch(
  accountId: string,
  touchId: string,
  input: Partial<TouchInput>,
): Promise<Touch> {
  const response = await fetch(
    `${ACCOUNTS_URL}/${accountId}/touches/${touchId}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...(input.type !== undefined ? { type: input.type } : {}),
        ...(input.notes !== undefined ? { notes: input.notes } : {}),
        ...(input.date !== undefined ? { date: input.date } : {}),
        ...(input.amount !== undefined ? { amount: input.amount } : {}),
        ...(input.estimateNumber !== undefined
          ? { estimateNumber: input.estimateNumber }
          : {}),
        ...(input.socialPlatform !== undefined
          ? { socialPlatform: input.socialPlatform }
          : {}),
        ...(input.contactId !== undefined
          ? { contactId: input.contactId }
          : {}),
        ...(input.outcome !== undefined ? { outcome: input.outcome } : {}),
        ...(input.source !== undefined ? { source: input.source } : {}),
        ...(input.isAutomated !== undefined
          ? { isAutomated: input.isAutomated }
          : {}),
      }),
    },
  )
  if (!response.ok) {
    throw new Error(`Failed to update account touch (${response.status})`)
  }
  const payload = (await response.json()) as { touch: unknown }
  return normalizeTouch((payload.touch ?? {}) as Record<string, unknown>)
}

export async function createContactTouch(
  contactId: string,
  input: TouchInput,
): Promise<Touch> {
  const response = await fetch(`${CONTACTS_URL}/${contactId}/touches`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(serializeTouchInput(input)),
  })
  if (!response.ok) {
    throw new Error(`Failed to create contact touch (${response.status})`)
  }
  const payload = (await response.json()) as { touch: unknown }
  return normalizeTouch((payload.touch ?? {}) as Record<string, unknown>)
}

export type CatalogItem = {
  id: string
  name: string
  isSystem: boolean
}

function normalizeCatalogItem(raw: Record<string, unknown>): CatalogItem {
  return {
    id: typeof raw.id === "string" ? raw.id : "",
    name: typeof raw.name === "string" ? raw.name : "",
    isSystem: Boolean(raw.isSystem),
  }
}

export async function fetchIndustries(): Promise<CatalogItem[]> {
  try {
    const response = await fetch(INDUSTRIES_URL)
    if (!response.ok) {
      throw new Error(`Industries request failed (${response.status})`)
    }
    const payload = (await response.json()) as { industries?: unknown[] }
    return Array.isArray(payload.industries)
      ? payload.industries.map((row) =>
          normalizeCatalogItem((row ?? {}) as Record<string, unknown>),
        )
      : []
  } catch {
    return []
  }
}

export async function createIndustry(name: string): Promise<CatalogItem> {
  const response = await fetch(INDUSTRIES_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
  if (!response.ok) {
    throw new Error(`Failed to create industry (${response.status})`)
  }
  const payload = (await response.json()) as { industry: unknown }
  return normalizeCatalogItem((payload.industry ?? {}) as Record<string, unknown>)
}

export async function updateIndustry(
  id: string,
  name: string,
): Promise<CatalogItem> {
  const response = await fetch(`${INDUSTRIES_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
  if (!response.ok) {
    throw new Error(`Failed to update industry (${response.status})`)
  }
  const payload = (await response.json()) as { industry: unknown }
  return normalizeCatalogItem((payload.industry ?? {}) as Record<string, unknown>)
}

export async function deleteIndustry(id: string): Promise<void> {
  const response = await fetch(`${INDUSTRIES_URL}/${id}`, { method: "DELETE" })
  if (!response.ok) {
    throw new Error(`Failed to delete industry (${response.status})`)
  }
}

export async function fetchTouchTypeCatalog(): Promise<CatalogItem[]> {
  try {
    const response = await fetch(TOUCH_TYPES_URL)
    if (!response.ok) {
      throw new Error(`Touch types request failed (${response.status})`)
    }
    const payload = (await response.json()) as { touchTypes?: unknown[] }
    const rows = Array.isArray(payload.touchTypes)
      ? payload.touchTypes.map((row) =>
          normalizeCatalogItem((row ?? {}) as Record<string, unknown>),
        )
      : []
    return rows.length > 0
      ? rows
      : DEFAULT_TOUCH_TYPES.map((name) => ({
          id: name,
          name,
          isSystem: true,
        }))
  } catch {
    return DEFAULT_TOUCH_TYPES.map((name) => ({
      id: name,
      name,
      isSystem: true,
    }))
  }
}

export async function fetchTouchTypes(): Promise<string[]> {
  const rows = await fetchTouchTypeCatalog()
  return rows.map((row) => row.name)
}

export async function createTouchType(name: string): Promise<CatalogItem> {
  const response = await fetch(TOUCH_TYPES_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
  if (!response.ok) {
    throw new Error(`Failed to create touch type (${response.status})`)
  }
  const payload = (await response.json()) as { touchType: unknown }
  return normalizeCatalogItem((payload.touchType ?? {}) as Record<string, unknown>)
}

export async function updateTouchType(
  id: string,
  name: string,
): Promise<CatalogItem> {
  const response = await fetch(`${TOUCH_TYPES_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
  if (!response.ok) {
    throw new Error(`Failed to update touch type (${response.status})`)
  }
  const payload = (await response.json()) as { touchType: unknown }
  return normalizeCatalogItem((payload.touchType ?? {}) as Record<string, unknown>)
}

export async function deleteTouchType(id: string): Promise<void> {
  const response = await fetch(`${TOUCH_TYPES_URL}/${id}`, { method: "DELETE" })
  if (!response.ok) {
    throw new Error(`Failed to delete touch type (${response.status})`)
  }
}

const SOCIAL_PLATFORMS_URL = `${API_BASE}/social-platforms`

export async function fetchSocialPlatformCatalog(): Promise<CatalogItem[]> {
  try {
    const response = await fetch(SOCIAL_PLATFORMS_URL)
    if (!response.ok) {
      throw new Error(`Social platforms request failed (${response.status})`)
    }
    const payload = (await response.json()) as { socialPlatforms?: unknown[] }
    return Array.isArray(payload.socialPlatforms)
      ? payload.socialPlatforms.map((row) =>
          normalizeCatalogItem((row ?? {}) as Record<string, unknown>),
        )
      : []
  } catch {
    return [
      "Instagram",
      "Facebook",
      "LinkedIn",
      "X",
      "TikTok",
      "YouTube",
      "Nextdoor",
      "Other",
    ].map((name, index) => ({
      id: `mock-sp-${index}`,
      name,
      isSystem: true,
    }))
  }
}

export async function fetchSocialPlatforms(): Promise<string[]> {
  const rows = await fetchSocialPlatformCatalog()
  return rows.map((row) => row.name)
}

export async function createSocialPlatform(name: string): Promise<CatalogItem> {
  const response = await fetch(SOCIAL_PLATFORMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
  if (!response.ok) {
    throw new Error(`Failed to create social platform (${response.status})`)
  }
  const payload = (await response.json()) as { socialPlatform: unknown }
  return normalizeCatalogItem(
    (payload.socialPlatform ?? {}) as Record<string, unknown>,
  )
}

export async function updateSocialPlatform(
  id: string,
  name: string,
): Promise<CatalogItem> {
  const response = await fetch(`${SOCIAL_PLATFORMS_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
  if (!response.ok) {
    throw new Error(`Failed to update social platform (${response.status})`)
  }
  const payload = (await response.json()) as { socialPlatform: unknown }
  return normalizeCatalogItem(
    (payload.socialPlatform ?? {}) as Record<string, unknown>,
  )
}

export async function deleteSocialPlatform(id: string): Promise<void> {
  const response = await fetch(`${SOCIAL_PLATFORMS_URL}/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) {
    throw new Error(`Failed to delete social platform (${response.status})`)
  }
}

export async function updateAccountVip(
  accountId: string,
  isVip: boolean,
): Promise<Account> {
  const response = await fetch(`${ACCOUNTS_URL}/${accountId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isVip }),
  })
  if (!response.ok) {
    throw new Error(`Failed to update account VIP (${response.status})`)
  }
  const payload = (await response.json()) as { account: unknown }
  return normalizeAccount((payload.account ?? {}) as Record<string, unknown>)
}

export async function updateContactVip(
  contactId: string,
  isVip: boolean,
): Promise<Contact> {
  const response = await fetch(`${CONTACTS_URL}/${contactId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isVip }),
  })
  if (!response.ok) {
    throw new Error(`Failed to update contact VIP (${response.status})`)
  }
  const payload = (await response.json()) as { contact: unknown }
  return normalizeContact((payload.contact ?? {}) as Record<string, unknown>)
}

export async function updateAccountStatus(
  accountId: string,
  status: string,
): Promise<Account> {
  const response = await fetch(`${ACCOUNTS_URL}/${accountId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  })
  if (!response.ok) {
    throw new Error(`Failed to update account status (${response.status})`)
  }
  const payload = (await response.json()) as { account: unknown }
  return normalizeAccount((payload.account ?? {}) as Record<string, unknown>)
}

export function formatContactName(contact: {
  firstName?: string | null
  lastName?: string | null
}): string {
  const name = `${contact.firstName ?? ""} ${contact.lastName ?? ""}`.trim()
  return name || "Unnamed contact"
}

/** @deprecated Use formatContactName */
export const formatLeadName = formatContactName

export function formatEntityDate(value?: string): string {
  if (!value) return "—"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "—"
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

/** @deprecated Use formatEntityDate */
export const formatLeadDate = formatEntityDate

export function formatNoteDateTime(value?: string): string {
  if (!value) return "—"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "—"
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
}

export function uniqueTouchTypes(touches: Touch[] | undefined): string[] {
  if (!touches?.length) return []
  const seen = new Set<string>()
  for (const touch of touches) {
    if (touch.type) seen.add(touch.type)
  }
  return [...seen]
}

export function touchSupportsAmount(type: string): boolean {
  const key = type.trim().toUpperCase().replace(/[\s-]+/g, "_")
  return key === "ESTIMATE" || key === "SALE" || key === "DEAL_WON"
}

export function touchIsEstimate(type: string): boolean {
  const key = type.trim().toUpperCase().replace(/[\s-]+/g, "_")
  return key === "ESTIMATE"
}

export function touchIsSocialMedia(type: string): boolean {
  const key = type.trim().toUpperCase().replace(/[\s-]+/g, "_")
  return key === "SOCIAL_MEDIA"
}

export type WeeklyScorecardMetrics = {
  calls: number
  emails: number
  meetings: number
  estimates: number
  estimateValue: number
  revenue: number
}

export type WeeklyScorecardResult = {
  range: { start: string; end: string }
  metrics: WeeklyScorecardMetrics
  touchCount: number
  source: "api" | "mock"
}

export async function fetchWeeklyScorecard(
  start?: string,
  end?: string,
): Promise<WeeklyScorecardResult> {
  try {
    const params = new URLSearchParams()
    if (start) params.set("start", start)
    if (end) params.set("end", end)
    const query = params.toString()
    const response = await fetch(
      `${API_BASE}/scorecard/weekly${query ? `?${query}` : ""}`,
    )
    if (!response.ok) {
      throw new Error(`Scorecard request failed (${response.status})`)
    }
    const payload = (await response.json()) as {
      range?: { start?: string; end?: string }
      metrics?: Partial<WeeklyScorecardMetrics>
      touchCount?: number
    }
    return {
      range: {
        start: payload.range?.start ?? start ?? "",
        end: payload.range?.end ?? end ?? "",
      },
      metrics: {
        calls: Number(payload.metrics?.calls ?? 0),
        emails: Number(payload.metrics?.emails ?? 0),
        meetings: Number(payload.metrics?.meetings ?? 0),
        estimates: Number(payload.metrics?.estimates ?? 0),
        estimateValue: Number(payload.metrics?.estimateValue ?? 0),
        revenue: Number(payload.metrics?.revenue ?? 0),
      },
      touchCount: Number(payload.touchCount ?? 0),
      source: "api",
    }
  } catch {
    return {
      range: { start: start ?? "", end: end ?? "" },
      metrics: {
        calls: 0,
        emails: 0,
        meetings: 0,
        estimates: 0,
        estimateValue: 0,
        revenue: 0,
      },
      touchCount: 0,
      source: "mock",
    }
  }
}
