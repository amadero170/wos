import { EmailTemplate } from "../../../../components/email-template-asesor";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Send endpoint req.body", body);
  const { name, whatsapp, email } = body;
  console.log("nombre", name);
  console.log("whatsapp", whatsapp);
  console.log("correo", email);
  try {
    const data = await resend.emails.send({
      from: "WOS <hola@wos.mx>",
      to: ["amadero170@gmail.com"],
      bcc: ["amadero170@gmail.com"],
      subject: "Hola",

      react: EmailTemplate({
        name,
        whatsapp,
        correo: email,
      }),
      text: "",
    });
    console.log("nombre", name);
    console.log("whatsapp", whatsapp);
    console.log("correo", email);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
