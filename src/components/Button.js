import styled from "styled-components";

const Button = styled.button`
  min-width: 300px;
  max-width: 700px;
  height: 10vh;
  margin: 0 10px 10px 10px;
  padding: 10px 10px 6px 10px;
  color: white;
  font-family: "Expletus Sans", cursive;
  font-size: 25px;
  font-weight: 700;
  background: #e7a61a;
  border-radius: 10px;
  border: none;
  box-shadow: 5px 5px 0px 0px #242424;
  transition: 0.3s ease-in;
  z-index: 5;

  &:hover {
    background: #e7a61a;
    box-shadow: 4px 4px 0px 0px rgba(143, 43, 88, 1);
  }
`;

export default Button;
