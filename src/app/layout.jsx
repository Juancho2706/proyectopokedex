import Navbar from "@/components/Navbar";
import "./globals.css";
import Loading from "./loading";

export const metadata = {
  title: "PokeDex NextJS",
  description: "Proyecto Juancho2706",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Loading />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
