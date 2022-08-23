import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, 
         PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } 
         from "../constants/productConstants";
         
import axios from "axios";

//List Action -> Show products
export const listProduct = () => async(dispatch) =>{
    try {
        //STATE: Resquest Products
        dispatch({type:PRODUCT_LIST_REQUEST})

        //Grab the Products Data from API
        const {data} = await axios.get("/api/get/products");

        //STATE: Success Products Data Grab from API
        dispatch({type:PRODUCT_LIST_SUCCESS, payload: data })

    } catch (error) {
         //STATE: Fail to load Products Data from API
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.ErrorMessage
                ? error.response.data.ErrorMessage
                : error.ErrorMessage,
        });
    }
};

//Single Product Action -> Show product by ID
export const singleProduct = (id) => async(dispatch) =>{
    try {
        //STATE: Resquest Product ID
        dispatch({type:PRODUCT_DETAILS_REQUEST})

        //Grab the Product ID Data from API
        const {data} = await axios.get(`/api/get/products/${id}`);

        //STATE: Success Products Data Grab from API
        dispatch({type:PRODUCT_DETAILS_SUCCESS, payload: data })

    } catch (error) {
         //STATE: Fail to load Product ID Data from API
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.ErrorMessage
                ? error.response.data.ErrorMessage
                : error.ErrorMessage,
        });
    }
};
