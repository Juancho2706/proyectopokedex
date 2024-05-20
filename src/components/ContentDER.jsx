import { pokesearchgen } from "./Lasfunciones";

function ContentDER() {
  return (
    <div className="w-[50%] contentDER">
      <div className="barradebusqueda"></div>
      <div className="generationmenu h-[80%]">
        <button onClick={()=>{pokesearchgen('1')}} className="botongen bg-[#ACD36C]">
          <img src="/pokemon_icon_gen.svg" className="self-center w-1/2" />
          Gen I
        </button>
        <button onClick={()=>{pokesearchgen('2')}} className="botongen bg-[#DCD677]">
          <img src="/pokemon_icon_gen.svg" className="self-center w-1/2" />
          Gen II
        </button>
        <button className="botongen bg-[#9CD7C8]">
          <img src="/pokemon_icon_gen.svg" className="self-center w-1/2" />
          Gen III
        </button>
        <button className="botongen bg-[#B7A3C3]">
          <img src="/pokemon_icon_gen.svg" className="self-center w-1/2" />
          Gen IV
        </button>
        <button className="botongen bg-[#9FCADF]">
          <img src="/pokemon_icon_gen.svg" className="self-center w-1/2" />
          Gen V
        </button>
        <button className="botongen bg-[#9FCADF]">
          <img src="/pokemon_icon_gen.svg" className="self-center w-1/2" />
          Gen VI
        </button>
        <button className="botongen bg-[#E89483]">
          <img src="/pokemon_icon_gen.svg" className="self-center w-1/2" />
          Gen VII
        </button>
        <button className="botongen bg-[#C97DC0]">
          <img src="/pokemon_icon_gen.svg" className="self-center w-1/2" />
          Gen VIII
        </button>
        <button className="botongen bg-[#EBC081]">
          <img src="/pokemon_icon_gen.svg" className="self-center w-1/2" />
          Gen IX
        </button>
      </div>
    </div>
  );
}

export default ContentDER;
