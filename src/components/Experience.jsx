import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(13, 26, 23, 0.5)",
        backdropFilter: "blur(10px)",
        color: "#fff",
        border: "1px solid rgba(0, 255, 157, 0.1)",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgba(255, 255, 255, 0.1)" }}
      date={experience.date}
      iconStyle={{ 
          background: "rgba(255, 255, 255, 0.9)", 
          boxShadow: "0 0 0 4px rgba(0, 191, 114, 0.2), inset 0 0 10px rgba(0, 191, 114, 0.1)" 
      }}
      icon={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <span style={{ fontSize: '24px' }}>{experience.icon}</span>
        </div>
      }
    >
      <div>
        <h3 style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
          {experience.title}
        </h3>
        <p
          style={{ color: "#aaa", fontSize: "16px", margin: 0, fontWeight: "600" }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul style={{ marginTop: "1rem", listStyleType: "disc", marginLeft: "1.25rem" }}>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            style={{
                color: "#f3f3f3",
                fontSize: "14px",
                paddingLeft: "0.25rem",
                letterSpacing: "0.05em",
                marginBottom: "0.5rem"
            }}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sub-text">What I have achieved so far</p>
        <h2 className="head-text">Credentials.</h2>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", marginTop: "5rem" }}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
