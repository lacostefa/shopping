import React, {useContext} from "react";


///Components
import Product from "./Product";

///Context
import {ContextProducts} from "../context/ContextProductsProvider";

const Store = () => {

    const products  = useContext(ContextProducts);
    console.log(products)
    return (
        <div>
            {
                products.map((product )=> <Product key={product.id} productData={product}/>)
            }
        </div>
    )
}

export default Store;