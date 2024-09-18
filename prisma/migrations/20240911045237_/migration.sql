/*
  Warnings:

  - You are about to drop the column `id_author` on the `book` table. All the data in the column will be lost.
  - Added the required column `id_user` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_id_author_fkey`;

-- AlterTable
ALTER TABLE `book` DROP COLUMN `id_author`,
    ADD COLUMN `authorId_author` INTEGER NULL,
    ADD COLUMN `id_user` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_authorId_author_fkey` FOREIGN KEY (`authorId_author`) REFERENCES `Author`(`id_author`) ON DELETE SET NULL ON UPDATE CASCADE;
