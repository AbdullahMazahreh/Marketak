import "./App.css";
import { Fragment, useContext, useEffect } from "react";
import { Navbar } from "./components/Index";
import { BrowserRouter } from "react-router-dom";
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
