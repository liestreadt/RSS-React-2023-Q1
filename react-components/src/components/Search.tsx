import React, { Component } from 'react';

import '../styles/Search.css';

export class Search extends Component<unknown, unknown> {
  private inputRef: React.RefObject<HTMLInputElement>;
  constructor(props: unknown) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount(): void {
    const input = this.inputRef.current;
    const inputValueInLocalStorage = localStorage.getItem('inputValue');
    if (input && inputValueInLocalStorage) input.value = inputValueInLocalStorage;
  }

  componentWillUnmount(): void {
    const input = this.inputRef.current;
    if (input) localStorage.setItem('inputValue', input.value);
  }

  render() {
    return (
      <div className="search">
        <button className="search__button">Search: </button>
        <input ref={this.inputRef} id="searchInput" className="search__input" placeholder="🔍︎" />
      </div>
    );
  }
}
