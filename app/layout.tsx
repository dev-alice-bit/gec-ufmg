import "./globals.css";
import Link from "next/link";
import { Bungee } from "next/font/google";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Grêmio de Engenharia Civil UFMG",
  description: "Site oficial do GEC - UFMG",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <header className="header">
          <div className="header-container">
            {/* Logo + Nome */}
            <div className="logo-area">
              <img src="/logo.png" alt="Logo GEC" className="logo" />
              <span className={`${bungee.className} site-title`}>
                Grêmio de Engenharia Civil UFMG
              </span>
            </div>

            {/* Menu */}
            <nav className={bungee.className}>
              <Link href="/">Home</Link>
              <Link href="/sobre">Sobre</Link>
              <Link href="/contato">Contato</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
