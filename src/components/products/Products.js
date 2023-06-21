import React, { useContext } from 'react'
import { allData } from '../../context/Context'

function Products() {
    const {products} = useContext(allData)
  return (
    <div>
      {products.map((item) => {
        return <h1>{item.title}</h1>
      })}
    </div>
  )
}

export default Products
