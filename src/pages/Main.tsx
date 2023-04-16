import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { changeSearchResults, changeSearchInput } from '../redux/reduxSlices/searchSlice';
import { useGetCharactersQuery } from '../redux/reduxAPI';
import '../styles/Main.css';

import { Character } from '../helpers/types';
import { Search } from '../components/Search';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import { Progressing } from '../components/Progressing';

export function Main(): JSX.Element {
  const inputValueInStore = useAppSelector((state) => state.search.searchInput);
  const dispatch = useAppDispatch();
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const { isLoading, isError, data } = useGetCharactersQuery(inputValueInStore);

  useEffect(() => {
    dispatch(changeSearchResults(data));
  }, [data, dispatch]);

  function handleSearchSubmitOnKey(event: React.KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      dispatch(changeSearchInput(input.value));
    }
  }

  return (
    <>
      <Modal
        setCurrentCharacter={setCurrentCharacter}
        characterInfo={currentCharacter}
        active={isModalActive}
        setActive={setIsModalActive}
      />
      <h1 className="h1">Rick and Morty API</h1>
      <Search onSearchSubmit={handleSearchSubmitOnKey} />
      <div className="main">
        {isLoading ? (
          <Progressing />
        ) : !isError ? (
          data?.map((article: Character, index) => (
            <Card
              setCurrentCharacter={setCurrentCharacter}
              setActive={setIsModalActive}
              key={index}
              article={article}
            />
          ))
        ) : (
          <div>
            <b>No results found</b>
          </div>
        )}
      </div>
    </>
  );
}
