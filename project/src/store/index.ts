import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../features/news/newsSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    categories: categoriesReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;