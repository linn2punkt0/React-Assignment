import styled from "styled-components";
import React from "react";
import Tags from "../../components/tags/Tags.js";
import ImageContainer from "../../components/image-container/ImageContainer.js";

const StyledFeaturedBeer = styled.div`
  width: 94vw;
  height: 60vh;
  margin: 10px auto;
  color: black;
  font-size: 20px;
  background-color: white;
  border-radius: 10px;
  border: none;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;

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
    <StyledFeaturedBeer>
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
