import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

import { social } from "../../../__mock__";
import Starfield from "../../space";
import me from "../../../assets/images/me.jpeg";
import {
  header,
  typingContainer,
  navbar,
  small,
  socialContainer,
} from "./header.module.scss";

export default function Header({ menu }) {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <header className={header}>
        <Starfield
          starCount={6000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
        />
        <nav
          className={`d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-3 mb-4 fixed-top ${navbar} ${
            colorChange ? small : ""
          }`}
        >
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className={`d-inline-flex link-body-emphasis text-decoration-none ${
                colorChange ? "" : "text-white"
              }`}
            >
              <strong>dlucumi.dev</strong>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            {menu.map((item) => (
              <li>
                <a href={item.url} className="nav-link px-2 active">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={`col-md-3 text-end ${socialContainer}`}>
            {social.map((item) => (
              <a href={item.url} target="blank">
                {item.Component({
                  size: 28,
                  color: colorChange ? "#000" : "#fff",
                })}
              </a>
            ))}
          </div>
        </nav>
        <div className={typingContainer}>
          <img src={me} alt="Daniel Lucumi picture profile" />
          <h1>Hello, I'm Daniel Lucumi</h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Frontend Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Backend Developer",
              1000,
              "Software Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1.3em",
              display: "inline-block",
              color: "#fff",
            }}
            repeat={Infinity}
          />
          <button className="btn btn-secondary mt-3">Check my work</button>
        </div>
      </header>
    </>
  );
}
