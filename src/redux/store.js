import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './service/shazamCore';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]:shazamCoreApi.reducer,
    player: playerReducer,
   
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware)
});
