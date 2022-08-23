import axios from "axios"
import {  CART_CLEAR_ITEMS } from "../constants/cardConstants";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS,
    ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, 
    ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS,
    ORDER_VIEW_REQUEST, ORDER_VIEW_SUCCESS, ORDER_VIEW_FAIL
   } from "../constants/orderConstants";
import { userActionLogout } from "./userActions";

//Create Order Action -> Create a order 
export const createOrderAction = (order) => async (dispatch, getState) => {
    try {

        //STATE: Request to Create Order
        dispatch({ type: ORDER_CREATE_REQUEST })
        const { userLoginState: {userData}, } = getState();

        const {data} = await axios.post(`/api/orders`, order ,{ headers:{ "Content-Type":"application/json", Authorization:`Bearer ${userData.token}`, } });

        //STATE: Order Created without problems
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
        //STATE: Order Clear cart items
        dispatch({ type: CART_CLEAR_ITEMS, payload: data });

        //ACTION: Remove local storage items (Remove all items from cart)
        localStorage.removeItem("cartItems");
    } 
    catch (error) {

        const message =
            error.response && error.response.data.ErrorMessage
            ? error.response.data.ErrorMessage
            : error.ErrorMessage;
        
        if (message === "Not authorized, token failed"){
            //ACTION: Logout the user if have a not authorized token
            dispatch(userActionLogout())
        }
        //STATE: Fail to create a Order
        dispatch({
            type:ORDER_CREATE_FAIL,
            payload: message,
                
        });
    }

}
//Order Details Action -> Show order information 
export const orderDetailsAction = (id) => async (dispatch, getState) => {
    try {
        //STATE: Request to get information from Order
        dispatch({ type: ORDER_DETAILS_REQUEST })
        const { userLoginState: {userData}, } = getState();

        const {data} = await axios.get(`/api/orders/${id}`, { headers:{ Authorization:`Bearer ${userData.token}`, } });

        //STATE: Success to get information from Order
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
    } 
    catch (error) {
        const message =
            error.response && error.response.data.ErrorMessage
            ? error.response.data.ErrorMessage
            : error.ErrorMessage;
        
        if (message === "Not authorized, token failed"){
            dispatch(userActionLogout())
        }
        dispatch({
            //STATE: Fail to get information from Order
            type:ORDER_DETAILS_FAIL,
            payload: message,
                
        });
    }

}

//Pay Order -> This update the order payment statement (is Paid or Not Paid)
export const orderPayAction = (orderID, paymentResult) => async (dispatch, getState) => {
    try {

        dispatch({ type: ORDER_PAY_REQUEST })
        const { userLoginState: {userData}, } = getState();

        const {data} = await axios.put(`/api/orders/${orderID}/pay`, paymentResult,{ headers:{ "Content-Type":"application/json", Authorization:`Bearer ${userData.token}`, } });

        dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
    } 
    catch (error) {
        const message =
            error.response && error.response.data.ErrorMessage
            ? error.response.data.ErrorMessage
            : error.ErrorMessage;
        
        if (message === "Not authorized, token failed"){
            dispatch(userActionLogout())
        }
        dispatch({
            type:ORDER_PAY_FAIL,
            payload: message,
                
        });
    }

}

//User Orders
export const orderViewAction = () => async (dispatch, getState) => {
    try {
        //STATE: Request to get information from Order 
        dispatch({ type: ORDER_VIEW_REQUEST })
        const { userLoginState: {userData}, } = getState();

        const {data} = await axios.get(`/api/orders/`, { headers:{ Authorization:`Bearer ${userData.token}`, } });

        //STATE: Success to get information from Order
        dispatch({ type: ORDER_VIEW_SUCCESS, payload: data });
    } 
    catch (error) {
        const message =
            error.response && error.response.data.ErrorMessage
            ? error.response.data.ErrorMessage
            : error.ErrorMessage;
        
        if (message === "Not authorized, token failed"){
            dispatch(userActionLogout())
        }
        dispatch({
            //STATE: Fail to get information from Order
            type:ORDER_VIEW_FAIL,
            payload: message,
                
        });
    }

}
