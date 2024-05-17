import { primeraLetraMayus } from "./Lasfunciones";

function Nombrepkmn({id, nombre, mostrar}) {
  return (
    <div className={mostrar ? "opacity-100" : "opacity-0"} >No. {id} {primeraLetraMayus(nombre)}</div>
  )
}

export default Nombrepkmn