import React from "react";

function Cart(props) {
  // Total add to cart product
  const cart = props.cart;

  // Product price
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    totalPrice = totalPrice + product.price;
  }

  // Format Numver
  const formatNumber = (nums) => {
    const precition = nums.toFixed(2);
    return Number(precition);
  };

  // Shipping Cost
  let shippingCost = 0;
  if (totalPrice > 35) {
    shippingCost = 0;
  } else if (totalPrice > 15) {
    shippingCost = 4.5;
  } else if (totalPrice > 0) {
    shippingCost = 7;
  }

  // Vat + tax
  const vat = totalPrice * 0.15;

  // Total Cost
  const totalCost = totalPrice + shippingCost + vat;

  return (
    <div>
      <h4>Order Summery: {cart.length} </h4>
      <h4>Product Price: {formatNumber(totalPrice)}</h4>
      <p>
        <small>Shipping Cost: {formatNumber(shippingCost)}</small>
      </p>
      <p>
        <small>Vat + Tax:{formatNumber(vat)} </small>
      </p>
      <hr />
      <h3>Total Cost: {formatNumber(totalCost)} </h3>
    </div>
  );
}

export default Cart;
