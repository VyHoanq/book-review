/*
  Warnings:

  - You are about to drop the column `userId` on the `author` table. All the data in the column will be lost.
  - Added the required column `id` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `author` DROP FOREIGN KEY `Author_userId_fkey`;

-- AlterTable
ALTER TABLE `author` DROP COLUMN `userId`,
    ADD COLUMN `id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Author` ADD CONSTRAINT `Author_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
