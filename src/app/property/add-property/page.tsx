import PropertyForm from "./addPropertyForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AddProperty() {
  return (
    <>
      <Button className="m-4">
        <Link href={"/users"}>volver</Link>
      </Button>

      <PropertyForm />
    </>
  );
}
