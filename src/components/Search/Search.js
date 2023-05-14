import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Octicon from 'react-octicon';
import { useDebounce } from '../../hooks/useDebounce';
import { useQueryFetch } from '../../hooks/useQueryFetch';
import { getGistForUser } from '../../services/gistService';
import { GistContext } from '../../context/GistContext';

export const Search = () => {
  const [searchValue, setSearchedValue] = useState('');
  const searchQuery = useDebounce(searchValue, 2000);
  const { setGistList } = useContext(GistContext);
  const { data: gistsData } = useQueryFetch(getGistForUser, searchQuery);

  const onGistSearch = ({ target: { value } }) => {
    setSearchedValue(value);
  };

  useEffect(() => {
    setGistList(gistsData);
  }, [gistsData]);

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          value={searchValue}
          onChange={onGistSearch}
          placeholder="Search Gists for the username"
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export default Search;
