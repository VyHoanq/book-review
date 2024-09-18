/*
  Warnings:

  - You are about to drop the column `id_user` on the `author` table. All the data in the column will be lost.
  - Added the required column `id_user` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `author` DROP FOREIGN KEY `Author_id_user_fkey`;

-- AlterTable
ALTER TABLE `author` DROP COLUMN `id_user`,
    ADD COLUMN `id_user` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Author` ADD CONSTRAINT `Author_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
