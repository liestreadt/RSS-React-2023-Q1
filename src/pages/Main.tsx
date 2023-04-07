import React, { useEffect, useState } from 'react';
import '../styles/Main.css';

import { getData } from '../api/getData';
import { Character } from '../helpers/types';
import { Search } from '../components/Search';
import { Card } from '../components/Card';

export function Main(): JSX.Element {
  const inputValueInLocalStorage = localStorage.getItem('inputValue');
  const [articles, setArticles] = useState<Character[] | null>(null);
  const [searchInput, setSearchInput] = useState<string>(inputValueInLocalStorage || '');

  useEffect(() => {
    getData(searchInput).then((data) => {
      setArticles(data);
    });
  }, [searchInput]);

  function handleSearchSubmit(event: React.KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      setSearchInput(input.value);
    }
  }

  return (
    <>
      <h1 className="h1">Wall Street Journal News</h1>
      <Search onSearchSubmit={handleSearchSubmit} />
      <div className="main">
        {articles?.map((article: Character, index) => (
          <Card key={index} article={article} />
        ))}
      </div>
    </>
  );
}
