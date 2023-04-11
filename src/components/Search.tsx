import React, { Dispatch, useEffect, useRef } from 'react';

import '../styles/Search.css';

export function Search(props: {
  onSearchSubmit: React.KeyboardEventHandler<HTMLInputElement>;
  setSearchInput: Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    const inputValueInLocalStorage = localStorage.getItem('inputValue');
    if (input && inputValueInLocalStorage) input.value = inputValueInLocalStorage;
  }, []);

  return (
    <div className="search">
      <button
        onClick={() => {
          const input = inputRef.current;
          if (input) {
            props.setSearchInput(input.value);
            localStorage.setItem('inputValue', input.value);
          }
        }}
        className="search__button"
      >
        Search:{' '}
      </button>
      <input
        ref={inputRef}
        onKeyDown={props.onSearchSubmit}
        data-testid="searchInputTestId"
        id="searchInput"
        className="search__input"
        placeholder="🔍︎"
      />
    </div>
  );
}
