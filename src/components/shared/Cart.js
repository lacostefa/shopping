import React, {useContext} from "react";

////Context
import {CartContext} from "../../context/CartContextProvider";

///Function
import {shorten} from "../../helper/functions";
////
import trashIcon from "../../icons/trash.svg";

const Cart = (props) => {

    const {dispatch} = useContext(CartContext);

    const {image, title, price, quantity} = props.data

    return (
        <div className="container-cart">
            <img className="img-product" src={image} alt="product"/>
            <div className="title-price">
                <h3 className="t-shorten">{shorten(title)}</h3>
                <p className="p-price">{price} $</p>
            </div>
            <div className="quantity">
                <span>{quantity}</span>
            </div>
            <div className="button-de-in-trash">
                {
                    quantity > 1 ?
                        <button className="DECREASE"
                                onClick={() => dispatch({type: "DECREASE", payload: props.data})}> - </button> :
                        <button className="REMOVE"
                                onClick={() => dispatch({type: "REMOVE-ITEM", payload: props.data})}>
                            <img
                                className="color-white" src={trashIcon}  alt="trash"
                            />
                        </button>
                }

                <button className="INCREASE"
                        onClick={() => dispatch({type: "INCREASE", payload: props.data})}> +
                </button>
            </div>
        </div>
    )
}

export default Cart;