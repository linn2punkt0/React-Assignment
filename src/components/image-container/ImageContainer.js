import React from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
  height: 50%;

  img {
    height: 100%;
  }
`;

const ImageContainer = props => {
  return (
    <StyledImageContainer>
      <img src={props.img} alt="bottle" />
    </StyledImageContainer>
  );
};

export default ImageContainer;
