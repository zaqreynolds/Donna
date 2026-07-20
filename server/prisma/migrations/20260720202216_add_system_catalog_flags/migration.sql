-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Industry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isSystem" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Industry" ("id", "name") SELECT "id", "name" FROM "Industry";
DROP TABLE "Industry";
ALTER TABLE "new_Industry" RENAME TO "Industry";
CREATE UNIQUE INDEX "Industry_name_key" ON "Industry"("name");
CREATE TABLE "new_TouchType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isSystem" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_TouchType" ("id", "name") SELECT "id", "name" FROM "TouchType";
DROP TABLE "TouchType";
ALTER TABLE "new_TouchType" RENAME TO "TouchType";
CREATE UNIQUE INDEX "TouchType_name_key" ON "TouchType"("name");
CREATE INDEX "TouchType_name_idx" ON "TouchType"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- Lock built-in catalog rows
UPDATE "Industry" SET "isSystem" = 1 WHERE "name" IN (
  'Commercial Real Estate',
  'Apartments/Property Management',
  'Construction',
  'Healthcare',
  'Education',
  'Retail',
  'Manufacturing',
  'Religious',
  'Other'
);
UPDATE "TouchType" SET "isSystem" = 1 WHERE "name" IN (
  'Phone',
  'Email',
  'Networking',
  'Canvassing',
  'Cold Call',
  'Face to Face',
  'LinkedIn',
  'Retreva',
  'Text',
  'Voicemail',
  'Video Message',
  'Post Card',
  'Social Media',
  'Estimate',
  'Invoice'
);
