import React from "react";

import { footerContainer, btn, copyright } from "./footer.module.scss";

export default function Footer() {
  return (
    <footer id="footer" className={footerContainer}>
      <div className="container">
        <div className={`copyright text-center p-2 ${copyright}`}>
          Copyright © 2024{" "}
          <a href="https://dlucumi.dev" className={btn}>
            dlucumi.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
