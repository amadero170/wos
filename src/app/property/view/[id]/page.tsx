import { Property } from "@/app/users/columns";
import { headers } from "next/headers";

export default async function Page({ params }: { params: { id: string } }) {
  async function getData(): Promise<Property> {
    const res = await fetch("http://localhost:3000/api/get-property-by-id", {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(params.id),
    });
    const data = await res.json();
    console.log(data);
    return data;
  }
  const data = await getData();
  return (
    <>
      <div>Casa {params.id}</div>

      {data.id}
      {data.nombre}
      {data.ciudad}
      {data.banos}
      {data.precio}
      {data.tipo}
      {data.metros}
      {data.imagen}
    </>
  );
}
