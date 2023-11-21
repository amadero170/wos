"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      password: String(event.target.password.value),
      password2: String(event.target.password2.value),
    };

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      // reset the form
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.password.value = "";
      event.target.password2.value = "";
      signIn();
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="my-4">
        <Input
          type="text"
          minLength={3}
          maxLength={150}
          required
          autoComplete="off"
          id="name"
          placeholder="Nombre Completo"
        />
      </div>

      <div className="my-4">
        <Input
          type="email"
          minLength={5}
          maxLength={150}
          required
          autoComplete="off"
          id="email"
          placeholder="Correo electrónico"
        />
      </div>

      <div className="my-4">
        <Input
          type="password"
          minLength={3}
          maxLength={150}
          required
          autoComplete="off"
          id="password"
          placeholder="Contraseña"
        />
      </div>

      <div className="my-4">
        <Input
          type="password"
          minLength={3}
          maxLength={150}
          required
          autoComplete="off"
          id="password2"
          placeholder="Confirmar Contraseña"
        />
      </div>

      <Button type="submit" disabled={loading}>
        Registrarme
      </Button>
    </form>
  );
}
