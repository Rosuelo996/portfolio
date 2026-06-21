"use client";
import { useState } from "react";
import EyeFollow from "./animations/EyeFollow";
import Clock from "./animations/Clock";
import OrbitalGlow from "./animations/OrbitalGlow";

const Gallery = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMove(event: React.MouseEvent) {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <section onMouseMove={handleMove} id="gallery">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title" data-aos="fade">
            Here is my animation <span className="gold">gallery</span>.
          </h2>
          <p
            className="section__description"
            data-aos="fade"
            data-aos-delay="100"
          >
            Small interactions, motion experiments and micro animations.
          </p>
        </div>

        <div className="gallery__grid">
          <div
            className="gallery__card"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <Clock />
          </div>
          <div
            className="gallery__card"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <EyeFollow mousePosition={mousePosition} />
          </div>

          <div
            className="gallery__card"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <OrbitalGlow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
