import { prisma } from "@/db" 

export async function POST(req){

const body = await req.json()
const wap = Number(body.whatsapp)

await prisma.leadsvendedores.create({
    data: {
        nombre: body.name,
        whatsapp: wap,
        correo:body.email, 
        status:body.status,
        agencia:body.agencia,
        ciudad:body.ciudad   
    },
  })
    
    return new Response("ok")
    }