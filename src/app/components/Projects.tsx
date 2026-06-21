"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title" data-aos="fade">
            Here are my featured <span className="gold">Projects</span>.
          </h2>
          <p
            className="section__description"
            data-aos="fade"
            data-aos-delay="100"
          >
            Built from concept to deployment with thoughtful user experiences.
          </p>
        </div>

        <div className="project__grid">
          <div
            className="project__card"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <img src="/icons/skinstric2.png" alt="" className="project__img" />
            <div className="project__overlay"></div>
            <div className="project__content">
              <h3 className="project__title">Skinstric</h3>
              <div className="project__tech">
                Next.js • React • TypeScript • Redux Toolkit • GSAP • REST API
              </div>
              <p className="project__para">
                AI-powered skincare experience that transforms demographic
                analysis into personalised journeys through camera interaction
                and real-time insights.
              </p>
              <div className="project__links">
                <a
                  href="https://github.com/Rosuelo996/Skinstric"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} className="project__link" />
                </a>
                <a href="https://skinstric-amber.vercel.app/" target="_blank">
                  <FontAwesomeIcon icon={faLink} className="project__link" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project__card"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <img src="/icons/movie-vault.png" alt="" className="project__img" />
            <div className="project__overlay"></div>
            <div className="project__content">
              <h3 className="project__title">Movie Vault</h3>
              <div className="project__tech">
                React • JavaScript • TMDB API • React Router • CSS • Vercel
              </div>
              <p className="project__para">
                Responsive movie discovery platform with search, filtering and
                dynamic routing, designed to deliver fast exploration and an
                engaging browsing experience.
              </p>
              <div className="project__links">
                <a
                  href="https://github.com/Rosuelo996/Movie-Vault"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} className="project__link" />
                </a>
                <a href="https://movie-vault-dusky.vercel.app/" target="_blank">
                  <FontAwesomeIcon icon={faLink} className="project__link" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project__card"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <img src="/icons/ultraverse2.png" alt="" className="project__img" />
            <div className="project__overlay"></div>
            <div className="project__content">
              <h3 className="project__title"> Ultraverse</h3>
              <div className="project__tech">
                React • JavaScript • REST API • AOS • CSS • Responsive Design
              </div>
              <p className="project__para">
                Immersive NFT landing experience featuring animated
                interactions, live countdown timers and dynamic content powered
                by API integration.
              </p>
              <div className="project__links">
                <a
                  href="https://github.com/Rosuelo996/ultraverse"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} className="project__link" />
                </a>
                <a
                  href="https://stefano-ultraverse.vercel.app/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLink} className="project__link" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project__card"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <img src="/icons/summarist2.png" alt="" className="project__img" />
            <div className="project__overlay"></div>
            <div className="project__content">
              <h3 className="project__title"> Summarist</h3>
              <div className="project__tech">
                Next.js • TypeScript • Firebase • Stripe • REST API • CSS
              </div>
              <p className="project__para">
                Audio learning platform that helps users discover, preview and
                listen to book summaries through personalised recommendations
                and seamless playback.
              </p>
              <div className="project__links">
                <a
                  href="https://github.com/Rosuelo996/summarist"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} className="project__link" />
                </a>
                <a href="https://summarist.vercel.app/" target="_blank">
                  <FontAwesomeIcon icon={faLink} className="project__link" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project__card"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <img src="/icons/library.png" alt="" className="project__img" />
            <div className="project__overlay"></div>
            <div className="project__content">
              <h3 className="project__title">Library</h3>
              <div className="project__tech">
                React • JavaScript • React Router • Firebase • CSS
              </div>
              <p className="project__para">
                Book discovery platform featuring filtering, cart management and
                a seamless checkout experience designed for intuitive browsing
                and purchasing.
              </p>
              <div className="project__links">
                <a
                  href="https://github.com/Rosuelo996/Library-React"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} className="project__link" />
                </a>
                <a
                  href="https://library-react-gold.vercel.app/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLink} className="project__link" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="project__card"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <img
              src="/icons/car-subscription.png"
              alt=""
              className="project__img"
            />
            <div className="project__overlay"></div>
            <div className="project__content">
              <h3 className="project__title"> Car Subscription</h3>
              <div className="project__tech">
                HTML • CSS • JavaScript • REST API
              </div>
              <p className="project__para">
                Vehicle discovery platform with dynamic filtering, pricing tools
                and API-driven search designed to simplify subscription-based
                car exploration.
              </p>
              <div className="project__links">
                <a
                  href="https://github.com/Rosuelo996/Car-Subscription"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} className="project__link" />
                </a>
                <a
                  href="https://car-subscription-wine.vercel.app/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLink} className="project__link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
