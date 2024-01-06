import React from "react";
import "../css/skills.css";
import CircularProgressBar from "./CircularProgressBar";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="skills__container">
        <CircularProgressBar skillName="HTML" percentage="75" circleWidth="200" />
        <CircularProgressBar skillName="CSS" percentage="80" circleWidth="200" />
        <CircularProgressBar skillName="Bootstrap" percentage="65" circleWidth="200" />
        <CircularProgressBar skillName="Javacript" percentage="70" circleWidth="200" />
        <CircularProgressBar skillName="SASS" percentage="60" circleWidth="200" />
        <CircularProgressBar skillName="MONGODB" percentage="50" circleWidth="200" />
        <CircularProgressBar skillName="EXPRESS.JS" percentage="40" circleWidth="200" />
        <CircularProgressBar skillName="REACT.JS" percentage="75" circleWidth="200" />
        <CircularProgressBar skillName="NODE.JS" percentage="40" circleWidth="200" />
        <CircularProgressBar skillName="GIT" percentage="75" circleWidth="200" />
        <CircularProgressBar skillName="GITHUB" percentage="75" circleWidth="200" />
        <CircularProgressBar skillName="MYSQL" percentage="35" circleWidth="200" />
        <CircularProgressBar skillName="Java" percentage="40" circleWidth="200" />
        <CircularProgressBar skillName="C" percentage="35" circleWidth="200" />
      </div>

    </section>
  );
};

export default Skills;
