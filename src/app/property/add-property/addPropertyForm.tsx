"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CldImage, CldUploadButton } from "next-cloudinary";

export default function PropertyForm() {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const [imageId, setImageId] = useState("");

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      nombre: String(event.target.nombre.value),
      tipo: String(event.target.tipo.value),
      user: String(session?.user?.email),
      imagen: imageId,
    };

    const response = await fetch("/api/property", {
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
      event.target.nombre.value = "";
      event.target.tipo.value = "";
      setImageId("");
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full sm:w-[600px] lg:w-[780px] ml-4 rounded-xl px-4 sm:px-8 lg:px-20 py-12 bg-gradient-to-b from-[#06092B] to-[#1A1E37]"
    >
      <h3 className="text-3xl text-center text-white mb-6 font-bold">
        Ingresa una nueva propiedad
      </h3>
      <h4 className="text-white">{session?.user?.name}</h4>

      <div className="w-full flex flex-col my-4">
        <Input
          type="text"
          minLength={1}
          maxLength={150}
          required
          autoComplete="off"
          id="nombre"
          placeholder="Nombre de la propiedad"
        />
      </div>
      <div className="w-full flex flex-col my-4">
        <Input
          type="text"
          minLength={1}
          maxLength={40}
          required
          autoComplete="off"
          id="tipo"
          placeholder="Tipo"
        />
      </div>

      <CldUploadButton
        uploadPreset="cbbsw3st"
        onUpload={(result: any) => setImageId(result.info.public_id)}
        className="p-2 m-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        Seleccionar Imagen
      </CldUploadButton>

      {imageId && (
        <CldImage
          width="300"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}

      <Button type="submit" disabled={loading}>
        Agregar propiedad
      </Button>
    </form>
  );
}
