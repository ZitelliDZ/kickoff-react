import { createSlice } from '@reduxjs/toolkit';

const init = localStorage.getItem('darkMode') ?? 'true';

export const darkModeSlice = createSlice({
  name: 'auth',
  initialState: {
    darkMode: init === 'true' ? true : false,
  },

  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', state.darkMode.toString());
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = darkModeSlice.actions;
