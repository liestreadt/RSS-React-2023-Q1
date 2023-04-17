import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import fetch from 'isomorphic-fetch';
import type { Character, ResponseOnNameFilter } from '../helpers/types';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/', fetchFn: fetch }),
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
