import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS,
         ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, 
         ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_RESET, ORDER_PAY_SUCCESS,
         ORDER_VIEW_REQUEST, ORDER_VIEW_SUCCESS, ORDER_VIEW_FAIL, ORDER_VIEW_RESET
        } from "../constants/orderConstants";

//STATEMENT Reducer Create Order
//4 STATEMENTS Created
export const orderCreateReducer = (state = {}, action) => {
    switch (action.type){
        case ORDER_CREATE_REQUEST:
            return { loading: true};
        case ORDER_CREATE_SUCCESS:
            return { loading: false, success: true, orderData: action.payload };
        case ORDER_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_CREATE_RESET:
            return {}
        default:
            return state;
    }   
};

//STATEMENT Reducer Order information
//3 STATEMENTS Created
export const orderDetailsReducer = (state = {loading: true, orderItems: [], shippingSettings: {}}, action) => {
    switch (action.type){
        case ORDER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ORDER_DETAILS_SUCCESS:
            return { loading: false, orderData: action.payload };
        case ORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }   
};

//STATEMENT Reducer Order Pay
//4 STATEMENTS Created
export const orderPayReducer = (state = {}, action) => {
    switch (action.type){
        case ORDER_PAY_REQUEST:
            return { loading: true};
        case ORDER_PAY_SUCCESS:
            return { loading: false, success: true};
        case ORDER_PAY_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_PAY_RESET:
            return {}
        default:
            return state;
    }   
};

//STATEMENT Reducer User Orders 
//4 STATEMENTS Created
export const orderViewReducer = (state = { ordersData: [] }, action) => {
    switch (action.type){
        case ORDER_VIEW_REQUEST:
            return { loading: true};
        case ORDER_VIEW_SUCCESS:
            return { loading: false, ordersData: action.payload};
        case ORDER_VIEW_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_VIEW_RESET:
            return {ordersData:[]}
        default:
            return state;
    }   
};