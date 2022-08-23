import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, 
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, 
    USER_LOGOUT, 
    USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_RESET,
    USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL
   } from "../constants/userConstants";

import axios from "axios";
import { CART_REMOVE_ITEM } from "../constants/cardConstants";

//Login Action -> Login user in website
export const userActionLogin = (email,password) => async (dispatch) =>{
    try {

        //STATE: Resquest UserData
        dispatch({ type: USER_LOGIN_REQUEST })

        //Grab the UserData from API
        const {data} = await axios.post("/api/user/login", { email, password }, { headers:{ "Content-Type":"application/json", } });

        //STATE: Success UserData Grab from API
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        //Storage the Data in JSON (Local Side)
        localStorage.setItem("userData", JSON.stringify(data));

    } 
    catch (error) {
        //STATE: Fail to load UserData from API
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.ErrorMessage
                ? error.response.data.ErrorMessage
                : error.ErrorMessage,
        });
    }
}

//REGISTER Action -> Register user in api
export const userActionRegister = (name,email,password) => async (dispatch) =>{
    try {

        //STATE: Resquest Register
        dispatch({ type: USER_REGISTER_REQUEST })

        //Send the RegisterData from API
        const {data} = await axios.post("/api/user/register", { name, email, password }, { headers:{ "Content-Type":"application/json", } });

        //STATE: Success RegisterData sended from API
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        //Storage the Data in JSON (Local Side)
        localStorage.setItem("userData", JSON.stringify(data));

    } 
    catch (error) {
        //STATE: Fail to send RegisterData from API
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.ErrorMessage
                ? error.response.data.ErrorMessage
                : error.ErrorMessage,
        });
    }
}

//Details Action -> Show User Information
export const userActionDetails = (id) => async (dispatch,getState) =>{
    try {

        //STATE: Resquest userData
        dispatch({ type: USER_DETAILS_REQUEST })
        const { userLoginState: {userData}, } = getState();

        //Grab the userData from API
        const {data} = await axios.get(`/api/user/${id}`, { headers:{ Authorization:`Bearer ${userData.token}`, } });

        //STATE: Success userData Grab from API
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } 
    catch (error) {
        //STATE: Fail to send userData from API
        const message =
            error.response && error.response.data.ErrorMessage
            ? error.response.data.ErrorMessage
            : error.ErrorMessage;
        
        if (message === "Not authorized, token failed"){
            dispatch(userActionLogout())
        }
        dispatch({
            type:USER_DETAILS_FAIL,
            payload: message,
                
        });
    }
}

//Update Action -> Update User Profile 
export const userActionUpdate = (user) => async (dispatch,getState) =>{
    try {

        //STATE: Resquest Update userData
        dispatch({ type: USER_UPDATE_REQUEST })
        const { userLoginState: {userData}, } = getState();

        //Grab the userData from API
        const {data} = await axios.put(`/api/user/profile`, user ,{ headers:{ "Content-Type":"application/json", Authorization:`Bearer ${userData.token}`, } });

        //STATE: Success Update userData send for API & Storage the Data
        dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        localStorage.setItem("userData", JSON.stringify(data));
    } 
    catch (error) {
        //STATE: Fail to send userData from API
        const message =
            error.response && error.response.data.ErrorMessage
            ? error.response.data.ErrorMessage
            : error.ErrorMessage;
        
        if (message === "Not authorized, token failed"){
            dispatch(userActionLogout())
        }
        dispatch({
            type:USER_UPDATE_FAIL,
            payload: message,
                
        });
    }
}

//Logout Action -> Logout user from website
export const userActionLogout = () => (dispatch) => {
    localStorage.removeItem("userData");
    localStorage.removeItem("cartItems");
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })
    dispatch({ type: CART_REMOVE_ITEM})
    document.location.href="/login"
}