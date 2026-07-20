-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lead" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "title" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "companyId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Lead_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Lead" ("companyId", "email", "firstName", "id", "lastName", "phone", "status", "title") SELECT "companyId", "email", "firstName", "id", "lastName", "phone", "status", "title" FROM "Lead";
DROP TABLE "Lead";
ALTER TABLE "new_Lead" RENAME TO "Lead";
CREATE INDEX "Lead_companyId_idx" ON "Lead"("companyId");
CREATE INDEX "Lead_lastName_firstName_idx" ON "Lead"("lastName", "firstName");
CREATE INDEX "Lead_email_idx" ON "Lead"("email");
CREATE INDEX "Lead_status_idx" ON "Lead"("status");
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
