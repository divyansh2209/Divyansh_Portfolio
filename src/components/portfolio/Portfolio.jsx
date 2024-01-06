import React from "react";
import "./portfolio.css";
import data from "./data.js";
import { useState } from "react";
import Projects from "./projects";
import { useInView } from 'react-intersection-observer';


const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const { ref: myref, inView : headingInView } = useInView();
  return (
    <section id="portfolio">
      <div className="portfilio__heading">
        <div ref={myref} className={`portfolio__underline ${headingInView ? "underline__animation" : ''}`}></div>
      </div>
      <div className="container portfolio__container">
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
