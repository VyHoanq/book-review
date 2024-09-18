/*
  Warnings:

  - You are about to drop the column `authorId_author` on the `book` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_authorId_author_fkey`;

-- AlterTable
ALTER TABLE `book` DROP COLUMN `authorId_author`;
