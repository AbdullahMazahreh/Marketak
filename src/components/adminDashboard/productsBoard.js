import { useContext, useEffect } from "react";
import { allData } from "../../context/Context";
import axios from "axios";

function ProductsBoard() {
const {products , fetchProducts} = useContext(allData) ;

useEffect(()=>{
fetchProducts()
}, [])


const deleteProduct = (productId)=>{
    axios.delete(`http://localhost:5001/products/${productId}`)
    .then((res)=>{console.log(res)})
}

  return (
  <>
    <h1>Products Page</h1>

    <button>Add New Product</button>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Operation</th>
        </tr>
    </thead>
    <tbody>
    {products.map((product)=>{
        return(
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
                <button onClick={()=>deleteProduct(product.id)}>Delete</button>
                <button>view</button>
                <button>Edit</button>
            </td>
        </tr>
        )
    })}
     
    </tbody>
</table>
  </>
  );
}

export default ProductsBoard;
