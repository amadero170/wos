import Link from "next/link";
import { Button } from "@/components/ui/button";
import AddPropertyForm from "./addPropertyForm";

export default function AddProperty() {
  return (
    <>
      <AddPropertyForm />
      <Button className="m-4">
        <Link href={"/users"}>volver</Link>
      </Button>
    </>
  );
}
