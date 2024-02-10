/*
  Warnings:

  - You are about to drop the column `DateOfBirth` on the `student` table. All the data in the column will be lost.
  - Added the required column `dob` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "student" DROP COLUMN "DateOfBirth",
ADD COLUMN     "dob" TIMESTAMP(3) NOT NULL;
