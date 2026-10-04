import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = ({
  item_img,

  item_heading,

  item_paragraph,

  item_github,

  item_demo,

  item_tech,
}) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={item_img} alt="" />

        <div className="project-overlay">
          <a href={item_github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href={item_demo} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      <div className="project-content">
        <div className="tech-badges">
          {item_tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <h2>{item_heading}</h2>

        <p>{item_paragraph}</p>

        <div className="project-buttons">
          <a href={item_github} target="_blank" rel="noreferrer">
            <FaGithub />
            Github
          </a>

          <a href={item_demo} target="_blank" rel="noreferrer">
            Live Demo
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
