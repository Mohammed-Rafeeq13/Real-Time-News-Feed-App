import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../../types';
import { CATEGORIES } from '../../utils/mockData';

interface CategoriesState {
  items: typeof CATEGORIES;
  selectedCategory: Category;
  subscribedCategories: Category[];
}

const initialState: CategoriesState = {
  items: CATEGORIES,
  selectedCategory: 'all',
  subscribedCategories: ['technology', 'business'],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<Category>) => {
      state.selectedCategory = action.payload;
    },
    subscribeToCategory: (state, action: PayloadAction<Category>) => {
      if (
        action.payload !== 'all' &&
        !state.subscribedCategories.includes(action.payload)
      ) {
        state.subscribedCategories.push(action.payload);
      }
    },
    unsubscribeFromCategory: (state, action: PayloadAction<Category>) => {
      state.subscribedCategories = state.subscribedCategories.filter(
        category => category !== action.payload
      );
    },
    toggleCategorySubscription: (state, action: PayloadAction<Category>) => {
      if (action.payload === 'all') return;
      
      const isSubscribed = state.subscribedCategories.includes(action.payload);
      if (isSubscribed) {
        state.subscribedCategories = state.subscribedCategories.filter(
          category => category !== action.payload
        );
      } else {
        state.subscribedCategories.push(action.payload);
      }
    },
  },
});

export const { 
  setSelectedCategory, 
  subscribeToCategory, 
  unsubscribeFromCategory,
  toggleCategorySubscription
} = categoriesSlice.actions;

export default categoriesSlice.reducer;