import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // console.log(cart);

  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <div className="cart-data">
        <h4>Order Summary</h4>
        <p>Selected Items: {quantity}</p>
        <p>Total price: ${total}</p>
        <p>Total Shipping: ${shipping}</p>
        <p>Tax: {tax}</p>
        <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
      </div>
      <div className="cart-action-buttons">
        <Link to={'/orders'}> <button>Review Cart</button> </Link>
        <button >Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
