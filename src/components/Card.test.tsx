import React from 'react';
import { Provider } from 'react-redux';
import { vi, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import store from '../redux/store';
import { Card } from './Card';
import { Character } from '../helpers/types';

const defaultArticle: Character = {
  id: 1,
  name: 'SampleName',
  status: 'SampleStatus',
  species: 'SampleSpecies',
  type: 'SampleType',
  gender: 'SampleGender',
  origin: {
    name: 'SampleOriginName',
    url: 'SampleOriginUrl',
  },
  location: {
    name: 'SampleLocationName',
    url: 'SampleLocationUrl',
  },
  image: 'SampleLocationImage',
  episode: ['SampleEpisodeOne', 'SampleEpisodeTwo', 'SampleEpisodeTwelve'],
  url: 'SampleUrl',
  created: 'SampleCreated',
};

describe('Card', () => {
  it('Renders card', () => {
    render(
      <Provider store={store}>
        <Card article={defaultArticle} setActive={vi.fn()} setCurrentCharacter={vi.fn()} />
      </Provider>
    );
    expect(screen.getByAltText('image')).toBeVisible();
    expect(screen.getByText(/SampleName/i)).toHaveTextContent('SampleName');
  });
});
