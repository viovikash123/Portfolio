import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Navigation Links */}
        <div className="footer-nav">
          <ul>
            <li><Link to="hero-section" className="footer-link">Home</Link></li>
            <li><Link to="skill-section" className="footer-link">Skills</Link></li>
            <li><Link to="projects-section" className="footer-link">Projects</Link></li>
            <li><Link to="about-section" className="footer-link">About Me</Link></li>
            <li><Link to="contact-section" className="footer-link">Contact</Link></li>
            
          </ul>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <p className="contact-item">Email: <a href="mailto:viovikash@gmail.com" className="contact-link">viovikash@gmail.com</a></p>
          <p className="contact-item">Phone: +91 9044102428</p>
        </div>

        {/* Social Media Icons */}
        <div className="social-links">
          <a href="https://github.com/viovikash123" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/viovikash123/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 Vikash Singh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
