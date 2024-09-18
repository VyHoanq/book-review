-- AddForeignKey
ALTER TABLE `Author` ADD CONSTRAINT `Author_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
