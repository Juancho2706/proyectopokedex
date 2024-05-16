"use client";
import ListaPkmn from "@/components/ListaPkmn";
import { useState, useEffect } from "react";
import { pokemonsData } from "../components/Lasfunciones";
import FlechasArribaAbajo from "@/components/FlechasArribaAbajo";

export default function Home() {
  const [objetoPokemon, setObjetoPokemon] = useState({});
  const [proximo, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [cargando, setcargando] = useState(false);
  const [cambio, setCambio] = useState(false);

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
      <div className="flex  lalinea scale-y-150">
        {console.log(cambio)}
        {cargando ? (
          <ListaPkmn esload={cargando} />
        ) : (
          <ListaPkmn
            datospkmn={objetoPokemon}
            esload={cargando}
            cambio={cambio}
            setCambio={setCambio}
          />
        )}
        {cambio ? (
          <></>
        ) : (
          <FlechasArribaAbajo
            previous={previous}
            proximo={proximo}
            setNext={setNext}
            setPrevious={setPrevious}
            setObjetoPokemon={setObjetoPokemon}
            setcargando={setcargando}
          />
        )}
      </div>
      <div className="FooterHome1">
        <img src="/Footer.png"></img>
      </div>
    </main>
  );
}
