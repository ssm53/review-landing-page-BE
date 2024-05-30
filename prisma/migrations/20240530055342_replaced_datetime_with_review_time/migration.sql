/*
  Warnings:

  - You are about to drop the column `dateTime` on the `BadReviews` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BadReviews" DROP COLUMN "dateTime",
ADD COLUMN     "reviewTime" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
