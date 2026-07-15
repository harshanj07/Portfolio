import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import BackgroundEffects from "./components/BackgroundEffects";
import Lenis from "lenis";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Check device type
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      lenis.destroy();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Sync loader timing
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Track cursor position
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.tech-icons') || 
        target.closest('.timeline-card');
      setCursorHovered(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  // Handle smooth easing for cursor ring trail
  useEffect(() => {
    if (isMobile) return;

    let frameId;
    const updateTrail = () => {
      setTrailPos((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      frameId = requestAnimationFrame(updateTrail);
    };

    updateTrail();
    return () => cancelAnimationFrame(frameId);
  }, [mousePos, isMobile]);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <BackgroundEffects />
        
        {/* Custom cursor layers (hidden on touchscreens via style) */}
        {!isMobile && (
          <>
            <div 
              className="custom-cursor" 
              style={{ 
                left: `${mousePos.x}px`, 
                top: `${mousePos.y}px` 
              }} 
            />
            <div 
              className="custom-cursor-ring" 
              style={{ 
                left: `${trailPos.x}px`, 
                top: `${trailPos.y}px`,
                width: cursorHovered ? "48px" : "32px",
                height: cursorHovered ? "48px" : "32px",
                borderColor: cursorHovered ? "var(--neon-cyan)" : "rgba(139, 92, 246, 0.5)",
                boxShadow: cursorHovered ? "0 0 15px rgba(6, 182, 212, 0.4)" : "none",
                backgroundColor: cursorHovered ? "rgba(6, 182, 212, 0.05)" : "transparent"
              }} 
            />
          </>
        )}

        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
