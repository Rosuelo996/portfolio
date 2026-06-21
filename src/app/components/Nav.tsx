import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  openModal: () => void;
  darkMode: boolean;
  setDarkMode: React.Dispatch<
    React.SetStateAction<boolean>
    >;
}

const Nav = ({openModal, darkMode, setDarkMode} : Props) => {
  return (
    <nav>
          <figure className="logo">
            {darkMode 
            ? <img className="logo__img" src="./icons/SW-light.svg" alt="" />
            : <img className="logo__img" src="./icons/SW.svg" alt="" />}
          </figure>
          <ul className="nav__link--list">
            <li className="nav__link">
              <a
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
              <button className="nav__link--anchor" onClick={() => setDarkMode(!darkMode)}>
                <FontAwesomeIcon
                  icon={faCircleHalfStroke}
                  className="theme-toggle"
                />
              </button>
            </li>
          </ul>
        </nav>
  )
}

export default Nav