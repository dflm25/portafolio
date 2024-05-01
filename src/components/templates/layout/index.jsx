import React from "react";

import Header from "../header";
import Footer from "../footer";

import { ThemeProvider } from "../../../context/themeContext";
import "../../../assets/sass/main.scss";

const Layout = ({ children, headerProps }) => {
  return (
    <ThemeProvider>
      <Header {...headerProps} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
