import "./productsBoard.css";
import { Route, Routes, Link } from "react-router-dom";
import ProductsBoard from "./productsBoard";
import AddProducts from "./AddProducts";

function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <div className="dash-leftside">
        <div className="dash-content-container">
          <div className="dash-name">MARKETAK</div>

          <button className="dash-leftside-button">About Us</button>
        </div>
      </div>
      <div>
        {/* <Link to= "/addProducts">Add new Product</Link> */}
        <Routes>
          <Route path="/addProducts" element={<AddProducts />}></Route>
          <Route path="/" element={<ProductsBoard />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;
