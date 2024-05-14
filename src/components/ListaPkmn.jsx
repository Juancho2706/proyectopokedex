"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import FlechasArribaAbajo from "./FlechasArribaAbajo";

//Llamo al componente pero de forma dinamica con Nextjs para solo ser usado en Client side
const Botoncry = dynamic(() => import("./Botoncry"), { ssr: false });

function ListaPkmn({ datospkmn }) {
  const [cambiodesprite, setcambiodesprite] = useState("");
  return (
    <div className="h-full flex w-full">
      <div className="w-1/2 flex items-center justify-center flex-col">
        <img className="h-1/4" src={cambiodesprite ? cambiodesprite : ""} />
      </div>
      <div className="w-1/2 h-4/5 relative flex justify-center items-end">
        <div className="flex w-4/5 justify-center flex-col  items-center">
          <div>Barra de busqueda</div>

          {Object.keys(datospkmn).map((key) => {
            return (
              <div
                onMouseOver={() => {
                  setcambiodesprite(
                    datospkmn[key].sprites.other["showdown"].front_default
                  );
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
        {/* <FlechasArribaAbajo /> */}
      </div>
    </div>
  );
}

export default ListaPkmn;
