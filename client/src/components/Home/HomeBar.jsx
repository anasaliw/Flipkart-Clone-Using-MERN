import React from 'react'
import {Box,styled,Typography} from '@mui/material';
import {navData} from '../Constants/data'

function HomeBar() {
  
    const Container=styled(Box)(({theme})=>({
    overflow:'hidden',
    display:'flex',
    margin:'55px 5% 0 5%',
    justifyContent:'space-between',
    [theme.breakpoints.down('lg')]:{
        margin:0,
        overflow:'hidden',

    }


    }))
     

    const Image = styled(`img`)({
        width:65,
    })

    const Para=styled(Typography)`
    font-family:inherit;
    font-weight:600;
    `
  
  
    return (
    <Container>
        {
            navData.map(data=>(
                <Box key={data.url} style={{textAlign:'center', padding:'12px 8px' }} >

                <Image src={data.url} alt="nav-pics" />
                <Para>{data.text}</Para>

                </Box>
                ))
        }
      
    </Container>
  )
}

export default HomeBar
