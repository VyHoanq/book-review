-- AlterTable
ALTER TABLE `book` ADD COLUMN `authorId_author` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_authorId_author_fkey` FOREIGN KEY (`authorId_author`) REFERENCES `Author`(`id_author`) ON DELETE SET NULL ON UPDATE CASCADE;
