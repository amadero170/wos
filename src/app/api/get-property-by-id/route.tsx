import { prisma } from "@/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const id = Number(body);
  console.log(id, typeof id);
  const property = await prisma.propiedades.findUnique({
    where: {
      id,
    },
  });
  console.log(property?.nombre);
  return NextResponse.json(property, { status: 200 });
}
