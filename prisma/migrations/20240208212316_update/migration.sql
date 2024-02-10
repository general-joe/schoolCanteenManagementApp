/*
  Warnings:

  - You are about to drop the column `classSize` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `studentid` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `student` table. All the data in the column will be lost.
  - You are about to drop the `classAssignment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `classTeacherName` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dob` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentContact` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentFullName` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentFullName` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_studentid_fkey";

-- DropForeignKey
ALTER TABLE "classAssignment" DROP CONSTRAINT "classAssignment_classId_fkey";

-- DropForeignKey
ALTER TABLE "classAssignment" DROP CONSTRAINT "classAssignment_studentIndexNumber_fkey";

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "classSize",
DROP COLUMN "studentid",
ADD COLUMN     "classTeacherName" TEXT NOT NULL,
ADD COLUMN     "delflag" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "student" DROP COLUMN "name",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "classid" TEXT,
ADD COLUMN     "delflag" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "dob" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "parentContact" TEXT NOT NULL,
ADD COLUMN     "parentFullName" TEXT NOT NULL,
ADD COLUMN     "studentFullName" TEXT NOT NULL;

-- DropTable
DROP TABLE "classAssignment";

-- CreateTable
CREATE TABLE "Admins" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "delflag" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" TEXT NOT NULL,
    "studentFullName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amountPaid" DOUBLE PRECISION NOT NULL,
    "delflag" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studentid" TEXT,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admins_email_key" ON "Admins"("email");

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_classid_fkey" FOREIGN KEY ("classid") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_studentid_fkey" FOREIGN KEY ("studentid") REFERENCES "student"("indexNumber") ON DELETE SET NULL ON UPDATE CASCADE;
