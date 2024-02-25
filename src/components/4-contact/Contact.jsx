import "./contact.css";

import { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  // useEffect(() => {
  //   AOS.init();
  // }, [])

  return (
      <section className="contact">
        
        <div className="contact-title">
          <div className="icon-code"></div>
          <h1>contact us</h1>
        </div>

        <div className="contact-content">
          <form action="">
            FROM
          </form>
          <div className="animation">
            animation
          </div>
        </div>
      </section>
  );
}
