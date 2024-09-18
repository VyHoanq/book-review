/*
  Warnings:

  - You are about to drop the column `id` on the `author` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_user]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_user` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `author` DROP FOREIGN KEY `Author_id_fkey`;

-- AlterTable
ALTER TABLE `author` DROP COLUMN `id`,
    ADD COLUMN `id_user` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Author_id_user_key` ON `Author`(`id_user`);

-- AddForeignKey
ALTER TABLE `Author` ADD CONSTRAINT `Author_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
