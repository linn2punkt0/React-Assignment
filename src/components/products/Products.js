import styled from "styled-components";
import React from "react";
import ImageContainer from "../../components/image-container/ImageContainer.js";

const StyledProducts = styled.div`
  width: 60vw;
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
  console.log(props.beer);
  return (
    <StyledProducts>
      <h4>{props.beer.name}</h4>
      <img src={props.beer.image_url} alt="image" />
    </StyledProducts>
  );
};

export default Products;
