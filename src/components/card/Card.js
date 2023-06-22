import React, { Fragment } from 'react'
import "./card.css"

function Card({ title, description, price, image }) {
  return (
    <Fragment>
        <div className='card-container'>
            <div className='card-image'>
                <img src={image} alt={title} />
            </div>
            <div className='card-description'>
                {description}
            </div>
            <div className='card-info'>
                <div className='card-price'>{price}$</div>
                <button className='addtocard-btn'>Add Cart</button>
            </div>
        </div> 
    </Fragment>
  )
}

export default Card
