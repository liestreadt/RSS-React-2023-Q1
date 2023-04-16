import React from 'react';
import { Provider } from 'react-redux';
import { vi, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Search } from './Search';
import store from '../redux/store';

describe('Search', () => {
  it('Renders search', () => {
    render(
      <Provider store={store}>
        <Search onSearchSubmit={vi.fn()} />
      </Provider>
    );
    expect(screen.getByRole('button')).toHaveTextContent('Search:');
    expect(screen.getByTestId('searchInputTestId')).toHaveValue('');
  });
});
