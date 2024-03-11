import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import * as React from "react";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const { nombre, whatsapp, tipo, ciudad, monto, correo } = body;

  try {
    const data = await resend.emails.send({
      from: "WOS <hola@wos.mx>",
      to: ["hola@wos.mx"],
      bcc: ["amadero170@gmail.com"],

      subject: "Nuevo registro",

      react: EmailTemplate({
        name: nombre,
        whatsapp,
        tipo,
        ciudad,
        correo,
        monto,
      }),
      text: "",
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log("error sending email", error);
    return NextResponse.json({ error });
  }
}
