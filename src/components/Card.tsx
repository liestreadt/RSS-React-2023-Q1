import React, { Component } from 'react';
import '../styles/Card.css';

import { getDateFromResponse } from '../helpers/helperFunctions';
import { Article } from '../helpers/types';

export class Card extends Component<{ article: Article }, unknown> {
  render() {
    return (
      <div className="card">
        <div className="card__title">{this.props.article.title}</div>
        <div className="card__author">Author: {this.props.article.source.name}</div>
        <div className="card__publish">{getDateFromResponse(this.props.article.publishedAt)}</div>
        <div className="card__content">{this.props.article.content}</div>
        <img className="card__image" src={this.props.article.image} alt="image" />
      </div>
    );
  }
}
