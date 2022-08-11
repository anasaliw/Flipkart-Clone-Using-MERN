import React from 'react'
import {Grid,Box,styled,Typography,Button, Divider} from '@mui/material'
import {useSelector} from 'react-redux';
import CartItems from './CartItems';
import CartPricing from './CartPricing';
import Empty from './Empty'

const Container=styled(Box)`
  margin:30px 100px;
  
`
const CartHeading=styled(Typography)`
  font-size:18px;
  font-weight:600;
  padding:20px 30px;
`
const ButtonContainer=styled(Box)`
  padding:16px 22px;
  background:#FFF;
  box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top:1px solid #fefefe;
`
const OrderBtn=styled(Button)`
  display:flex;
  margin-left:auto;
  background:#fb641b;
  color:#fff;
  width:250px;
  height:51px;
  border-radius:2px;
  : hover {
    background:#fb641b;
  } 
`

function ParentCart() {
const data =useSelector(state=>state.cart.cartItems);
  return (
    <>
    { 
    data.length > 0 ? (
    <Container>
     <Grid container >
            <Grid lg={8} md={8} sm={12} xs={12} item >
              <CartHeading style={{background:'#FFF'}} >My Cart ({data.length})</CartHeading>
              <Divider style={{padding:'none !important'}} />
              <CartItems data={data}/>
              
              <ButtonContainer>
              <OrderBtn> Place Order </OrderBtn>
              </ButtonContainer>
            
            </Grid>
            <Grid lg={4} md={4} sm={12} xs={12} item >
                <CartPricing data={data} />
            </Grid>
         </Grid>
      </Container>
    )
    : (<Empty/>)
    
  }
</>
  )
}

export default ParentCart