import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({
    serializableCheck: false,
  })], // Додайте getDefaultMiddleware з параметром serializableCheck: false
});

const persistor = persistStore(store);

export { store, persistor };