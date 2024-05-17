import Image from "next/image";

function Cargalenta() {
  return (
    <div>
      <Image
        src="/icon.ico"
        width={200}
        height={200}
        alt="PokeIcon"
        className="motion-safe:animate-spin"
      />
    </div>
  );
}

export default Cargalenta;
