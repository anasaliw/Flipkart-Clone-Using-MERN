import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { addEllipse } from "./utils";
import ButtonGroup from "./ButtonGroup";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/Actions/CartActions";
const Image = styled("img")({
  height: 200,
  width: "auto",
});

const Container = styled(Box)`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  background: #fff;
`;
const RightContainer = styled(Box)`
  display: flex;
  margin-bottom: 10px;
`;

function CartItems({ data }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Container>
      {data.map((product) => (
        <RightContainer key={product.id}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={product.url} alt="logos" />
            <ButtonGroup />
          </Box>

          <Box style={{ marginLeft: 30 }}>
            <Typography>{addEllipse(product.title.longTitle)}</Typography>
            <shortTitle>
              Seller:RetailNet &nbsp;
              <img src={fassured} style={{ height: 20 }} alt="" />
            </shortTitle>
            <Typography style={{ marginTop: 10 }}>
              <span style={{ fontSize: 18, fontWeight: 600 }}>
                Rs {product.price.cost}
              </span>{" "}
              &nbsp;
              <span style={{ color: "#878787", fontSize: 13 }}>
                <strike>Rs{product.price.mrp}</strike>
              </span>
              &nbsp;&nbsp;
              <span style={{ color: "#26A541", fontWeight: 600 }}>
                {product.price.discount} Off
              </span>
            </Typography>
            <Button
              onClick={() => handleRemove(product.id)}
              style={{
                color: "black",
                fontWeight: 600,
                marginTop: "50px",
                display: "flex",
              }}
            >
              Remove
            </Button>
          </Box>
        </RightContainer>
      ))}
    </Container>
  );
}

export default CartItems;
