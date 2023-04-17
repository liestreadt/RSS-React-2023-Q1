import React from 'react';
import { vi, describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import * as reduxHooks from 'react-redux';

import { Search } from './Search';

vi.mock('react-redux');

const spyDispatch = vi.spyOn(reduxHooks, 'useDispatch');

describe('Search', () => {
  it('Renders search', () => {
    spyDispatch.mockResolvedValue(vi.fn());

    render(<Search onSearchSubmit={vi.fn()} />);

    expect(screen.getByRole('button')).toHaveTextContent('Search:');
    expect(screen.getByTestId('searchInputTestId')).toHaveValue('');
  });
  it('should dispatch actions', () => {
    const dispatch = vi.fn();
    spyDispatch.mockReturnValue(dispatch);

    render(<Search onSearchSubmit={vi.fn()} />);

    fireEvent.click(screen.getByRole('button'));
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
