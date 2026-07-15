import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import Experience from "./Experience";

function Home2() {
  const cardReveal = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Intro Block */}
        <Row className="justify-content-center">
          <Col md={8} className="home-about-description">
            <motion.div
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="quote-card-view"
              style={{ padding: "40px" }}
            >
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I have at least learnt something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in classics like{" "}
                <i>
                  <b className="purple">C++, Javascript, and Python.</b>
                </i>
                <br />
                <br />
                My fields of interest are building new{" "}
                <i>
                  <b className="purple">Web Technologies & Products</b>
                </i>{" "}
                and working on challenges related to{" "}
                <i>
                  <b className="purple">Deep Learning.</b>
                </i>
                <br />
                <br />
                Whenever possible, I apply my passion for developing products
                with <b className="purple">Node.js</b> and{" "}
                <i>
                  <b className="purple">Modern Javascript Libraries and Frameworks</b>
                </i>{" "}
                like{" "}
                <i>
                  <b className="purple">React.js.</b>
                </i>
              </p>
            </motion.div>
          </Col>

          {/* Glowing Glass Avatar Panel */}
          <Col md={4} className="myAvtar d-flex justify-content-center align-items-center">
            <motion.div
              initial={{ rotate: -5, opacity: 0, scale: 0.9 }}
              whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
              whileHover={{ rotate: 2, scale: 1.05 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                background: "rgba(139, 92, 246, 0.05)",
                border: "1px solid var(--glass-border)",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 15px 35px rgba(139, 92, 246, 0.15)",
                backdropFilter: "blur(12px)"
              }}
            >
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar" 
                style={{ 
                  filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))",
                  maxHeight: "220px"
                }}
              />
            </motion.div>
          </Col>
        </Row>

        {/* Experience Timeline Section */}
        <Row className="mt-5">
          <Col md={12}>
            <Experience />
          </Col>
        </Row>

        {/* Social Connect Blocks */}
        <Row>
          <Col md={12} className="home-about-social">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/harshanj07"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://x.com/Harshanj0710"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/harshan-j-700a84281/"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/harshanj07/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:harshanj07@gmail.com"
                    className="home-social-icons"
                  >
                    <AiOutlineMail />
                  </a>
                </li>
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
