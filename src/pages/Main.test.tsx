import React from 'react';
import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../redux/store';

import { Main } from './Main';

describe('Main', () => {
  it('Renders title of the page', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Rick and Morty API');
  });
  it('Renders cards', async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    const cardContainer = await screen.findByText('Rick Sanchez');
    expect(cardContainer).toBeInTheDocument();
  });
  it('draw modal window', async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    const cardImage = (await screen.findByText('Rick Sanchez')).nextSibling;
    if (cardImage) {
      fireEvent.click(cardImage);
      const modal = screen.getByTestId('modalTestId');
      expect(modal).toBeInTheDocument();
    }
  });
});
