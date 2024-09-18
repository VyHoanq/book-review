/*
  Warnings:

  - You are about to drop the column `pushlisher` on the `book` table. All the data in the column will be lost.
  - Added the required column `public_id` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `book` DROP COLUMN `pushlisher`,
    ADD COLUMN `public_id` INTEGER NOT NULL,
    ADD COLUMN `publisher` VARCHAR(191) NULL;
