import "./globals.css";
import Link from "next/link";
import { Bungee, Cabin } from "next/font/google";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
});

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
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
    <html lang="pt-br" className={`${bungee.variable} ${cabin.variable}`}>
      <body>
        <header className="header">
          <div className="header-container">
            <div className="logo-area">
              <img src="/logo.png" alt="Logo GEC" className="logo" />
            </div>

<nav className="menu">
  <a href="/">Início</a>
  <a href="/sobre">Sobre</a>
  <a href="/disciplinas">Disciplinas</a>
  <a href="/eventos">Eventos</a>
  <a href="/noticias">Notícias</a>
  <a href="/gestao">Gestão</a>
  <a href="/alunos">Alunos</a>
  <a href="/colegiado">Colegiado</a>
  <a href="/contato">Contato</a>
</nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
