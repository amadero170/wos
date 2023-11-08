import { prisma } from "@/db" 
import { getServerSession } from 'next-auth'
import { authOptions } from "../auth/[...nextauth]/route"
import { NextResponse } from "next/server"


export async function POST(req: Request){
const session = await getServerSession(authOptions)
const body = await req.json()

console.log("API property post session",session)
let sessionUserId:number = 0

if (session && session.user){
  sessionUserId = Number(session.user.id)
}

await prisma.propiedades.create({
    data: {
        nombre: body.nombre,
        tipo: body.tipo,
        userId:  sessionUserId
    },
  })
    
    return new Response("ok")
    }

export async function GET(){
  console.log("get ep run")
      const session = await getServerSession(authOptions)
      
      console.log("API property GET session",session)
      let sessionUserId:number = 0
      
      if (session && session.user){
        sessionUserId = Number(session.user.id)
      }
      console.log("sessionUserId",sessionUserId)
      const properties = await prisma.propiedades.findMany({
        where: {
          userId: sessionUserId,
        },
      })
console.log("properties en route",properties)
  return NextResponse.json(properties,{status: 200})
}