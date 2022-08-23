import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../constants/productConstants";

//STATEMENT Reducer for Product List
//3 STATEMENTS Created
export const productListReducer = (state = { product: [] }, action) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true};
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

//STATEMENT Reducer for Product Details
//3 STATEMENTS Created
export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, product: []};
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}