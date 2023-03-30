import React from 'react';
import '../styles/Card.css';

import { getDateFromResponse } from '../helpers/helperFunctions';
import { Article } from '../helpers/types';

export function Card(props: { article: Article }): JSX.Element {
  return (
    <div className="card">
      <div className="card__title">{props.article.title}</div>
      <div className="card__author">Author: {props.article.source.name}</div>
      <div className="card__publish">{getDateFromResponse(props.article.publishedAt)}</div>
      <div className="card__content">{props.article.content}</div>
      <img className="card__image" src={props.article.image} alt="image" />
    </div>
  );
}
