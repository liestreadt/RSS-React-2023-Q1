import React from 'react';
import '../styles/Card.css';

import { Character } from '../helpers/types';

export function Card(props: { article: Character }): JSX.Element {
  function handleCardClick(): void {
    console.log(props.article.name);
  }

  return (
    <div className="card">
      <div className="card__title">{props.article.name}</div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={props.article.image}
        alt="image"
      />
    </div>
  );
}
