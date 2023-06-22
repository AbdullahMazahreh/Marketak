import React, { useContext, useEffect, useState } from "react";
import { allData } from "../../context/Context";
import Card from "../card/Card";
import "./product.css";
import ProductDetails from "./ProductDetails";
import { Route, Routes, Link } from "react-router-dom";
import axios from "axios";

function Products() {
  const[categories,setCategories]=useState([])
  const { products } = useContext(allData);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPage = 4;
  const lastIndex = recordsPage * currentPage;
  const firstIndex = lastIndex - recordsPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

   useEffect(()=>{
    
     axios.get(`http://localhost:5001/categories`)
   .then((res) => setCategories(res.data))
   },[])

 

  function nextPage() {
    if (currentPage !== npage) setCurrentPage(currentPage + 1);
  }
  function prePage() {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  }
  function changPage(id) {
    setCurrentPage(id);
  }

  return (
    <div className="products-container">
      <div className="products-categories">
         {
          categories.map((cat)=>{
            return   <button key={cat} className="products-btn">{cat}</button>
          })
        }
         
      </div>

      <div className="products-main">
        <div className="product-leftside">
          <div className="product-items">
            {records.map((item) => {
              return (
                <>
                  <div className="product-card">
                    <Card
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <ul className="product-pagination">
            <li className="page-item">
              {
                <a href="#" className="page-link" onClick={prePage}>
                  Prev
                </a>
              }
            </li>
            {numbers.map((n, i) => {
              return (
                <li className="page-item" key={i}>
                  <a
                    href="#"
                    className={`page-item ${currentPage === n ? "active" : ""}`}
                    onClick={() => changPage(n)}
                  >
                    {n}
                  </a>
                </li>
              );
            })}
            <li className="page-item">
              {
                <a href="#" className="page-link" onClick={nextPage}>
                  Next
                </a>
              }
            </li>
          </ul>
        </div>
        <div className="product-right">
          <input type="search" id="product-search" />
          <button className="products-btn">clik</button>
          <button className="products-btn">clik</button>
          <button className="products-btn">clik</button>
          <button className="products-btn">clik</button>
        </div>
      </div>
      
    </div>
  );
}

export default Products;
