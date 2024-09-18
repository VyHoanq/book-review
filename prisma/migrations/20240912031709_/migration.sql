/*
  Warnings:

  - The primary key for the `comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_review` on the `comment` table. All the data in the column will be lost.
  - Added the required column `id` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Made the column `content` on table `comment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `comment` DROP PRIMARY KEY,
    DROP COLUMN `id_review`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `content` VARCHAR(191) NOT NULL,
    MODIFY `imageUrl` VARCHAR(191) NULL,
    MODIFY `review_date` DATETIME(3) NULL,
    MODIFY `rate` INTEGER NULL,
    ADD PRIMARY KEY (`id`);
