import React, { useState } from 'react';

import './GenreSelect.css'

export const GenreSelect = ({genreList, genre}) => {
  const [genreValue, setGenreValue] = useState(genre);

  const onSelect = (event, genreName) => {
    setGenreValue(genreName);
  };

  return (
    <div className="genre">
      <ul>
        {genreList.map(genreName => <li key={genreName} name={genreName} className={genreValue === genreName ? 'active' : ''} onClick={(event) => onSelect(event, genreName)}>{genreName}</li>)} 
      </ul>
    </div>
  );
};