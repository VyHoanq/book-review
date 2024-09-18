/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nameUs]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Comment_name_key` ON `Comment`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Comment_nameUs_key` ON `Comment`(`nameUs`);
