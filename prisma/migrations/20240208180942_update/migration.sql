/*
  Warnings:

  - You are about to drop the column `index` on the `student` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "student_index_key";

-- AlterTable
ALTER TABLE "student" DROP COLUMN "index";
