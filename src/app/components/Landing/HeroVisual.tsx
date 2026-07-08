"use client";
import { gsap } from "gsap";
import { useRef } from "react";

type Props = {
  openModal: () => void;
  darkMode: boolean;
};

const HeroVisual = ({ openModal, darkMode }: Props) => {
  const particlesRef = useRef<HTMLImageElement[]>([]);
  const registerParticle = (index: number) => (el: HTMLImageElement | null) => {
    if (el) particlesRef.current[index] = el;
  };

  const particleStrength = [18, 10, 22, 14, 20, 26, 12, 16, 14, 24];

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  
  const rect = e.currentTarget.getBoundingClientRect();

  const mouseX =
    (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);

  const mouseY =
    (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

  particlesRef.current.forEach((particle, index) => {
    if (!particle) return;

    const strength = particleStrength[index];

    const directionX = index % 2 === 0 ? 1 : -1;
    const directionY = index % 3 === 0 ? -1 : 1;

    gsap.to(particle, {
      x: mouseX * strength * directionX,
      y: mouseY * strength * directionY,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
  });
};

const handleMouseLeave = () => {
  particlesRef.current.forEach((particle) => {
    if (!particle) return;

    gsap.to(particle, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
  });
};

  return (
    <div className="hero__visual" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="hero__particles">
        <img
          ref={registerParticle(0)}
          src="/icons/black-sphere.svg"
          className="hero__particle hero__particle--lg hero__particle--1"
        />
        <img
          ref={registerParticle(1)}
          src="/icons/gold-sphere.svg"
          className="hero__particle hero__particle--md hero__particle--2"
        />
        <img
          ref={registerParticle(2)}
          src="/icons/gold-sphere.svg"
          className="hero__particle hero__particle--sm hero__particle--3"
        />
        <img
          ref={registerParticle(3)}
          src="/icons/black-cube.svg"
          className="hero__particle hero__particle--sm hero__particle--4"
        />
        <img
          ref={registerParticle(4)}
          src="/icons/gold-sphere.svg"
          className="hero__particle hero__particle--md hero__particle--5"
        />
        <img
          ref={registerParticle(5)}
          src="/icons/gold-sphere.svg"
          className="hero__particle hero__particle--lg hero__particle--6"
        />
        <img
          ref={registerParticle(6)}
          src="/icons/gold-sphere.svg"
          className="hero__particle hero__particle--sm hero__particle--7"
        />
        <img
          ref={registerParticle(7)}
          src="/icons/black-sphere.svg"
          className="hero__particle hero__particle--sm hero__particle--8"
        />
        <img
          ref={registerParticle(8)}
          src="/icons/black-sphere.svg"
          className="hero__particle hero__particle--sm hero__particle--9"
        />
        <img
          ref={registerParticle(9)}
          src="/icons/black-cube.svg"
          className="hero__particle hero__particle--md hero__particle--10"
        />
      </div>

      <div className="hero__stack">
        <img src="/icons/network.svg" className="hero__network" alt="" />

        <div className="hero__main-lines">
          <svg viewBox="0 0 100 100">
            <path pathLength="100" d="M 50 48 H 12 V 28" />
            <path pathLength="100" d="M 50 48 H 88 V 26" />
            <path pathLength="100" d="M 50 48 V 94 H 62 V 80" />
          </svg>
        </div>

        {darkMode ? (
          <img
            src="/icons/platform-bottom2.svg"
            className="hero__platform hero__platform--bottom"
          />
        ) : (
          <img
            src="/icons/platform-bottom2.svg"
            className="hero__platform hero__platform--bottom"
          />
        )}

        {darkMode ? (
          <img
            src="/icons/platform-top2.svg"
            className="hero__platform hero__platform--top"
          />
        ) : (
          <img
            src="/icons/platform-top2.svg"
            className="hero__platform hero__platform--top"
          />
        )}

        <img src="/icons/card2.svg" className="hero__platform hero__chip" />

        <div className="hero__cards">
          <a href="#gallery">
            {darkMode ? (
              <img
                src="/icons/gallery-dm2.svg"
                className="hero__card hero__card--gallery"
              />
            ) : (
              <img
                src="/icons/gallery2.svg"
                className="hero__card hero__card--gallery"
              />
            )}
          </a>

          <a href="#projects">
            {darkMode ? (
              <img
                src="/icons/project-dm2.svg"
                className="hero__card hero__card--projects"
              />
            ) : (
              <img
                src="/icons/project2.svg"
                className="hero__card hero__card--projects"
              />
            )}
          </a>

          <a href="#contact" onClick={openModal}>
            {darkMode ? (
              <img
                src="/icons/contact-dm2.svg"
                className="hero__card hero__card--contact"
              />
            ) : (
              <img
                src="/icons/contact2.svg"
                className="hero__card hero__card--contact"
              />
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
