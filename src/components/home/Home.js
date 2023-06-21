import React, { Fragment } from 'react'
import "./home.css"
import ImageSlider from '../imageslider/ImageSlider'
import Register from '../register/Register'

function Home() {
  return (
    <Fragment>
        <ImageSlider />
        <Register />
    </Fragment>
  )
}

export default Home
