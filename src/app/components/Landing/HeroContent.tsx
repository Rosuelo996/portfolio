import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile, faArrowRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  openModal: () => void;
};

const HeroContent = ({ openModal }: Props) => {
  return (
    <div className="hero__content">
      <div className="hero__header">
        <p className="hero__eyebrow" data-aos="fade" data-aos-delay="0">
          Stefano W. • Frontend Developer
        </p>

        <div
          className="hero__titles"
          data-aos="fade"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          <h1 className="hero__title hero_title--top">
            Most stop <br className="hero__break" />
            when it works
            <span>.</span>
          </h1>
          <h1 className="hero__title hero__title--bottom gold">
            I stop when <br className="hero__break" />
            it feels right
            <span className="green">.</span>
          </h1>
        </div>

        <p
          className="hero__description"
          data-aos="fade-up"
          data-aos-delay="450"
          data-aos-duration="1200"
        >
          I build digital products where thoughtful engineering meets intuitive
          design. By combining frontend development, interaction design, and
          attention to detail, I create experiences that feel effortless from
          the very first click.
        </p>

        <div
          className="hero__buttons"
          data-aos="fade"
          data-aos-delay="650"
          data-aos-anchor=".hero__description"
          data-aos-duration="1200"
        >
          <a href="#projects">
            <button className="hero__button hero__button--primary">
              <span>View my work</span>
            </button>
          </a>

          <a href="#contact" onClick={openModal}>
            <button className="hero__button hero__button--secondary">
              <span>Let's connect</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </a>
        </div>

        <div
          className="social__list"
          data-aos="fade"
          data-aos-delay="650"
          data-aos-anchor=".hero__description"
          data-aos-duration="1200"
        >
          <a
            href="https://www.linkedin.com/in/stefano-w-673087182/"
            target="_blank"
            className="social__link click"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="social__link--icon"
            />
          </a>
          <a
            href="https://github.com/Rosuelo996"
            target="_blank"
            className="social__link click"
          >
            <FontAwesomeIcon icon={faGithub} className="social__link--icon" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="social__link click"
          >
            <FontAwesomeIcon icon={faFile} className="social__link--icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
