-- DropForeignKey
ALTER TABLE `author` DROP FOREIGN KEY `Author_id_fkey`;

-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_id_category_fkey`;

-- AddForeignKey
ALTER TABLE `Author` ADD CONSTRAINT `Author_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_id_category_fkey` FOREIGN KEY (`id_category`) REFERENCES `Category`(`id_category`) ON DELETE CASCADE ON UPDATE CASCADE;
