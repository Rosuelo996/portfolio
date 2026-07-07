"use client"
import { useEffect, useRef } from "react";

const ProgressBar = () => {
const barRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleScroll = () => {
    const max =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = (window.scrollY / max) * 100;

    if (barRef.current) {
      barRef.current.style.width = `${progress}%`;
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

return <div ref={barRef} className="progress-bar" />;
};

export default ProgressBar;