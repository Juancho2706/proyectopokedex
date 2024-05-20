import ContentDER from "./ContentDER";
import ContentIZQ from "./ContentIZQ";
import { useState } from "react";

function Contentnew() {
    const [cambiogen,setcambiogen] = useState(true)
  return (
    <div className="lineamedio flex justify-between items-center">
      <ContentIZQ />
      <ContentDER cambiogen={setcambiogen}/>
    </div>
  );
}

export default Contentnew;
