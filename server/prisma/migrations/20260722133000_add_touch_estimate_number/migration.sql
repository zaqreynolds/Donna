-- AlterTable
ALTER TABLE "Touch" ADD COLUMN "estimateNumber" TEXT;

-- CreateIndex
CREATE INDEX "Touch_estimateNumber_idx" ON "Touch"("estimateNumber");
