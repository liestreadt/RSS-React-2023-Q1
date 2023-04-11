import { vi, expect, test } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';
import 'vitest-fetch-mock';
import { getCurrentCharacter, getData } from './getData';

const fetchMocker = createFetchMock(vi);

fetchMocker;

test('should return array of characters', async () => {
  const result = await getData('aa');
  expect(result).toBeTypeOf('object');
});

test('should return empty array', async () => {
  const result = await getData('qwerty123');
  expect(result).toBeNull();
});

test('should return correct character', async () => {
  const result = await getCurrentCharacter(266);
  expect(result).toEqual({
    id: 266,
    name: 'Piece of Toast',
    status: 'Alive',
    species: 'unknown',
    type: 'Bread',
    gender: 'Genderless',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Interdimensional Cable',
      url: 'https://rickandmortyapi.com/api/location/6',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/266.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/8',
      'https://rickandmortyapi.com/api/episode/17',
    ],
    url: 'https://rickandmortyapi.com/api/character/266',
    created: '2017-12-31T13:48:58.850Z',
  });
});

test('should return error that character not found', async () => {
  const result = await getCurrentCharacter(1.5);
  expect(result).toEqual({ error: 'Character not found' });
});
test('should return error that user must provide an id', async () => {
  const result = await getCurrentCharacter(NaN);
  expect(result).toEqual({ error: 'Hey! you must provide an id' });
});
