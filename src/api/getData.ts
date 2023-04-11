import { Character } from '../helpers/types';

export async function getData(searchInput: string): Promise<Character[] | null> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?name=${searchInput}`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('getData response is not ok');
    }
    const result = await response.json();
    return result.results;
  } catch (e) {
    return null;
  }
}

export async function getCurrentCharacter(id: number): Promise<Character> {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    method: 'GET',
  });
  const result = await response.json();
  return result;
}
