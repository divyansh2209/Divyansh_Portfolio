import React from "react";
import { SectionWrapper } from "../hoc";
import Skills from './Skills';
import { styles } from "../styles";
import {textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div className=' flex-wrap justify-center gap-10'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies</h2>
      </motion.div>
      <Skills></Skills>
    </div>
  );
};

export default SectionWrapper(Tech, "");
