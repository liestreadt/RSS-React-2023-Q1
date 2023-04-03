import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('Renders not found', () => {
    render(
      <MemoryRouter initialEntries={['/bad/route']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('404 Page Not Found!');
  });
});
