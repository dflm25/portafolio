import React, { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import randomColor from "randomcolor";

// import ProgressLine from "../../atomics/progressLine";
import { skills } from "../../../__mock__";
import {
  aboutContainer,
  cardSkill,
  cardSkillContainer,
} from "./about.module.scss";

export default function About() {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>
      IT Enthusiast with 12 year experience building websites, apps. Proven
      skills in web development, Frontend development skills including full
      stack knowledge. Currently working with php (Laravel, wordpress),
      Javascript(React.js, Jquery, React Native, Node.js, Express.js, Gatsby),
      Databases (MongoDB, Mysql), AWS EC2, S3 knowledge.
    </TerminalOutput>,
  ]);

  return (
    <div id="about-me" className={`panel ${aboutContainer}`}>
      <div className="container">
        <Terminal
          height="600"
          name="About me"
          colorMode={ColorMode.Light}
          onInput={(terminalInput) => {
            // console.log(`New terminal input received: '${terminalInput}'`);
            setTerminalLineData(terminalInput);
          }}
        >
          {terminalLineData}
        </Terminal>
        <div className={cardSkillContainer}>
          {skills.map((item) => {
            const color = randomColor({
              luminosity: "light",
              hue: "blue",
            });
            return (
              <span
                key={`skill-${item.id}`}
                className={cardSkill}
                style={{ background: `${color}` }}
              >
                {item.label}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
/* 
<div className="col-md-6 pt-5">
  
  <ProgressLine
    label={item.label}
    visualParts={[
      {
        percentage: `${item.percentage}%`,
        color: item.color,
      },
    ]}
  />
</div> */
