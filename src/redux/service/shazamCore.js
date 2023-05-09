import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '95fafe356fmshb7b3e1d5312d02ap1f0e02jsn1df4e17fde05');
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
      return headers;
    },
  }),
  //  `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/v1/charts/world' }),
    getSongDetails:builder.query({query:({songid})=>`/v1/tracks/details?track_id=${songid}`}),
    getSongsByGenre:builder.query({query:(genre)=>`/v1/charts/genre-world?genre_code=${genre}`}),
    getSongsBySearch:builder.query({query:(searchTerm)=>`/v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
    getSongRelated:builder.query({query:({songid})=>`/v1/tracks/related?track_id=${songid}`}),
    getArtistDetails:builder.query({query:(artistId)=>`/v2/artists/details?artist_id=${artistId}`}),
    getSongsByCountry:builder.query({ query: (countryCode) =>`/v1/charts/country/?country_code=${countryCode}`})

  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery

} = shazamCoreApi;
