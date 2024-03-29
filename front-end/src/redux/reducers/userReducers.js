import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, 
         USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, 
         USER_LOGOUT, 
         USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_RESET,
         USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL
        } from "../constants/userConstants";

//STATEMENT Reducer for login
//4 STATEMENTS Created
export const userLoginReducer = (state = {}, action) => {
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return { loading: true};
        case USER_LOGIN_SUCCESS:
            return { loading: false, userData: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }   

};

//STATEMENT Reducer for register
//3 STATEMENTS Created
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type){
        case USER_REGISTER_REQUEST:
            return { loading: true};
        case USER_REGISTER_SUCCESS:
            return { loading: false, userData: action.payload };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }   
};


//STATEMENT Reducer for user profile information
//4 STATEMENTS Created
export const userDetailsReducer = (state = { userData: {} }, action) => {
    switch (action.type){
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true};
        case USER_DETAILS_SUCCESS:
            return { loading: false, userData: action.payload };
        case USER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case USER_DETAILS_RESET:
            return { userData: {} }
        default:
            return state;
    }   
};

//STATEMENT Reducer for update user profile information
//3 STATEMENTS Created
export const userUpdateReducer = (state = {}, action) => {
    switch (action.type){
        case USER_UPDATE_REQUEST:
            return { loading: true};
        case USER_UPDATE_SUCCESS:
            return { loading: false, success: true, userData: action.payload };
        case USER_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }   
};