import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/22PW16_HARSHAN_OFFCAMPUS.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { motion } from "framer-motion";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        {/* Download Button Wrapper */}
        <Row style={{ justifyContent: "center", position: "relative", zIndex: 10 }}>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{ display: "inline-block", width: "auto" }}
          >
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="d-flex align-items-center gap-2"
              style={{
                background: "linear-gradient(90deg, rgba(139, 92, 246, 0.3) 0%, rgba(6, 182, 212, 0.2) 100%)",
                border: "1px solid rgba(139, 92, 246, 0.4)",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.25)",
                padding: "12px 28px",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.05em",
                fontWeight: "600"
              }}
            >
              <AiOutlineDownload style={{ fontSize: "1.2rem" }} />
              <span>Download CV</span>
            </Button>
          </motion.div>
        </Row>

        {/* Hologram Terminal PDF Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="resume"
          style={{
            maxWidth: "900px",
            margin: "40px auto",
            border: "1px solid var(--glass-border)",
            background: "rgba(10, 6, 25, 0.5)",
            backdropFilter: "blur(12px)",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)"
          }}
        >
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.4 : 0.55} />
          </Document>
        </motion.div>

        {/* Secondary Download Button Wrapper */}
        <Row style={{ justifyContent: "center", position: "relative", zIndex: 10 }}>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{ display: "inline-block", width: "auto" }}
          >
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="d-flex align-items-center gap-2"
              style={{
                background: "linear-gradient(90deg, rgba(139, 92, 246, 0.3) 0%, rgba(6, 182, 212, 0.2) 100%)",
                border: "1px solid rgba(139, 92, 246, 0.4)",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.25)",
                padding: "12px 28px",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.05em",
                fontWeight: "600"
              }}
            >
              <AiOutlineDownload style={{ fontSize: "1.2rem" }} />
              <span>Download CV</span>
            </Button>
          </motion.div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
