import React, { useState } from "react";

function Item({ name, category }) {
  let [inCart, setCart] = useState(false)

  function addToCart() {
    setCart(() => inCart = !inCart)
  }

  let cartClass = inCart ? "in-cart" : ""

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={ addToCart } className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
