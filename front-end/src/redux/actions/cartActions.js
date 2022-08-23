import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_SETTINGS } from "../constants/cardConstants";
import axios from "axios"

//Add Item to Card Action -> Add products to card (used ID) 
export const addToCartAction = (id, qty, size) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/get/products/${id}`);

    //STATE: ADD ITEM TO CARD 
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            thumbnailUrl: data.thumbnailUrl,
            name: data.name,
            modelName: data.modelName,
            price: data.price,
            countInStock: data.countInStock,
            qty,
            size,
        }});
    //SAVE all information in Local Storage
    localStorage.setItem("cartItems", JSON.stringify(getState().cartState.cartItems))
}

//Remove Item from Card Action -> Remove products from card (used ID) 
export const removeFromCardAction = (id) => (dispatch,getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cartState.cartItems))
}

//Save Shipping Information Action -> Save all information from shipping -> this gonna help in Order 
export const saveShippingSettingsAction = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_SETTINGS,
        payload: data,
    })

    localStorage.setItem("shippingSettings", JSON.stringify(data))
}

