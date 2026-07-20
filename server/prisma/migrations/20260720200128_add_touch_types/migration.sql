-- CreateTable
CREATE TABLE "TouchType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Touch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "notes" TEXT NOT NULL DEFAULT '',
    "leadId" TEXT NOT NULL,
    CONSTRAINT "Touch_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Touch" ("date", "id", "leadId", "notes", "type") SELECT "date", "id", "leadId", "notes", "type" FROM "Touch";
DROP TABLE "Touch";
ALTER TABLE "new_Touch" RENAME TO "Touch";
CREATE INDEX "Touch_leadId_idx" ON "Touch"("leadId");
CREATE INDEX "Touch_date_idx" ON "Touch"("date");
CREATE INDEX "Touch_type_idx" ON "Touch"("type");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "TouchType_name_key" ON "TouchType"("name");

-- CreateIndex
CREATE INDEX "TouchType_name_idx" ON "TouchType"("name");
