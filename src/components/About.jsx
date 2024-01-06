import React from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import "../css/about.css";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[200px] w-[150px] mx-auto'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[17px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {

  return (
    <>
      <section id="about">
        <div className="container about__container">
          <div className="about__left">
            <div className="left__up">
              <h2>WHO AM I ?</h2>
              <p>
              I am Divyansh, a third-year student at Manipal University Jaipur, majoring in computer science. My passion lies in web development. With hands-on experience in this field, I am dedicated to honing my skills and staying updated on the latest trends.{" "}
              </p>
            </div>

            <div className="left__down">
              <h2>WHAT DO I DO?</h2>
              <p>
              I actively engage in web development, particularly enjoying the intricacies of front-end design. As a student of computer science, I am enthusiastic about mastering data structures and algorithms, consistently striving for improvement. My journey involves a blend of practical experience and a commitment to staying at the forefront of the ever-evolving tech landscape. <br /><br />
              To explore more about my work and projects, click the portfolio button below.
              </p>
            </div>
          </div>

          <div className='grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-[10px_1px] '>
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>


        </div>
      </section>
    </>
  );
};

export default SectionWrapper(About, "about");
