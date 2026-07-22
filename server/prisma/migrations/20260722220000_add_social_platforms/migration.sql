-- CreateTable
CREATE TABLE "SocialPlatform" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isSystem" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "SocialPlatform_name_key" ON "SocialPlatform"("name");

-- CreateIndex
CREATE INDEX "SocialPlatform_name_idx" ON "SocialPlatform"("name");

-- AlterTable
ALTER TABLE "Touch" ADD COLUMN "socialPlatform" TEXT;

-- CreateIndex
CREATE INDEX "Touch_socialPlatform_idx" ON "Touch"("socialPlatform");
