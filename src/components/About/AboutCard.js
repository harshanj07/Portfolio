import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Harshan J</span> from <span className="purple">Tamil Nadu, India</span>.
            <br />
            Full-Stack Developer and Integrated M.Sc. Software Systems student at <span className="purple">PSG College of Technology</span>.
            <br />
            <br />
            Passionate about building scalable web applications, AI-powered solutions, and seamless user experiences using modern technologies.
            <br />
            <br />
            Previously worked in Full-Stack Development at <span className="purple">Nithra Apps</span> and Software Testing at <span className="purple">ICU Medical LLP</span>, gaining hands-on experience in web development, automation testing, and software quality assurance.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Dance Choregraphy
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Harshan J</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
