import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <header style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
          <h2>Grêmio de Engenharia Civil UFMG</h2>
          <nav style={{ marginTop: "10px" }}>
            <Link href="/" style={{ marginRight: "15px" }}>Home</Link>
            <Link href="/sobre" style={{ marginRight: "15px" }}>Sobre</Link>
            <Link href="/contato">Contato</Link>
          </nav>
        </header>

        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
