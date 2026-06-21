import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

type Props = {
  openModal: () => void;
  darkMode: boolean;
};

const Landing = ({ openModal, darkMode }: Props) => {
  return (
    <section id="landing-page">
      <section className="hero">
        <div className="hero__content">
          <div className="hero__header">
            <p className="hero__intro" data-aos="fade" data-aos-delay="0">
              Hi, I'm
            </p>
            <h1
              className="hero__title"
              data-aos="fade"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              Stefano
              <span>.</span>
            </h1>
            <p
              className="hero__subtitle"
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-duration="1200"
            >
              Frontend Developer
            </p>
            <p
              className="hero__description"
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="1200"
            >
              Turning ideas into modern web experiences with clean code and
              attention to detail.
            </p>

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
                <FontAwesomeIcon
                  icon={faGithub}
                  className="social__link--icon"
                />
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

        <div className="hero__visual">
          <div className="hero__particles">
            <img
              src="/icons/black-sphere.svg"
              className="hero__particle hero__particle--lg hero__particle--1"
            />
            <img
              src="/icons/gold-sphere.svg"
              className="hero__particle hero__particle--md hero__particle--2"
            />
            <img
              src="/icons/gold-sphere.svg"
              className="hero__particle hero__particle--sm hero__particle--3"
            />
            <img
              src="/icons/black-cube.svg"
              className="hero__particle hero__particle--sm hero__particle--4"
            />
            <img
              src="/icons/gold-sphere.svg"
              className="hero__particle hero__particle--md hero__particle--5"
            />
            <img
              src="/icons/gold-sphere.svg"
              className="hero__particle hero__particle--lg hero__particle--6"
            />
            <img
              src="/icons/gold-sphere.svg"
              className="hero__particle hero__particle--sm hero__particle--7"
            />
            <img
              src="/icons/black-sphere.svg"
              className="hero__particle hero__particle--sm hero__particle--8"
            />
            <img
              src="/icons/black-sphere.svg"
              className="hero__particle hero__particle--sm hero__particle--9"
            />
            <img
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
                src="/icons/platform-bottom-dm.svg"
                className="hero__platform hero__platform--bottom"
              />
            ) : (
              <img
                src="/icons/platform-bottom.svg"
                className="hero__platform hero__platform--bottom"
              />
            )}

            {darkMode ? (
              <img
                src="/icons/platform-top-dm.svg"
                className="hero__platform hero__platform--top"
              />
            ) : (
              <img
                src="/icons/platform-top.svg"
                className="hero__platform hero__platform--top"
              />
            )}

            <img src="/icons/card.svg" className="hero__platform hero__chip" />

            <div className="hero__cards">
              <a href="#gallery">
                {darkMode ? (
                  <img
                    src="/icons/gallery-dm.svg"
                    className="hero__card hero__card--gallery"
                  />
                ) : (
                  <img
                    src="/icons/gallery.svg"
                    className="hero__card hero__card--gallery"
                  />
                )}
              </a>

              <a href="#projects">
                {darkMode ? (
                  <img
                    src="/icons/project-dm.svg"
                    className="hero__card hero__card--projects"
                  />
                ) : (
                  <img
                    src="/icons/project.svg"
                    className="hero__card hero__card--projects"
                  />
                )}
              </a>

              <a href="#contact" onClick={openModal}>
                {darkMode ? (
                  <img
                    src="/icons/contact-dm.svg"
                    className="hero__card hero__card--contact"
                  />
                ) : (
                  <img
                    src="/icons/contact.svg"
                    className="hero__card hero__card--contact"
                  />
                )}
              </a>
            </div>
          </div>
        </div>
      </section>

      <button
        className="mail__btn click"
        data-aos="fade"
        data-aos-delay="1200"
        data-aos-anchor=".hero__description"
        data-aos-duration="800"
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
