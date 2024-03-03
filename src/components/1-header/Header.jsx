import React, { useEffect, useState } from "react";

import "./header.css";


function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add(theme);
    } else if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add(theme);
    }
  }, [theme]);

  return (
    <header>
      <button
        className="menu icon-menu"
        onClick={() => {
          setShowModal(true);
        }}
      ></button>
      <div />

      <nav>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">education</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">qualifications</a>
          </li>
          <li>
            <a href="">Contact me</a>
          </li>
        </ul>
      </nav>

      <button
        className="mode"
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
      >
        {theme === "dark" && (
          <span className="icon-moon-o"></span>
        )}
        {theme === "light" && (
          <span className="icon-sun"></span>
        )}
      </button>
      {showModal && (
        <div className="parent">
          <div className="modal">
            <ul>
              <li>
                <button
                  className="icon-close"
                  onClick={() => {
                    setShowModal(false);
                  }}
                />
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">education</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">qualifications</a>
              </li>
              <li>
                <a href="">Contact me</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;
