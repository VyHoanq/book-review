/*
  Warnings:

  - Added the required column `id_user` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `author` ADD COLUMN `id_user` INTEGER NOT NULL;
