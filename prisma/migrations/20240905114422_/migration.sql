/*
  Warnings:

  - The primary key for the `banner` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `banner` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `banner` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_banner` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `banner` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `link`,
    ADD COLUMN `id_banner` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `title` VARCHAR(191) NULL,
    MODIFY `imageUrl` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id_banner`);

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Category` (
    `id_category` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `slug` VARCHAR(255) NULL,
    `imageUrl` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `code` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Category_slug_key`(`slug`),
    PRIMARY KEY (`id_category`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
