/*
  Warnings:

  - You are about to drop the column `id` on the `author` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `author` DROP FOREIGN KEY `Author_id_fkey`;

-- AlterTable
ALTER TABLE `author` DROP COLUMN `id`;
