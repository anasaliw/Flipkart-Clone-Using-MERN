import React from 'react'
import {Box,Typography,styled,Divider,Button} from '@mui/material'

const Container=styled(Box)`
  margin: 20px 120px;
  background: #FFF;
`
const Title=styled(Typography)`
  padding: 20px 30px;
  font-weight:600;
  `
const LoginBtn=styled(Button)`

    background:#fb641b;
    color:#fff;
    width:250px;
    height:51px;
    border-radius:2px;
    : hover {
      background:#fb641b;
    } 
`
const Image=styled('img')`
  height:200px;
  width:auto;
`
const Component=styled(Box)`
    text-align:center;
    padding: 50px 0;
`
function Empty() {
  const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  return (
    <Container>
      <Title>My Cart</Title>
      <Divider/>

      <Component >
      <Image src={imgurl} alt="emptyLogo" />
      <Typography style={{fontWeight:600,margin:"10px 0px"}}>Missing Cart Items?</Typography>
      <Typography style={{fontSize:14,color:'#878787',margin:'10px 0px'}}  >Login to see the items you added previously</Typography>
      <LoginBtn variant='contained' >Login</LoginBtn>
      </Component>

    </Container>
  )
}

export default Empty