/*
  Warnings:

  - You are about to drop the column `Gender` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `Gender`,
    ADD COLUMN `gender` VARCHAR(191) NULL;
