// src/components/Nav.js
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import "../styles/Nav.css";

const Nav = () => (
  <nav className="nav">
    <ul>
      <li>
        <a href="#about">About Us</a>
      </li>
      <li>
        <a href="#textbooks">Textbooks</a>
      </li>
      <li>
        <a href="#contacts">Contacts</a>
      </li>
      <li>
        <a href="#cart">
          <FaCartShopping />
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
