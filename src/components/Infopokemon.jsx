"use client";
import React from "react";
import { useEffect, useState } from "react";
import { pokeINFO, primeraLetraMayus } from "./Lasfunciones";
import Cargalenta from "./Cargalenta";

function Infopokemon({ nombre }) {
  const [hp, setHP] = useState("");
  const [att, setAtt] = useState("");
  const [def, setDef] = useState("");
  const [satt, setSatt] = useState("");
  const [sdef, setSdef] = useState("");
  const [spd, setSpd] = useState("");
  const [Altura, setAltura] = useState("");
  const [Peso, setPeso] = useState("");
  const [Tipo, setTipo] = useState("");
  const [Pasiva, setPasiva] = useState("");
  const [Despasiva, setDespasiva] = useState("");
  const [Habitat, setHabitat] = useState("");
  const [Desc, setDesc] = useState("");

  useEffect(() => {
    async function fetchData() {
      const [
        vidaD,
        attD,
        defD,
        sattD,
        sdefD,
        spdD,
        alturaD,
        pesoD,
        tipoD,
        pasivaD,
        despasivaD,
        habitatD,
        descD,
      ] = await pokeINFO(nombre);

      setHP(vidaD);
      setAtt(attD);
      setDef(defD);
      setSatt(sattD);
      setSdef(sdefD);
      setSpd(spdD);
      setAltura(alturaD);
      setPeso(pesoD);
      setTipo(tipoD);
      setPasiva(pasivaD);
      setDespasiva(despasivaD);
      setHabitat(habitatD);
      setDesc(descD);
    }
    fetchData();
  }, []);

  if (
    !hp ||
    !att ||
    !def ||
    !satt ||
    !sdef ||
    !spd ||
    !Altura ||
    !Peso ||
    !Tipo ||
    !Pasiva ||
    !Despasiva ||
    !Habitat ||
    !Desc
  ) {
    return (
      <div className="infopkmn">
        <div className="flex self-center text-center items-center object-center">
          <Cargalenta />
        </div>
      </div>
    ); // Puedes mostrar un componente de carga aquí
  }

  return (
    <>
      <div className="infopkmn">
        <div className="grid grid-cols-2 gap-2 text-center">
          <p className="todonegro rounded-full">HP {hp}</p>
          <p className="todonegro rounded-full">S.ATT {satt}</p>
          <p className="todonegro rounded-full">ATT {att}</p>
          <p className="todonegro rounded-full">S.DEF {sdef}</p>
          <p className="todonegro rounded-full">DEF {def}</p>
          <p className="todonegro rounded-full">SPD {spd}</p>
        </div>
        <div>
          <p className="todonegro p-6 rounded-md">{Desc}</p>
        </div>
        <div className="estono grid grid-cols-2 gap-2 text-center">
          <p className="todonegro rounded-full ">Altura {Altura}</p>
          <p className="todonegro rounded-full">Peso {Peso}</p>
        </div>
        <p className="estono todonegro rounded-full text-center">
          Habitat {primeraLetraMayus(Habitat)}
        </p>
        <div className="estono">
          <p className="todonegro p-6 rounded-md">
            {Pasiva}
            <br />
            {Despasiva}
          </p>
        </div>
      </div>
    </>
  );
}

export default Infopokemon;
