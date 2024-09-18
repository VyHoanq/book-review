/*
  Warnings:

  - A unique constraint covering the columns `[id_author]` on the table `Author` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Author_id_author_key` ON `Author`(`id_author`);
