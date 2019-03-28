import React from "react";
import FeaturedBeer from "./FeaturedBeer.js";
import styled from "styled-components";
import Button from "./Button.js";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomePage = props => {
  return (
    <StyledHomePage>
      {props.beer !== "" && (
        <FeaturedBeer
          name={props.beer.name}
          tagline={props.beer.tagline}
          img={props.beer.image_url ? props.beer.image_url : props.standardImg}
          description={props.beer.description}
          food={props.beer.food_pairing}
        />
      )}
      <Button onClick={props.fetchRandomBeer}>Get another beer!</Button>
    </StyledHomePage>
  );
};

export default HomePage;
