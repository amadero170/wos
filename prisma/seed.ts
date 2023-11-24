import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import * as fs from "fs/promises";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("test", 12);
  const alice = await prisma.user.upsert({
    where: { email: "alice@test.com" },
    update: {},
    create: {
      email: "alice@test.com",
      nombre: "Alice",
      password,
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: "bob@test.com" },
    update: {},
    create: {
      email: "bob@test.com",
      nombre: "Bob",
      password,
    },
  });
  console.log({ alice, bob });
}
async function propiedadesFeed() {
  // const propsData = await fs.readFile("./propertiesSeedData", "utf-8");
  const propiedadesData = [
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Tauro",
      tipo: "Casa",
      banos: 2,
      cuartos: 3,
      metros: 1200,
      ciudad: "Nuevo Vallarta",
      estado: "Nayarit",
      cp: 63738,
      precio: "$2,500,000.00",
      imagen: "zfm3czmavhjhc6vegxhq",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Arena Dorada",
      tipo: "Departamento",
      banos: 4,
      cuartos: 5,
      metros: 2000,
      ciudad: "Punta de Mita",
      estado: "Nayarit",
      cp: 63456,
      precio: "$4,000,000.00",
      imagen: "yswi3bjil61yncyzeont",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Brisas del Mar",
      tipo: "Casa",
      banos: 3,
      cuartos: 4,
      metros: 1600,
      ciudad: "Puerto Vallarta",
      estado: "Jalisco",
      cp: 43870,
      precio: "$2,200,000.00",
      imagen: "w2gglaqoidxhgsyt32s8",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Paraíso Marino",
      tipo: "Departamento",
      banos: 5,
      cuartos: 6,
      metros: 2400,
      ciudad: "Careyes",
      estado: "Jalisco",
      cp: 54763,
      precio: "$3,300,000.00",
      imagen: "ini6wkounj2v1sp40ry0",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Ola Encantada",
      tipo: "Casa",
      banos: 2,
      cuartos: 3,
      metros: 1200,
      ciudad: "Mezcales",
      estado: "Nayarit",
      cp: 63735,
      precio: "$4,200,000.00",
      imagen: "qospy8kdzi8hinsmw3ll",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Sol y Arena",
      tipo: "Departamento",
      banos: 2,
      cuartos: 3,
      metros: 1200,
      ciudad: "Bucerias",
      estado: "Nayarit",
      cp: 63732,
      precio: "$2,100,000.00",
      imagen: "pwxyvx57xpxea0qy1121",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Maravilla Costera",
      tipo: "Casa",
      banos: 3,
      cuartos: 4,
      metros: 1600,
      ciudad: "Sayulita",
      estado: "Nayarit",
      cp: 33909,
      precio: "$2,000,000.00",
      imagen: "zfm3czmavhjhc6vegxhq",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Azul Sereno",
      tipo: "Departamento",
      banos: 4,
      cuartos: 5,
      metros: 2000,
      ciudad: "Nuevo Vallarta",
      estado: "Nayarit",
      cp: 63738,
      precio: "$3,800,000.00",
      imagen: "yswi3bjil61yncyzeont",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Atardecer en el Horizonte",
      tipo: "Casa",
      banos: 2,
      cuartos: 3,
      metros: 1200,
      ciudad: "Punta de Mita",
      estado: "Nayarit",
      cp: 63456,
      precio: "$5,000,000.00",
      imagen: "w2gglaqoidxhgsyt32s8",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Rincón Tropical",
      tipo: "Departamento",
      banos: 3,
      cuartos: 4,
      metros: 1600,
      ciudad: "Puerto Vallarta",
      estado: "Jalisco",
      cp: 43870,
      precio: "$6,300,000.00",
      imagen: "ini6wkounj2v1sp40ry0",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Estrella de Mar",
      tipo: "Casa",
      banos: 2,
      cuartos: 3,
      metros: 1200,
      ciudad: "Careyes",
      estado: "Jalisco",
      cp: 54763,
      precio: "$2,200,000.00",
      imagen: "qospy8kdzi8hinsmw3ll",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Nácar del Océano",
      tipo: "Departamento",
      banos: 4,
      cuartos: 5,
      metros: 2000,
      ciudad: "Mezcales",
      estado: "Nayarit",
      cp: 63735,
      precio: "$4,400,000.00",
      imagen: "pwxyvx57xpxea0qy1121",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Playa Tranquila",
      tipo: "Casa",
      banos: 3,
      cuartos: 4,
      metros: 1600,
      ciudad: "Bucerias",
      estado: "Nayarit",
      cp: 63732,
      precio: "$3,200,000.00",
      imagen: "qospy8kdzi8hinsmw3ll",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Rincón del Coral",
      tipo: "Casa",
      banos: 3,
      cuartos: 4,
      metros: 1600,
      ciudad: "Sayulita",
      estado: "Nayarit",
      cp: 33909,
      precio: "$4,200,000.00",
      imagen: "pwxyvx57xpxea0qy1121",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Viento Costero",
      tipo: "Departamento",
      banos: 2,
      cuartos: 3,
      metros: 1200,
      ciudad: "Nuevo Vallarta",
      estado: "Nayarit",
      cp: 63738,
      precio: "$4,300,000.00",
      imagen: "w2gglaqoidxhgsyt32s8",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Solaz del Mar",
      tipo: "Casa",
      banos: 4,
      cuartos: 5,
      metros: 2000,
      ciudad: "Punta de Mita",
      estado: "Nayarit",
      cp: 63456,
      precio: "$4,400,000.00",
      imagen: "ini6wkounj2v1sp40ry0",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Paraíso Azul",
      tipo: "Departamento",
      banos: 2,
      cuartos: 3,
      metros: 1200,
      ciudad: "Puerto Vallarta",
      estado: "Jalisco",
      cp: 43870,
      precio: "$4,500,000.00",
      imagen: "qospy8kdzi8hinsmw3ll",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Sueño Marítimo",
      tipo: "Casa",
      banos: 2,
      cuartos: 3,
      metros: 1200,
      ciudad: "Careyes",
      estado: "Jalisco",
      cp: 54763,
      precio: "$4,600,000.00",
      imagen: "pwxyvx57xpxea0qy1121",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Brisa Salada",
      tipo: "Departamento",
      banos: 3,
      cuartos: 4,
      metros: 1600,
      ciudad: "Mezcales",
      estado: "Nayarit",
      cp: 63735,
      precio: "$4,700,000.00",
      imagen: "zfm3czmavhjhc6vegxhq",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Oasis Marino",
      tipo: "Casa",
      banos: 4,
      cuartos: 5,
      metros: 2000,
      ciudad: "Bucerias",
      estado: "Nayarit",
      cp: 63732,
      precio: "$4,800,000.00",
      imagen: "yswi3bjil61yncyzeont",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Horizonte Infinito",
      tipo: "Departamento",
      banos: 4,
      cuartos: 5,
      metros: 2000,
      ciudad: "Sayulita",
      estado: "Nayarit",
      cp: 33909,
      precio: "$4,900,000.00",
      imagen: "w2gglaqoidxhgsyt32s8",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Palmas del Sol",
      tipo: "Casa",
      banos: 2,
      cuartos: 3,
      metros: 1200,
      ciudad: "Nuevo Vallarta",
      estado: "Nayarit",
      cp: 63738,
      precio: "$5,000,000.00",
      imagen: "zfm3czmavhjhc6vegxhq",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Marea Encantada",
      tipo: "Departamento",
      banos: 2,
      cuartos: 3,
      metros: 1200,
      ciudad: "Punta de Mita",
      estado: "Nayarit",
      cp: 63456,
      precio: "$5,100,000.00",
      imagen: "yswi3bjil61yncyzeont",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Refugio del Mar",
      tipo: "Casa",
      banos: 4,
      cuartos: 5,
      metros: 2000,
      ciudad: "Puerto Vallarta",
      estado: "Jalisco",
      cp: 43870,
      precio: "$5,200,000.00",
      imagen: "w2gglaqoidxhgsyt32s8",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Costa Soleada",
      tipo: "Departamento",
      banos: 4,
      cuartos: 5,
      metros: 2000,
      ciudad: "Careyes",
      estado: "Jalisco",
      cp: 54763,
      precio: "$5,300,000.00",
      imagen: "ini6wkounj2v1sp40ry0",
    },
    {
      user: {
        connect: { id: 1 }, // Assuming User with ID 1 exists
      },
      nombre: "Mar y Cielo",
      tipo: "Casa",
      banos: 3,
      cuartos: 4,
      metros: 1600,
      ciudad: "Mezcales",
      estado: "Nayarit",
      cp: 63735,
      precio: "$5,400,000.00",
      imagen: "qospy8kdzi8hinsmw3ll",
    },
  ];

  for (const propiedades of propiedadesData) {
    await prisma.propiedades.create({
      data: propiedades,
    });
  }
}
// main()
propiedadesFeed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
