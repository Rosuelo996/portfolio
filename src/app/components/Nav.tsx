import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

type Props = {
  openModal: () => void;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ openModal, darkMode, setDarkMode }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <nav data-test="navbar" className={scrolled ? "nav nav--scrolled" : "nav"}>
      <figure className="logo">
        {darkMode ? (
          <img className="logo__img" src="./icons/SW-light.svg" alt="" />
        ) : (
          <img className="logo__img" src="./icons/SW.svg" alt="" />
        )}
      </figure>
      <ul className="nav__link--list">
        <li className="nav__link">
          <a
            data-test="nav-gallery"
            href="#gallery"
            className="nav__link--anchor 
                link__hover-effect 
                link__hover-effect-black"
          >
            Gallery
          </a>
        </li>
        <li className="nav__link">
          <a
           data-test="nav-projects"
            href="#projects"
            className="nav__link--anchor 
                link__hover-effect 
                link__hover-effect-black"
          >
            Projects
          </a>
        </li>
        <li className="nav__link">
          <a
            data-test="nav-contact"
            href="#contact"
            className="
                nav__link--anchor 
                link__hover-effect 
                link__hover-effect-black"
            onClick={openModal}
          >
            Contact
          </a>
        </li>
        <li className="nav__link click">
          <button
            data-test="theme-toggle"
            className="nav__link--anchor theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            <FontAwesomeIcon icon={faCircleHalfStroke} className="theme-toggle__icon" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
