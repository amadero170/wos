import * as React from "react";

interface EmailTemplateProps {
  name: string;
  whatsapp: string;
  tipo: string;
  monto: string;
  ciudad: string;
  correo: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  whatsapp,
  tipo,
  monto,
  ciudad,
  correo,
}) => (
  <div>
    <h1>Nueva consulta realizada por {name}!</h1>
    <p>Wapp: {whatsapp}</p>
    <p>Tipo: {tipo}</p>
    <p>Monto: {monto}</p>
    <p>Ciudad: {ciudad}</p>
    <p>Email: {correo}</p>
  </div>
);
