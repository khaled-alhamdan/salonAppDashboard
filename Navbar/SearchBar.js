import React from "react";
import styled from "styled-components";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search"
      onChange={(event) => props.setSearch(event.target.value)}
    />
  );
};

export default SearchBar;

const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 250px;
  outline: none;
  border: none;
`;
