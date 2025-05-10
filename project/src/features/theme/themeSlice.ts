import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  darkMode: boolean;
}

// Get the initial state from localStorage if available
const getUserThemePreference = (): boolean => {
  // Check if user has saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }
  
  // Check if user has system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true;
  }
  
  // Default to light mode
  return false;
};

const initialState: ThemeState = {
  darkMode: getUserThemePreference(),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');
    },
  },
});

export const { toggleDarkMode, setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;