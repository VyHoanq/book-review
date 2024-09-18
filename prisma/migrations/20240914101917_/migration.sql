/*
  Warnings:

  - You are about to drop the column `name` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `nameUs` on the `comment` table. All the data in the column will be lost.
  - Added the required column `bookId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_Book_nameUs_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_User_nameUs_fkey`;

-- DropIndex
DROP INDEX `Comment_name_key` ON `comment`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `name`,
    DROP COLUMN `nameUs`,
    ADD COLUMN `bookId` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
