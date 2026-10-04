import React from "react";

import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaCode,
} from "react-icons/fa";

import { SiTailwindcss, SiMongodb } from "react-icons/si";

import { MdSchool, MdLocationOn, MdFavorite } from "react-icons/md";

const About = () => {
  const tech = [
    { icon: <FaReact />, name: "React" },

    { icon: <SiTailwindcss />, name: "Tailwind CSS" },

    { icon: <FaNodeJs />, name: "Node.js" },

    { icon: <SiMongodb />, name: "MongoDB" },

    { icon: <FaPython />, name: "Python" },

    { icon: <FaGitAlt />, name: "Git" },

    { icon: <FaGithub />, name: "GitHub" },
  ];

  return (
    <section className="about-section">
      <h5 className="section-tag">ABOUT ME</h5>

      <h2 className="about-title">
        Building clean interfaces and scalable applications.
      </h2>

      <div className="upper-part">
        <div className="name-card">
          <h1>Amisha Bhattarai Chhettri</h1>

          <h2>Full Stack Developer</h2>

          <p>
            I'm a Computer Science student from Nepal who enjoys creating
            modern, responsive and user-friendly web applications. I enjoy
            solving problems, learning new technologies and transforming ideas
            into beautiful digital experiences.
          </p>
        </div>

        <div className="info-container">
          <div className="info-card">
            <h3>
              <MdSchool />
              Education
            </h3>

            <p>BSc CSIT</p>
          </div>

          <div className="info-card">
            <h3>
              <MdLocationOn />
              Location
            </h3>

            <p>Nepal 🇳🇵</p>
          </div>

          <div className="tech-card">
            <h2>Tech Stack</h2>

            <div className="slider">
              <div className="slide-track">
                {[...tech, ...tech].map((item, index) => (
                  <div className="tech-item" key={index}>
                    {item.icon}

                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="interest-card">
        <h2>
          <MdFavorite />
          Interests
        </h2>

        <div className="interest-list">
          <span>💃 Dancing</span>

          <span>🎨 Art</span>

          <span>🧵 Handicraft</span>

          <span>💻 Coding</span>

          <span>➗ Maths</span>

          <span>🌍 WorldGuesser</span>
        </div>
      </div>
    </section>
  );
};

export default About;
