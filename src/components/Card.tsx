import React, { Dispatch } from 'react';
import { useGetSpecificCharacterQuery } from '../redux/reduxAPI';
import '../styles/Card.css';

import { Character } from '../helpers/types';

export function Card(props: {
  article: Character;
  setActive: Dispatch<React.SetStateAction<boolean>>;
  setCurrentCharacter: Dispatch<React.SetStateAction<Character | null>>;
}): JSX.Element {
  const { data } = useGetSpecificCharacterQuery(props.article.id);

  function handleCardClick(): void {
    props.setActive(true);
    if (data) props.setCurrentCharacter(data);
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
