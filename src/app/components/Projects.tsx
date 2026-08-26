"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Typewriter from "./ui/Typewriter";
import TiltCard from "./ui/TiltCard";
import Magnetic from "./ui/Magnetic";

const Projects = () => {
  return (
    <section data-test="projects-section" id="projects">
      <div className="container">
        <p className="section__eyebrow">Projects</p>
        <div className="section__header">
          <h2 className="section__title" data-aos="fade">
            Making complexity
            <br />
            feel{" "}
            <span className="section__title--highlight bronze">effortless</span>
            .
          </h2>

          <div
            className="section__description"
            data-aos="fade"
            data-aos-delay="100"
          >
            <Typewriter text="Every project started with a real problem." />
            <p className="section__description--para">
              From responsive interfaces to API integrations and complex
              application logic, these projects show how thoughtful engineering
              turns ideas into products that feel intuitive to use.
            </p>
          </div>
        </div>

        <div className="project__list">
          <article className="project">
            <div
              className="project__media"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <TiltCard>
                <a
                  href="https://shopfloor-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="project__image"
                    src="/icons/shopfloor2.png"
                    alt="ShopFloor store management dashboard"
                    width={1600}
                    height={900}
                  />
                </a>
              </TiltCard>
            </div>

            <div
              className="project__content"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="150"
            >
              <div className="project__info">
                <div className="project__header">
                  <span className="project__number">01</span>
                  <span className="project__category">
                    STORE MANAGEMENT • Full Stack
                  </span>
                </div>

                <h3 className="project__title">ShopFloor</h3>

                <p className="project__description">
                  Full-stack store management platform that turns operational
                  data into actionable insights, bringing sales performance,
                  tasks, handovers, team coverage and notifications into one
                  dashboard.
                </p>

                <ul className="project__stack">
                  <li className="project__tech">React</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">TypeScript</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">Node.js</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">Express</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">PostgreSQL</li>
                </ul>
              </div>

              <div className="project__links">
                <Magnetic>
                  <a
                    className="project__link project__link--secondary"
                    href="https://github.com/Rosuelo996/shopfloor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="project__icon"
                    />
                    Visit GitHub
                  </a>
                </Magnetic>

                <Magnetic>
                  <a
                    className="project__link project__link--primary"
                    href="shopfloor-ten.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLink} className="project__icon" />
                    View Project
                  </a>
                </Magnetic>
              </div>
            </div>
          </article>

          <article className="project">
            <div
              className="project__media"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <TiltCard>
                <a
                  href="https://skinstric-amber.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="project__image"
                    src="/icons/skinstric2.png"
                    alt="Skinstric skincare analysis dashboard"
                    width={1600}
                    height={900}
                  />
                </a>
              </TiltCard>
            </div>
            <div
              className="project__content"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="150"
            >
              <div className="project__info">
                <div className="project__header">
                  <span className="project__number">02</span>
                  <span className="project__category">
                    AI SKINCARE • Next.js
                  </span>
                </div>

                <h3 className="project__title">Skinstric</h3>
                <p className="project__description">
                  AI-powered skincare experience that transforms demographic
                  analysis into personalised journeys through camera interaction
                  and real-time insights.
                </p>

                <ul className="project__stack">
                  <li className="project__tech">Next.js</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">TypeScript</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">Redux Toolkit</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">Rest APIs</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">GSAP</li>
                </ul>
              </div>

              <div className="project__links">
                <Magnetic>
                  <a
                    className="project__link project__link--secondary"
                    href="https://github.com/Rosuelo996/Skinstric"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="project__icon"
                    />
                    Visit GitHub
                  </a>
                </Magnetic>

                <Magnetic>
                  <a
                    className="project__link project__link--primary"
                    href="https://skinstric-amber.vercel.app/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLink} className="project__icon" />
                    View Project
                  </a>
                </Magnetic>
              </div>
            </div>
          </article>

          <article className="project">
            <div
              className="project__media"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <TiltCard>
                <a
                  href="https://movie-vault-dusky.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="project__image"
                    src="/icons/movie-vault2.png"
                    alt="Movie Vault movie search application"
                    width={1600}
                    height={900}
                  />
                </a>
              </TiltCard>
            </div>
            <div
              className="project__content"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="150"
            >
              <div className="project__info">
                <div className="project__header">
                  <span className="project__number">03</span>
                  <span className="project__category">
                    Movie Discovery • React
                  </span>
                </div>

                <h3 className="project__title">Movie Vault</h3>
                <p className="project__description">
                  Responsive movie discovery platform with search, filtering and
                  dynamic routing, designed to deliver fast exploration and an
                  engaging browsing experience.
                </p>

                <ul className="project__stack">
                  <li className="project__tech">React</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">JavaScript</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">React Router</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">TMDB APIs</li>
                </ul>
              </div>

              <div className="project__links">
                <Magnetic>
                  <a
                    className="project__link project__link--secondary"
                    href="https://github.com/Rosuelo996/Movie-Vault"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="project__icon"
                    />
                    Visit GitHub
                  </a>
                </Magnetic>

                <Magnetic>
                  <a
                    className="project__link project__link--primary"
                    href="https://movie-vault-dusky.vercel.app/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLink} className="project__icon" />
                    View Project
                  </a>
                </Magnetic>
              </div>
            </div>
          </article>

          <article className="project">
            <div
              className="project__media"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <TiltCard>
                <a
                  href="https://stefano-ultraverse.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="project__image"
                    src="/icons/ultraverse2.png"
                    alt="Ultraverse NFT marketplace homepage"
                    width={1600}
                    height={900}
                  />
                </a>
              </TiltCard>
            </div>
            <div
              className="project__content"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="150"
            >
              <div className="project__info">
                <div className="project__header">
                  <span className="project__number">04</span>
                  <span className="project__category">
                    NFT Marketplace • Next.js
                  </span>
                </div>

                <h3 className="project__title">Ultraverse</h3>
                <p className="project__description">
                  Immersive NFT landing experience featuring animated
                  interactions, live countdown timers and dynamic content
                  powered by API integration.
                </p>

                <ul className="project__stack">
                  <li className="project__tech">React</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">JavaScript</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">REST APIs</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">AOS</li>
                </ul>
              </div>

              <div className="project__links">
                <Magnetic>
                  <a
                    className="project__link project__link--secondary"
                    href="https://github.com/Rosuelo996/ultraverse"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="project__icon"
                    />
                    Visit GitHub
                  </a>
                </Magnetic>

                <Magnetic>
                  <a
                    className="project__link project__link--primary"
                    href="https://stefano-ultraverse.vercel.app/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLink} className="project__icon" />
                    View Project
                  </a>
                </Magnetic>
              </div>
            </div>
          </article>

          <article className="project">
            <div
              className="project__media"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <TiltCard>
                <a
                  href="https://summarist.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="project__image"
                    src="/icons/summarist3.png"
                    alt="Summarist audiobook platform interface"
                    width={1600}
                    height={900}
                  />
                </a>
              </TiltCard>
            </div>
            <div
              className="project__content"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="150"
            >
              <div className="project__info">
                <div className="project__header">
                  <span className="project__number">05</span>
                  <span className="project__category">
                    Book Summaries • React
                  </span>
                </div>

                <h3 className="project__title">Summarist</h3>
                <p className="project__description">
                  Audio learning platform that helps users discover, preview and
                  listen to book summaries through personalised recommendations
                  and seamless playback.
                </p>

                <ul className="project__stack">
                  <li className="project__tech">Next.js</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">TypeScript</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">Firebase</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">Stripe</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">REST APIs</li>
                </ul>
              </div>

              <div className="project__links">
                <Magnetic>
                  <a
                    className="project__link project__link--secondary"
                    href="https://github.com/Rosuelo996/summarist"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="project__icon"
                    />
                    Visit GitHub
                  </a>
                </Magnetic>

                <Magnetic>
                  <a
                    className="project__link project__link--primary"
                    href="https://summarist.vercel.app/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLink} className="project__icon" />
                    View Project
                  </a>
                </Magnetic>
              </div>
            </div>
          </article>

          <article className="project">
            <div
              className="project__media"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <TiltCard>
                <a
                  href="https://library-react-gold.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="project__image"
                    src="/icons/library.png"
                    alt="Library e-commerce application homepage"
                    width={1600}
                    height={900}
                  />
                </a>
              </TiltCard>
            </div>
            <div
              className="project__content"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="150"
            >
              <div className="project__info">
                <div className="project__header">
                  <span className="project__number">06</span>
                  <span className="project__category">
                    Reading Platform • React
                  </span>
                </div>

                <h3 className="project__title">Library</h3>
                <p className="project__description">
                  Book discovery platform featuring filtering, cart management
                  and a seamless checkout experience designed for intuitive
                  browsing and purchasing.
                </p>

                <ul className="project__stack">
                  <li className="project__tech">React</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">JavaScript</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">React Router</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">Firebase</li>
                </ul>
              </div>

              <div className="project__links">
                <Magnetic>
                  <a
                    className="project__link project__link--secondary"
                    href="https://github.com/Rosuelo996/Library-React"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="project__icon"
                    />
                    Visit GitHub
                  </a>
                </Magnetic>

                <Magnetic>
                  <a
                    className="project__link project__link--primary"
                    href="https://library-react-gold.vercel.app/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLink} className="project__icon" />
                    View Project
                  </a>
                </Magnetic>
              </div>
            </div>
          </article>

          <article className="project">
            <div
              className="project__media"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <TiltCard>
                <a
                  href="https://car-subscription-wine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="project__image"
                    src="/icons/car-subscription.png"
                    alt="Car subscription platform with filtering"
                    width={1600}
                    height={900}
                  />
                </a>
              </TiltCard>
            </div>
            <div
              className="project__content"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="150"
            >
              <div className="project__info">
                <div className="project__header">
                  <span className="project__number">07</span>
                  <span className="project__category">
                    Car Subscription • Javascript
                  </span>
                </div>

                <h3 className="project__title">Blinker</h3>
                <p className="project__description">
                  Vehicle discovery platform with dynamic filtering, pricing
                  tools and API-driven search designed to simplify
                  subscription-based car exploration.
                </p>

                <ul className="project__stack">
                  <li className="project__tech">Javascript</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">CSS</li>
                  <span className="project__divider">✦</span>
                  <li className="project__tech">Rest APIs</li>
                </ul>
              </div>

              <div className="project__links">
                <Magnetic>
                  <a
                    className="project__link project__link--secondary"
                    href="https://github.com/Rosuelo996/Car-Subscription"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="project__icon"
                    />
                    Visit GitHub
                  </a>
                </Magnetic>

                <Magnetic>
                  <a
                    className="project__link project__link--primary"
                    href="https://car-subscription-wine.vercel.app/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLink} className="project__icon" />
                    View Project
                  </a>
                </Magnetic>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
