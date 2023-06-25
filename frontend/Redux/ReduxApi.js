import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:6253'; //Node Server

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  credentials:'same-origin', //Change to credentials:'include'
  prepareHeaders: (headers, { getState }) => 
  {
    /*Add Headers*/
    return headers
  }
});

export const ReduxApi = createApi({
  reducerPath : 'ReduxApi',
  baseQuery: baseQuery,
  endpoints: builder => ({})
})