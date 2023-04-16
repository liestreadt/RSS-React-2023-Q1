import React from 'react';
import { Provider } from 'react-redux';
import { vi, describe, it } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';
import { render, screen } from '@testing-library/react';

const fetchMocker = createFetchMock(vi);

fetchMocker.enableMocks();

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
});
