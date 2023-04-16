import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import store from './redux/store';
import { App } from './App';

describe('App', () => {
  it('Renders not found', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/bad/route']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('404 Page Not Found!');
  });
});
