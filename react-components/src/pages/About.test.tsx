import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { About } from './About';

describe('About', () => {
  it('Renders title of the page', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About Us');
  });
});
