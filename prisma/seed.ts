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
  const propsData = await fs.readFile("./propertiesSeedData.json", "utf-8");
  const propiedadesData = JSON.parse(propsData);

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
