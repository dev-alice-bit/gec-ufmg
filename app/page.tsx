"use client";
import { useEffect, useState } from "react";

const slides = [
  "/slide1.jpg",
  "/slide2.jpg",
  "/slide3.jpg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="slider"
        style={{ backgroundImage: `url(${slides[current]})` }}
      ></section>

      <section className="sobre">
        <div className="container">
          <h2>Sobre o GEC</h2>
          <p>
            O Grêmio de Engenharia Civil atua na representação estudantil,
            promovendo eventos acadêmicos, integração e fortalecimento
            da comunidade universitária.
          </p>
        </div>
      </section>
    </>
  );
}
