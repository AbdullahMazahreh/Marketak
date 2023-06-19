import React, { useContext } from 'react'
import { ProductsList } from '../../context/Context'

function Products() {
    const products = useContext(ProductsList)
  return (
    <div>
      {products.map((item) => {
        return <h1>{item.title}</h1>
      })}
    </div>
  )
}

export default Products
