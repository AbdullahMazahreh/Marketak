import React, { Fragment } from 'react'
import "./card.css"
import { Link } from 'react-router-dom'

function Card({ title, description, price, image ,id}) {
  return (
    <Fragment>
        <Link to={`/products/${id}`} className='card-container'>
            <div className='card-image'>
                <img src={image} alt={title} />
            </div>
            <div className='card-description'>
                {description}
            </div>
            <div className='card-info'>
                <div className='card-price'>{price}$</div>
                <button className='addtocardd-btn'>Add Cart</button>
            </div>
        </Link> 
    </Fragment>
  )
}

export default Card
