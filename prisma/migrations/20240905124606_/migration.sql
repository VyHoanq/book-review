/*
  Warnings:

  - The primary key for the `book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_book` on the `book` table. All the data in the column will be lost.
  - Added the required column `id` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Made the column `content` on table `book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `resume_review` on table `book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imageUrl` on table `book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `size` on table `book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `format` on table `book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `publisher` on table `book` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `book` DROP PRIMARY KEY,
    DROP COLUMN `id_book`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `content` VARCHAR(191) NOT NULL,
    MODIFY `resume_review` VARCHAR(191) NOT NULL,
    MODIFY `imageUrl` VARCHAR(191) NOT NULL,
    MODIFY `size` VARCHAR(191) NOT NULL,
    MODIFY `format` VARCHAR(191) NOT NULL,
    MODIFY `public_id` VARCHAR(191) NOT NULL,
    MODIFY `publisher` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
