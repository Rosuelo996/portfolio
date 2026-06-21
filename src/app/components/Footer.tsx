import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

type Props = {
  darkMode: boolean;
};

const Footer = ({ darkMode }: Props) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__divider">
          <span className="footer__divider--line"></span>
          <span className="footer__divider--dot"></span>
          <span className="footer__divider--line"></span>
        </div>

        <div className="footer__intro" data-aos="fade" data-aos-duration="500">
          <h2 className="footer__title">
            Let&apos;s build something <span className="gold">meaningful</span>.
          </h2>
          <p className="footer__description">
            Open to opportunities and collaborations.
          </p>

          <div className="footer__links">
            <div className="footer__link">
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
              <div className="footer__link--title">Linkedin</div>
            </div>

            <span className="footer__link--divider"></span>

            <div className="footer__link">
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
              <div className="footer__link--title">Github</div>
            </div>

            <span className="footer__link--divider"></span>

            <div className="footer__link">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="social__link click"
              >
                <FontAwesomeIcon icon={faFile} className="social__link--icon" />
              </a>
              <div className="footer__link--title">Resume</div>
            </div>
          </div>
        </div>

        <div
          className="footer__bottom"
          data-aos="fade"
          data-aos-delay="150"
          data-aos-duration="500"
        >
          <figure className="logo">
            <a href="#">
              <span className="logo__popper">↑ Back to Top</span>
              {darkMode ? (
                <img src="/icons/SW-light.svg" className="logo__img" />
              ) : (
                <img src="/icons/SW.svg" className="logo__img" />
              )}
            </a>
          </figure>
          <p className="footer__copyright">© 2026 Stefano W.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
