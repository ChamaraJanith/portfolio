import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1.05,
          speed: 400,
        }}
        className='glass-panel p-5 sm:w-[360px] w-full'
        style={{
            padding: "1.25rem",
            width: "360px",
            minHeight: "450px",
            cursor: "pointer"
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "230px" }}>
          <img
            src={image}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "1rem" }}
          />

          <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "flex-end", margin: "0.75rem" }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              style={{ 
                  background: "rgba(5, 8, 22, 0.8)", 
                  width: "40px", 
                  height: "40px", 
                  borderRadius: "50%", 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center", 
                  cursor: "pointer",
                  border: "1px solid var(--nebula-blue)",
                  boxShadow: "0 0 10px rgba(0, 255, 157, 0.3)"
              }}
            >
              <span style={{ fontSize: "16px", fontWeight: "bold", color: "var(--nebula-blue)" }}>↗</span>
            </motion.div>
          </div>
        </div>

        <div style={{ marginTop: "1.25rem" }}>
          <h3 style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}>{name}</h3>
          <p style={{ marginTop: "0.5rem", color: "#ccc", fontSize: "14px", lineHeight: "1.6" }}>{description}</p>
        </div>

        <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              style={{ 
                fontSize: "12px", 
                fontWeight: "600",
                color: tag.color === 'blue-text-gradient' ? 'var(--nebula-blue)' : tag.color === 'green-text-gradient' ? 'var(--nebula-purple)' : 'var(--cosmic-pink)',
                background: 'rgba(0, 0, 0, 0.03)',
                padding: '2px 8px',
                borderRadius: '10px'
              }}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='sub-text'>My work</p>
        <h2 className='head-text'>Projects.</h2>
      </motion.div>

      <div style={{ width: "100%", display: "flex" }}>
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
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories.
        </motion.p>
      </div>

      <div style={{ marginTop: "5rem", display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
