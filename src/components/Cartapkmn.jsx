// "use client";
import Image from "next/image";
import dynamic from 'next/dynamic';

//Llamo al componente pero de forma dinamica con Nextjs para solo ser usado en Client side
const Botoncry = dynamic(() => import('./Botoncry'), { ssr: false });

async function Cartapkmn({ datospkmn }) {
  return (
    <div className="elover w-1/8 flex flex-row flex-wrap gap-1 justify-center flex-grow-2">
      {Object.keys(datospkmn).map((key) => {
        return (
          <div className="flex w-1/5  " key={datospkmn[key].id}>
            <div className="bg-slate-500  w-1/4 h-full overflow-hidden">
              <Image alt={datospkmn[key].name} priority={true} className="min-w-48  transform -translate-x-1/4" width={800} height={800} src={datospkmn[key].sprites.other['official-artwork'].front_default}/>
            </div> 
            {/* <div
              
              className="w-3/4 flex gap-4 justify-between  flex-col place-items-center bg-slate-400 "
            > */}
              <h3>{datospkmn[key].name}</h3>
              {/* <img src={datospkmn[key].sprites.versions['generation-v']['black-white'].animated.front_default} /> */}
              <Botoncry sonido={datospkmn[key].cries.latest} />
            {/* </div> */}
            
          </div>
        );
      })}
    </div>
  );
}

export default Cartapkmn;
