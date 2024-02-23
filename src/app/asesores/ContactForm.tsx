"use client";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      whatsapp: String(event.target.whatsapp.value),
      email: String(event.target.email.value),
      status: String(event.target.status.value),
      agencia: String(event.target.agencia.value),
      ciudad: String(event.target.ciudad.value),
    };

    const response = await fetch("/api/asesores", {
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
      event.target.whatsapp.value = "";
      event.target.email.value = "";
      event.target.status.value = "";
      event.target.agencia.value = "";
      event.target.ciudad.value = "";

      console.log("response OK");
      toast({
        title: "Mensaje Recibido",
        description: "Muchas gracias, estaremos conatactándote a la brevedad",
      });
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full text-white sm:w-[600px] lg:w-[780px] rounded-xl px-2 sm:px-8  lg:px-20 py-20 "
    >
      <div className="w-full flex flex-col my-4">
        <input
          type="text"
          minLength={3}
          maxLength={150}
          required
          className="p-4 bg-white border text-black placeholder:text-[#101C3D] rounded-sm "
          autoComplete="off"
          id="name"
          placeholder="Nombre Completo"
        />
      </div>
      <div className="w-full flex flex-col my-4">
        <input
          type="number"
          minLength={3}
          maxLength={15}
          required
          className="p-4 bg-white border text-black placeholder:text-[#101C3D] rounded-sm "
          autoComplete="off"
          id="whatsapp"
          placeholder="Whatsapp"
        />
      </div>
      <div className="w-full flex flex-col my-4">
        <input
          type="email"
          minLength={5}
          maxLength={150}
          required
          className="p-4 bg-white border text-black placeholder:text-[#101C3D] rounded-sm "
          autoComplete="off"
          id="email"
          placeholder="Correo electrónico"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-4 w-full text-lg bg-[#FF4F8E] rounded-lg py-8 disabled:bg-gray-400 disabled:text-gray-100 text-white font-black mt-4"
      >
        Enviar
      </button>
    </form>
  );
}
