import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ index, name, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    whileHover={{ scale: 1.1, rotate: 5 }}
    className="glass-panel"
    style={{
      width: "120px",
      height: "120px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      gap: "0.5rem",
      border: "1px solid rgba(0, 255, 157, 0.2)",
      boxShadow: "0 0 20px rgba(0, 255, 157, 0.1)",
      position: "relative",
      overflow: "hidden"
    }}
  >
    <div 
      style={{ 
        position: "absolute", 
        inset: 0, 
        background: "radial-gradient(circle at 50% 120%, rgba(0, 255, 157, 0.1), transparent 70%)" 
      }} 
    />
    <img 
      src={icon} 
      alt={name} 
      style={{ 
        width: "50px", 
        height: "50px", 
        objectFit: "contain",
        filter: "drop-shadow(0 0 5px rgba(0, 255, 157, 0.3))" 
      }} 
    />
    <p style={{ fontSize: "12px", fontWeight: "bold", color: "var(--white-100)", opacity: 0.8 }}>{name}</p>
  </motion.div>
);

const Tech = () => {
  return (
    <div style={{ padding: "2rem 0" }}>
      <motion.div variants={textVariant()} style={{ marginBottom: "4rem" }}>
        <p className="sub-text">Powering my creations</p>
        <h2 className="head-text">Technical Arsenal.</h2>
      </motion.div>

      <div style={{ 
        display: "flex", 
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: "center", 
        gap: "2rem",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
