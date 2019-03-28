import styled from "styled-components";
import React from "react";
import Tags from "./Tags.js";
import ImageContainer from "./ImageContainer.js";

const StyledFeaturedBeer = styled.div`
  max-width: 700px;
  height: ${props => (props.bigSize ? "auto" : "60vh")};
  margin: 10px;
  color: black;
  font-size: 20px;
  background-color: white;
  border-radius: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;

  @media screen and (min-width: 800px) {
  }

  h2 {
    margin: 10px;
  }
  h4 {
    margin: 0 10px 10px 10px;
  }
  p {
    font-size: 20px;
    margin: 10px 5px 10px 5px;
  }
`;

const FeaturedBeer = props => {
  return (
    <StyledFeaturedBeer bigSize={props.bigSize}>
      <h2>{props.name}</h2>
      <h4>{props.tagline}</h4>
      <ImageContainer img={props.img} />
      <p>{props.description}</p>
      <h4>Pair with:</h4>
      <Tags food={props.food} />
    </StyledFeaturedBeer>
  );
};

export default FeaturedBeer;
