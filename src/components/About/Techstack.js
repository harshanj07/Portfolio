import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiFirebase, SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <DiJavascript1 />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <DiNodejs />, name: "Node.js", color: "#339933" },
  { icon: <DiReact />, name: "React.js", color: "#61DAFB" },
  { icon: <DiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <DiGit />, name: "Git", color: "#F05032" },
  { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
  { icon: <DiPython />, name: "Python", color: "#3776AB" },
  { icon: <DiJava />, name: "Java", color: "#007396" },
];

function Techstack() {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 15 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 15 }
    },
  };

  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {skills.map((skill, index) => (
          <Col 
            xs={4} 
            md={2} 
            key={index} 
            className="d-flex justify-content-center"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08, 
                y: -6,
                borderColor: skill.color,
                boxShadow: `0 12px 25px -5px ${skill.color}50`,
                color: "#ffffff"
              }}
              className="tech-icons"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "var(--text-secondary)",
                transition: "border-color 0.3s, box-shadow 0.3s"
              }}
            >
              {skill.icon}
              <span className="tech-name">{skill.name}</span>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Techstack;
