import React from "react";
import styled from "styled-components";

const StyledTags = styled.ul`
  font-size: 18px;
  padding: 0;
  margin: 0;
  padding-inline-start: 0;
  margin-block-start: 0;
  display: block;

  li {
    list-style: none;
    margin: 2px;
    padding: 5px;
  }
`;

const Tags = props => {
  return (
    <StyledTags>
      {props.food.map(item => (
        <li key={item}>{item}</li>
      ))}
    </StyledTags>
  );
};

export default Tags;
