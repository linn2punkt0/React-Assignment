import React from "react";
import styled from "styled-components";
import Logo from "./Logo.js";
import { Link } from "@reach/router";

const StyledNavbar = styled.div`
  width: 98vw;
  a {
    color: #e7a61a;
    text-decoration: none;
    font-weight: 700;
    font-size: 30px;
    margin: 0 10px;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 40px;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo />
      <div>
        {" "}
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
