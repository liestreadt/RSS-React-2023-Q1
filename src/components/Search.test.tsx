import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Search } from './Search';

describe('Search', () => {
  it('Renders search', () => {
    render(<Search />);
    expect(screen.getByRole('button')).toHaveTextContent('Search:');
  });
});
