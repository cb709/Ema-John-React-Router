import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import("./ReviewProduct.css");

const ReviewProduct = ({ product, handleDelete }) => {
  const { id, img, name, price, quantity, shipping } = product;
  return (
    <div className="review-product">
      <div className="review-product-img">
        <img src={img} alt="" />
      </div>
      <div className="review-product-data">
        <div>
          <h2>{name}</h2>
          <div className="review-meta">
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div className="review-meta">
            <p>Shipping Charge: ${shipping}</p>
          </div>
        </div>
        <div>
          <button className="delete-btn">
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => handleDelete(id)}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewProduct;
