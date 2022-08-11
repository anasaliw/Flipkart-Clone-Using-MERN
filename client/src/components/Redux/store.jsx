import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { getProductDetailsReducer, getProductsReducer } from './Reducers/getProductsReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { cartReducer } from './Reducers/CartReducers';
 
const reducer=combineReducers({
    getProducts:getProductsReducer,
    getSingleProduct:getProductDetailsReducer,
    cart:cartReducer
});



const middleware=[thunk];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;