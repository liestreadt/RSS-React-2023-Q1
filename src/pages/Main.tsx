import React, { useEffect, useState } from 'react';
import '../styles/Main.css';

import { getData } from '../api/getData';
import { Character } from '../helpers/types';
import { Search } from '../components/Search';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import { Progressing } from '../components/Progressing';

export function Main(): JSX.Element {
  const inputValueInLocalStorage = localStorage.getItem('inputValue');
  const [articles, setArticles] = useState<Character[] | null>(null);
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null);
  const [searchInput, setSearchInput] = useState<string>(inputValueInLocalStorage || '');
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    setIsFetching(true);
    getData(searchInput).then((data) => {
      setArticles(data);
      setIsFetching(false);
      console.log(data);
    });
  }, [searchInput]);

  function handleSearchSubmitOnKey(event: React.KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      setSearchInput(input.value);
      localStorage.setItem('inputValue', input.value);
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
      <Search setSearchInput={setSearchInput} onSearchSubmit={handleSearchSubmitOnKey} />
      <div className="main">
        {isFetching ? (
          <Progressing />
        ) : (
          articles?.map((article: Character, index) => (
            <Card
              setCurrentCharacter={setCurrentCharacter}
              setActive={setIsModalActive}
              key={index}
              article={article}
            />
          )) || (
            <div>
              <b>No results found</b>
            </div>
          )
        )}
      </div>
    </>
  );
}
