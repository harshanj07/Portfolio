import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Type() {
  const words = [
    "Software Developer",
    "MERN Stack Developer",
    "Quick Learner"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div style={{ height: "60px", overflow: "hidden", position: "relative" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -35, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="Typewriter__wrapper"
          style={{
            position: "absolute",
            left: 0,
            fontSize: "2.2em",
            fontWeight: "700",
            background: "linear-gradient(90deg, #A78BFA, #06B6D4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            whiteSpace: "nowrap"
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default Type;
