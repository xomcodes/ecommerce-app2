import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="mydiv">
      <div className="myborder">
        <img
          className="small"
          aria-hidden
          src={product.image}
          alt={product.name}
        ></img>
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <div>
          <button onClick={onAdd}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
