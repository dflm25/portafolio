import React from "react";
import Lottie from "lottie-react";

import {
  contactContainer,
  cardContact,
  contactFlex,
  btn,
  ctaButtonsContainer,
} from "./contact.module.scss";
import AnimationContact from "../../../assets/images/contact.json";

export default function Contac() {
  return (
    <div className={contactContainer}>
      <div className={`container`}>
        <div className={contactFlex}>
          <div
            className={` shadow-lg p-3 mb-5 bg-white rounded ${cardContact} terminal-card`}
          >
            <h2 className="mb-5 text-center">Contact me</h2>
            <Lottie animationData={AnimationContact} loop={true} />

            <p className="text-center px-5">
              <strong>
                Experienced developer here! Let's chat about your project.
              </strong>
            </p>
            <div class={ctaButtonsContainer}>
              <a href="" className={`btn btn-warning ${btn}`}>
                Mail me
              </a>

              <a href="" className={`btn btn-danger ${btn}`}>
                Call me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
