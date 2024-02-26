import * as React from "react";

interface EmailTemplateProps {
  name: string;
  whatsapp: number;
  correo: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  whatsapp,
  correo,
}) => (
  <div>
    <h1>Nueva consulta para asesor realizada por {name}!</h1>
    <p>Wapp: {whatsapp}</p>
    <p>Email: {correo}</p>
  </div>
);
