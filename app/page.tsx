"use client";
import { useEffect, useState } from "react";

const slides = [
  { image: "/slide1.jpg", link: "/alunos" },
  { image: "/slide2.jpg", link: "/disciplinas" },
  { image: "/slide3.jpg", link: "https://instagram.com/gec.ufmg" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="slider">
        {slides.map((slide, index) => (
          <a
            key={index}
            href={slide.link}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}

        <button className="prev" onClick={prevSlide}>‹</button>
        <button className="next" onClick={nextSlide}>›</button>

        <div className="indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === current ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
