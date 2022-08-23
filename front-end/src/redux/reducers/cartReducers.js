import { CART_ADD_ITEM, CART_CLEAR_ITEMS, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_SETTINGS } from "../constants/cardConstants"

//STATEMENT Reducer for Cart
//4 STATEMENT  
export const cartItemsReducer = (state = { cartItems: [], shippingAddress: {} }, action) =>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.product === item.product)

            if(existItem)
            {
                return{...state, cartItems: state.cartItems.map((x) => 
                    x.product === existItem.product ? item: x)};
            } 
            else 
            {
                return{ ...state, cartItems: [...state.cartItems, item],};
            }
        case CART_REMOVE_ITEM:
            return{ ...state, cartItems: state.cartItems.filter((x) => x.product !== action.payload),};
        case CART_SAVE_SHIPPING_SETTINGS:
            return{ ...state, shippingSettings: action.payload,};
        case CART_CLEAR_ITEMS:
            return{ ...state, cartItems: []}
        default:
            return state;
    }


}