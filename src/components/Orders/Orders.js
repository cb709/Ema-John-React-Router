import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import "./Order.css";

const Orders = () => {
  const { savedCart } = useLoaderData();
  const [cartProducts, setCartProducts] = useState(savedCart);
  console.log(cartProducts);

  const handleDelete = (id) => {
    const reamining = cartProducts.filter((product) => product.id !== id);
    setCartProducts(reamining);
    removeFromDb(id);
  };
  const isOnOrderPage = true;

  // console.log(savedCart);
  return (
    <div className="container">
      <div className="shop-container">
        {cartProducts.length === 0 ? (
          <div className="review-products-container">
            No Products Added
            <br />
            Please Add Some From Shop.
          </div>
        ) : (
          <div className="review-products-container">
            {cartProducts.map((product) => (
              <ReviewProduct
                key={product.id}
                product={product}
                handleDelete={handleDelete}
              ></ReviewProduct>
            ))}
          </div>
        )}

        <div className="cart-container">
          <Cart cart={cartProducts} isOnOrderPage={isOnOrderPage}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
