import { prisma } from "@/db";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  const body = await req.json();

  const hashedPassword = await hash(body.password, 12);

  await prisma.user.create({
    data: {
      nombre: body.name,
      email: body.email,
      password: hashedPassword,
    },
  });
  return new Response("ok");
}
