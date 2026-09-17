-- Domain rename: Company→Account, Lead→Contact; Touch becomes Account-centric.
-- Bootstrap a single local organization for pre-Clerk SQLite.

PRAGMA foreign_keys=OFF;

-- 1) Organization
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX "Organization_slug_key" ON "Organization"("slug");

INSERT INTO "Organization" ("id", "name", "slug", "createdAt", "updatedAt")
VALUES (
  '00000000-0000-4000-8000-000000000001',
  'Local Center',
  'local-center',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);

-- 2) Rebuild Industry with organizationId
CREATE TABLE "new_Industry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "organizationId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isSystem" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Industry_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Industry" ("id", "organizationId", "name", "isSystem")
SELECT "id", '00000000-0000-4000-8000-000000000001', "name", "isSystem" FROM "Industry";
DROP TABLE "Industry";
ALTER TABLE "new_Industry" RENAME TO "Industry";
CREATE UNIQUE INDEX "Industry_organizationId_name_key" ON "Industry"("organizationId", "name");
CREATE INDEX "Industry_organizationId_idx" ON "Industry"("organizationId");

-- 3) Rebuild TouchType
CREATE TABLE "new_TouchType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "organizationId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isSystem" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "TouchType_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_TouchType" ("id", "organizationId", "name", "isSystem")
SELECT "id", '00000000-0000-4000-8000-000000000001', "name", "isSystem" FROM "TouchType";
DROP TABLE "TouchType";
ALTER TABLE "new_TouchType" RENAME TO "TouchType";
CREATE UNIQUE INDEX "TouchType_organizationId_name_key" ON "TouchType"("organizationId", "name");
CREATE INDEX "TouchType_organizationId_idx" ON "TouchType"("organizationId");
CREATE INDEX "TouchType_name_idx" ON "TouchType"("name");

-- 4) Rebuild SocialPlatform
CREATE TABLE "new_SocialPlatform" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "organizationId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isSystem" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "SocialPlatform_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SocialPlatform" ("id", "organizationId", "name", "isSystem")
SELECT "id", '00000000-0000-4000-8000-000000000001', "name", "isSystem" FROM "SocialPlatform";
DROP TABLE "SocialPlatform";
ALTER TABLE "new_SocialPlatform" RENAME TO "SocialPlatform";
CREATE UNIQUE INDEX "SocialPlatform_organizationId_name_key" ON "SocialPlatform"("organizationId", "name");
CREATE INDEX "SocialPlatform_organizationId_idx" ON "SocialPlatform"("organizationId");
CREATE INDEX "SocialPlatform_name_idx" ON "SocialPlatform"("name");

-- 5) Account from Company (status defaults NEW; later can be updated from contacts)
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "organizationId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "website" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "isVip" BOOLEAN NOT NULL DEFAULT false,
    "source" TEXT,
    "ownerUserId" TEXT,
    "createdByUserId" TEXT,
    "nextTouchAt" DATETIME,
    "nextTouchType" TEXT,
    "nextTouchNote" TEXT,
    "industryId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Account_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Account_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "Account" (
  "id", "organizationId", "name", "address", "phone", "website", "status", "isVip",
  "source", "ownerUserId", "createdByUserId", "nextTouchAt", "nextTouchType", "nextTouchNote",
  "industryId", "createdAt", "updatedAt"
)
SELECT
  "id",
  '00000000-0000-4000-8000-000000000001',
  "name",
  "address",
  "phone",
  "website",
  'NEW',
  "isVip",
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  "industryId",
  "createdAt",
  "updatedAt"
FROM "Company";
CREATE INDEX "Account_organizationId_idx" ON "Account"("organizationId");
CREATE INDEX "Account_industryId_idx" ON "Account"("industryId");
CREATE INDEX "Account_name_idx" ON "Account"("name");
CREATE INDEX "Account_isVip_idx" ON "Account"("isVip");
CREATE INDEX "Account_status_idx" ON "Account"("status");
CREATE INDEX "Account_ownerUserId_idx" ON "Account"("ownerUserId");
CREATE INDEX "Account_nextTouchAt_idx" ON "Account"("nextTouchAt");

-- Prefer the "best" lead status onto the account when present
UPDATE "Account"
SET "status" = (
  SELECT "Lead"."status" FROM "Lead"
  WHERE "Lead"."companyId" = "Account"."id"
  ORDER BY
    CASE "Lead"."status"
      WHEN 'QUALIFIED' THEN 1
      WHEN 'NURTURING' THEN 2
      WHEN 'CONTACTED' THEN 3
      WHEN 'NEW' THEN 4
      WHEN 'LOST' THEN 5
      ELSE 6
    END
  LIMIT 1
)
WHERE EXISTS (SELECT 1 FROM "Lead" WHERE "Lead"."companyId" = "Account"."id");

-- 6) Contact from Lead
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "organizationId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "title" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "officePhone" TEXT,
    "isVip" BOOLEAN NOT NULL DEFAULT false,
    "source" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Contact_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Contact_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "Contact" (
  "id", "organizationId", "accountId", "firstName", "lastName", "title", "email",
  "phone", "officePhone", "isVip", "source", "createdAt", "updatedAt"
)
SELECT
  "id",
  '00000000-0000-4000-8000-000000000001',
  "companyId",
  "firstName",
  "lastName",
  "title",
  "email",
  "phone",
  "officePhone",
  "isVip",
  NULL,
  "createdAt",
  "createdAt"
FROM "Lead";
CREATE INDEX "Contact_organizationId_idx" ON "Contact"("organizationId");
CREATE INDEX "Contact_accountId_idx" ON "Contact"("accountId");
CREATE INDEX "Contact_lastName_firstName_idx" ON "Contact"("lastName", "firstName");
CREATE INDEX "Contact_email_idx" ON "Contact"("email");
CREATE INDEX "Contact_isVip_idx" ON "Contact"("isVip");
CREATE INDEX "Contact_createdAt_idx" ON "Contact"("createdAt");

-- 7) AccountSocialLink from CompanySocialLink
CREATE TABLE "AccountSocialLink" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "organizationId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "handle" TEXT NOT NULL,
    CONSTRAINT "AccountSocialLink_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "AccountSocialLink_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "AccountSocialLink" ("id", "organizationId", "accountId", "platform", "handle")
SELECT "id", '00000000-0000-4000-8000-000000000001', "companyId", "platform", "handle" FROM "CompanySocialLink";
CREATE UNIQUE INDEX "AccountSocialLink_accountId_platform_key" ON "AccountSocialLink"("accountId", "platform");
CREATE INDEX "AccountSocialLink_organizationId_idx" ON "AccountSocialLink"("organizationId");
CREATE INDEX "AccountSocialLink_accountId_idx" ON "AccountSocialLink"("accountId");
CREATE INDEX "AccountSocialLink_platform_idx" ON "AccountSocialLink"("platform");

-- 8) AccountNote from CompanyNote
CREATE TABLE "AccountNote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "organizationId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AccountNote_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "AccountNote_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "AccountNote" ("id", "organizationId", "text", "accountId", "createdAt")
SELECT "id", '00000000-0000-4000-8000-000000000001', "text", "companyId", "createdAt" FROM "CompanyNote";
CREATE INDEX "AccountNote_organizationId_idx" ON "AccountNote"("organizationId");
CREATE INDEX "AccountNote_accountId_idx" ON "AccountNote"("accountId");

-- 9) ContactNote from LeadNote
CREATE TABLE "ContactNote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "organizationId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ContactNote_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ContactNote_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "ContactNote" ("id", "organizationId", "text", "contactId", "createdAt")
SELECT "id", '00000000-0000-4000-8000-000000000001', "text", "leadId", "createdAt" FROM "LeadNote";
CREATE INDEX "ContactNote_organizationId_idx" ON "ContactNote"("organizationId");
CREATE INDEX "ContactNote_contactId_idx" ON "ContactNote"("contactId");
CREATE INDEX "ContactNote_createdAt_idx" ON "ContactNote"("createdAt");

-- 10) Rebuild Touch: accountId required, contactId optional (former leadId)
CREATE TABLE "new_Touch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "organizationId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "contactId" TEXT,
    "createdByUserId" TEXT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "outcome" TEXT,
    "source" TEXT,
    "isAutomated" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT NOT NULL DEFAULT '',
    "amount" REAL,
    "estimateNumber" TEXT,
    "socialPlatform" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Touch_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Touch_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Touch_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Touch" (
  "id", "organizationId", "accountId", "contactId", "createdByUserId", "date", "type",
  "outcome", "source", "isAutomated", "notes", "amount", "estimateNumber", "socialPlatform",
  "createdAt", "updatedAt"
)
SELECT
  t."id",
  '00000000-0000-4000-8000-000000000001',
  l."companyId",
  t."leadId",
  NULL,
  t."date",
  t."type",
  NULL,
  NULL,
  false,
  t."notes",
  t."amount",
  t."estimateNumber",
  t."socialPlatform",
  t."date",
  t."date"
FROM "Touch" t
INNER JOIN "Lead" l ON l."id" = t."leadId";
DROP TABLE "Touch";
ALTER TABLE "new_Touch" RENAME TO "Touch";
CREATE INDEX "Touch_organizationId_idx" ON "Touch"("organizationId");
CREATE INDEX "Touch_accountId_idx" ON "Touch"("accountId");
CREATE INDEX "Touch_contactId_idx" ON "Touch"("contactId");
CREATE INDEX "Touch_organizationId_date_idx" ON "Touch"("organizationId", "date");
CREATE INDEX "Touch_date_idx" ON "Touch"("date");
CREATE INDEX "Touch_type_idx" ON "Touch"("type");
CREATE INDEX "Touch_outcome_idx" ON "Touch"("outcome");
CREATE INDEX "Touch_estimateNumber_idx" ON "Touch"("estimateNumber");
CREATE INDEX "Touch_socialPlatform_idx" ON "Touch"("socialPlatform");
CREATE INDEX "Touch_isAutomated_idx" ON "Touch"("isAutomated");

-- 11) Drop old tables
DROP TABLE "LeadNote";
DROP TABLE "CompanyNote";
DROP TABLE "CompanySocialLink";
DROP TABLE "Lead";
DROP TABLE "Company";

PRAGMA foreign_keys=ON;
