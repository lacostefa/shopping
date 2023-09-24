import React, {createContext, useEffect, useState} from "react";

///Api
import {getProduct} from "../services/api";

export const ContextProducts = createContext();

const ContextProductsProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchIp = async () => {
            setProducts(await getProduct())
            console.log(products)
        }
        fetchIp()
    }, [])

    return (
        <div>
            <ContextProducts.Provider value={products}>
                {children}
            </ContextProducts.Provider>
        </div>
    )
}

export default ContextProductsProvider; 