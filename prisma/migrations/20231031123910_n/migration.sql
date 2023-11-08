-- AlterTable
ALTER TABLE "propiedades" ADD COLUMN     "user" TEXT;

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "telefono" TEXT,
    "agencia" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
