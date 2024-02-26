 
import React, { useState, useRef } from 'react';

import './SearchForm.css';
import { Button } from '../../elements/Button';

export const SearchForm = () => {
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
        placeholder="What do you want to watch?"
        ref={inputRef}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
      />

      <Button onClick={onSearch}>Search</Button>

      <p>Value: {searchValue}</p>
    </div>
  );
};