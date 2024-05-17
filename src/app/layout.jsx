import "./globals.css";
export const metadata = {
  title: "PokeDex NextJS",
  description: "Proyecto Juancho2706",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="font-catamaran font-bold lead text-opacity-90 tracking-normal"
    >
      <body>{children}</body>
    </html>
  );
}
