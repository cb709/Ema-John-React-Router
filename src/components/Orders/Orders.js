import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import "./Order.css";

const Orders = () => {
  const { savedCart } = useLoaderData();
  const [cartProducts, setCartProducts] = useState(savedCart);

  const handleDelete = (id) => {
    const reamining = cartProducts.filter(product => product.id !== id);
    setCartProducts(reamining);
    removeFromDb(id);
  }

  // console.log(savedCart);
  return (
    <div className="shop-container">
      <div className="review-products-container">
        {cartProducts.map((product) => (
          <ReviewProduct key={product.id} product={product} handleDelete={handleDelete}></ReviewProduct>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cartProducts}></Cart>
      </div>
    </div>
  );
};

export default Orders;
