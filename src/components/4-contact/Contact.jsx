import "./contact.css";

import { useEffect, useRef, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Lottie from "lottie-react";
import { useForm, ValidationError } from "@formspree/react";

import contact from "../../../public/animation/contact.json";
import done from "../../../public/animation/done.json";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [state, handleSubmit] = useForm("xrgnkogy");

  return (
    <section className="contact">
      <div className="contact-title" data-aos="zoom-in">
        <div className="icon-envelope"></div>
        <h1>contact me</h1>
      </div>

      <p data-aos="zoom-in">
        contact me for more informations and get more from me
      </p>

      <div className="contact-content">
        <form
          className="form"
          action=""
          data-aos="fade-right"
          onSubmit={handleSubmit}
        >
          <div className="email-group">
            <label htmlFor="email">Email Adresse : </label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="message-group">
            <label htmlFor="message">Your message : </label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="buttonSumbit">
            <button type="submit" disabled={state.submitting}>
              {" "}
              {state.submitting ? "submitting..." : "submit"}{" "}
            </button>

            {state.succeeded && (
              <h1 className="successMessage">
                <Lottie
            className="done"
            animationData={done}
            style={{ height: 30 }}
          />
                Your message has been sent successfully 👌</h1>
            )}
          </div>
        </form>
        <div className="animation" data-aos="fade-left">
          <Lottie
            className="devImage"
            animationData={contact}
            style={{ height: 355 }}
          />
        </div>
      </div>
    </section>
  );
}
