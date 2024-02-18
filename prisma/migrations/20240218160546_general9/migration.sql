/*
  Warnings:

  - Added the required column `isPaid` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmountCollected` to the `payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payment" ADD COLUMN     "foodId" TEXT,
ADD COLUMN     "isPaid" BOOLEAN NOT NULL,
ADD COLUMN     "totalAmountCollected" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "food" (
    "id" TEXT NOT NULL,
    "menu" TEXT NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,
    "delflag" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE SET NULL ON UPDATE CASCADE;
