import * as React from "react";
import { Controller, Scene } from "react-scrollmagic";

import About from "../components/sections/about";
import Work from "../components/sections/work";
import Contact from "../components/sections/contact";
import Layout from "../components/templates/layout";

import { menu } from "../__mock__";

const IndexPage = () => {
  return (
    <Layout headerProps={{ menu }}>
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <Scene duration={600} reverse={true} offset={-300} pin>
          <About />
        </Scene>
        <Scene duration={600} reverse={true} offset={-300} pin>
          <Work />
        </Scene>
        <Scene duration={600} reverse={true} offset={-300} pin>
          <Contact />
        </Scene>
      </Controller>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Daniel Lucumi - dlucumi.dev</title>;
