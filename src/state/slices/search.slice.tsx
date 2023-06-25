import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    previousSearches: ['pikachu'],
  },
  reducers: {},
});

export default searchSlice.reducer;
