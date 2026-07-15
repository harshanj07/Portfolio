import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { motion } from "framer-motion";

const tools = [
  { icon: <SiMacos />, name: "macOS", color: "#ffffff" },
  { icon: <SiVisualstudiocode />, name: "VS Code", color: "#007ACC" },
  { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
  { icon: <SiVercel />, name: "Vercel", color: "#ffffff" },
];

function Toolstack() {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        {tools.map((tool, index) => (
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
                borderColor: tool.color,
                boxShadow: `0 12px 25px -5px ${tool.color}50`,
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
              {tool.icon}
              <span className="tech-name">{tool.name}</span>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Toolstack;
