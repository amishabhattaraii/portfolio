import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";

const App = () => {
  const ProjectItems = [
    {
      image: "https://i.pinimg.com/736x/4f/20/01/4f2001a3b81deeff75b34059c729b111.jpg",

      heading: "Online Doctor Appointment System",

      paragraph:
        "An intelligent doctor appointment platform built using Django and Machine Learning that predicts appointment duration and streamlines scheduling.",

      github: "https://github.com/yourusername/doctor",

      demo: "https://yourdemo.com",

      tech: ["React", "Django", "Python", "SQLite"],
    },

    {
      image: "https://i.pinimg.com/1200x/d2/ea/4f/d2ea4f5edda4e3dff35622aa67bc558a.jpg",

      heading: "Personal Portfolio",

      paragraph:
        "A modern responsive developer portfolio showcasing projects, skills and experience.",

      github: "https://github.com/yourusername/portfolio",

      demo: "https://yourportfolio.com",

      tech: ["React", "Tailwind", "CSS"],
    },
  ];

  return (
    <div className="bg-black px-10 py-7">
      <Navbar />
      <Home />
      <section id="About">
        <About />
      </section>
      <section id="Project" className="project-section">
        <p className="section-tag">

MY WORK

</p>

<h2 className="section-title">

Featured Projects

</h2>

<p className="section-subtitle">

Here are a few projects that showcase my passion for building modern, responsive and scalable web applications.

</p>

        <div className="project-grid">
          {ProjectItems.map((elem, idx) => (
            <Project
              item_img={elem.image}
              item_heading={elem.heading}
              item_paragraph={elem.paragraph}
              item_github={elem.github}
              item_demo={elem.demo}
              item_tech={elem.tech}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
