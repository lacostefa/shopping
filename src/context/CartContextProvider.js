import React, {useReducer} from "react";

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkOut: false
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD-ITEM":
            if (!!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                        ...action.payload,
                        quantity: 1,
                        checkOut: false
                    }
                )
                return {
                    ...state,
                    selectedItems: [...state.selectedItems]
                }
            }
        case "REMOVE-ITEM":
            const newSelectedItems=state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems]
            }
        case "INCREASE":
            

    }

}

const CartContextProvider = () => {

    const [state, disptach] = useReducer(cartReducer, initialState);

    return (
        <div></div>
    )
}

export default CartContextProvider