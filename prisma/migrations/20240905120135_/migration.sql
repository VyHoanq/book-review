/*
  Warnings:

  - Added the required column `isActive` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `author` ADD COLUMN `isActive` BOOLEAN NOT NULL;
