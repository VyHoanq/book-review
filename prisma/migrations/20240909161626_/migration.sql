/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `author` ADD COLUMN `id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Author_id_key` ON `Author`(`id`);

-- AddForeignKey
ALTER TABLE `Author` ADD CONSTRAINT `Author_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
