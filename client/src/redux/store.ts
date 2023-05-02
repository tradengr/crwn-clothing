import { configureStore, Middleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './rootReducer';

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
}

const persistConfig: ExtendedPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === 'development' && logger
].filter((middleware): middleware is Middleware => Boolean(middleware)); 

export const store = configureStore({ 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(middleWares)
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
