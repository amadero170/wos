"use client";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

const newPropertySchema = z.object({
  nombre: z.string().min(5, "Ingresar por lo menos 5 caracteres"),
  whatsapp: z.string().min(10, "Ingresar por lo menos 10 caracteres"),
  correo: z.string().email(),
  tipo: z.string(),
  monto: z.string(),
  ciudad: z.string(),
});

export default function AddPropertyForm() {
  const { toast } = useToast();
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
    const dbResponse = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (dbResponse.ok) {
      console.log("dbresponse OK");
      // toast({
      //   title: "Mensaje Recibido",
      //   description: "Muchas gracias, estaremos conatactándote a la brevedad",
      // });
    }

    const sendResponse = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (sendResponse.ok) {
      console.log("email sent");
      toast({
        title: "Mensaje Recibido",
        description: "Muchas gracias, estaremos conatactándote a la brevedad",
      });
    }

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#162550] w-full sm:w-[600px] lg:w-[720px] rounded-xl px-2 sm:px-8 lg:px-20 py-12"
    >
      <h3 className="text-2xl text-center text-amber-300 mb-6 font-bold">
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
          className="rounded-lg border border-indigo-500 bg-[#162550] h-12 p-4 text-white placeholder-white"
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
          className="rounded-lg border border-indigo-500 bg-[#162550] h-12 p-4 text-white placeholder-white"
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
          className="rounded-lg border border-indigo-500 bg-[#162550] h-12 p-4 text-white placeholder-white"
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
          className="rounded-lg border border-indigo-500 bg-[#162550] h-12 p-4 text-white placeholder-white"
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
          className="rounded-lg border border-indigo-500 bg-[#162550] h-12 p-4 text-white placeholder-white"
        />
        {errors.monto && (
          <p className="text-red-500">{`${errors.monto.message}`}</p>
        )}
      </div>
      <div className="w-full flex flex-col my-4 ">
        <input
          {...register("ciudad", {})}
          type="text"
          placeholder="Ciudad en la que deseas invertir"
          className="rounded-lg border border-indigo-500 bg-[#162550] h-12 p-4 text-white placeholder-white"
        />
        {errors.ciudad && (
          <p className="text-red-500">{`${errors.ciudad.message}`}</p>
        )}
      </div>
      <div className="w-full flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-36 h-12 bg-yellow-300 rounded-lg right-1 relative font-bold disabled:bg-slate-400"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
