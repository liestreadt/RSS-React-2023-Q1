import { Character } from '../helpers/types';

export async function getData(searchInput: string): Promise<Character[]> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?name=${searchInput}`, {
      method: 'GET',
    });
    const result = await response.json();
    return result.results;
  } catch (e) {
    console.warn(e);
    return [];
  }
}

export async function getCurrentCharacter(id: number): Promise<Character | null> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      method: 'GET',
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.warn(e);
    return null;
  }
}
