import React, { useEffect } from "react";

import "./footer.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer>
      <div className="footer-container">

        <div className="info-container">

          <div className="citation">
            <div className="profil">
              <img src="/abdelkrim.jpg" alt="" />
              <div className="icon-verified"></div>
            </div>
            <p>"Living, learning, & leveling up one day at a time."</p>
          </div>

          <div className="informations">

            <div className="adresse">
              <span className="icon-location1"></span>
              <p>Bordj el kiffan, Algiers</p>
            </div>
            <div className="email">
              <span className="icon-envelope1"></span>
              <p>abouri.abdelkrim"gmail.com</p>
            </div>
            <div className="phone">
              <span className="icon-phone"></span>
              <p>+123 (0)541 38 32 60</p>
            </div>
          </div>

        </div>

        <div className="social">
          <a
            className="twitter icon-twitter"
            href="https://twitter.com/kimotgr1"
            target="_blank"
          ></a>
          <a
            className="instagram icon-instagram"
            href="https://www.instagram.com/kimotgr"
            target="_blank"
          ></a>
          <a
            className="facebook icon-facebook"
            href="https://www.facebook.com/kimotgr"
            target="_blank"
          ></a>
          <a
            className="linkedin icon-linkedin"
            href="https://www.linkedin.com/in/abouri-abdelkrim-817416254/"
            target="_blank"
          ></a>
          <a
            className="github icon-github"
            href="https://github.com/abdelkrim99"
            target="_blank"
          ></a>
        </div>
      </div>
      <p>&copy; 2024 Abdelkrim's portfolio all rights reserved</p>
    </footer>
  );
}
