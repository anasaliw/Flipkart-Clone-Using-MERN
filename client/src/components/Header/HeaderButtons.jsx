import { Badge, Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DialogLogin from "../Dialog/DialogLogin";
import { useState, useContext } from "react";
import { DataContext } from "../ContextProvider/DataProvider";
import Profile from "./Profile";
import {Link} from 'react-router-dom'
import CartItems from "../Cart/CartItems";
import {useSelector} from 'react-redux'

const Cart = styled(Box)`
  display: flex;
`;
const Btn = styled(Button)`
background:#fff;
color:#2874f0;
padding:5px 40px;
text-transform:none;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;
: hover {
  background:white;
}
}
`;
const Container = styled(Box)(({theme})=>({
  display: 'flex',
  margin: '0 0 0 40px',
  alignItems : 'center',
  [theme.breakpoints.down('700')]:{
    flexDirection:'column',
    padding:'10px 10px',
    margin:'10px 10px',

  },
  '& > p , & > div ':{
  [theme.breakpoints.down('700')]:{
    margin:'10px 10px',
  },
  
}
}))

function HeaderButtons() {
 const {cartItems} = useSelector(state=>state.cart);

  // ! useState For Dialog Box....
  const [open, setOpen] = useState(false);

  const { account,setAccount} = useContext(DataContext);

  return (
    <Container>
      {account ? 
        <Profile account={account} setAccount={setAccount}/>
       : (
        <Btn variant="standard" onClick={() => setOpen(true)}>
          Login
        </Btn>
      )}
      <Typography style={{ width: 135,marginRight:20,marginLeft:20,fontWeight:600 }}>Become a seller</Typography>
      <Typography style={{marginRight:20,fontWeight:600}} >More</Typography>
      <Cart style={{marginRight:20,fontWeight:600}} >
      
        <Link to='/cart' style={{display:'flex',color:'inherit',textDecoration:'none'}}>
        <Badge badgeContent={cartItems?.length} color='secondary'>
        <ShoppingCartIcon />
        </Badge>
        <Typography style={{marginLeft:10}}>Cart</Typography>
        </Link>
      </Cart>

      <Box style={{ alignItems: "center" }}>
        <DialogLogin open={open} setOpen={setOpen} />
      </Box>
    </Container>
  );
}

export default HeaderButtons;
