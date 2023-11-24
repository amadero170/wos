/*
  Warnings:

  - The `banos` column on the `propiedades` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cuartos` column on the `propiedades` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "propiedades" ADD COLUMN     "cp" INTEGER,
DROP COLUMN "banos",
ADD COLUMN     "banos" INTEGER,
DROP COLUMN "cuartos",
ADD COLUMN     "cuartos" INTEGER;
