"use client";
import ListaPkmn from "@/components/ListaPkmn";
import { useState, useEffect } from "react";

// La funcion infodecadapokemon seria una funcion segundaria que gracias a la
// URL de la API nos lleva directo a la informacion completa del pokemoan
// que luego usaremos en los componentes

// //La principal funcion es pokemonsData, de aca agarramos info de varios
// //pokemons, en este caso los primeros 20, nos entrega solo nombre y
// //una URL de la API en el cual alli sacamos el resto de la info sobre el pokemon

export default async function Home() {
  const [objetoPokemon, setObjetoPokemon] = useState({});
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  const pokemonsData = async (undato) => {
    const res = await fetch(
      `${
        undato
          ? undato
          : "https://pokeapi.co/api/v2/pokemon?offset=200&limit=17"
      }`
    );

    const data = await res.json();
    setNext(data.next);
    setPrevious(data.previous);
    setObjetoPokemon({});
    await infodecadapokemon(data);
  };

  const infodecadapokemon = async (data) => {
    const temporal = {};
    for (let index = 0; index < data.results.length; index++) {
      const resInfo = await fetch(`${data.results[index].url}`);
      const dataInfo = await resInfo.json();
      if (!temporal[dataInfo.id]) {
        temporal[dataInfo.id] = dataInfo;
      }
    }
    setObjetoPokemon(temporal);
  };

  useEffect(() => {
    pokemonsData();
  }, []);

  return (
    <main className="BodyHome1 overflow-y-hidden overflow-x-hidden">
      <div className="HeaderHome1">
        <img src="/Header.png"></img>
      </div>
      <div className="flex  lalinea scale-y-150">
        <ListaPkmn datospkmn={objetoPokemon} />
        <div className="w-8 flex flex-col relative gap-5 self-center right-16">
          <button
            onClick={() => {
              pokemonsData(previous);
            }}
          >
            <img src="/Top.png"></img>
          </button>
          <button
            onClick={() => {
              pokemonsData(next);
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
