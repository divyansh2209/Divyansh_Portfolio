import React from "react";
import "./project.css";

const project = ({ project }) => {
    return (
        <div className="portfolio__card card">
            <div className="structure">
                <div>
                    <div className="project__portfolio-image">
                        <img src={project.image} alt="project image" />
                    </div>
                    <h4>{project.title}</h4>
                    <p>{project.desc}</p>
                    <p> <span className="tech">
                        Technology:
                    </span>  {project.tech}</p>
                </div>


                <div className="buttons">
                    <a href={project.demo} className="btn" target="_blank">
                        Demo
                    </a>
                    <a href={project.github} target="_blank" className="btn">
                        GitHub
                    </a>
                </div>

            </div>
        </div>
    );
};

export default project;
