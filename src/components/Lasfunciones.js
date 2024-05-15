// export async function infodecadapokemon(datos, objetoPokemon) {
//   const resInfo = await fetch(`${datos.url}`);
//   const dataInfo = await resInfo.json();
//   if (!objetoPokemon[dataInfo.id]) {
//     objetoPokemon[dataInfo.id] = dataInfo;
//   }
// }

export async function pokemonsData(undato) {
  const res = await fetch(
    `${
      undato ? undato : "https://pokeapi.co/api/v2/pokemon?offset=400&limit=17"
    }`
  );

  const data = await res.json();
  next = data.next;
  previous = data.previous;

  let res2 = "";
  let data2 = "";
  objetoPokemon = {};

  for (let index = 0; index < data.results.length; index++) {
    const res2 = await fetch(`${data.results[index]}`);
    const data2 = await resInfo.json();
    if (!objetoPokemon[data2.id]) {
      objetoPokemon[data2.id] = data2;
    }
  }
  return objetoPokemon
}

// export async function infodecadapokemon(datos,objetoPokemon) {
//   const resInfo = await fetch(`${datos.url}`);
//   const dataInfo = await resInfo.json();
//   if (!objetoPokemon[dataInfo.id]) {
//     objetoPokemon[dataInfo.id] = dataInfo;
//   }
// }

// //La principal funcion es pokemonsData, de aca agarramos info de varios
// //pokemons, en este caso los primeros 20, nos entrega solo nombre y
// //una URL de la API en el cual alli sacamos el resto de la info sobre el pokemon
// export async function pokemonsData(undato,next,previous,objetoPokemon) {
//   const res = await fetch(
//     `${
//       undato ? undato : "https://pokeapi.co/api/v2/pokemon?offset=800&limit=17"
//     }`
//   );

//   const data = await res.json();
//   next = data.next;
//   previous = data.previous;
//   for (let index = 0; index < data.results.length; index++) {
//     await infodecadapokemon(data.results[index],objetoPokemon);
//   }
// }
