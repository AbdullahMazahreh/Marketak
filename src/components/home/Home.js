import React, { Fragment } from 'react'
import "./home.css"
import ImageSlider from '../imageslider/ImageSlider'
import Delivery from '../delivery/Delivery'
import Featuredproducts from '../featuredproducts/Featuredproducts'

function Home() {
  return (
    <Fragment>
        <ImageSlider />
        <Delivery />
        <Featuredproducts />
    </Fragment>
  )
}

export default Home
