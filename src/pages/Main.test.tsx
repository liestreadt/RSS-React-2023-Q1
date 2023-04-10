import React from 'react';
import { vi, describe, it } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';
import { render, screen } from '@testing-library/react';

const fetchMocker = createFetchMock(vi);

import { Main } from './Main';

describe('Main', () => {
  it('Renders title of the page', () => {
    render(<Main />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Rick and Morty API');
  });
});
