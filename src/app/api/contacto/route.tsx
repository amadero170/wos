import { prisma } from "@/db" 

export async function POST(req: Request){

const body = await req.json()

await prisma.leadsvendedores.create({
    data: {
        nombre: body.name,
        whatsapp: body.whatsapp,
        correo:body.email, 
        status:body.status,
        agencia:body.agencia,
        ciudad:body.ciudad   
    },
  })
    
    return new Response("ok")
    }