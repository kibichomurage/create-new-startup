import { configureStore } from '@reduxjs/toolkit'
import { AnalyticsReducerSlice } from '../Pages/AnalyticsPage/Redux/AnalyticsReducer';
import { ReduxApi } from './ReduxApi';
export default configureStore({
  reducer: 
  {
    AnalyticsReducer : AnalyticsReducerSlice.reducer,
    [ReduxApi.reducerPath] : ReduxApi.reducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(ReduxApi.middleware)


})