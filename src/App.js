import "./App.css";
import { Fragment, useContext, useEffect, useState } from "react";
import { Navbar, Home } from "./components/Index";
import { Routes, Route } from "react-router-dom";
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
        <div className="big-container">
          <Navbar />
        </div>
        <Routes>
          <Route path={'/Login'} element={<Login />}/>
          <Route path={'/Register'} element={<Register />}/>
        </Routes>
    </Fragment>
  );
}

export default App;
