import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function Header({ scrollToSection, onCartClick }) {
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      scrollToSection(sectionId);
    }
  };

  const isActive = (sectionId) => {
    return (
      location.hash === `#${sectionId}` ||
      (location.pathname === "/" && !location.hash && sectionId === "about")
    );
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Briljante Books Logo"
              className="logo-img"
            />
          </Link>
        </div>
        <nav className="navbar-menu">
          <ul>
            <li className="navbar-item">
              <button
                onClick={() => handleScrollToSection("about")}
                className={`navbar-link ${isActive("about") ? "active" : ""}`}
              >
                About Us
              </button>
            </li>
            <li className="navbar-item">
              <button
                onClick={() => handleScrollToSection("textbooks")}
                className={`navbar-link ${
                  isActive("textbooks") ? "active" : ""
                }`}
              >
                Textbooks
              </button>
            </li>
            <li className="navbar-item">
              <button
                onClick={() => handleScrollToSection("contacts")}
                className={`navbar-link ${
                  isActive("contacts") ? "active" : ""
                }`}
              >
                Contacts
              </button>
            </li>
            <li className="navbar-item">
              <button onClick={onCartClick} className="navbar-link cart-logo">
                <FaShoppingCart />
                {totalItems > 0 && (
                  <span className="cart-count">{totalItems}</span>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
