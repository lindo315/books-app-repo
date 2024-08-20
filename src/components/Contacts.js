import React, { forwardRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contacts.css";

const Contacts = forwardRef((props, ref) => {
  return (
    <section className="contacts" ref={ref} id="contacts">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:info@briliantebooks.com">info@briliantebooks.com</a>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <address>123 Book Street, Reading City, RC 12345</address>
        </div>
      </div>
      <div className="social-links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </section>
  );
});

export default Contacts;
