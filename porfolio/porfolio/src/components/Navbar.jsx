import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        A<span>.</span>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>

        <a href="#About">About</a>

        <a href="#Project">Projects</a>
      </div>

      <div className="nav-right">
        <a href="#">
          <FaGithub />
        </a>

        <a href="#">
          <FaLinkedinIn />
        </a>

        <button>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
