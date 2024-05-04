import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./camperSlice.js";
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
  whitelist: ['favorites'],
};

 export const store = configureStore({
  reducer: persistReducer( campersConfig,campersReducer),
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}),});

export const persistor = persistStore(store);