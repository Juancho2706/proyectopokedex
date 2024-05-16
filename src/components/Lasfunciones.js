export async function pokemonsData(undato) {
  const res = await fetch(
    `${
      undato ? undato : "https://pokeapi.co/api/v2/pokemon?offset=400&limit=17"
    }`
  );

  const data = await res.json();
  const proximo = data.next;
  const previous = data.previous;

  const objetoPokemon = {};

  for (let index = 0; index < data.results.length; index++) {
    const res2 = await fetch(data.results[index].url);
    const data2 = await res2.json();
    if (!objetoPokemon[data2.id]) {
      objetoPokemon[data2.id] = data2;
    }
  }
  console.log("ACA");
  return [objetoPokemon, proximo, previous];
}

export function primeraLetraMayus(str){
  return str.charAt(0).toUpperCase() + str.slice(1)
}