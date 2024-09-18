-- CreateTable
CREATE TABLE `Book` (
    `id_book` INTEGER NOT NULL AUTO_INCREMENT,
    `id_author` INTEGER NOT NULL,
    `id_category` INTEGER NOT NULL,
    `pushlisher` VARCHAR(191) NULL,
    `content` VARCHAR(191) NULL,
    `resume_review` VARCHAR(191) NULL,
    `imageUrl` VARCHAR(191) NULL,
    `size` VARCHAR(191) NULL,
    `format` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL,

    UNIQUE INDEX `Book_id_author_key`(`id_author`),
    UNIQUE INDEX `Book_id_category_key`(`id_category`),
    PRIMARY KEY (`id_book`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_id_author_fkey` FOREIGN KEY (`id_author`) REFERENCES `Author`(`id_author`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_id_category_fkey` FOREIGN KEY (`id_category`) REFERENCES `Category`(`id_category`) ON DELETE RESTRICT ON UPDATE CASCADE;
