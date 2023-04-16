import React, { useEffect, useRef } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { useAppSelector } from '../redux/hooks';
import { changeSearchInput } from '../redux/reduxSlices/searchSlice';

import '../styles/Search.css';

export function Search(props: {
  onSearchSubmit: React.KeyboardEventHandler<HTMLInputElement>;
}): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const lastSearchData = useAppSelector((state) => state.search.searchInput);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const input = inputRef.current;
    if (input && lastSearchData) input.value = lastSearchData;
  }, [lastSearchData]);

  return (
    <div className="search">
      <button
        onClick={() => {
          const input = inputRef.current;
          if (input) {
            dispatch(changeSearchInput(input.value));
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
