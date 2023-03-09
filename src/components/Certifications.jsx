import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import az900 from "../assets/certifications/az900.png";

const Certifications = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>Certifications</p>
            <h2 className={`${styles.sectionHeadText}`}>Azure.</h2>
        </motion.div>
        <div>
            <div className='flex flex-row flex-wrap md:gap-10 gap-5 justify-center md:justify-start'>
            <img className="h-28 w-28 mt-4" src={az900} />
            </div>
        </div>
    </>
  )
}

export default SectionWrapper(Certifications, "");