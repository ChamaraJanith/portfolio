import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        style={{
             maxWidth: "1280px",
             margin: "0 auto",
             padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem)",
             position: "relative",
             zIndex: 0
        }}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
