import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import contactReducer from './contactSlice';

const persistConfig = {
    key: 'root',
    storage,
  }

  const contactsReduser = persistReducer(persistConfig, contactReducer);

  export const store = configureStore({
    reducer: {
        contacts: contactsReduser,
    },
  });

  export const persistor = persistStore(store);

// export const store = configureStore({
//     reducer: {
//         contacts: contactReducer,
//     },
//   });