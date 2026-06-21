"use client";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery/Gallery";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
  AOS.init({
    duration: 600,
    once: true,
    offset: 120,
  })
}, [])

  return (
    <div className={darkMode ? "dark" : ""}>
      <Nav
        openModal={openModal}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Landing 
         openModal={openModal}
         darkMode={darkMode} />
        <Gallery />
        <Projects />
      </main>

      <Footer darkMode={darkMode}/>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}
