-- AlterTable
ALTER TABLE "Company" ADD COLUMN "website" TEXT;

-- AlterTable
ALTER TABLE "Lead" ADD COLUMN "officePhone" TEXT;

-- CreateTable
CREATE TABLE "CompanySocialLink" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyId" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "handle" TEXT NOT NULL,
    CONSTRAINT "CompanySocialLink_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "CompanySocialLink_companyId_idx" ON "CompanySocialLink"("companyId");

-- CreateIndex
CREATE INDEX "CompanySocialLink_platform_idx" ON "CompanySocialLink"("platform");

-- CreateIndex
CREATE UNIQUE INDEX "CompanySocialLink_companyId_platform_key" ON "CompanySocialLink"("companyId", "platform");
