import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="badge">Full Stack Developer</span>

        <h1>
          Hi,
          <br />
          I'm
          <span>Amisha</span>
        </h1>

        <p>
          Passionate Full Stack Developer from Nepal focused on creating
          responsive, modern and scalable web applications using React, Node.js
          and Python.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            View Projects
            <FaArrowRight />
          </button>

          <button className="secondary-btn">Download Resume</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-card">
          <img src="https://i.pinimg.com/736x/6d/4e/56/6d4e567f27de3107c163ff779ee6bacc.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
