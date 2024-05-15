"use client";
import ListaPkmn from "@/components/ListaPkmn";
import { useState, useEffect } from "react";
import { pokemonsData } from "../components/Lasfunciones";


export default function Home() {
  const [objetoPokemon, setObjetoPokemon] = useState({});
  const [proximo, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [cargando,setcargando] = useState(false)

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
        {cargando ? <ListaPkmn esload={cargando} /> : <ListaPkmn datospkmn={objetoPokemon} esload={cargando} />}
        <div className="w-8 flex flex-col relative gap-5 self-center right-16">
          <button
            onClick={async () => {
              setcargando(true)
              const [dato1, dato2, dato3] = await pokemonsData(previous);
              setObjetoPokemon(dato1);
              setNext(dato2);
              setPrevious(dato3);
              setcargando(false)
            }}
          >
            <img src="/Top.png"></img>
          </button>
          <button
            onClick={async () => {
              setcargando(true)
              const [dato1, dato2, dato3] = await pokemonsData(proximo);
              setObjetoPokemon(dato1);
              setNext(dato2);
              setPrevious(dato3);
              setcargando(false)
            }}
          >
            <img src="/Top.png"></img>
          </button>
        </div>
      </div>
      <div className="FooterHome1">
        <img src="/Footer.png"></img>
      </div>
    </main>
  );
}
