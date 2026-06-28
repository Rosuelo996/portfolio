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
        <p className="section__eyebrow" data-aos="fade">
          Animation Gallery
        </p>

        <div className="section__header">
          <h2 className="section__title" data-aos="fade">
            Small details.
            <br />
            Big <span className="gold">experience</span>.
          </h2>

          <div
            className="section__description"
            data-aos="fade"
            data-aos-delay="100"
          >
            <p className="section__description--highlight">
              {" "}
              Every interaction started as a small experiment.
            </p>
            <p className="section__description--para">
              This gallery is where I experiment with interaction, timing and
              motion before those ideas become part of larger projects.
            </p>
          </div>
        </div>

        <div className="gallery__grid">
          <div
            className="gallery__item"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="gallery__card">
              <Clock />
            </div>

            <div className="gallery__content">
              <h3 className="gallery__title">Analog Clock</h3>
              <p className="gallery__description">
                A real-time analog clock with smooth movement and subtle depth.
              </p>
              <span className="gallery__tech">CSS / JS</span>
            </div>
          </div>

          <div
            className="gallery__item"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="150"
          >
            <div className="gallery__card">
              <EyeFollow mousePosition={mousePosition} />
            </div>

            <div className="gallery__content">
              <h3 className="gallery__title">Eye Follow</h3>
              <p className="gallery__description">
                Eyes that follow the cursor with smooth, natural movement.
              </p>
              <span className="gallery__tech">JS</span>
            </div>
          </div>

          <div
            className="gallery__item"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <div className="gallery__card">
              <OrbitalGlow />
            </div>

            <div className="gallery__content">
              <h3 className="gallery__title">Orbital Loader</h3>
              <p className="gallery__description">
                A modern loading animation built with timing, glow and
                repetition.
              </p>
              <span className="gallery__tech">CSS / JS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
