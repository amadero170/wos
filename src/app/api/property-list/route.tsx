import { prisma } from "@/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

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
