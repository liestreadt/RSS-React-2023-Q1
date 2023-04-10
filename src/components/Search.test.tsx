import React from 'react';
import { vi, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Search } from './Search';

describe('Search', () => {
  it('Renders search', () => {
    localStorage.setItem('inputValue', 'asd');
    render(<Search onSearchSubmit={vi.fn()} setSearchInput={vi.fn()} />);
    expect(screen.getByRole('button')).toHaveTextContent('Search:');
    expect(screen.getByRole('input')).toHaveTextContent('asd');
  });
});
