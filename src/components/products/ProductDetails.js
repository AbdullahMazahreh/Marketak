import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { allData } from "../../context/Context";

function ProductDetails(){
    const {products}=useContext(allData)
    const [details,setDetails]=useState()
    
    const params=useParams()
    
    return(
       
        
    <h2>helloooooo</h2>
    
    )
 }
 export default ProductDetails;
