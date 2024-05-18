"use client";
import ListaPkmn from "@/components/ListaPkmn";
import { useState, useEffect } from "react";
import { pokemonsData } from "../components/Lasfunciones";
import FlechasArribaAbajo from "@/components/FlechasArribaAbajo";
import BotonBack from "@/components/BotonBack";

export default function Home() {
  const [objetoPokemon, setObjetoPokemon] = useState({});
  const [proximo, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [cargando, setcargando] = useState(false);
  const [cambio, setCambio] = useState(false);
  const [mostrar, setmostrar] = useState(false);
  const [cambiodesprite, setcambiodesprite] = useState("");

  useEffect(() => {
    async function fetchData() {
      const [dato1, dato2, dato3] = await pokemonsData();
      setObjetoPokemon(dato1);
      setNext(dato2);
      setPrevious(dato3);
    }
    fetchData();
  }, []);

  return (
    <main className="BodyHome1 overflow-y-hidden overflow-x-hidden">
      <div className="HeaderHome1">
        <img src="/Header.png"></img>
      </div>
      <div className="flex  lalinea ">

        {cargando ? (
          <ListaPkmn esload={cargando} />
        ) : (
          <ListaPkmn
          cambiodesprite={cambiodesprite}
          setcambiodesprite={setcambiodesprite}
            datospkmn={objetoPokemon}
            esload={cargando}
            cambio={cambio}
            setCambio={setCambio}
            mostrar={mostrar}
            setmostrar={setmostrar}
          />
        )}
        {cambio ? (
          <>
            <BotonBack setCambio={setCambio} setmostrar={setmostrar} />
          </>
        ) : (
          <FlechasArribaAbajo
            previous={previous}
            proximo={proximo}
            setNext={setNext}
            setPrevious={setPrevious}
            setObjetoPokemon={setObjetoPokemon}
            setcargando={setcargando}
            setcambiodesprite={setcambiodesprite}
          />
        )}
      </div>
      <div className="FooterHome1">
        <img src="/Footer.png"></img>
      </div>
    </main>
  );
}
