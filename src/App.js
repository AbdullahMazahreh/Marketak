import "./App.css";
import { Fragment, useContext, useEffect, useState } from "react";
import { Navbar } from "./components/Index";
import { BrowserRouter } from "react-router-dom";
import { ProductsList } from "./context/Context";
import axios from "axios";

function App() {

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
