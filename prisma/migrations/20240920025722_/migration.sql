/*
  Warnings:

  - You are about to drop the column `code` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `category` DROP COLUMN `code`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `age`,
    DROP COLUMN `gender`,
    DROP COLUMN `phone`;
