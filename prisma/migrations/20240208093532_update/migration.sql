/*
  Warnings:

  - You are about to drop the `Payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Students` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "status" AS ENUM ('present', 'absent');

-- DropForeignKey
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_studentsId_fkey";

-- DropForeignKey
ALTER TABLE "Students" DROP CONSTRAINT "Students_classId_fkey";

-- DropTable
DROP TABLE "Payments";

-- DropTable
DROP TABLE "Students";

-- CreateTable
CREATE TABLE "student" (
    "indexNumber" TEXT NOT NULL,
    "studentFullName" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "index" TEXT NOT NULL,
    "parentFullName" TEXT NOT NULL,
    "parentContact" TEXT NOT NULL,
    "delflag" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "classid" TEXT,

    CONSTRAINT "student_pkey" PRIMARY KEY ("indexNumber")
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

-- CreateTable
CREATE TABLE "attendance" (
    "id" TEXT NOT NULL,
    "attendanceStatus" "status" NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studentid" TEXT,

    CONSTRAINT "attendance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_index_key" ON "student"("index");

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_classid_fkey" FOREIGN KEY ("classid") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_studentid_fkey" FOREIGN KEY ("studentid") REFERENCES "student"("indexNumber") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_studentid_fkey" FOREIGN KEY ("studentid") REFERENCES "student"("indexNumber") ON DELETE SET NULL ON UPDATE CASCADE;
