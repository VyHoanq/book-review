/*
  Warnings:

  - You are about to drop the column `bookImage` on the `book` table. All the data in the column will be lost.
  - Added the required column `bookImages` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `book` DROP COLUMN `bookImage`,
    ADD COLUMN `bookImages` VARCHAR(191) NOT NULL;
