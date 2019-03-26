import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  width: 92vw;
  margin: 10px auto;

  img {
    width: 100%;
  }
  h4 {
    color: #e7a61a;
    font-size: 25px;
    margin: 0;
    transform: rotate(-8deg);
    padding-bottom: 20px;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <img
        src="https://uploads-ssl.webflow.com/5b4c9b47bd74208a52f18519/5be5d66207b66f57589c1b89_brewdog-logo_white.png"
        alt="logo"
      />
      <h4>Get a random brew!</h4>
    </StyledLogo>
  );
};

export default Logo;
