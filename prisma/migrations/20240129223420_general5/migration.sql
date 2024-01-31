/*
  Warnings:

  - Added the required column `studentFullName` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payments" ADD COLUMN     "studentFullName" TEXT NOT NULL;
