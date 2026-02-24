"use client";
import { useEffect, useState } from "react";

const slides = [
  { image: "/slide1.jpg", link: "/alunos" },
  { image: "/slide2.jpg", link: "/disciplinas" },
  { image: "/slide3.jpg", link: "https://instagram.com/gec_ufmg" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handleClick = () => {
    const link = slides[current].link;

    if (link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  };

  return (
    <section className="slider" onClick={handleClick}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <button className="prev" onClick={(e) => { e.stopPropagation(); prevSlide(); }}>‹</button>
      <button className="next" onClick={(e) => { e.stopPropagation(); nextSlide(); }}>›</button>

      <div className="indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={(e) => { e.stopPropagation(); setCurrent(index); }}
          />
        ))}
      </div>
    </section>
  );
}
