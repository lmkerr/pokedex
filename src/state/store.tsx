/* library */
import { configureStore } from '@reduxjs/toolkit';

/* reducers */
import searchReducer from './slices/search.slice';

export default configureStore({
  reducer: {
    search: searchReducer,
  },
});
