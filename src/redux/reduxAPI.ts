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
