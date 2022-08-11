import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../Constants/data';
import {styled} from '@mui/material';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }       
  };

  const Image=styled('img')(({theme})=>({
    height:280,
    width:'100%',
    objectFit:'cover',
    [theme.breakpoints.down('md')]:{
      objectFit:'cover',
      height:180,
    } 
  }));


function SlidablePics() {
  return (
    <>
    <Carousel
    autoPlaySpeed={2000}
    transitionDuration={1000}
    responsive={responsive}
    autoPlay={ true }
    infinite={true}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    
    >
        {
            bannerData.map(data=>(
                <Image key={data.id} src={data.url} alt="" />
            ))

            }

    </Carousel>

    </>
  )
}

export default SlidablePics