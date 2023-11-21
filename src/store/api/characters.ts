import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAllCharacters, ICharacter } from 'src/types';
import { BASE_URL } from 'src/utils/constants';

export const charactersApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllcharacters: builder.query<IAllCharacters, void>({
      query: () => '/character'
    }),
    getCharacterDetailsById: builder.query<ICharacter, number | null>({
      query: (id) => `/character/${id}`
    })
  }),
});

export const { useGetAllcharactersQuery, useGetCharacterDetailsByIdQuery } = charactersApi;
