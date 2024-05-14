"use client";
import { useState } from "react";
import Nombrepkmn from "./Nombrepkmn";

function ListaPkmn({ datospkmn }) {
  const [cambiodesprite, setcambiodesprite] = useState("");
  const [cambioID, setcambioID] = useState("");
  const [cambioNombre, setcambioNombre] = useState("");
  const [mostrar, setmostrar] = useState(false);
  return (
    <div className="h-full flex w-full">
      <div className="w-1/2 flex items-center justify-center flex-col">
        {mostrar && <Nombrepkmn id={cambioID} nombre={cambioNombre} />}
        <img className="h-1/3" src={cambiodesprite ? cambiodesprite : ""} />
      </div>
      <div className="w-1/2 h-4/5 relative flex justify-center items-end">
        <div className="flex w-4/5 justify-center flex-col  items-center">
          <div>Barra de busqueda</div>

          {Object.keys(datospkmn).map((key) => {
            return (
              <div
                onClick={() => {
                  setmostrar(!mostrar);
                }}
                onMouseOver={() => {
                  setcambiodesprite(datospkmn[key].sprites.front_default);
                  setcambioID(datospkmn[key].id);
                  setcambioNombre(datospkmn[key].name);
                }}
                className="Unidadpkmn group  flex justify-between text-white rounded-full w-4/5 h-3/4"
                key={datospkmn[key].id}
              >
                <div className="flex w-2/5 justify-center gap-2">
                  <img
                    className="h-6 grayscale opacity-70 group-hover:grayscale-0  group-hover:opacity-100"
                    src={datospkmn[key].sprites.front_default}
                  />
                  <p>No. {datospkmn[key].id}</p>
                </div>
                <div className="flex w-1/2 justify-between px-2">
                  <p>{datospkmn[key].name}</p>
                  <img
                    className="self-center h-3 w-3 opacity-0 group-hover:opacity-100"
                    src="/Pkeballicon.svg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListaPkmn;
