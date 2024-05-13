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
  next = data.next;
  previous = data.previous;

  for (let index = 0; index < data.results.length; index++) {
    await infodecadapokemon(data.results[index]);
  }
}

export default async function Home() {
  await pokemonsData();
  console.log(objetoPokemon);
  return (
    <main className="BodyHome1 overflow-y-hidden overflow-x-hidden">
      <div className="HeaderHome1">
        <img src="/Header.png"></img>
      </div>
      <div className="h-full lalinea scale-y-150 flex">
        <div className="w-1/2"></div>
        <div className="w-1/2"> AAAAA</div>
      </div>
      <div className="FooterHome1">
        <img src="/Footer.png"></img>
      </div>
    </main>
  );
}
