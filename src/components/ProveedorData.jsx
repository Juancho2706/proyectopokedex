"use client";
import { createContext, useState, useContext } from "react";

export const ContextoData = createContext();

function ProveedorData({ children }) {
  const [objetoPokemon, setObjetoPokemon] = useState({});
  const [proximo, setProximo] = useState("a");
  const [anterior, setAnterior] = useState("b");

  const a = () =>{setProximo("DD")}

  return (
    <ContextoData.Provider
      value={{
        objetoPokemon,
        setObjetoPokemon,
        proximo,
        setProximo,
        anterior,
        setAnterior,a
      }}
    >
      {children}
    </ContextoData.Provider>
  );
}
export const useMyPkmnDatos = () => useContext(ContextoData);

export default ProveedorData;
