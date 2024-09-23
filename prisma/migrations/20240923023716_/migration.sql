/*
  Warnings:

  - You are about to drop the column `public_id` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `publisher` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `resume_review` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `book` table. All the data in the column will be lost.
  - Added the required column `authorName` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isbn` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `published` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate_medium` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_id_category_fkey`;

-- AlterTable
ALTER TABLE `book` DROP COLUMN `public_id`,
    DROP COLUMN `publisher`,
    DROP COLUMN `resume_review`,
    DROP COLUMN `size`,
    ADD COLUMN `authorName` VARCHAR(191) NOT NULL,
    ADD COLUMN `isbn` VARCHAR(191) NOT NULL,
    ADD COLUMN `language` VARCHAR(191) NOT NULL,
    ADD COLUMN `published` VARCHAR(191) NOT NULL,
    ADD COLUMN `rate_medium` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `_BookCategories` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BookCategories_AB_unique`(`A`, `B`),
    INDEX `_BookCategories_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_BookCategories` ADD CONSTRAINT `_BookCategories_A_fkey` FOREIGN KEY (`A`) REFERENCES `Book`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BookCategories` ADD CONSTRAINT `_BookCategories_B_fkey` FOREIGN KEY (`B`) REFERENCES `Category`(`id_category`) ON DELETE CASCADE ON UPDATE CASCADE;
