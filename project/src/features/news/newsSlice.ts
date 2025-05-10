import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsItem, Category } from '../../types';
import { MOCK_NEWS, generateRandomNewsItem } from '../../utils/mockData';

interface NewsState {
  items: NewsItem[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: NewsState = {
  items: MOCK_NEWS,
  loading: false,
  error: null,
  searchQuery: '',
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    addNewsItem: (state, action: PayloadAction<NewsItem>) => {
      state.items.unshift(action.payload);
    },
    updateNewsItem: (state, action: PayloadAction<NewsItem>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    incrementLikes: (state, action: PayloadAction<string>) => {
      const newsItem = state.items.find(item => item.id === action.payload);
      if (newsItem) {
        newsItem.likes += 1;
      }
    },
    incrementComments: (state, action: PayloadAction<string>) => {
      const newsItem = state.items.find(item => item.id === action.payload);
      if (newsItem) {
        newsItem.comments += 1;
      }
    },
    incrementShares: (state, action: PayloadAction<string>) => {
      const newsItem = state.items.find(item => item.id === action.payload);
      if (newsItem) {
        newsItem.shares += 1;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { 
  setSearchQuery, 
  addNewsItem, 
  updateNewsItem, 
  incrementLikes, 
  incrementComments, 
  incrementShares,
  setLoading,
  setError
} = newsSlice.actions;

export default newsSlice.reducer;