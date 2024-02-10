-- CreateEnum
CREATE TYPE "status" AS ENUM ('present', 'absent');

-- CreateTable
CREATE TABLE "student" (
    "indexNumber" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("indexNumber")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" TEXT NOT NULL,
    "classSize" INTEGER NOT NULL DEFAULT 0,
    "className" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studentid" TEXT,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classAssignment" (
    "id" TEXT NOT NULL,
    "studentIndexNumber" TEXT,
    "classId" TEXT,

    CONSTRAINT "classAssignment_pkey" PRIMARY KEY ("id")
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

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_studentid_fkey" FOREIGN KEY ("studentid") REFERENCES "student"("indexNumber") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classAssignment" ADD CONSTRAINT "classAssignment_studentIndexNumber_fkey" FOREIGN KEY ("studentIndexNumber") REFERENCES "student"("indexNumber") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classAssignment" ADD CONSTRAINT "classAssignment_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_studentid_fkey" FOREIGN KEY ("studentid") REFERENCES "student"("indexNumber") ON DELETE SET NULL ON UPDATE CASCADE;
