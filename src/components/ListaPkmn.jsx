"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

//Llamo al componente pero de forma dinamica con Nextjs para solo ser usado en Client side
const Botoncry = dynamic(() => import("./Botoncry"), { ssr: false });

function ListaPkmn({ datospkmn }) {
  const [cambiodesprite, setcambiodesprite] = useState("");
  return (
    <div className="h-full lalinea scale-y-150 flex">
      <div className="w-1/2 flex items-center justify-center flex-col">
        <img className="h-1/4" src={cambiodesprite ? cambiodesprite : ""} />
      </div>
      <div className="w-1/2 flex justify-center flex-col  px-9 items-center">
        <div>Barra de busqueda</div>

        {Object.keys(datospkmn).map((key) => {
          return (
            <div
              onMouseOver={() => {
                setcambiodesprite(
                  datospkmn[key].sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                );
              }}
              className="Unidadpkmn group  flex justify-between text-white rounded-full w-3/4 px-4"
              key={datospkmn[key].id}
            >
              <div className="flex w-2/5 justify-center gap-2">
                <img
                  className="h-6 grayscale opacity-70 group-hover:grayscale-0  group-hover:opacity-100"
                  src={datospkmn[key].sprites.front_default}
                />
                <p>No. {datospkmn[key].id}</p>
              </div>
              <div className="flex w-1/2 justify-between">
                <p>{datospkmn[key].name}</p>
                <img
                  className="self-center h-3 w-3 opacity-0 group-hover:opacity-100"
                  src="/Pkeballicon.svg"
                />
              </div>
            </div>
          );
        })}
        <div>MENU</div>
      </div>
    </div>
  );
}

export default ListaPkmn;
