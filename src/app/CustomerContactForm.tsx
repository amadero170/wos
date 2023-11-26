"use client";
import { FieldValues, useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newPropertySchema = z.object({
  nombre: z.string().min(5, "Ingresar por lo menos 5 caracteres"),
  whatsapp: z.string().min(10, "Ingresar por lo menos 10 caracteres"),
  correo: z.string().email(),
  tipo: z.string(),
  monto: z.string(),
  ciudad: z.string(),
});

export default function AddPropertyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(newPropertySchema),
  });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:w-[600px] lg:w-[780px] ml-4 rounded-xl px-4 sm:px-8 lg:px-20 py-12 bg-gradient-to-b from-[#06092B] to-[#1A1E37]"
    >
      <h3 className="text-3xl text-center text-amber-300 mb-6 font-bold">
        ¿Estás buscando invertir o comprar una propiedad?
      </h3>
      <h3 className="text-xl text-center text-white mb-6 ">
        Déjanos un mensaje y uno de nuestros Asesores WOS se pondrá en contacto
        contigo para iniciar la búsqueda.
      </h3>

      <div className="w-full flex flex-col my-4">
        <input
          {...register("nombre", {})}
          type="text"
          placeholder="Nombre Completo"
        />

        {errors.nombre && (
          <p className="text-red-500">{`${errors.nombre.message}`}</p>
        )}
      </div>
      <div className="w-full flex flex-col my-4">
        <input
          {...register("whatsapp", {})}
          type="text"
          placeholder="Whatsapp"
        />

        {errors.whatsapp && (
          <p className="text-red-500">{`${errors.whatsapp.message}`}</p>
        )}
      </div>
      <div className="w-full flex flex-col my-4">
        <input
          {...register("correo", {})}
          type="text"
          placeholder="Correo electrónico"
        />

        {errors.correo && (
          <p className="text-red-500">{`${errors.correo.message}`}</p>
        )}
      </div>

      <div className="w-full flex flex-col my-4">
        <input
          {...register("tipo", {})}
          type="text"
          placeholder="Tipo de propiedad"
        />
        {errors.tipo && (
          <p className="text-red-500">{`${errors.tipo.message}`}</p>
        )}
      </div>

      <div className="w-full flex flex-col my-4">
        <input
          {...register("monto", {})}
          type="text"
          placeholder="Monto aproximado de inversión"
        />
        {errors.monto && (
          <p className="text-red-500">{`${errors.monto.message}`}</p>
        )}
      </div>

      <div className="w-full flex flex-col my-4">
        <input
          {...register("ciudad", {})}
          type="text"
          placeholder="Ciudad en la que deseas invertir"
        />
        {errors.ciudad && (
          <p className="text-red-500">{`${errors.ciudad.message}`}</p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}>
        Enviar
      </button>
    </form>
  );
}
