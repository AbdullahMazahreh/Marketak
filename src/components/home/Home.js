import React, { Fragment } from 'react'
import "./home.css"
import ImageSlider from '../imageslider/ImageSlider'
import Register from '../register/Register'
import ProductsBoard from '../adminDashboard/productsBoard'

function Home() {
  return (
    <Fragment>
        {/* <ImageSlider /> */}
        <Register />
        <ProductsBoard/>
    </Fragment>
  )
}

export default Home
