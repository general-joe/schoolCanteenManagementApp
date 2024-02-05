/*
  Warnings:

  - A unique constraint covering the columns `[index]` on the table `Students` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Students_index_key" ON "Students"("index");
