import React, { Fragment, useContext } from "react";
import "./productscard.css";
import { Link } from "react-router-dom";
import { allData } from "../../context/Context";

function ProductsCard({ title, description, price, image, id, item }) {
  const { currentCart, setCurrentCart } = useContext(allData);
  console.log(currentCart);
  return (
    <Fragment>
      <div className="products-card-container">
        <div className="products-card-image">
          <img src={image} alt={title} />
        </div>
        <Link to={`/products/${id}`}>
          <div className="products-card-title">{title}</div>
        </Link>

        <div className="products-card-description">{description}</div>

        <div className="products-card-info">
          <div className="products-card-price">{price}$</div>
          <button
            className="addtocardd-btn"
            onClick={() => setCurrentCart([...currentCart, item])}
          >
            Add Cart
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductsCard;
