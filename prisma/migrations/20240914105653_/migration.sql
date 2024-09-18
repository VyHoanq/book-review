/*
  Warnings:

  - Added the required column `bookName` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `bookName` VARCHAR(191) NOT NULL,
    ADD COLUMN `userName` VARCHAR(191) NOT NULL;
