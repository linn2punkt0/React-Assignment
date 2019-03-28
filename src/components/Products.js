import styled from "styled-components";
import React from "react";
import { Link } from "@reach/router";

const StyledProducts = styled(Link)`
  width: auto;
  margin: 10px;
  font-size: 20px;
  background: white;
  color: black;
  border-radius: 10px;

  h4 {
    margin: 0;
    padding: 10px;
  }
  img {
    height: 30vh;
  }
`;

const Products = props => {
  return (
    <StyledProducts to={`/products/${props.beer.id}`}>
      <h4>{props.beer.name}</h4>
      <img src={props.beer.image_url} alt="product" />
    </StyledProducts>
  );
};

export default Products;
