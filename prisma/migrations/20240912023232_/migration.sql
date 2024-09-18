-- CreateTable
CREATE TABLE `Comment` (
    `id_review` INTEGER NOT NULL AUTO_INCREMENT,
    `bookId` INTEGER NOT NULL,
    `content` VARCHAR(191) NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `review_date` DATETIME(3) NOT NULL,
    `rate` INTEGER NOT NULL,

    PRIMARY KEY (`id_review`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
