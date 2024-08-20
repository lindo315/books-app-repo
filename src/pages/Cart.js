import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

const Cart = ({ onClose, onProceedToCheckout }) => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="cart-item-cover"
                />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>{item.author}</p>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <div className="cart-item-actions">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
                    />
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={onProceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
