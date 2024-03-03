import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./main.css";

function Main() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <main className="main">
      {/* start education  */}

      <div className="education">
        <div className="title">
          <div className="icon-school"></div>
          <h1>Education</h1>
        </div>

        <div className="timeline" data-aos="zoom-in">
          <div className="timeline-container right-container">
            <div className="text-box">
              <div className="icon icon-book-alt"></div>
              <h2>Bachelor Degree in Natural Sciences</h2>
              <p>2014-2017</p>
              <p>Omar el mokhtar High School</p>
            </div>
          </div>

          <div className="timeline-container left-container">
            <div className="text-box">
              <div className="icon icon-graduation-cap"></div>
              <h2>License Degree in Computer Science</h2>
              <p>2017-2021</p>
              <p>University of USTHB</p>
            </div>
          </div>

          <div className="timeline-container right-container">
            <div className="text-box">
              <div className="icon icon-graduation-cap"></div>
              <h2>Master Degree in Software Engineering</h2>
              <p>2021-2023</p>
              <p>University of USTHB</p>
            </div>
          </div>
        </div>
      </div>

      {/* end education  */}

      {/* start projects  */}

      <div className="projects">
        <div className="projects-title">
          <div className="icon-folder2"></div>
          <h1>Projects</h1>
        </div>

        <div className="card-container">
          <div className="card" data-aos="fade-right">
            <div className="info">
              <img src="public\1.png" alt="" />
              <h1>
                Java desktop application , Project For License Degree, USTHB.
              </h1>
              <p>
                Cabinet Medical is a meticulously tailored desktop application,
                developed in collaboration with a doctor to efficiently address
                the real needs of medical office management. Built with Java for
                the back-end and JavaFX for the front-end, and employing a mySQL
                database.
              </p>
            </div>
          </div>

          <div className="card" data-aos="flip-left">
            <div className="info">
              <img src="/2.png" alt="" />
              <h1>web application , Project For Master Degree, USTHB.</h1>
              <p>
                Seismic vision is a web application designed exclusively for
                ENAGEO, intended to support their desert missions. This
                application functions as an all-encompassing tool for overseeing
                entire missions and projects, ensuring comprehensive tracking of
                employees, materials, production, trucks, the mechanical
                workshop, and various other aspects. It offers managers
                continuous insight into project status by delivering daily
                statistics and detailed information.
              </p>
            </div>
            <div className="link">
              <a
                className="icon-github"
                href="https://github.com/AliliMJ/enageo_sismic_mission "
                target="_blank"
              ></a>
            </div>
          </div>

          <div className="card" data-aos="fade-left">
            <div className="info">
              <img src="/3.png" alt="" />
              <h1>HTML&CSS template one (Leon).</h1>
              <p>
                This project represents a remake of an existing website with
                several enhancements and improvements. The focus has been on
                maintaining a sleek and intuitive user interface while ensuring
                optimal performance across a range of devices, from desktops to
                tablets and smartphones.
              </p>
            </div>
            <div className="link">
              <a
                className="icon-github"
                href="https://github.com/abdelkrim99/HTML-CSS-template-one"
                target="_blank"
              ></a>
              <a
                className="icon-link2"
                href="https://abdelkrim99.github.io/HTML-CSS-template-one/"
                target="_blank"
              ></a>
            </div>
          </div>

          <div className="card" data-aos="fade-right">
            <div className="info">
              <img src="/4.png" alt="" />
              <h1>HTML&CSS template two (Kasper)</h1>
              <p>
                This project represents a remake of an existing website with
                several enhancements and improvements. The focus has been on
                maintaining a sleek and intuitive user interface while ensuring
                optimal performance across a range of devices, from desktops to
                tablets and smartphones.
              </p>
            </div>
            <div className="link">
              <a
                className="icon-github"
                href="https://github.com/abdelkrim99/HTML-CSS-template-two"
                target="_blank"
              ></a>
              <a
                className="icon-link2"
                href="https://abdelkrim99.github.io/HTML-CSS-template-two/"
                target="_blank"
              ></a>
            </div>
          </div>

          <div className="card" data-aos="flip-right">
            <div className="info">
              <img src="/5.png" alt="" />
              <h1>HTML&CSS template three (Nixor)</h1>
              <p>
                Experience our dynamic, modern website design - still in
                progress but already responsive, fast, and delightfully simple
                to navigate.
              </p>
            </div>
            <div className="link">
              <a
                className="icon-github"
                href="https://github.com/abdelkrim99/HTML-css-template-three"
                target="_blank"
              ></a>
              <a className="icon-link2"></a>
            </div>
          </div>

          <div className="card" data-aos="fade-left">
            <div className="info">
              <img src="/6.png" alt="" />
              <h1>coming project</h1>
              <p>Futur project will be created</p>
            </div>
            {/* <div className="link">
              <a className="icon-github"></a>
              <a className="icon-link2"></a>
            </div> */}
          </div>
        </div>
      </div>

      {/* end prjects  */}

      {/* start skills  */}
      <div className="skills">
        <div className="skills-title">
          <div className="icon-code"></div>
          <h1>Qualification</h1>
        </div>

        <div className="sections-container">
          <section className="left-section" data-aos="fade-right">
            <button
              className={toggleState === 1 ? "active-section" : ""}
              onClick={() => toggleTab(1)}
            >
              Programming languages
            </button>
            <button
              className={toggleState === 2 ? "active-section" : ""}
              onClick={() => toggleTab(2)}
            >
              Framworks
            </button>
            <button
              className={toggleState === 3 ? "active-section" : ""}
              onClick={() => toggleTab(3)}
            >
              web technology & programs
            </button>
          </section>

          <section className="right-section">
            <div className="skills-container" data-aos="fade-left">
              {toggleState === 1 && (
                <div className="content-1 active-content">
                  <span className="icon-c"></span>
                  <span className="icon-java"></span>
                  <span className="icon-javascript"></span>
                  <span className="icon-typescript"></span>
                  <span className="icon-php"></span>
                </div>
              )}
              {toggleState === 2 && (
                <div className="content-2 active-content">
                  <span className="icon-node-dot-js"></span>
                  <span className="icon-vue-dot-js1"></span>
                  <span className="icon-react"></span>
                  <img className="express" src="/express-js.png" alt="" />
                  <img className="prisma" src="/prisma.png" alt="" />
                  <img className="javafx" src="/javaFX.png" alt="" />
                  <img className="javaee" src="/javaee.png" alt="" />
                </div>
              )}
              {toggleState === 3 && (
                <div className="content-3 active-content">
                  <span className="icon-html5"></span>
                  <span className="icon-css3"></span>
                  <span className="icon-git"></span>
                  <span className="icon-github"></span>
                  <span className="icon-oracle"></span>
                  <span className="icon-mysql"></span>
                  <span className="icon-visualstudiocode"></span>
                  <span className="icon-mongodb"></span>
                  <span className="icon-postman"></span>
                  <span className="icon-stackoverflow"></span>
                  <span className="icon-npm"></span>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
      {/* end skills  */}
    </main>
  );
}

export default Main;
