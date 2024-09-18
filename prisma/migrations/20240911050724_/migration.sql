/*
  Warnings:

  - You are about to drop the column `authorId` on the `book` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_id_fkey`;

-- AlterTable
ALTER TABLE `book` DROP COLUMN `authorId`;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
