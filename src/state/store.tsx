/* library */
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

/* redux */
import searchReducer from './slices/search.slice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
