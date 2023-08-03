-- CreateTable
CREATE TABLE "leadsvendedores" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "whatsapp" INTEGER,
    "correo" TEXT,
    "status" TEXT,
    "agencia" TEXT,
    "ciudad" TEXT,

    CONSTRAINT "leadsvendedores_pkey" PRIMARY KEY ("id")
);
