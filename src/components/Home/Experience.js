import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiBriefcase, FiBookOpen, FiCode } from "react-icons/fi";

const experienceData = [
  {
    id: 1,
    role: "Software Testing Intern",
    company: "ICU Medical LLP",
    date: "2025 - Present",
    icon: <FiBriefcase />,
    color: "#8B5CF6",
    details: "Focusing on manual and automated test case execution, QA cycles, and regression testing to maintain premium software reliability.",
    bullets: [
      "Designed and executed detailed test plans for critical medical device interfaces.",
      "Identified, documented, and tracked software bugs using standard tracking systems.",
      "Collaborated with product teams to verify fixes and ensure strict QA specifications.",
      "Developed basic regression testing automation scripts to optimize QA delivery."
    ]
  },
  {
    id: 2,
    role: "M.Sc. Software Systems (5-Yr Integrated)",
    company: "PSG College of Technology",
    date: "2022 - 2027 (Expected)",
    icon: <FiBookOpen />,
    color: "#06B6D4",
    details: "Currently pursuing 4th year at the Department of AMCS. Building strong foundations in systems programming and software design.",
    bullets: [
      "Rigorous coursework in Data Structures, Advanced Algorithms, DBMS, and Distributed Systems.",
      "Special interest in Deep Learning models, neural network architectures, and predictive analytics.",
      "Consistently active in technical symposiums, web design hackathons, and software engineering labs."
    ]
  },
  {
    id: 3,
    role: "Independent Software Developer",
    company: "Open Source / Full-Stack projects",
    date: "2023 - Present",
    icon: <FiCode />,
    color: "#EC4899",
    details: "Building and deploying modern web applications using Next.js, FastAPI, systems architectures, and serverless workflows.",
    bullets: [
      "Built AgentixAI, a serverless platform generating complete apps from a single prompt using Next.js and Supabase.",
      "Developed AI-Finance-App, a financial dashboard with Next.js, Supabase, and AI transaction insights.",
      "Created SmartScholar (research recommender with BERT embeddings) and TripFusion (AI travel planner using FastAPI and React).",
      "Passionate about optimizing application security, microservice scalability, and containerized cloud deployment."
    ]
  }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="experience-container">
      <h2 
        className="project-heading text-center" 
        style={{ fontSize: "2.5em", marginBottom: "50px" }}
      >
        My <span className="purple">Journey</span> & Experience
      </h2>

      <div style={{ position: "relative", maxWidth: "1000px", margin: "0 auto" }}>
        {/* Central glowing vertical timeline line */}
        <div className="timeline-line" />

        <div className="d-flex flex-column gap-5">
          {experienceData.map((item, idx) => {
            const isRight = idx % 2 === 0;
            const isExpanded = expandedId === item.id;

            return (
              <div 
                key={item.id} 
                className={`timeline-card-wrapper ${isRight ? "right" : "left"}`}
              >
                {/* Node on central axis */}
                <motion.div 
                  className="timeline-node d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "rgba(10, 6, 25, 0.95)",
                    border: `3px solid ${item.color}`,
                    boxShadow: `0 0 15px ${item.color}`,
                    color: item.color,
                    width: "40px",
                    height: "40px",
                    cursor: "pointer"
                  }}
                  whileHover={{ scale: 1.15 }}
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                >
                  {item.icon}
                </motion.div>

                {/* Timeline content card */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="timeline-card"
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  style={{
                    borderLeft: `4px solid ${item.color}`,
                  }}
                >
                  <h4>{item.role}</h4>
                  <div className="company">{item.company}</div>
                  <div className="date">{item.date}</div>
                  <p className="details">{item.details}</p>

                  <div className="mt-3" style={{ fontSize: "0.85rem", color: item.color, fontFamily: "var(--font-mono)" }}>
                    {isExpanded ? "Click to collapse" : "Click to view achievements"}
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <hr style={{ borderColor: "rgba(255,255,255,0.1)" }} />
                        <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                          {item.bullets.map((bullet, bIdx) => (
                            <motion.li 
                              key={bIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: bIdx * 0.1 }}
                              style={{ 
                                color: "var(--text-secondary)", 
                                fontSize: "0.9rem",
                                marginBottom: "8px",
                                listStyleType: "square"
                              }}
                            >
                              {bullet}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
