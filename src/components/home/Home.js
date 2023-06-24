import {React, Fragment}  from 'react'
import "./home.css"
// import ImageSlider from '../imageslider/ImageSlider'
// import Register from '../register/Register'
// import Login from '../login/login'
import { ImageSlider, Delivery, Featuredproducts, Testimonials } from "../Index"

function Home() {
  return (
    <Fragment>
        <ImageSlider />
        <Delivery />
        <Featuredproducts />
        <Testimonials />   
    </Fragment>
  );
}
export default Home;
