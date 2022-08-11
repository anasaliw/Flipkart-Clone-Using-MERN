import express from 'express';
import { userDetails,userSignIn } from './controls/controller.js';
import { getProducts,getProductDetails } from './controls/product-Controller.js';

const route= express.Router();

//User Routes
route.post('/user-details',userDetails)
route.post('/login',userSignIn)

route.get('/products',getProducts);
route.get('/product-details/:id',getProductDetails)
export default route;