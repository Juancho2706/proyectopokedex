import Contentnew from "./Contentnew";
import Footernew from "./Footernew";
import Headernew from "./Headernew";

function Nuevodiseno() {
  return (
    <div className="flex justify-between flex-col lalinea3">
      <Headernew />
      <Contentnew />
      <Footernew />
    </div>
  );
}

export default Nuevodiseno;
