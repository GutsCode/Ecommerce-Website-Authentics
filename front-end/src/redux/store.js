import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers.js";
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateReducer } from "./reducers/userReducers.js";
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderViewReducer } from "./reducers/orderReducers.js";
import { cartItemsReducer } from "./reducers/cartReducers.js";
import thunk from "redux-thunk";

const reducer = combineReducers({
    productListState : productListReducer,
    productDetailsState : productDetailsReducer,
    userLoginState : userLoginReducer,
    userRegisterState : userRegisterReducer,
    userDetailsState : userDetailsReducer,
    userUpdateState : userUpdateReducer,
    cartState : cartItemsReducer,
    orderCreateState: orderCreateReducer,
    orderDetailsState : orderDetailsReducer,
    orderPayState : orderPayReducer,
    userOrdersState : orderViewReducer,
});

//Save LocalStorage cartItems / If cartItems is empty Give [] -> Cart 
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

//Save LocalStorage userData / If userData is empty Give Null -> Login 
const UserDataFromLocalStorage = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : null;

//Save LocalStorage shippingAddress / If shippingAddress is empty Give {} -> shipping Address
const  shippingAddressFromLocalStorage = localStorage.getItem("shippingSettings")
    ? JSON.parse(localStorage.getItem("shippingSettings"))
    : {};



//Initial State
const initialState = {
    cartState: { cartItems: cartItemsFromLocalStorage, shippingSettings: shippingAddressFromLocalStorage },
    userLoginState: { userData: UserDataFromLocalStorage },
};

const middleWare = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;