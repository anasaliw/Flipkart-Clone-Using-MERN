import { Box, Button, Divider, styled, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'
import Countdown from 'react-countdown';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const clock_logo = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }       
  };

  const Container=styled(Box)`
  display:flex;
  height:50px;
  align-items:center;
  `
  const DealTitle=styled(Typography)`
    padding:10px 20px;
    font-size:18px;
    font-weight:600;
  `
  const Btn=styled(Button)`
  margin:0 20px 0 auto;
  `

  const Image=styled('img')({
    height:180,
    width:'auto',
    marginBottom:10,

  })



function Slides({products,show}) {
   

    return (
    <Box style={{background:'#FFF',margin: '5px 5px',borderRadius:4}}> 
        { 
        show &&
        <Container>
        <DealTitle>Deals of the day</DealTitle>
        <img style={{width:30,marginRight:10}} src={clock_logo} alt="clock" />
        <Countdown date={Date.now()+50400000} />
        <Btn variant='contained' >View All</Btn>
        </Container>
            }
        <Divider/>
        
        <Carousel responsive={responsive}
        autoPlaySpeed={2000}
        transitionDuration={1000}
        autoPlay={ true }
        infinite={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
            {
                products.map(product=>(
                  <Link to={`product-details/${product.id}`} style={{textDecoration:'none',color:'inherit'}}>
                    <Box style={{padding:'12px 20px', textAlign:'center'}}>
                        <Image src={product.url} alt="product-logos" />
                        <Typography style={{fontWeight:600}} >{product.title.shortTitle}</Typography>
                        <Typography style={{color:'green',fontSize:12}}>{product.discount}</Typography>
                        <Typography style={{color:'#212121',fontSize:13,opacity:.6}}>{product.tagline}</Typography>
                    </Box>
                    </Link>
                ))
            }



        </Carousel>


    </Box>
  )
}

export default Slides