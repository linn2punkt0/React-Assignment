import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  width: 60vw;
  height: 10vh;
  margin: 10px;
  color: white;
  font-family: "Expletus Sans", cursive;
  font-size: 20px;
  background: #e7a61a;
  border-radius: 10px;
  border: none;
  box-shadow: 5px 5px 0px 0px #242424;
  transition: 0.3s ease-in;
  /* background-color: ${props => props.inverted && "lightblue"}; */
  color: ${props => props.inverted && "black"};

  &:hover {
    background: #e7a61a;
    box-shadow: 4px 4px 0px 0px rgba(143, 43, 88, 1);
  }
`;

Button.propTypes = {
  inverted: PropTypes.bool
};

export default Button;
