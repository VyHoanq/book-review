/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Author` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `author` ADD COLUMN `slug` VARCHAR(255) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Author_slug_key` ON `Author`(`slug`);
