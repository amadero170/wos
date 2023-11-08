import { prisma } from "@/db" 

import { NextResponse } from "next/server"

export async function POST(req: Request){



console.log("#########",req.body)


const properties = await prisma.propiedades.findMany({
    where: {
      userId: 5,
    },
  })
console.log("properties en route",properties)
return NextResponse.json(properties,{status: 200})
    }
