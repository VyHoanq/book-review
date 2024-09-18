/*
  Warnings:

  - Added the required column `mainGenre` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storyGenre` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `author` ADD COLUMN `mainGenre` VARCHAR(191) NOT NULL,
    ADD COLUMN `storyGenre` VARCHAR(191) NOT NULL;
