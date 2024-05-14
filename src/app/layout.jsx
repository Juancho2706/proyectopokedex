import "./globals.css";
import Loading from "./loading";

export const metadata = {
  title: "PokeDex NextJS",
  description: "Proyecto Juancho2706",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="font-catamaran font-bold text-opacity-90 tracking-normal"
    >
      <body>
          <Loading />
          {children}
      </body>
    </html>
  );
}
