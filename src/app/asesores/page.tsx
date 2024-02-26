import Image from "next/image";
import ContactForm from "./ContactForm";
import Link from "next/link";

export default function MyComponent() {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-12 w-full text-white text-center min-h-[706px] max-md:px-5 max-md:max-w-full">
        <Image
          src="/asesores/bg-hero-banner.png"
          layout="fill"
          objectFit="cover"
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <div className="flex relative flex-col mt-3.5 mb-48 max-md:mb-10">
          <Image
            src="/titulo-wos.png"
            width={142}
            height={32}
            className="self-center"
            alt=""
          />
          <div className="mt-56 max-md:mt-10 max-md:max-w-full leading-[57.6px] text-5xl max-w-[650px] font-bold">
            Dale poder a tu estrategia {""}
            <span className="text-pink-500">digital inmobiliaria.</span>
          </div>
        </div>
      </div>
      <div className="mt-20 text-5xl font-black leading-10 text-center text-[#101C3D] max-md:mt-10">
        Bienvenido a <span className="text-pink-500">WOS. </span> <br />
      </div>
      <div className="mt-11 text-xl max-w-[650px] font-medium leading-8 text-center text-slate-800 max-md:mt-10 max-md:max-w-full">
        Una plataforma digital de estrategias inmobiliarias que te puede ayudar
        a potenciar la venta de tu propiedad.
      </div>
      <div className="px-5 mt-24 w-full max-w-[1108px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base font-medium leading-6 text-slate-800 max-md:mt-10">
              <div className="flex justify-center items-center rounded-lg w-[54px] h-[54px] bg-[#F7F6FB]">
                <Image
                  src="/asesores/icono-sube-tu-inmueble.svg"
                  width={27}
                  height={27}
                  alt=""
                />
              </div>
              <div className="mt-6">
                <span className="font-bold">Sube tu inmueble</span> a
                estrategias digitales planeadas y ejecutadas por expertos..
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-base font-medium leading-6 text-slate-800 max-md:mt-10">
              <div className="flex justify-center items-center rounded-lg w-[54px] h-[54px] bg-[#F7F6FB]">
                <Image
                  src="/asesores/icono-genera-clientes.svg"
                  width={27}
                  height={27}
                  alt=""
                />
              </div>
              <div className="mt-6">
                <span className="font-bold">Genera clientes</span> potenciales
                perfilados.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-base font-medium leading-6 text-slate-800 max-md:mt-10">
              <div className="flex justify-center items-center rounded-lg w-[54px] h-[54px] bg-[#F7F6FB]">
                <Image
                  src="/asesores/icono-recibe-informacion.svg"
                  width={27}
                  height={27}
                  alt=""
                />
              </div>
              <div className="mt-6">
                <span className="font-bold">Recibe información</span> y
                capacitación presencial y digital.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-base font-medium leading-6 text-slate-800 max-md:mt-10">
              <div className="flex justify-center items-center rounded-lg w-[54px] h-[54px] bg-[#F7F6FB]">
                <Image
                  src="/asesores/icono-accede-a-preventa.svg"
                  width={27}
                  height={27}
                  alt=""
                />
              </div>
              <div className="mt-6">
                <span className="font-bold">Accede a preventas</span> y
                comisiones exclusivas.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center px-16 pt-24 pb-24 mt-32 w-full text-3xl font-black leading-10 text-center rounded-3xl bg-slate-50 max-w-[1120px] text-slate-800 max-md:px-5 max-md:py-10 max-md:mt-10 max-md:max-w-full">
        <span className="text-pink-500">WOS</span> existe para ayudarte a
        potenciar tus estrategias de marketing y comercialización.
      </div>
      <div className="flex flex-col justify-center items-center self-stretch py-12 mt-20  bg-[#2222a7] w-full max-md:mt-10 max-md:max-w-full">
        <div className="grid auto-cols-fr lg:grid-cols-3 md:grid-cols-2 md:w-5/6 gap-2 lg:gap-4 grid-flow-row grid-auto-rows-auto text-left text-lg md:text-xl mt-4 mx-2 lg:mx-8">
          <div className="max-w-[300px]">
            <div className="w-10 h-10  text-pink-500 rounded-s-full border-2 border-pink-500  text-3xl font-semibold  rounded-full  flex items-center justify-center">
              1
            </div>
            <div className="mt-4 text-xl font-bold leading-9 text-white">
              Súbela a WOS
            </div>
          </div>
          <div className="max-w-[300px]">
            <div className="w-10 h-10  text-pink-500 rounded-s-full border-2 border-pink-500  text-3xl font-semibold  rounded-full  flex items-center justify-center">
              2
            </div>
            <div className="mt-4 text-xl font-bold leading-9 text-white">
              WOS la activa en sus estrategias digitales
            </div>
          </div>
          <div className="max-w-[300px]">
            <div className="w-10 h-10  text-pink-500 rounded-s-full border-2 border-pink-500  text-3xl font-semibold  rounded-full  flex items-center justify-center">
              3
            </div>
            <div className="mt-4 text-xl font-bold leading-9 text-white">
              WOS te asigna clientes potenciales para tu propiedad.
            </div>
          </div>

          <div className="max-w-[300px]">
            <div className="w-10 h-10  text-pink-500 rounded-s-full border-2 border-pink-500  text-3xl font-semibold  rounded-full  flex items-center justify-center">
              4
            </div>
            <div className="mt-4 text-xl font-bold leading-9 text-white">
              Tú lo cierras.
            </div>
          </div>
          <div className="max-w-[300px]">
            <div className="w-10 h-10  text-pink-500 rounded-s-full border-2 border-pink-500  text-3xl font-semibold  rounded-full  flex items-center justify-center">
              5
            </div>
            <div className="mt-4 text-xl font-bold leading-9 text-white">
              Si vendes nos pagas, si no, no.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-stretch px-20 py-12 w-full text-sm font-medium leading-6 text-white bg-[#0C0C43] max-md:px-5 max-md:max-w-full">
        <div className="mt-20 text-2xl font-bold leading-10 text-center  max-md:mt-10 max-md:max-w-full">
          ¿Crees que <span className="text-pink-500">WOS</span> puede ser un
          buen aliado para ti?
        </div>
        <div className=" text-2xl font-bold leading-10 text-center  max-md:mt-10 max-md:max-w-full">
          Envía un mensaje para conocer la plataforma y registrarte.
        </div>
        <div className="flex gap-5 justify-around  mt-14 text-2xl font-bold  flex-wrap max-w-full">
          <Link href="https://wa.link/70wd4s">
            <div className="flex gap-3.5 justify-between px-8 py-4 border-2 border-green-500 border-solid rounded-[55px] ">
              <Image
                src="/asesores/icono-wapp.svg"
                width={36}
                height={36}
                alt="Whatsapp icon"
              />
              <div className="self-center">Whatsapp</div>
            </div>
          </Link>
          <Link href="https://www.facebook.com/wosdigitalestate">
            <div className="flex gap-3.5 justify-between px-8 py-4 border-2 border-sky-500 border-solid rounded-[55px] ">
              <Image
                src="/asesores/icono-messenger.svg"
                width={36}
                height={38}
                alt="Messenger icon"
              />
              <div className="self-center">Messenger</div>
            </div>
          </Link>
          <Link href="https://www.instagram.com/wosdigitalestate/">
            <div className="flex gap-4 justify-between px-8 py-4 border-2 border-red-600 border-solid rounded-[55px] ">
              <Image
                src="/asesores/icono-ig.svg"
                width={25}
                height={25}
                alt="Instagram icon"
              />
              <div className="self-center">Instagram</div>
            </div>
          </Link>
          <Link href="tel: +523223779860">
            <div className="flex gap-5 justify-between px-8 py-4 border-2 border-white border-solid rounded-[55px] ">
              <Image
                src="/asesores/icono-llamada.svg"
                width={32}
                height={32}
                alt="Call icon"
              />
              <div className="self-center">Llamada{"  "}</div>
            </div>
          </Link>
        </div>

        <ContactForm />
        <Image
          src="/wos.svg"
          width={142}
          height={32}
          className="mt-32 mb-10 max-w-full"
          alt=""
        />
      </div>
    </div>
  );
}
