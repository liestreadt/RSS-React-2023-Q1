import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Character, ResponseOnNameFilter } from '../helpers/types';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (build) => ({
    getCharacters: build.query<Character[], string>({
      query: (name: string) => `character?name=${name}`,
      transformResponse: (response: ResponseOnNameFilter) => response.results,
    }),
    getSpecificCharacter: build.query<Character, number>({
      query: (id: number) => `character/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetSpecificCharacterQuery } = charactersApi;

// export async function getData(searchInput: string): Promise<Character[] | null> {
//   try {
//     const response = await fetch(`https://rickandmortyapi.com/api/character?name=${searchInput}`, {
//       method: 'GET',
//     });
//     if (!response.ok) {
//       throw new Error('getData response is not ok');
//     }
//     const result = await response.json();
//     return result.results;
//   } catch (e) {
//     return null;
//   }
// }

// export async function getCurrentCharacter(id: number): Promise<Character> {
//   const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
//     method: 'GET',
//   });
//   const result = await response.json();
//   return result;
// }
