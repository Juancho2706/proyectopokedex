import Link from "next/link";
// import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar py-5 flex-row justify-center items-center text-center">
      <Link href={"/"}><h1 className="text-3xl font-bold">Pokedex</h1></Link>
      
      <ul className="flex justify-evenly">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/pokedex"}>Pokedex</Link>
        </li>
      </ul>
    </nav>
  );
}
