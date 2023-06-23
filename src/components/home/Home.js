import React, { Fragment } from 'react'
import "./home.css"
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
