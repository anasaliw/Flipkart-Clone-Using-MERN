import { styled,Box } from '@mui/material'
import React, { useEffect } from 'react'
import HomeBar from './HomeBar'
import SlidablePics from './SlidablePics'
import { useDispatch,useSelector } from 'react-redux'
import { getProducts } from '../Redux/Actions/productActions'
import Slides from './Slides'
import SideBanner from './SideBanner'
import MidSection from './MidSection'

const Container=styled(Box)`
padding:5px;
background:lightGray;
`
function Home() {
  //we use useSelector to get access to the data;
const products =  useSelector(state=>state.getProducts.products);

  //In Order to Call the function we have to use the useDispatch in redux...
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts());
  },[
    dispatch
  ]);
  return (
    <>
      <HomeBar/>
      <Container>
      <SlidablePics/>
      <SideBanner products={products} show={true}></SideBanner>
      <MidSection/>
      <Slides products={products} show={false} />
      <Slides products={products} show={false} />
      <Slides products={products} show={false} />
      <Slides products={products} show={false} />
      <Slides products={products} show={false} />
      <Slides products={products} show={false} />
      <Slides products={products} show={false} />
      </Container>
     </>
  )
}

export default React.memo(Home);
