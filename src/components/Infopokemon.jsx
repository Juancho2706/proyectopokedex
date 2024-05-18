"use client";
import { useEffect, useState } from "react";
import { pokeINFO,primeraLetraMayus } from "./Lasfunciones";


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

  return (
    <>
      <div className="w-1/2 h-1/2 px-48 flex flex-col gap-2">
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
        <div className="grid grid-cols-2 gap-2 text-center">
          <p className="todonegro rounded-full ">Altura {Altura}</p>
          <p className="todonegro rounded-full">Peso {Peso}</p>
        </div>
        <p className="todonegro rounded-full text-center">Habitat {primeraLetraMayus(Habitat)}</p>
        <div>
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
