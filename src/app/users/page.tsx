import { Property, columns } from "./columns";
import { DataTable } from "./data-table";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData(): Promise<Property[]> {
  const res = await fetch("http://localhost:3000/api/property-list", {
    method: "GET",
    headers: headers(),
  });
  const data = await res.json();

  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <Button className="m-4">
        <Link href={"/property/add-property"}>Cargar propiedad nueva</Link>
      </Button>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
