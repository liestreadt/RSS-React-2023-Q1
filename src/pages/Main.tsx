import React, { useEffect, useState } from 'react';
import '../styles/Main.css';

import { getData } from '../api/getData';
import { Article } from '../helpers/types';
import { Search } from '../components/Search';
import { Card } from '../components/Card';

export function Main(): JSX.Element {
  const [articles, setArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    getData().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <>
      <h1 className="h1">Wall Street Journal News</h1>
      <Search />
      <div className="main">
        {articles?.map((article: Article, index) => (
          <Card key={index} article={article} />
        ))}
      </div>
    </>
  );
}
