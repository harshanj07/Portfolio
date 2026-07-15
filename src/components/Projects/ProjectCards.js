import React, { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

// Helper to determine tech stack badges dynamically from project titles
const getTechTags = (title) => {
  switch (title) {
    case "Echo-Chat":
      return ["React", "Node.js", "Socket.io", "MongoDB", "JWT"];
    case "AI-Finance-App":
      return ["Next.js", "Supabase", "Prisma", "TailwindCSS", "Inngest"];
    case "Expense-Tracker":
      return ["MongoDB", "Express", "React", "Node.js", "TailwindCSS"];
    case "VehiServePro":
      return ["Java", "JavaFX", "MySQL", "Desktop App"];
    default:
      return ["Full-Stack", "Web Development"];
  }
};

function ProjectCards(props) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Limit rotation to max 8 degrees
    const tiltX = -(y / (box.height / 2)) * 8;
    const tiltY = (x / (box.width / 2)) * 8;
    
    setRotateX(tiltX);
    setRotateY(tiltY);

    // Track mouse on card for spotlight glow
    card.style.setProperty("--mouse-x", `${e.clientX - box.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - box.top}px`);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const tags = getTechTags(props.title);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        height: "100%",
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <Card className="project-card-view">
        <div style={{ overflow: "hidden", position: "relative" }}>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
          <div 
            style={{ 
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to top, rgba(10, 6, 25, 0.9) 0%, rgba(10, 6, 25, 0) 100%)",
              pointerEvents: "none"
            }} 
          />
        </div>
        
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          
          {/* Render technology badges */}
          <div className="tech-badge-container">
            {tags.map((tag, idx) => (
              <span key={idx} className="tech-badge">
                {tag}
              </span>
            ))}
          </div>

          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

          <div className="mt-auto d-flex gap-2">
            <Button 
              variant="primary" 
              href={props.ghLink} 
              target="_blank"
              className="d-flex align-items-center gap-2"
            >
              <BsGithub />
              <span>{props.isBlog ? "Blog" : "GitHub"}</span>
            </Button>

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                className="d-flex align-items-center gap-2"
                style={{
                  background: "linear-gradient(90deg, rgba(139, 92, 246, 0.25) 0%, rgba(6, 182, 212, 0.15) 100%)",
                  borderColor: "rgba(139, 92, 246, 0.3)"
                }}
              >
                <CgWebsite />
                <span>Demo</span>
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCards;
