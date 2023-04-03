import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Forms } from './Forms';

describe('Forms', () => {
  it('Renders title of the page', () => {
    render(<Forms />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Forms');
  });
});
