import axios from 'axios'
import * as actionType from '../ReduxConstants/reduxConstants.jsx'

const URL='http://localhost:8000';
export const getProducts=()=>async(dispatch)=>{
    try {
       const {data} =await axios.get(`${URL}/products`);
        dispatch({type:actionType.GET_PRODUCTS_SUCCESS,payload:data});

    } catch (error) {
        dispatch({type:actionType.GET_PRODUCTS_FAILURE,payload:error.message});
    }
};

export const getProductDetails=(id)=>async(dispatch)=>{

    try {
        dispatch({type:actionType.GET_PRODUCT_DETAILS_LOADING})
       const {data} = await axios.get(`${URL}/product-details/${id}`)
        dispatch({type:actionType.GET_PRODUCT_DETAILS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionType.GET_PRODUCT_DETAILS_FAILURE,payload:error.response})
    }

};