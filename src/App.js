import React, { useRef, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./components/About";
import Textbooks from "./components/Textbooks";
import Contacts from "./components/Contacts";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import "./styles/index.css";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const aboutRef = useRef(null);
  const textbooksRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const sectionRefs = {
      about: aboutRef,
      textbooks: textbooksRef,
      contacts: contactsRef,
    };
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header
            scrollToSection={scrollToSection}
            onCartClick={() => setIsCartOpen(true)}
          />
          <main>
            <Home />
            <About ref={aboutRef} id="about" />
            <Textbooks ref={textbooksRef} id="textbooks" />
            <Contacts ref={contactsRef} id="contacts" />
          </main>
          <Footer />
          <Modal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
            <Cart
              onClose={() => setIsCartOpen(false)}
              onProceedToCheckout={() => {
                setIsCartOpen(false);
                setIsConfirmationOpen(true);
              }}
            />
          </Modal>
          <Modal
            isOpen={isConfirmationOpen}
            onClose={() => setIsConfirmationOpen(false)}
          >
            <Confirmation onClose={() => setIsConfirmationOpen(false)} />
          </Modal>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
