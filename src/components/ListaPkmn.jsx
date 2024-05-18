"use client";
import { useState } from "react";
import Nombrepkmn from "./Nombrepkmn";
import Cargalenta from "./Cargalenta";
import { primeraLetraMayus } from "./Lasfunciones";
import Infopokemon from "./Infopokemon";

function ListaPkmn({
  datospkmn,
  esload,
  cambio,
  setCambio,
  mostrar,
  setmostrar,
  cambiodesprite, setcambiodesprite
}) {
  
  const [cambioID, setcambioID] = useState("");
  const [cambioNombre, setcambioNombre] = useState("");

  return (
    <div className="h-full flex w-full items-center justify-around">
      <div className="w-1/2 flex eldisplay items-center justify-center flex-col" >
        <Nombrepkmn id={cambioID} nombre={cambioNombre} mostrar={mostrar} />
        <img
          className="h-1/3"
          loading="lazy"
          
          src={cambiodesprite ? cambiodesprite : ""}
        />
      </div>
      {cambio ? (
        <Infopokemon nombre={cambioNombre} />
      ) : (
        <div className="w-1/2 h-[80vh] flex justify-center items-center">
          <div className="heighinherit gap-2 flex w-4/5 justify-center flex-col  items-center">
            {esload ? (
              <Cargalenta />
            ) : (
              <>
                <div>Barra de busqueda</div>

                {Object.keys(datospkmn).map((key) => {
                  return (
                    <div
                      onClick={() => {
                        setmostrar(!mostrar);
                        setCambio(true);
                      }}
                      onMouseOver={() => {
                        setcambiodesprite(
                          datospkmn[key].sprites.other["official-artwork"]
                            .front_default
                        );
                        setcambioID(datospkmn[key].id);
                        setcambioNombre(datospkmn[key].name);
                      }}
                      className="Unidadpkmn group items-center h-[30px] flex justify-between text-white rounded-full w-4/5 "
                      key={datospkmn[key].id}
                    >
                      <div className="flex w-2/5 justify-center gap-2">
                        <img
                          loading="eager"
                          className="h-6 grayscale opacity-70 group-hover:grayscale-0  group-hover:opacity-100"
                          src={datospkmn[key].sprites.front_default}
                        />
                        <p>No. {datospkmn[key].id}</p>
                      </div>
                      <div className="flex w-1/2 justify-between px-2">
                        <p>{primeraLetraMayus(datospkmn[key].name)}</p>
                        <img
                          className="self-center h-3 w-3 opacity-0 group-hover:opacity-100"
                          src="/Pkeballicon.svg"
                        />
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListaPkmn;
