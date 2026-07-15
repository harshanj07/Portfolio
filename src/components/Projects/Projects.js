import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { motion } from "framer-motion";

// Project assets
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center" }}
        >
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "40px" }}>
            Here are a few projects I've worked on recently.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <ProjectCard
                  imgPath={chatify}
                  isBlog={false}
                  title="AGENTIXAI"
                  description="Developed a serverless AI-powered web platform that generates, installs dependencies for, and previews complete applications from a single prompt. Built using Next.js, Prisma, Supabase, Clerk Auth, and Gemini LLM streaming; deployed on Vercel’s serverless platform."
                  ghLink="https://github.com/harshanj07/AgentixAI"
                />
              </motion.div>
            </Col>

            <Col md={4} className="project-card">
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <ProjectCard
                  imgPath={editor}
                  isBlog={false}
                  title="AI-Finance-App"
                  description="Full Stack AI Finance Platform with Next JS, Supabase, Tailwind, Prisma, Inngest, ArcJet. A scalable, responsive, and user-friendly application offering detailed insights with help of AI for better financial management."
                  ghLink="https://github.com/harshanj07/AI-Finance-app"
                  demoLink="https://ai-finance-app-psi.vercel.app/"              
                />
              </motion.div>
            </Col> 

            <Col md={4} className="project-card">
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <ProjectCard
                  imgPath={bitsOfCode}
                  isBlog={false}
                  title="SMARTSCHOLAR"
                  description="A microservice-based research paper recommender using BERT embeddings and TF-IDF for hybrid similarity matching. Built with a React/TypeScript frontend, FastAPI and Node.js backend, and scalable containerized deployment using Docker, Kubernetes, and PostgreSQL."
                  ghLink="https://github.com/harshanj07/SmartScholar"
                />
              </motion.div>
            </Col>

            <Col md={4} className="project-card">
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <ProjectCard
                  imgPath={editor}
                  isBlog={false}
                  title="TRIPFUSION"
                  description="An AI-powered travel planner using FastAPI, React, and Gemini for collaborative itinerary generation, real-time trip management, and expense tracking. Features secure Clerk authentication, PostgreSQL integration, and optimized group expense settlement logic."
                  ghLink="https://github.com/harshanj07/TripFusion"
                />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
