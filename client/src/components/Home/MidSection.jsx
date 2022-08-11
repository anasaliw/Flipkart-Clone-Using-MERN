import React from "react";
import { Grid,styled } from "@mui/material";
import { imageURL } from "../Constants/data";
const Wrapper=styled(Grid)`
  display:flex; 
  justify-content:center;
`
const Image=styled('img')(({theme})=>({
  
  marginTop:10,
  width:'100%',
  [theme.breakpoints.down('md')]:{
    height:250,
    objectFit:'cover'
      
  }
}))

function MidSection() {
  return (
    <>
      <Wrapper lg={12} sm={12} md={12} xs={12} container >
        {imageURL.map((image, index) => (
          <Grid lg={4} md={4} sm={12} xs={12}  item key={index}>
            <Image src={image} alt="" />
          </Grid>
        ))}
      </Wrapper>
    </>
  );
}

export default MidSection;
