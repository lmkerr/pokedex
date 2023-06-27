import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

interface SearchState {
  previousSearches: string[];
}

const initialState: SearchState = {
  previousSearches: [],
};

const persistConfig = {
  key: 'root',
  storage,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearch: (state, action: PayloadAction<string>) => {
      state.previousSearches.push(action.payload);
    },
  },
});

export const { addSearch } = searchSlice.actions;

export default persistReducer(persistConfig, searchSlice.reducer);
