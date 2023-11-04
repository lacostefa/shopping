import React, {useContext} from "react";
import {Link} from "react-router-dom";

///Context
import {CartContext} from "../../context/CartContextProvider";

///functions
import {shorten, isInCart, quantityCounter} from "../../helper/functions";

//Icons
import trashCart from "../../icons/trash.svg"

////Css
import "../../css/Product.scss";

const Product = ({productData}) => {
    const {state, dispatch} = useContext(CartContext);

    return (
        <div className="product-container">
            <img className="cardImage" src={productData.image} alt="product"/>
            <h3 className="title">{shorten(productData.title)}</h3>
            <p className="span-price">{productData.price} $</p>
            <div className="container-l-b">
                <Link className="details" to={`/products/${productData.id}`}>Details</Link>
                <div className="container-quantity">
                    {
                        quantityCounter(state, productData.id) > 1 &&
                        <button className="button-3-"
                                onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>
                    }

                    {
                        quantityCounter(state, productData.id) === 1 &&
                        <button className="button-3-"
                                onClick={() => dispatch({type: "REMOVE-ITEM", payload: productData})}>
                            <img className="trash" src={trashCart}
                                 alt="trashCart"/>
                        </button>
                    }

                    {
                        quantityCounter(state, productData.id) > 0 &&
                        <span className="counter">{quantityCounter(state, productData.id)}</span>
                    }

                    {
                        isInCart(state, productData.id) ?
                            <button className="button-3-"
                                    onClick={() => dispatch({type: "INCREASE", payload: productData})}>+
                            </button>
                            :
                            <button className="AddToCart"
                                    onClick={() => dispatch({type: "ADD-ITEM", payload: productData})}>Add to Cart
                            </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Product;