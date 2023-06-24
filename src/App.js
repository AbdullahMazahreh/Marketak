import "./App.css";
import {useContext, useEffect} from "react";
import {Login, Register} from "./components/Index";
import { Navbar, Home } from "./components/Index";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { allData } from "./context/Context";

function App() {
  const { products, fetchImageSliderData, fetchProducts, fetchUsers, users } =
    useContext(allData);
  useEffect(() => {
    fetchImageSliderData();
  }, []);
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    fetchUsers();
  }, [users]);
  return (
    <>
        <div className="big-container">
          <Navbar />
        </div>
        <Routes>
          <Route path={'/Login'} element={<Login />}/>
          <Route path={'/Register'} element={<Register />}/>
        </Routes>
    </>
  );
}

export default App;
