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
            I am currently seeking 6 months intern from May 2025 to December 2025.
            <br />
            I Currently pursuing 3rd year of 5 year Integrated M.Sc. Software Systems at the 
            Department of AMCS at PSG College of Technology.
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
