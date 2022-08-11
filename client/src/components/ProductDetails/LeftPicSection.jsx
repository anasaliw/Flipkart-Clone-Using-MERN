import React from 'react'
import {Box,Button,styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addToCart } from '../Redux/Actions/CartActions';
import { useState } from 'react';


const Image=styled('img')(({theme})=>({
    maxWidth:'95%',
    width:'auto',
    padding:'20px 10px',
    textAlign:'center',
    height:'350px',
    objectFit:'cover',
    [theme.breakpoints.down('md')]:{
        height:250,
         objectFit:'cover'

    }
    
}))

const LeftContainer=styled(Box)`
    text-align:center;
    display:flex,
    flex-direction:column,
    padding:20px,
    height:500px,
`

const AddBtn=styled(Button)`
    background:#FF9F00;
    color:#FFF;
    padding:18px 8px;
    font-weight:600;
    height:56px;
    width:150px;
    margin-top:4px;
    margin-right:5px;
`

const BuyBtn=styled(Button)`
    background:#FB641B;
    color:#FFF;
    padding:18px 8px;
    font-weight:600;
    height:56px;
    width:150px;
    margin-top:4px;
    
`


function LeftPicSection({product}) {
    const navigate=useNavigate();
   const dispatch= useDispatch();
   const [quantity,setQuantity]=useState(1)
const addCart=()=>{
    dispatch(addToCart(product.id,quantity));
    navigate('/cart');
}

  return (
    <LeftContainer style={{background:'#fff'}}>
        <Image src={product.detailUrl} alt="" />
        <Box style={{margin:'10px 0px 70px 0px'}} >
        <AddBtn onClick={()=>addCart()} variant='contained' startIcon={<ShoppingCartIcon/>}>Add to cart</AddBtn>
        <BuyBtn variant='contained' startIcon={<FlashOnIcon/>}>Buy now</BuyBtn>
        </Box>
    </LeftContainer>
  )
}

export default LeftPicSection