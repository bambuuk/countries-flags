import React from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;
  background-color: var(--colors-ui-base);

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;
const Input = styled.input.attrs({
  type: "text",
  placeholder: "Search for a country",
})`
  margin-left: 1rem;
  border: none;
  outline: none;
  background-color: var(--colors-ui-base);
  color: var(--color-text);
  width: 100%;
`;

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};

export default Search;
// 30.42
