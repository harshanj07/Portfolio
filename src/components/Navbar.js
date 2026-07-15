import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { motion } from "framer-motion";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const isActive = (path) => {
    // Exact match for home, or starts with for others
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center" defaultActiveKey="#home">
            <Nav.Item style={{ position: "relative" }}>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => updateExpanded(false)}
                className={isActive("/") ? "active-nav-link" : ""}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                {isActive("/") && (
                  <motion.div
                    layoutId="navbar-active-line"
                    className="navbar-active-bar"
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "15px",
                      right: "15px",
                      height: "2px",
                      background: "linear-gradient(90deg, var(--neon-purple), var(--neon-cyan))",
                      borderRadius: "2px",
                      boxShadow: "0 0 8px var(--neon-purple)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item style={{ position: "relative" }}>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className={isActive("/about") ? "active-nav-link" : ""}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                {isActive("/about") && (
                  <motion.div
                    layoutId="navbar-active-line"
                    className="navbar-active-bar"
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "15px",
                      right: "15px",
                      height: "2px",
                      background: "linear-gradient(90deg, var(--neon-purple), var(--neon-cyan))",
                      borderRadius: "2px",
                      boxShadow: "0 0 8px var(--neon-purple)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item style={{ position: "relative" }}>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className={isActive("/project") ? "active-nav-link" : ""}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
                {isActive("/project") && (
                  <motion.div
                    layoutId="navbar-active-line"
                    className="navbar-active-bar"
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "15px",
                      right: "15px",
                      height: "2px",
                      background: "linear-gradient(90deg, var(--neon-purple), var(--neon-cyan))",
                      borderRadius: "2px",
                      boxShadow: "0 0 8px var(--neon-purple)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item style={{ position: "relative" }}>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                className={isActive("/resume") ? "active-nav-link" : ""}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                {isActive("/resume") && (
                  <motion.div
                    layoutId="navbar-active-line"
                    className="navbar-active-bar"
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "15px",
                      right: "15px",
                      height: "2px",
                      background: "linear-gradient(90deg, var(--neon-purple), var(--neon-cyan))",
                      borderRadius: "2px",
                      boxShadow: "0 0 8px var(--neon-purple)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/harshanj07/Portfolio"
                target="_blank"
                className="fork-btn-inner d-flex align-items-center gap-1"
                style={{
                  background: "rgba(139, 92, 246, 0.15)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "8px",
                  padding: "6px 14px"
                }}
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
