import React, { useEffect } from "react";
import { getProductDetails } from "../Redux/Actions/productActions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { styled,Grid } from "@mui/material";
import LeftPicSection from "./LeftPicSection";
import RightDetailSection from "./RightDetailSection";
const Container=styled(Grid)`
  display:flex;
  margin:20px 20px;
  overflow:hidden;
`


function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.getSingleProduct);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, product, loading, id]);

  const LeftGrid=styled(Grid)(({theme})=>({
    marginBottom:20,

    [theme.breakpoints.down('md')]:{
      height:'50vh',
    }
  }))
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        product && Object.keys(product).length && 
       ( 
        <Container container>
          <LeftGrid item lg={4} md={4} sm={12} xs={12}>
            <LeftPicSection product={product} />
          </LeftGrid>
          <Grid item lg={8} md={6} sm={12} xs={12}>
            <RightDetailSection product={product}/>
          </Grid>
        </Container>
      )
      )}
    </>
  );
}

export default ProductDetails;
