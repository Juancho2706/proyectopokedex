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
  const imagenesPokemon = [];

  for (let index = 0; index < data.results.length; index++) {
    const res2 = await fetch(data.results[index].url);
    const data2 = await res2.json();
    if (!objetoPokemon[data2.id]) {
      objetoPokemon[data2.id] = data2;
      const img = new Image();
      const imgmini = new Image();
      img.src = data2.sprites.other["official-artwork"].front_default;
      imgmini.src = data2.sprites.front_default;
    }
  }
  return [objetoPokemon, proximo, previous];
}

export async function pokesearchgen(numero){
  const res = await fetch(`https://pokeapi.co/api/v2/generation/${+numero}`)
  const data = await res.json()
  console.log(data)

}

export function primeraLetraMayus(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function habitatpkmn(url) {
  let res = await fetch(url);
  let data = await res.json();

  if (data.habitat !== null) {
    const habitaturl = data.habitat.url;
    let habitatdata = "";

    res = await fetch(habitaturl);
    data = await res.json();
    for (let index = 0; index < data.names.length; index++) {
      if (data.names[index].language.name === "es") {
        habitatdata = data.names[index].name;
        break;
      }
    }
    return habitatdata;
  } else {
    const notiene = "N/A";
    return notiene;
  }
}

export async function descpkmn(url) {
  let res = await fetch(url);
  let data = await res.json();
  const descarray = data.flavor_text_entries;
  let descdata = "";

  for (let index = 0; index < descarray.length; index++) {
    if (descarray[index].language.name === "es") {
      descdata = descarray[index].flavor_text;
      break;
    }
  }
  return descdata;
}

export async function habilidadespasivas(url) {
  const res = await fetch(url);
  const data = await res.json();
  const nombrepasiva = data.names;
  let pasiva = "";
  for (let index = 0; index < nombrepasiva.length; index++) {
    if (nombrepasiva[index].language.name === "es") {
      pasiva = nombrepasiva[index].name;
      break;
    }
  }
  let despasiva = "";
  const despasivaentries = data.flavor_text_entries;
  for (let index = 0; index < despasivaentries.length; index++) {
    if (despasivaentries[index].language.name === "es") {
      despasiva = despasivaentries[index].flavor_text;
      break;
    }
  }
  return [pasiva, despasiva];
}

export async function pokeINFO(nombre) {
  let altura = "";
  let peso = "";
  let hp = "";
  let att = "";
  let def = "";
  let satt = "";
  let sdef = "";
  let spd = "";
  let poketypes = "";
  let habilidadpasivaurl = "";
  let habitat = "";

  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + nombre);
  const data = await res.json();

  altura = data.height;
  peso = data.weight;
  hp = data.stats[0].base_stat;
  att = data.stats[1].base_stat;
  def = data.stats[2].base_stat;
  satt = data.stats[3].base_stat;
  sdef = data.stats[4].base_stat;
  spd = data.stats[5].base_stat;
  poketypes = data.types;
  habilidadpasivaurl = data.abilities[0].ability.url;
  habitat = data.species.url;

  const [pasivaFINAL, despasivaFINAL] = await habilidadespasivas(
    habilidadpasivaurl
  );
  const habitatFINAL = await habitatpkmn(habitat);
  const descFINAL = await descpkmn(habitat);
  return [
    hp,
    att,
    def,
    satt,
    sdef,
    spd,
    altura,
    peso,
    poketypes,
    pasivaFINAL,
    despasivaFINAL,
    habitatFINAL,
    descFINAL,
  ];
}
