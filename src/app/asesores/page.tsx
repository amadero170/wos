import ContactForm from "./ContactForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="bg-top bg-contain bg-no-repeat max-w-screen w-screen flex flex-col items-center px-8 lg:px-40 text-center"
        style={{
          backgroundImage: `url("/bg-image.jpeg")`,
          backgroundColor: "#013230",
        }}
      >
        <Image
          className="justify-center my-20 lg:my-32"
          src="/wos-logo-blanco.png"
          alt="wos"
          width={271}
          height={61}
        ></Image>
        <h3 className="font-black text-[40px] lg:text-[44px] max-w-3xl my-4">
          Hola, somos WOS, una plataforma de estrategias digitales
          inmobiliarias.
        </h3>
        <h4 className="text-xl lg:text-2xl my-4">
          No queremos venderte nada, queremos ayudarte a<br></br>{" "}
          <i className=" font-black">trabajar con más poder:</i>
        </h4>
        <ul className="grid grid-cols-2 grid-rows-3 gap-2 lg:gap-4 grid-flow-row grid-auto-rows-auto text-left text-lg md:text-xl mt-4 mx-2 lg:mx-8 font-medium">
          <li className="my-2 md:my-8">→ Mejores leads digitales</li>
          <li className="my-2 md:my-8">→ Más opciones de venta</li>
          <li className="my-2 md:my-8">→ Mejores comisiones</li>
          <li className="my-2 md:my-8">→ Estrategias reales de marketing</li>
          <li className="my-2 md:my-8">→ Capacitación innovadora</li>
          <li className="my-2 md:my-8">→ Motivación</li>
        </ul>
        <Image
          className="justify-center my-12"
          src="/flecha.png"
          alt="wos"
          width={50}
          height={50}
        ></Image>
        <div>
          <h3 className="font-black text-[40px] lg:text-[44px] my-8 lg:my-16">
            WOS está listo para iniciar operación en Guadalajara, Puerto
            Vallarta & Riviera Nayarit{" "}
          </h3>
          <h4 className="text-2xl mb-2">
            Estamos formando un pequeño grupo de profesionales inmobiliarios con
            visión que quieran ser parte del equipo fundador.
          </h4>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#70EAED]">
            #AsesoresInnovadores
          </h4>
        </div>
      </div>

      <div className="bg-[#013230] py-16 flex flex-col items-center px-4 lg:px-40">
        <div className="px-2">
          <ContactForm />
        </div>
        <Image
          className="my-12"
          src="/titulo-wos.png"
          alt="wos"
          width={100}
          height={100}
        ></Image>
        <div className="flex gap-2">
          <Link
            href="https://www.facebook.com/wosdigitalestate"
            target="_blank"
          >
            <Image
              src="/Facebook.png"
              alt="wos_fb"
              width={35}
              height={35}
            ></Image>
          </Link>
          <Link
            href="https://www.instagram.com/wosdigitalestate/"
            target="_blank"
          >
            <Image
              src="/Instagram.png"
              alt="wos_ig"
              width={35}
              height={35}
            ></Image>
          </Link>
        </div>
      </div>
    </>
  );
}
