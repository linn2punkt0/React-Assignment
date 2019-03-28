import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeaturedBeer from "./FeaturedBeer.js";

const StyledSingleProductPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SingleProductPage = props => {
  const [beer, setBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBeerById(props.id);
  }, []);

  const fetchBeerById = id => {
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then(response => response.json())
      .then(data => {
        setBeer(...data);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  };
  return (
    <StyledSingleProductPage>
      {isLoading && (
        <img
          src="https://www.brewdog.com/media/logo/default/brewdog-logo.png"
          alt="loading"
        />
      )}
      {beer && (
        <FeaturedBeer
          name={beer.name}
          tagline={beer.tagline}
          img={beer.image_url}
          description={beer.description}
          food={beer.food_pairing}
          bigSize
        />
      )}
    </StyledSingleProductPage>
  );
};

export default SingleProductPage;
