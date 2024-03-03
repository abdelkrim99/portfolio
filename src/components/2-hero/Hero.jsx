import React from 'react'

import Typewriter from 'typewriter-effect'
import Lottie from "lottie-react";

import dev from '../../../public/animation/dev.json';

import './hero.css'

function Hero() {

  const onButtonClick = () => {
    const pdfUrl = "/ABOURI-Abdelkrim.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "abouri-resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <section className="hero">
      <div className="left-section">
        <div className="parent-avatar">
          <img src="/abdelkrim.jpg" alt="" className="avatar" />
          <div className='icon-verified'></div>
          <button className='download-button' onClick={onButtonClick}>
            <span>Download (CV)</span>
          <span className="icon-download"></span>
          <span className="icon-file-pdf"></span>
          </button>
        </div>
        <h1>
          <Typewriter
            options={{
              strings: ['Hello there, im Abdelkrim.', 'Software engineer & web developer.'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p>I am a recent Software Engineering graduate and aspiring Junior Web Developer
          with a keen focus on web development, specializing in familiar frameworks and
          technologies. Possessing a strong foundation in the field,
        </p>
        <div className="social">
          <a className='twitter icon-twitter' href="https://twitter.com/kimotgr" target="_blank"></a>
          <a className="instagram icon-instagram" href='https://www.instagram.com/kimotgr' target="_blank"></a>
          <a className="facebook icon-facebook" href='https://www.facebook.com/kimotgr' target="_blank"></a>
          <a className="linkedin icon-linkedin" href='https://www.linkedin.com/in/abouri-abdelkrim-817416254/' target="_blank"></a>
          <a className="github icon-github" href='https://github.com/abdelkrim99' target="_blank"></a>
        </div>
      </div>

      <div className="right-section animation">
      <Lottie className='devImage' animationData={dev}/>
      </div>
            
      <div className='icon-scroll'></div>
    </section>
  )
}

export default Hero