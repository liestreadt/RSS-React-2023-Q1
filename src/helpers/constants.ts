import { Character } from './types';

export const defaultArticle: Character = {
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
