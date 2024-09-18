/*
  Warnings:

  - You are about to drop the column `id_user` on the `author` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `book` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_user` on the `user` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `author` DROP FOREIGN KEY `Author_id_user_fkey`;

-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_id_user_fkey`;

-- AlterTable
ALTER TABLE `author` DROP COLUMN `id_user`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `book` DROP COLUMN `id_user`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `id_user`,
    ADD COLUMN `userId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`userId`);

-- AddForeignKey
ALTER TABLE `Author` ADD CONSTRAINT `Author_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
