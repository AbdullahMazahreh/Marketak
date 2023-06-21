import React, { Fragment } from 'react'
import "./home.css"
import ImageSlider from '../imageslider/ImageSlider'
import Delivery from '../delivery/Delivery'
import Featuredproducts from '../featuredproducts/Featuredproducts'
import Testimonials from '../testimonials/Testimonials'

function Home() {
  return (
    <Fragment>
        <ImageSlider />
        <Delivery />
        <Featuredproducts />
        <Testimonials />
    </Fragment>
  )
}

export default Home
