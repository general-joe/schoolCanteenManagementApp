/*
  Warnings:

  - You are about to drop the column `PhoneNumber` on the `Admins` table. All the data in the column will be lost.
  - Added the required column `phoneNumber` to the `Admins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admins" DROP COLUMN "PhoneNumber",
ADD COLUMN     "phoneNumber" TEXT NOT NULL;
