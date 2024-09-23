/*
  Warnings:

  - You are about to drop the `_bookcategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_bookcategories` DROP FOREIGN KEY `_BookCategories_A_fkey`;

-- DropForeignKey
ALTER TABLE `_bookcategories` DROP FOREIGN KEY `_BookCategories_B_fkey`;

-- DropTable
DROP TABLE `_bookcategories`;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_id_category_fkey` FOREIGN KEY (`id_category`) REFERENCES `Category`(`id_category`) ON DELETE CASCADE ON UPDATE CASCADE;
