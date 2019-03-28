import React from "react";
import Products from "./Products.js";
import styled from "styled-components";

const StyledProductPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const ProductPage = props => {
  console.log();
  return (
    <StyledProductPage>
      {props.allBeers.map(element => (
        <Products key={element.id} beer={element} />
      ))}
    </StyledProductPage>
  );
};

export default ProductPage;
