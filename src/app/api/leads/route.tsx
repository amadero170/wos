import { prisma } from "@/db";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("body", body);
  await prisma.leads.create({
    data: {
      nombre: body.nombre,
      whatsapp: body.whatsapp,
      tipo: body.tipo,
      correo: body.correo,
      monto: body.monto,
      ciudad: body.ciudad,
    },
  });

  return new Response("ok");
}
