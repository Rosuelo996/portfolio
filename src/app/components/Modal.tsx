"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

type Props = {
  closeModal: () => void;
};

const Modal = ({ closeModal }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [sendError, setSendError] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const message = form.user_message.value.trim();

    if (!name || !email || !message) {
      setFormError("Please complete all fields.");
      return;
    }

    setFormError("");
    setSendError("");
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_qfgcihg",
        "template_lh0w203",
        form,
        "1OgabTz5F7Xq5y8Gb",
      );

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        closeModal();
      }, 2000);
    } catch {
      setSendError(
        "Message couldn't be sent. Please try again or reach out directly at rosuelo996.sr@gmail.com.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="modal">
      <div className="modal__overlay"></div>

      <div className={`modal__container ${isVisible ? "modal__open" : ""}`}>
        <div className="modal__half modal__about">
          <h3 className="modal__title--about">Here's a bit about me.</h3>
          <h4 className="modal__subtitle--about">Frontend Developer</h4>
          <div className="modal__text">
            <p className="modal__description">
              Leading teams taught me that great experiences start with
              understanding people, and I bring that mindset into frontend
              development.
            </p>
            <p className="modal__description">
              I build responsive, accessible and high performance web
              experiences with a focus on clarity, consistency and thoughtful
              details.
            </p>
          </div>

          <div className="modal__technologies">
            <div className="modal__languages">
              <div className="modal__language">
                <img
                  src="/icons/HTML.png"
                  alt=""
                  className="modal__language--img"
                />
                <span className="modal__language--name">HTML</span>
              </div>

              <div className="modal__language">
                <img
                  src="/icons/CSS.webp"
                  alt=""
                  className="modal__language--img"
                />
                <span className="modal__language--name">CSS</span>
              </div>

              <div className="modal__language">
                <img
                  src="/icons/Java.webp"
                  alt=""
                  className="modal__language--img"
                />
                <span className="modal__language--name">JAVASRIPT</span>
              </div>

              <div className="modal__language">
                <img
                  src="/icons/React.webp"
                  alt=""
                  className="modal__language--img"
                />
                <span className="modal__language--name">REACT</span>
              </div>

              <div className="modal__language">
                <img
                  src="/icons/Typescript.png"
                  alt=""
                  className="modal__language--img"
                />
                <span className="modal__language--name">TYPESCRIPT</span>
              </div>

              <div className="modal__language">
                <img
                  src="/icons/Next.js.png"
                  alt=""
                  className="modal__language--img"
                />
                <span className="modal__language--name">NEXT.JS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modal__half modal__contact">
          <h3 className="modal__title--contact">Let's have a chat!</h3>
          <h4 className="modal__subtitle--contact">
            Open to new opportunities
          </h4>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__item">
              <label htmlFor="name" className="form__item--label">
                Name
              </label>
              <input
                name="user_name"
                type="text"
                id="name"
                className="form__item--input"
              />
            </div>

            <div className="form__item">
              <label htmlFor="email" className="form__item--label">
                Email
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                className="form__item--input"
              />
            </div>

            <div className="form__item">
              <label htmlFor="message" className="form__item--label">
                Message
              </label>
              <textarea
                name="user_message"
                id="message"
                className="form__item--input"
              ></textarea>
            </div>
            <button className="form__submit">Send it my way</button>

            {formError && <p className="form__message">{formError}</p>}
            {sendError && <p className="form__message">{sendError}</p>}

          </form>


          {isLoading && (
            <div className="modal__loading">
              <div className="modal__loading-content">
                <div className="modal__spinner"></div>

                <p className="modal__loading--title">Sending your message...</p>
                <p className="modal__loading--subtitle">
                  Please wait a moment.
                </p>
              </div>
            </div>
          )}

          {isSuccess && (
            <div className="modal__loading">
              <div className="modal__loading-content">
                <div className="modal__success">✓</div>

                <p className="modal__loading--title">Message sent</p>
                <p className="modal__loading--subtitle">
                  Thank you for reaching out.
                </p>
              </div>
            </div>
          )}
        </div>

        <button className="modal__close" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} className="modal__close--icon" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
