import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { NotFound } from './NotFound';

describe('NotFound', () => {
  it('Renders title of the page', () => {
    render(<NotFound />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('404 Page Not Found!');
  });
});
