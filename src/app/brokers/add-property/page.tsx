
import PropertyForm from "../propertyForm"
import Link from "next/link"

export default function AddProperty() {

  return(<><h1 className="text-black"> Agregar nueva propiedad</h1>
  <Link href={'/brokers'} className="text-black">volver</Link>
    <h2>Propiedades cargadas por ti</h2>


    <PropertyForm/>
    </>)}
