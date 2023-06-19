import "./App.css";
import { Fragment, useEffect, useState } from "react";
import { Navbar } from "./components/Index";
import { BrowserRouter } from "react-router-dom";
import { ProductsList } from "./context/Context";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001/products")
    .then((res) => setProducts(res.data))
  }, [products])
  return (
    <Fragment>
      <ProductsList.Provider value={products}>
        <BrowserRouter>
          <div className="big-container">
            <Navbar />
          </div>
        </BrowserRouter>
      </ProductsList.Provider>
    </Fragment>
  );
}

export default App;
