import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './slices/dark';

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

export default store;
