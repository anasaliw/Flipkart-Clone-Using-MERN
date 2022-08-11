import {Box, Typography,styled,Divider } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Container=styled(Box)`
  margin-left:20px;
  background:#fff;
  & > div,& > p {
    color:#878787;
    font-size:10px;
    & > p {
      margin-bottom:20px;
    }
  }
`
const Title=styled(Box)`
  padding:21.5px 30px;
`
const Price=styled(Box)`
  float:right;
  color:black;
`
function CartPricing({data}) {
  const [price,setPrice]=useState(0)
  const [discount,setDiscount]=useState(0)
  useEffect(()=>{
    discounting()
  },[data])

//   const totalAmount = () => {
//     let price = 0, discount = 0;
//     console.log(data);
//     data.map(item => {
//         price += item.price.mrp
//         discount += (item.price.mrp - item.price.cost) 
//     })
//     setPrice(price);
//     setDiscount(discount);
// }

  const discounting=()=>{

    let mrp=0,discounted=0;
    data.map(product=>{

      mrp += product.price.mrp;
      discounted += (product.price.mrp-product.price.cost)
  })
  setPrice(mrp);
  setDiscount(discounted)

  }

  return (
    <Container>
      
      <Title>
      <Typography style={{color:'#878787', fontSize:16, fontWeight:600}}>PRICE DETAILS</Typography>
      </Title>
      <Divider/>

      <Box style={{padding:"20px 30px"}}>
      
      <Typography>Price ( {data.length} item )
      <Price component='span'> Rs {price} </Price>
      </Typography>

      <Typography>Discount
      <Price component='span'> Rs -{discount} </Price>
      </Typography>
      
      <Typography>Delivery Charges
      <Price component='span'> Rs 40 </Price>
      </Typography>
      <Divider/>
      <Typography variant='h5' >Total Amount
      <Price component='span'> {price-discount + 40} </Price>
      </Typography>

      <Typography style={{color:'#26A541',marginTop:20 }}>You will save Rs{discount-40} on this order</Typography>
      </Box>

    </Container>
  )
}

export default CartPricing