import { useEffect, useState } from "react";
import "./AddProducts.css";
import axios from "axios";

function AddProducts() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");


  const createProduct = async () =>
    await axios.post("http://localhost:5001/products", {
      title,
      price,
      description,
      category
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h5>Add Product</h5>
        <label htmlFor="productTitle">Title</label>
        <input
          type="text"
          id="productTitle"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="productPrice">Price</label>
        <input
          type="number"
          id="productPrice"
          onChange={(e) => setPrice(e.target.value)}
        />
          <label htmlFor="productDescription">description</label>
        <input
          type="text"
          id="productDescription"
          onChange={(e) => setDescription(e.target.value)}
        />
          <label htmlFor="productCategory">category</label>
        <input
          type="text"
          id="productCategory"
          onChange={(e) => setCategory(e.target.value)}
        />

        <button className="add-product">Add Product</button>
      </form>
    </div>
  );
}

export default AddProducts;
