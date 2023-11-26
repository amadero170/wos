/*
  Warnings:

  - You are about to drop the `leadsvendedores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "leadsvendedores";

-- CreateTable
CREATE TABLE "asesores_interesados" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "whatsapp" TEXT,
    "correo" TEXT,
    "status" TEXT,
    "agencia" TEXT,
    "ciudad" TEXT,

    CONSTRAINT "asesores_interesados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leads" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);
