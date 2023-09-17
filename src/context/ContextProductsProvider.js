import React, {createContext, useEffect, useState} from "react";

///Api
import {getProduct} from "../services/api";

const contextProducts = createContext();

const ContextProduct = ({children}) => {

    const [products, setProducts] = useState({})

    useEffect(() => {
        const fetchIp = async () => {
            setProducts(await getProduct())
        }
        fetchIp()
    }, [])

    return (
        <div>
            <contextProducts.Provider value={products}>
                {children}
            </contextProducts.Provider>
        </div>
    )
}

;