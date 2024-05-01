import React from "react";
import { DiLaravel, DiReact, DiBootstrap, DiMysql } from "react-icons/di";

import { projects } from "../../../__mock__";
import {
  workSectionContainer,
  customCard,
  cardContainer,
  imageContainer,
  iconContainer,
  portafolioFlexContainer,
} from "./work.module.scss";

export default function Work() {
  return (
    <div className={`panel ${workSectionContainer}`}>
      <div className="container">
        <h2 className="mb-5">Portafolio</h2>
        <div className={portafolioFlexContainer}>
          {projects.map((item) => (
            <div className={`card p-0 ${customCard}`}>
              <div
                className={imageContainer}
                style={{ background: `url(${item.logo})` }}
              ></div>
              <div className={cardContainer}>
                <div className={iconContainer}>
                  <DiLaravel size={36} />
                  <DiReact size={36} />
                  <DiBootstrap size={36} />
                  <DiMysql size={36} />
                </div>
                <p>{item.description}</p>
                <a href={`${item.url}`} className="btn btn-accent3">
                  View more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
