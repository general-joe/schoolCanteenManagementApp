/*
  Warnings:

  - You are about to drop the column `date` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the `Admins` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Date` to the `payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payment" DROP COLUMN "date",
ADD COLUMN     "Date" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Admins";

-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "delflag" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");
