import React, {useContext} from "react";

////Components
import Cart from "./Cart";

///Context
import {CartContext} from "../../context/CartContextProvider";

const ShopCart = () => {
    const {state, dispatch} = useContext(CartContext);

    return (
        <div>
            <div>
                {
                    state.selectedItems.map(item => <Cart key={item.id} data={item}/>)
                }
            </div>
            <div>
                {
                    state.itemsCounter > 0 && <div>
                        <span>Total Items:{state.itemsCounter}</span>
                        <span>Total Payments:{state.total}</span>
                    </div>
                }
                <div>
                    <button onClick={() => dispatch({type: "CHECKOUT"})}>CheckOut</button>
                    <button onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default ShopCart;