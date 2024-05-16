"use client"
import { pokemonsData } from "../components/Lasfunciones";

function FlechasArribaAbajo({previous,proximo,setcargando,setNext,setObjetoPokemon,setPrevious}) {
  return (
    <div className="w-16 flex flex-col translate-y-2/3 relative gap-5  right-16">
          <button
            
            onClick={async () => {
              
              setcargando(true);
              const [dato1, dato2, dato3] = await pokemonsData(previous);
              setObjetoPokemon(dato1);
              setNext(dato2);
              setPrevious(dato3);
              setcargando(false);
            }}
          >
            <img className="size-6" src="/Top.png"></img>
          </button>
          <button
            
            onClick={async () => {
              
              setcargando(true);
              const [dato1, dato2, dato3] = await pokemonsData(proximo);
              setObjetoPokemon(dato1);
              setNext(dato2);
              setPrevious(dato3);
              setcargando(false);
            }}
          >
            <img className="size-6 rotate-180" src="/Top.png"></img>
          </button>
        </div>
  );
}

export default FlechasArribaAbajo;
