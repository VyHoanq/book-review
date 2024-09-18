/*
  Warnings:

  - You are about to drop the column `userId` on the `comment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nameUs` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_name_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_userId_fkey`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `userId`,
    ADD COLUMN `nameUs` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_name_key` ON `User`(`name`);

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_User_nameUs_fkey` FOREIGN KEY (`nameUs`) REFERENCES `User`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_Book_nameUs_fkey` FOREIGN KEY (`nameUs`) REFERENCES `Book`(`publisher`) ON DELETE RESTRICT ON UPDATE CASCADE;
