 
import React, { useState, useRef } from 'react';

import { Button } from '../../elements/Button';

import './SearchForm.css';

export const SearchForm = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(null);

  const onSearch = () => {
    setSearchValue(inputRef.current.value);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchValue(event.target.value);
    }
  };

  const onFocus = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='search-form'>
      <h2>Search Form:</h2>

      <input
        type="search"
        placeholder={ props.infoText }
        ref={inputRef}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
      />

      <Button onClick={onSearch}>Search</Button>

      <p>Value: {searchValue}</p>
    </div>
  );
};