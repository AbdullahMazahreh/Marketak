import { createContext, useState } from "react";
import axios from "axios";

export const allData = createContext({});

export function Provider({children}){
    const [products, setProducts] = useState([])
    const [imageSliderData, setImageSliderData] = useState([])
    const [users, setUsers] = useState([])
    const [isSignedIn, setIsSignedIn] = useState(false);
    const fetchImageSliderData = () => {
        axios.get("http://localhost:5001/imageSliderData%22")
        .then((res) => setImageSliderData(res.data))
    }
    const fetchProducts = () => {
        axios.get("http://localhost:5001/products%22")
        .then((res) => setProducts(res.data))
    }
    const fetchUsers = () => {
        axios.get("http://localhost:5001/users%22")
        .then((res) => setUsers(res.data))
    }


    const valueToshare = {
        setProducts,
        fetchImageSliderData,
        products,
        imageSliderData,
        users,
        isSignedIn,
        setIsSignedIn,
        fetchProducts,
        fetchUsers
    }
    return (
        <allData.Provider value={valueToshare}>
            {children}
        </allData.Provider>
    )
}