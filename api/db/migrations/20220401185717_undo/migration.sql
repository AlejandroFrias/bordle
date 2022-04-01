/*
  Warnings:

  - You are about to drop the column `playerId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_playerId_fkey";

-- DropIndex
DROP INDEX "User_playerId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "playerId";
