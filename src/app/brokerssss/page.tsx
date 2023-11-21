// import Link from "next/link";
// import { getServerSession } from "next-auth";
// import { headers } from "next/headers";

// const handler = async () => {
//   const res = await fetch("http://localhost:3000/api/property", {
//     method: "GET",
//     headers: headers(),
//   });
//   const data = await res.json();
//   console.log("handler data", data);
//   return data;
// };
// export default async function Brokers() {
//   const properties = await handler();
//   return (
//     <>
//       <h1> Pagina de brokers con login</h1>
//       <Link href={"/brokers/add-property"}>boton propiedad nueva</Link>
//       {properties.map((item: any, index: any) => {
//         return <h3 key={index}>{item.nombre}</h3>;
//       })}
//     </>
//   );
// }
