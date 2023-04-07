import React, { useEffect, useRef } from 'react';

import '../styles/Search.css';

export function Search(props: {
  onSearchSubmit: React.KeyboardEventHandler<HTMLInputElement>;
}): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    const inputValueInLocalStorage = localStorage.getItem('inputValue');
    if (input && inputValueInLocalStorage) input.value = inputValueInLocalStorage;
    return () => {
      if (input) localStorage.setItem('inputValue', input.value);
    };
  }, []);

  return (
    <div className="search">
      <button className="search__button">Search: </button>
      <input
        ref={inputRef}
        onKeyDown={props.onSearchSubmit}
        id="searchInput"
        className="search__input"
        placeholder="🔍︎"
      />
    </div>
  );
}
