import React, {useContext} from "react";
import {Link} from "react-router-dom";

///Css
import "../../css/ShopCart.scss";

////Components
import Cart from "./Cart";

///Context
import {CartContext} from "../../context/CartContextProvider";

const ShopCart = () => {
    const {state, dispatch} = useContext(CartContext);

    return (
        <div className="container-flex">
            <div className="container-cartShop">
                {
                    state.selectedItems.map(item => <Cart key={item.id} data={item}/>)
                }
            </div>

            {
                state.itemsCounter > 0 &&
                <div className="total-pay">
                    <p><span>Total Items : </span>{state.itemsCounter}</p>
                    <p><span>Total Payments : </span> {state.total}$</p>

                    <div className="button-ch-cl">
                        <button className="checkOut" onClick={() => dispatch({type: "CHECKOUT"})}>CheckOut</button>
                        <button className="clear" onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                    </div>
                </div>
            }

            {
                state.checkOut && <div>
                    <h1>Checked out successfully</h1>
                    <Link className="a-fontWeight" to="/products">Buy More</Link>
                </div>
            }

            {
                !state.checkOut && state.itemsCounter === 0 &&
                <div>
                    <h1>Want to Buy?</h1>
                    <Link className="a-fontWeight" to="/products">Go to shop</Link>
                </div>
            }
        </div>
    )
}

export default ShopCart;