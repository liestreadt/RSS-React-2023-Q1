import React, { Dispatch } from 'react';
import '../styles/Card.css';

import { Character } from '../helpers/types';
import { getCurrentCharacter } from '../api/getData';

export function Card(props: {
  article: Character;
  setActive: Dispatch<React.SetStateAction<boolean>>;
  setCurrentCharacter: Dispatch<React.SetStateAction<Character | null>>;
}): JSX.Element {
  function handleCardClick(): void {
    props.setActive(true);
    getCurrentCharacter(props.article.id).then((data) => props.setCurrentCharacter(data));
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
