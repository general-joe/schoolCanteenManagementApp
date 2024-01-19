/*
  Warnings:

  - You are about to drop the column `firstName` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `middleName` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the `Parents` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `classTeacherName` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentContact` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentFullName` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentFullName` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Parents" DROP CONSTRAINT "Parents_studentsId_fkey";

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "classTeacherName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Students" DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "middleName",
ADD COLUMN     "parentContact" TEXT NOT NULL,
ADD COLUMN     "parentFullName" TEXT NOT NULL,
ADD COLUMN     "studentFullName" TEXT NOT NULL;

-- DropTable
DROP TABLE "Parents";
