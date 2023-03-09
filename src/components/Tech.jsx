import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologiesFront, technologiesStyle, technologiesBack, technologiesDB, technologiesOther } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import az900 from "../assets/certifications/az900.png";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>
      <div>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Front-End</p>
        </motion.div>
        <div className='flex flex-row flex-wrap md:gap-10 gap-5 justify-center md:justify-start'>
          {technologiesFront.map((technology) => (
            <div className='w-28 h-28 mt-2 lg:mb-3' key={technology.name}>
              <BallCanvas icon={technology.icon} name={technology.name} />
            </div>
          ))}
        </div>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Style</p>
        </motion.div>
        <div className='flex flex-row flex-wrap md:gap-10 gap-5 justify-center md:justify-start'>
          {technologiesStyle.map((technology) => (
            <div className='w-28 h-28 mt-2 md:mb-3' key={technology.name}>
              <BallCanvas icon={technology.icon} name={technology.name} />
            </div>
          ))}
        </div>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Back-End</p>
        </motion.div>
        <div className='flex flex-row flex-wrap md:gap-10 gap-5 justify-center md:justify-start'>
          {technologiesBack.map((technology) => (
            <div className='w-28 h-28 mt-2 md:mb-3' key={technology.name}>
              <BallCanvas icon={technology.icon} name={technology.name} />
            </div>
          ))}
        </div>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Database</p>
        </motion.div>
        <div className='flex flex-row flex-wrap md:gap-10 gap-5 justify-center md:justify-start'>
          {technologiesDB.map((technology) => (
            <div className='w-28 h-28 mt-2 md:mb-3' key={technology.name}>
              <BallCanvas icon={technology.icon} name={technology.name} />
            </div>
          ))}
        </div>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Other</p>
        </motion.div>
        <div className='flex flex-row flex-wrap md:gap-10 gap-5 justify-center md:justify-start'>
          {technologiesOther.map((technology) => (
            <div className='w-28 h-28 mt-2' key={technology.name}>
              <BallCanvas icon={technology.icon} name={technology.name} />
            </div>
          ))}
        </div>
      </div>


      <motion.div variants={textVariant()} className='mt-[100px]'>
        <p className={`${styles.sectionSubText}`}>Certifications</p>
        <h2 className={`${styles.sectionHeadText}`}>Azure.</h2>
      </motion.div>
      <div>
        <div className='flex flex-row flex-wrap md:gap-10 gap-5 justify-center md:justify-start'>
          <img className="h-28 w-28 mt-4" src={az900} />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
