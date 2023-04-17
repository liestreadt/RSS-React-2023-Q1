import React from 'react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import store from '../redux/store';
import { Forms } from './Forms';

describe('Forms', () => {
  it('Renders title of the page', () => {
    render(
      <Provider store={store}>
        <Forms />
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Forms');
  });
});
