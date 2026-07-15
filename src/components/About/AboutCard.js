import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harshan J </span>
            from <span className="purple"> TamilNadu, India.</span>
            <br />
            Full-Stack Developer and 5th-year Integrated M.Sc. Software Systems student at PSG College of Technology. Passionate about building scalable web applications, AI-powered solutions, and seamless user experiences with modern software technologies.
            <br />
            Gained industry experience through internships at Nithra Apps (Full-Stack Development) and ICU Medical LLP (Software Testing), working on web applications, automation testing, and quality assurance. Always exploring new technologies and building impactful solutions.
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
