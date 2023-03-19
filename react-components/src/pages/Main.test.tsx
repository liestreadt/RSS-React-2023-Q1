import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main', () => {
  it('Renders title of the page', () => {
    render(<Main />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Wall Street Journal News');
  });
});
