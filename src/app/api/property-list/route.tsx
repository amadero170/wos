import { prisma } from "@/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  console.log("get ep run");
  const session: any = await getServerSession(authOptions);

  console.log("API property GET session", session);
  let sessionUserId: number = 0;

  if (session && session.user) {
    sessionUserId = Number(session.user.id);
  }
  console.log("sessionUserId", sessionUserId);
  const properties = await prisma.propiedades.findMany({
    where: {
      userId: sessionUserId,
    },
  });
  console.log("properties en route", properties);
  return NextResponse.json(properties, { status: 200 });
}
