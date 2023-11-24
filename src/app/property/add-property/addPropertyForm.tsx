"use client";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newPropertySchema = z.object({
  nombre: z.string().min(3, "Por lo menos 3 caracteres - zod"),
  tipo: z.string(),
});

type TNewPropertySchema = z.infer<typeof newPropertySchema> & {
  imagen: string;
};

export default function AddPropertyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(newPropertySchema),
  });
  const { data: session } = useSession();
  const [imageId, setImageId] = useState("");

  const onSubmit = async (data: FieldValues) => {
    data.imagen = imageId;
    await fetch("/api/property", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setImageId("");
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:w-[600px] lg:w-[780px] ml-4 rounded-xl px-4 sm:px-8 lg:px-20 py-12 bg-gradient-to-b from-[#06092B] to-[#1A1E37]"
    >
      <h3 className="text-3xl text-center text-white mb-6 font-bold">
        Ingresa una nueva propiedad
      </h3>
      <h4 className="text-white">{session?.user?.name}</h4>

      <div className="w-full flex flex-col my-4">
        <Input
          {...register("nombre", {
            // required: "Nombre de la propiedad es requerido",
            minLength: {
              value: 3,
              message: "Por lo menos 3 caracteres",
            },
          })}
          type="text"
          placeholder="Nombre de la propiedad"
        />

        {errors.nombre && (
          <p className="text-red-500">{`${errors.nombre.message}`}</p>
        )}
      </div>
      <div className="w-full flex flex-col my-4">
        <Input
          {...register("tipo", {
            // required: "Tipo de propiedad es requerido",
          })}
          type="text"
          placeholder="Tipo"
        />
        {errors.tipo && (
          <p className="text-red-500">{`${errors.tipo.message}`}</p>
        )}
      </div>

      <CldUploadButton
        uploadPreset="cbbsw3st"
        onUpload={(result: any): void => setImageId(result.info.public_id)}
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

      <Button type="submit" disabled={isSubmitting}>
        Agregar propiedad
      </Button>
    </form>
  );
}
