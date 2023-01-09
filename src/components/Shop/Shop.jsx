import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import productsData from "../../fakeData/products.json";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
function Shop() {
  const first10 = productsData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddCart = (products) => {
    console.log("Product Added", products);
    const newCart = [...cart, products];
    setCart(newCart);
  };

  return (
    <div>
      <h1>Shop Page</h1>

      <div className="product-container">
        <div className="product-list">
          {products.map((eachProduct) => {
            return (
              <Product
                product={eachProduct}
                key={eachProduct.key}
                handleAddCart={handleAddCart}
              />
            );
          })}
        </div>

        <div className="sidebar-cart">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
