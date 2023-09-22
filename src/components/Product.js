import React, {useContext} from "react";
import {Link} from "react-router-dom";


///Context
import {CartContext} from "../context/CartContextProvider";

///functions
import {shorten, isInCart, quantityCounter} from "../helper/functions";


//Icons
import trashCart from "../icons/trash.svg"

const [state, dispatch] = useContext(CartContext);

const Product = ({productData}) => {

    return (
        <div>
            <div>
                <img src={productData.image} alt="product"/>
            </div>
            <div>
                <h3>{shorten(productData.title)}</h3>
            </div>
            <div>
                <p>{productData.price} $</p>
            </div>
            <div>
                <Link to={`/product/${productData.id}`}>Details</Link>
            </div>
            <div>
                {quantityCounter(state, dispatch) > 1 &&
                    <button onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}

                {quantityCounter(state, dispatch) === 1 &&
                    <button onClick={() => dispatch({type: "REMOVE", payload: productData})}><img src={trashCart}
                                                                                                  alt="trashCart"/>
                    </button>}

                {
                    isInCart(state, productData.id) ?
                        <button onClick={() => dispatch({type: "INCENSE", payload: productData})}> +</button>
                        : <button onClick={() => dispatch({type: "ADD-ITEM", payload: productData})}>AddCart</button>
                }
            </div>
        </div>
    )
}

export default Product;