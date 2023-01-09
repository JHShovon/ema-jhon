import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
  // console.log(props);
  // console.log(props.index);
  const { name, img, url, seller, stock, price } = props.product;
  // console.log(name);
  return (
    <div className="product-item">
      <span className="product-number">{props.index + 1}</span>
      <div className="product-image-block">
        <a href={url} className="product-link">
          <img className="product-image" src={img} alt={name} />
        </a>
      </div>
      <div className="product-content">
        <h3 className="product-name">
          <a href={url}>{name}</a>
        </h3>

        <ul className="product-info">
          <li>Seller: {seller}</li>
          <li>Price: {price}</li>
          <li>Only {stock} items left, order soon</li>
        </ul>

        <button
          className="product-cart-btn"
          onClick={() => {
            props.handleAddCart(props.product);
          }}
        >
          <FontAwesomeIcon icon={faCartPlus} /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
