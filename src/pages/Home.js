import React from "react";

function Home({ scrollToSection, textbooksRef }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
      }}
    >
      <div className="hero-content">
        <div className="hero-text">
          <p className="welcome fade-in">Welcome!</p>
          <h1 className="fade-in">Briljante Books</h1>
          <h2 className="fade-in">
            Discover our wide variety of FAL interactive textbooks and resources
          </h2>
          <button
            onClick={() => scrollToSection(textbooksRef)}
            className="start-button pulse"
          >
            Start
          </button>
        </div>
        <div className="hero-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/books.png`}
            alt="Stack of books"
            className="fade-in"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
