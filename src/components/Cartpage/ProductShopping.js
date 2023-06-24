import React, { useState } from "react";
import "./Product.css";

const Product = ({ product, onDelete }) => {
  let [counter, setCounter] = useState(1);

  const [sum, setSum] = useState(0);
  const { id, price, image, description } = product;

  const HandelIncreasa = () => {
    if (counter > 0) {
      setCounter(++counter);
      setSum(counter * price);
    }
  };

  const HandelDecrice = () => {
    if (counter !== 1) {
      setCounter(--counter);
    }
  };

  return (
    <div className="container">
      <img src={image} />
      <p className="description-cart">{description}</p>
      <h4 className="price">{price}$</h4>
      <div className="wrap-increse">
        <div className="decreas" onClick={HandelDecrice}>
          -
        </div>
        <div className="conter">{counter}</div>
        <div className="increas" onClick={HandelIncreasa} id={id}>
          +
        </div>
      </div>
      <h4 className="price">${Math.round(price * counter * 100) / 100}</h4>

      <svg
        id={id}
        onClick={(e) => {
          onDelete(e);
        }}
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="13.4882"
          cy="13.4883"
          r="12.4882"
          fill="white"
          stroke="#CACDD8"
          stroke-width="2"
        />
        <path
          d="M9.44177 9.44183L18.2091 18.2092"
          stroke="#A2A6B0"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M18.2091 9.44183L9.44178 18.2092"
          stroke="#A2A6B0"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default Product;
