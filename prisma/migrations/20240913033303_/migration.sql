/*
  Warnings:

  - You are about to drop the column `bookId` on the `comment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[publisher]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_bookId_fkey`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `bookId`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Book_publisher_key` ON `Book`(`publisher`);

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_name_fkey` FOREIGN KEY (`name`) REFERENCES `Book`(`publisher`) ON DELETE RESTRICT ON UPDATE CASCADE;
