import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('Renders whole app', () => {
    render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toBeInTheDocument();
  });
});
