import React from 'react'
import Slides from './Slides'
import {Box,styled} from '@mui/material'
function SideBanner({products , show}) {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    const Component=styled(Box)`
        display:flex;
        width:100%;
    `
        
    
    const LeftContainer=styled(Box)(({theme})=>({
        width:'83%',
        [theme.breakpoints.down('md')]:{
            width:'100%'
        }

    }))
    
    const RightContainer=styled(Box)(({theme})=>({
        height:'345px',
        width:'17%',
        background:'#FFFF',
        textAlign:'center',
        padding:'5px',
        marginTop:'5px',
        borderRadius:'4px',
        [theme.breakpoints.down('md')]:{
            display:'none',
        }
        
    }))
    
    const Image=styled('img')({
        width:'217px',
        paddingTop:'5px'
        
    })
    return (
    <Component>
        <LeftContainer>
            <Slides styled products={products} show={true} />
        </LeftContainer>

        <RightContainer>
            <Image src={adURL} alt="furniture" />
        </RightContainer> 
    </Component>
  )
}

export default SideBanner