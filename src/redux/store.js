import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const campersConfig = {
  key: 'campers',
  storage,
};

 export const store = configureStore({
  reducer: {
   campers: persistReducer( campersConfig,campersReducer),
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}),});

export const persistor = persistStore(store);