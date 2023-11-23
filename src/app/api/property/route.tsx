import { prisma } from "@/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session: any = await getServerSession(authOptions);
  const body = await req.json();

  let sessionUserId: number = 0;

  if (session && session.user) {
    sessionUserId = Number(session.user.id);
  }

  await prisma.propiedades.create({
    data: {
      nombre: body.nombre,
      tipo: body.tipo,
      userId: sessionUserId,
      imagen: body.imagen,
    },
  });

  return new Response("ok");
}

export async function GET() {
  const session: any = await getServerSession(authOptions);

  let sessionUserId: number = 0;

  if (session && session.user) {
    sessionUserId = Number(session.user.id);
  }

  const properties = await prisma.propiedades.findMany({
    where: {
      userId: sessionUserId,
    },
  });

  return NextResponse.json(properties, { status: 200 });
}
