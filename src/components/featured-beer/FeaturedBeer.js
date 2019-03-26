import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import Tags from "../../components/tags/Tags.js";
import ImageContainer from "../../components/image-container/ImageContainer.js";

const StyledFeaturedBeer = styled.div`
  width: 96vw;
  height: 85vh;
  margin: auto;
  color: black;
  font-size: 20px;
  background-color: white;
  border-radius: 10px;
  border: none;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.75);
  transition: 0.3s ease-in;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin: 10px;
  }
  h4 {
    margin: 10px;
  }
  p {
    font-size: 15px;
  }
`;

// StyledFeaturedBeer.propTypes = {
//   beer: PropTypes.array
// };

const FeaturedBeer = props => {
  return (
    <StyledFeaturedBeer>
      <h2>{props.name}</h2>
      <h4>{props.tagline}</h4>
      <ImageContainer img={props.img} />
      <p>{props.description}</p>
      {/* <ul>
        {props.food.map(item => (
          <Tags tag={item} />
        ))}
      </ul> */}
    </StyledFeaturedBeer>
  );
};

export default FeaturedBeer;
