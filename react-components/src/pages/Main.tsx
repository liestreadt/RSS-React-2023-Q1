import React, { Component } from 'react';
import '../styles/Main.css';

import { getData } from '../api/getData';
import { Article } from '../helpers/types';
import { Search } from '../components/Search';
import { Card } from '../components/Card';

export class Main extends Component<unknown, { articles: Article[] }> {
  state = {
    articles: [],
  };

  componentDidMount(): void {
    getData().then((data) => {
      this.setState({ articles: data });
    });
  }

  render() {
    return (
      <>
        <Search />
        <div className="main">
          {this.state.articles.map((article: Article, index) => (
            <Card key={index} article={article} />
          ))}
        </div>
      </>
    );
  }
}
