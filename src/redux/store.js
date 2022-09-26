import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import contactReducer from './contactSlice';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter'],
  }

  const contactsReduser = persistReducer(persistConfig, contactReducer);

  export const store = configureStore({
    reducer: {
        contacts: contactsReduser,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });

  export const persistor = persistStore(store);

// export const store = configureStore({
//     reducer: {
//         contacts: contactReducer,
//     },
//   });