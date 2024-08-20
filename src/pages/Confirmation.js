import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "../styles/Confirmation.css";

const Confirmation = ({ onClose }) => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the order data to your backend
    console.log("Order submitted:", { ...formData, cart });
    alert("Your quote request has been sent!");
    onClose();
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="confirmation">
      <h2>Confirm Your Order</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <p>
              {item.title} x {item.quantity}
            </p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="order-total">
          <h4>Total: ${total.toFixed(2)}</h4>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Your Address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Quote Request</button>
      </form>
    </div>
  );
};

export default Confirmation;
