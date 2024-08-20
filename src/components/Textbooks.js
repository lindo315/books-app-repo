import React, { forwardRef, useState } from "react";
import { useCart } from "../context/CartContext";
import mockBooks from "../data/mockBooks.js";
import "../styles/Textbooks.css";

const Textbooks = forwardRef((props, ref) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(null);

  const categories = [
    "All",
    ...new Set(mockBooks.map((book) => book.category)),
  ];

  const filteredBooks =
    selectedCategory === "All"
      ? mockBooks
      : mockBooks.filter((book) => book.category === selectedCategory);

  const handleAddToCart = (book) => {
    addToCart(book);
    setAddedToCart(book.id);
    setTimeout(() => setAddedToCart(null), 2000); // Reset after 2 seconds
  };

  return (
    <section className="textbooks" ref={ref}>
      <h2>Explore Our Textbooks</h2>
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="books-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.cover} alt={book.title} className="book-cover" />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p className="book-price">${book.price.toFixed(2)}</p>
            <button
              className={`add-to-cart-btn ${
                addedToCart === book.id ? "added" : ""
              }`}
              onClick={() => handleAddToCart(book)}
            >
              {addedToCart === book.id ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Textbooks;
