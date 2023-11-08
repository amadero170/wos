/*
  Warnings:

  - You are about to drop the column `user` on the `propiedades` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "propiedades" DROP COLUMN "user",
ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "propiedades" ADD CONSTRAINT "propiedades_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
