import { EmailTemplate } from "../../../components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Send endpoint req.body", body);
  const { nombre, whatsapp, tipo, ciudad, monto, correo } = body;

  try {
    const data = await resend.emails.send({
      from: "WOS <hola@wos.mx>",
      to: ["hola@wos.mx"],
      bcc: ["amadero170@gmail.com"],
      subject: "Hola",
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
    return NextResponse.json({ error });
  }
}
