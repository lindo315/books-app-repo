import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Briljante Books</h4>
          <p>
            We provide high-quality, interactive textbooks for students and
            lifelong learners.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#textbooks">Textbooks</a>
            </li>
            <li>
              <a href="#contacts">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <ul className="social-links">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Briljante Books. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
