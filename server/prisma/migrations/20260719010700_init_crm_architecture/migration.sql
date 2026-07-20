-- Align schema to finalized Donna CRM architecture.
-- Maps legacy columns: Company.mainPhone -> phone, CompanyNote.body -> text,
-- Lead.phoneNumber -> phone, and TouchType enum values -> UI labels.

PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;

-- Company: mainPhone -> phone
CREATE TABLE "new_Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "industryId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Company_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Company" ("id", "name", "address", "phone", "industryId", "createdAt", "updatedAt")
SELECT "id", "name", "address", "mainPhone", "industryId", "createdAt", "updatedAt" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
CREATE INDEX "Company_industryId_idx" ON "Company"("industryId");
CREATE INDEX "Company_name_idx" ON "Company"("name");

-- CompanyNote: body -> text; drop updatedAt
CREATE TABLE "new_CompanyNote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CompanyNote_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CompanyNote" ("id", "text", "companyId", "createdAt")
SELECT "id", "body", "companyId", "createdAt" FROM "CompanyNote";
DROP TABLE "CompanyNote";
ALTER TABLE "new_CompanyNote" RENAME TO "CompanyNote";
CREATE INDEX "CompanyNote_companyId_idx" ON "CompanyNote"("companyId");

-- Industry: keep id/name only
CREATE TABLE "new_Industry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Industry" ("id", "name") SELECT "id", "name" FROM "Industry";
DROP TABLE "Industry";
ALTER TABLE "new_Industry" RENAME TO "Industry";
CREATE UNIQUE INDEX "Industry_name_key" ON "Industry"("name");

-- Lead: phoneNumber -> phone; drop createdAt/updatedAt
CREATE TABLE "new_Lead" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "title" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "companyId" TEXT NOT NULL,
    CONSTRAINT "Lead_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Lead" ("id", "firstName", "lastName", "title", "email", "phone", "status", "companyId")
SELECT "id", "firstName", "lastName", "title", "email", "phoneNumber", "status", "companyId" FROM "Lead";
DROP TABLE "Lead";
ALTER TABLE "new_Lead" RENAME TO "Lead";
CREATE INDEX "Lead_companyId_idx" ON "Lead"("companyId");
CREATE INDEX "Lead_lastName_firstName_idx" ON "Lead"("lastName", "firstName");
CREATE INDEX "Lead_email_idx" ON "Lead"("email");
CREATE INDEX "Lead_status_idx" ON "Lead"("status");

-- Touch: enum labels -> UI strings; date defaults to now; drop createdAt/updatedAt
CREATE TABLE "new_Touch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    CONSTRAINT "Touch_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Touch" ("id", "date", "type", "notes", "leadId")
SELECT
    "id",
    "date",
    CASE "type"
        WHEN 'PHONE' THEN 'Phone'
        WHEN 'EMAIL' THEN 'Email'
        WHEN 'NETWORKING' THEN 'Networking'
        WHEN 'CANVASSING' THEN 'Canvassing'
        WHEN 'COLD_CALL' THEN 'Cold Call'
        WHEN 'FACE_TO_FACE' THEN 'Face to Face'
        WHEN 'LINKEDIN' THEN 'LinkedIn'
        WHEN 'RETREVA' THEN 'Retreva'
        WHEN 'TEXT' THEN 'Text'
        WHEN 'VOICEMAIL' THEN 'Voicemail'
        WHEN 'VIDEO_MESSAGE' THEN 'Video Message'
        WHEN 'POST_CARD' THEN 'Post Card'
        WHEN 'SOCIAL_MEDIA' THEN 'Social Media'
        WHEN 'ESTIMATE' THEN 'Estimate'
        WHEN 'INVOICE' THEN 'Invoice'
        ELSE "type"
    END,
    "notes",
    "leadId"
FROM "Touch";
DROP TABLE "Touch";
ALTER TABLE "new_Touch" RENAME TO "Touch";
CREATE INDEX "Touch_leadId_idx" ON "Touch"("leadId");
CREATE INDEX "Touch_date_idx" ON "Touch"("date");
CREATE INDEX "Touch_type_idx" ON "Touch"("type");

PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
