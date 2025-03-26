import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Echo-Chat"
              description="MERN Stack Project: Build and Deployed a Real Time Chat App | JWT, Socket.io. Implemented a secure and scalable backend with Node.js and Express"
              ghLink="https://github.com/harshanj07/chatApplication"
              demoLink="https://chatapplication-xu8n.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI-Finance-App"
              description="Full Stack AI Finance Platform with Next JS, Supabase, Tailwind, Prisma,Inngest, ArcJet. a scalable, responsive, and user-friendly application and provide detailed insights with help of AI for better financial management."
              ghLink="https://github.com/harshanj07/AI-Finance-app"
              demoLink="https://ai-finance-app-psi.vercel.app/"              
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Expense-Tracker"
              description="A web-based application designed to assist users in tracking and managing their daily expenses. Built with the MERN stack to create a scalable, responsive, and userfriendly application."
              ghLink="https://github.com/harshanj07/ExpenseTracker"
              demoLink="https://expensetracker-1-1eie.onrender.com/"              
            />
          </Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Predictive Maintainance"
              description="This application is designed to predict machine failure for predictive maintenance using machine learning. It utilizes a synthetic dataset with 10,000 data points and 14 features."
              ghLink="https://github.com/harshanj07/Predictive-maintanece"
              demoLink="https://predictive-maintanece-nymfcdag4xsp5tcdbjjynz.streamlit.app/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="VehiServePro"
              description="This is a comprehensive Vehicle Management System developed using Java, JavaFX, and MySQL, designed to manage vehicle-related operations efficiently. "
              ghLink="https://github.com/harshanj07/VehiServePro"
              
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
