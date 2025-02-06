import { createSlice } from '@reduxjs/toolkit';

const savedMode = localStorage.getItem('mode') || 'light';

const darkModeSlice = createSlice({
  name: 'mode',
  initialState: {
    mode: savedMode, 
  },
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('mode', state.mode);
    },
  },
});

export const { toggleMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
