import CustomerContactForm from "./CustomerContactForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="bg-top bg-cover bg-no-repeat max-w-screen w-screen flex flex-col items-center px-8 lg:px-30 text-center"
        style={{
          backgroundImage: `url("/bg_image_2.webp")`,
        }}
      >
        <Image
          className="justify-center mt-20 mb-40"
          src="/wos.svg"
          alt="wos"
          width={220}
          height={61}
        ></Image>

        <div className="text-center text-white text-[26px] leading-[54px] font-bold">
          #DigitalEstate
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="text-center text-white sm:text-[60px] text-[55px] font-black leading-[54px] sm:mr-8">
            Bienvenido a {"  "}
          </div>
          <Image
            className="justify-center my-4 "
            src="/wos.svg"
            alt="wos"
            width={220}
            height={61}
          ></Image>
        </div>
        <div className="lg:w-[726px] mb-16 text-center text-white text-[22px] mt-5">
          Aquí no te queremos vender, existimos para ayudarte a encontrar tu
          propiedad a través de una gran experiencia:
        </div>

        <div className="grid auto-cols-fr lg:grid-cols-3 md:grid-cols-2  gap-2 lg:gap-4 grid-flow-row grid-auto-rows-auto text-left text-lg md:text-xl mt-4 mx-2 lg:mx-8">
          <div className="w-72 sm:w-80 h-28 bg-zinc-900 bg-opacity-25 rounded-lg backdrop-blur-sm flex gap-4 items-center justify-center p-2">
            <div className="rounded-full bg-teal-950 w-12 h-12 flex justify-center items-center">
              <Image
                className="justify-center "
                src="/lupa.svg"
                alt="lupa"
                width={20}
                height={20}
              ></Image>
            </div>
            <div className="w-56 text-white text-base leading-snug font-normal">
              Encuentra propiedades de manera sencilla y sin tanto rodeo.
            </div>
          </div>
          <div className="w-72 sm:w-80 h-28 bg-zinc-900 bg-opacity-25 rounded-lg backdrop-blur-sm flex gap-4 items-center justify-center p-2">
            <div className="rounded-full bg-teal-950 w-12 h-12 flex justify-center items-center">
              <Image
                className="justify-center "
                src="/seguimiento.svg"
                alt="seguimiento"
                width={20}
                height={20}
              ></Image>
            </div>
            <div className="w-56 text-white text-base leading-snug">
              Evita seguimientos molestos.
            </div>
          </div>
          <div className="w-72 sm:w-80 h-28 bg-zinc-900 bg-opacity-25 rounded-lg backdrop-blur-sm flex gap-4 items-center justify-center p-2">
            <div className="rounded-full bg-teal-950 w-12 h-12 flex justify-center items-center">
              <Image
                className="justify-center "
                src="/analiza.svg"
                alt="analiza"
                width={20}
                height={20}
              ></Image>
            </div>
            <div className="w-56 text-white text-base leading-snug">
              Analiza opciones de diferentes asesores y proyectos en un solo
              canal.
            </div>
          </div>
          <div className="w-72 sm:w-80 h-28 bg-zinc-900 bg-opacity-25 rounded-lg backdrop-blur-sm flex gap-4 items-center justify-center p-2">
            <div className="rounded-full bg-teal-950 w-12 h-12 flex justify-center items-center">
              <Image
                className="justify-center "
                src="/asesoria.svg"
                alt="asesoria"
                width={20}
                height={20}
              ></Image>
            </div>
            <div className="w-56 text-white text-base leading-snug">
              Recibe asesoría totalmente gratis para que puedas tomar una mejor
              decisión al momento de comprar.
            </div>
          </div>
          <div className="w-72 sm:w-80 h-28 bg-zinc-900 bg-opacity-25 rounded-lg backdrop-blur-sm flex gap-4 items-center justify-center p-2">
            <div className="rounded-full bg-teal-950 w-12 h-12 flex justify-center items-center">
              <Image
                className="justify-center "
                src="/beneficios.svg"
                alt="beneficios"
                width={20}
                height={20}
              ></Image>
            </div>
            <div className="w-56 text-white text-base leading-snug">
              Accede a beneficios exclusivos para la comunidad WOS.
            </div>
          </div>
        </div>
        <div className="text-center text-white text-2xl font-bold leading-loose my-16">
          Llegó el momento de cambiar la forma de comprar una propiedad.
        </div>
      </div>

      <div className="bg-[#0D0D0D] py-16 flex flex-col items-center px-4 lg:px-40">
        <div className="text-center w-9/12 mt-16 mb-10">
          <span className="text-white text-[40px] font-bold">WOS</span>
          <span className="text-white text-4xl font-medium  ">
            {" "}
            está listo para iniciar operaciones en Guadalajara, Puerto Vallarta
            y Riviera Nayarit.
          </span>
        </div>
        <div className="px-2">
          <CustomerContactForm />
        </div>
        <Image
          className="my-12"
          src="/titulo-wos.png"
          alt="wos"
          width={100}
          height={100}
        ></Image>
        <div className="flex">
          <div className="flex justify-center items-center w-28">
            <Link
              href="https://www.facebook.com/wosdigitalestate"
              target="_blank"
              className="absolute"
            >
              <Image
                src="/fb.svg"
                alt="wos_fb"
                width={100}
                height={100}
              ></Image>
            </Link>
            <Link
              href="https://www.instagram.com/wosdigitalestate/"
              target="_blank"
              className="absolute"
            >
              <Image
                src="/ig.svg"
                alt="wos_ig"
                width={100}
                height={100}
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
