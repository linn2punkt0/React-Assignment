import React from "react";
import styled from "styled-components";

const StyledImageContainer = styled.div`
  height: 60vh;

  img {
    height: 100%;
    margin-bottom: 15px;
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
