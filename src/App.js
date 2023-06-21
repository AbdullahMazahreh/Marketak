import "./App.css";
import { Fragment, useContext, useEffect, useState } from "react";
import { Navbar, Home } from "./components/Index";
import { BrowserRouter } from "react-router-dom";
import { allData } from "./context/Context";
import Register from "./components/register/Register";
import Login from "./components/login/login";

function App() {
  const { products, fetchProducts } = useContext(allData);
  useEffect(() => {
    fetchProducts();
  }, [products]);
  return (
    <Fragment>
      <BrowserRouter>
        <div className="big-container">
          <Navbar />
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
