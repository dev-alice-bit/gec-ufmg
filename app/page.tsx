export default function Home() {
  return (
    <>
      {/* Banner */}
      <section style={{
        backgroundImage: "url('/engenharia.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#F5F2EC",
        textAlign: "center"
      }}>
        <div style={{
          backgroundColor: "rgba(10,53,3,0.7)",
          padding: "40px",
          borderRadius: "8px"
        }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            Grêmio de Engenharia Civil UFMG
          </h1>
          <p>
            Representando e fortalecendo os estudantes de Engenharia Civil.
          </p>
        </div>
      </section>

      {/* Seção Sobre */}
      <section style={{ padding: "60px 40px" }}>
        <h2 style={{ marginBottom: "20px" }}>Sobre o GEC</h2>
        <p style={{ maxWidth: "800px", lineHeight: "1.6" }}>
          O Grêmio de Engenharia Civil atua na representação estudantil,
          promovendo eventos acadêmicos, integração e fortalecimento
          da comunidade universitária.
        </p>
      </section>
    </>
  );
}
