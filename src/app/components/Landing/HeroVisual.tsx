
type Props = {
  openModal: () => void;
  darkMode: boolean;
};


const HeroVisual = ({ openModal, darkMode }: Props) => {
  return (
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
  )
}

export default HeroVisual