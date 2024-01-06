import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div>
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              HEY THERE! <br /> I'm <span className='text-[#ff002b] '>Divyansh Singh.</span>
            </h1>
          </div>
          <div className="flex justify-end">
            <p className={`${styles.heroSubText} mt-2 text-white-100 sm:block hidden` }>I code beautifully simple things
              <br /> and I love what I do</p>
          </div>
        </div> 
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
