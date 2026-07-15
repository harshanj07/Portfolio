import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HolographicAvatar from "./HolographicAvatar";
import Home2 from "./Home2";
import Type from "./Type";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1 variants={itemVariants} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </motion.h1>

                <motion.h1 variants={itemVariants} className="heading-name">
                  I'M <strong className="main-name">Harshan J</strong>
                </motion.h1>

                <motion.h6 variants={itemVariants} className="heading-name" style={{ paddingBottom: 15, fontSize: "1.1rem" }}>
                  Full-Stack Developer  <strong className="main-name">Crafting Modern Digital Experiences</strong>
                </motion.h6>

                <motion.div variants={itemVariants} style={{ paddingLeft: 45, paddingBottom: 50, textAlign: "left" }}>
                  <Type />
                </motion.div>

                {/* Glass CTA buttons with magnet hover feelings */}
                <motion.div
                  variants={itemVariants}
                  className="d-flex flex-wrap gap-3"
                  style={{ paddingLeft: 45 }}
                >
                  <ButtonLink
                    to="/project"
                    primary
                    icon={<FiArrowRight />}
                  >
                    View My Work
                  </ButtonLink>
                  <ButtonLink
                    to="/resume"
                    icon={<CgFileDocument />}
                  >
                    Check Resume
                  </ButtonLink>
                </motion.div>
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                <HolographicAvatar />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

// Inline helper component for style matching
function ButtonLink({ to, children, primary, icon }) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary d-flex align-items-center gap-2"
        style={{
          background: primary
            ? "linear-gradient(90deg, rgba(139, 92, 246, 0.3) 0%, rgba(6, 182, 212, 0.2) 100%)"
            : "rgba(255, 255, 255, 0.03)",
          border: primary
            ? "1px solid rgba(139, 92, 246, 0.4)"
            : "1px solid var(--glass-border)",
          boxShadow: primary
            ? "0 4px 15px rgba(139, 92, 246, 0.25)"
            : "none",
          cursor: "pointer",
          padding: "12px 28px",
          borderRadius: "8px",
          color: "#fff",
          fontSize: "0.95rem",
          fontWeight: "600",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.05em"
        }}
      >
        {children}
        {icon}
      </motion.div>
    </Link>
  );
}

export default Home;
