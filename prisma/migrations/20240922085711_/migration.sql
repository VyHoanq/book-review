/*
  Warnings:

  - You are about to drop the column `id` on the `author` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `author` DROP FOREIGN KEY `Author_id_fkey`;

-- AlterTable
ALTER TABLE `author` DROP COLUMN `id`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Author` ADD CONSTRAINT `Author_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
