import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { Tilt } from 'react-tilt';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full sm:w-[250px]" style={{ width: '100%', maxWidth: '250px' }}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="glass-panel"
        style={{
          padding: "2rem 1.5rem",
          borderRadius: "20px",
          minHeight: "280px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "1.5rem",
          cursor: "pointer",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}
      >
        <div style={{ fontSize: "60px", filter: "drop-shadow(0 0 10px rgba(0, 191, 114, 0.2))" }}>{icon}</div>
        <h3 style={{ color: "var(--star-white)", fontSize: "20px", fontWeight: "bold", fontFamily: "Orbitron, sans-serif" }}>
          {title}
        </h3>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sub-text">Introduction</p>
        <h2 className="head-text">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        style={{
          marginTop: "1rem",
          color: "#aaa",
          fontSize: "17px",
          maxWidth: "75rem",
          lineHeight: "30px"
        }}
      >
        From <span style={{ color: 'var(--cosmic-pink)', fontWeight: 'bold' }}>Biology to Technology</span> — my path through the cosmos has shaped a unique analytical perspective. 
        Currently orbiting through Software Engineering at SLIIT with a <span style={{ color: 'var(--nebula-blue)', fontWeight: 'bold' }}>3.44 GPA</span>.
        Mastering mobile development, real-time systems, and AI integration.
        <br /><br />
        Based in <span style={{ color: 'var(--nebula-purple)', fontWeight: 'bold' }}>Badulla, Sri Lanka</span>, I am actively seeking internship opportunities to launch my professional career into new dimensions.
      </motion.p>

      <div style={{ marginTop: "5rem", display: "flex", flexWrap: "wrap", gap: "2.5rem" }}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
