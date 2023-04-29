import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { useDispatch } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean); 

// export const store = configureStore({ 
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//     serializableCheck: false
//   }).concat(middleWares)
// });

export const store = configureStore({ 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(logger)
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch