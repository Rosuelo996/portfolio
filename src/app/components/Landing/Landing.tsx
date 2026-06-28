import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";


type Props = {
  openModal: () => void;
  darkMode: boolean;
};

const Landing = ({ openModal, darkMode }: Props) => {
  return (
    <section id="landing-page">

      <section className="hero">

        <HeroContent openModal={openModal}/>
        <HeroVisual openModal={openModal} darkMode={darkMode}/>
        
      </section>


      <button
        className="mail__btn click"
        onClick={openModal}
      >
        <FontAwesomeIcon icon={faEnvelope} className="mail__btn--icon" />
      </button>

      <div className="scroll">
        <a href="#gallery">
          <div className="scroll__icon click"></div>
        </a>
      </div>
    </section>
  );
};

export default Landing;
