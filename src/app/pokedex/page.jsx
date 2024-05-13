import Botonbefore from "@/components/Botonbefore";
import Botonnext from "@/components/Botonnext";
import Cartapkmn from "@/components/Cartapkmn";

// Objeto vacio que se usara para mandar info de los pokemon hacia
// Futuros componentes, como el componente Cartapkmn
let objetoPokemon = {};
let next = "";
let previous = "";

// La funcion infodecadapokemon seria una funcion segundaria que gracias a la
// URL de la API nos lleva directo a la informacion completa del pokemon
// que luego usaremos en los componentes
export async function infodecadapokemon(datos) {
  const resInfo = await fetch(`${datos.url}`);
  const dataInfo = await resInfo.json();
  if (!objetoPokemon[dataInfo.id]) {
    objetoPokemon[dataInfo.id] = dataInfo;
  }
}

//La principal funcion es pokemonsData, de aca agarramos info de varios
//pokemons, en este caso los primeros 20, nos entrega solo nombre y
//una URL de la API en el cual alli sacamos el resto de la info sobre el pokemon
export async function pokemonsData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const data = await res.json();
  next = data.next
  previous = data.previous

  for (let index = 0; index < data.results.length; index++) {
    await infodecadapokemon(data.results[index]);
  }
}

async function Pokemones() {
  await pokemonsData();
  return (
    <div className="flex items-center content">
      <Botonbefore/>
      <Cartapkmn datospkmn={objetoPokemon} />
      <Botonnext />
    </div>
  );
}


