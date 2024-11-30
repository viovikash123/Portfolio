import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid d-flex">
          <a className="navbar-brand text-white" style={{ fontFamily: 'roboto', fontSize: '26px', fontWeight: '600', paddingLeft: '100px' }} href="#">
            Portfolio.
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* Link to Home Section */}
                <Link className="nav-link active text-green" to="hero-section" spy={true} smooth={true} duration={300} offset={-70}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* Link to Skills Section */}
                <Link className="nav-link" to="skill-section" spy={true} smooth={true} duration={300} offset={-70}>
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                {/* Link to Projects Section */}
                <Link className="nav-link" to="projects-section" spy={true} smooth={true} duration={300} offset={-70}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact-section" spy={true} smooth={true} duration={300} offset={-70}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Router>
  );
}

export default Navbar;
