import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSelectedCategory, toggleCategorySubscription } from '../features/categories/categoriesSlice';
import { Category } from '../types';
import { CATEGORIES, getCategoryIcon } from '../utils/mockData';
import { Bell, BellOff } from 'lucide-react';

const CategorySelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedCategory, subscribedCategories } = useAppSelector((state) => state.categories);
  const darkMode = useAppSelector((state) => state.theme.darkMode);

  const handleCategoryClick = (category: Category) => {
    dispatch(setSelectedCategory(category));
  };

  const handleSubscriptionToggle = (category: Category, e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleCategorySubscription(category));
  };

  return (
    <div className={`sticky top-16 md:top-20 z-40 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    } py-4 shadow-sm`}>
      <div className="container mx-auto px-4">
        <h2 className={`font-bold text-lg mb-3 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>News Categories</h2>
        
        <div className="flex overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex space-x-2">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category.id;
              const isSubscribed = subscribedCategories.includes(category.id);
              const IconComponent = getCategoryIcon(category.id);
              
              return (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full cursor-pointer transition-all whitespace-nowrap ${
                    isSelected
                      ? `${category.color} text-white`
                      : darkMode
                        ? 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent size={16} />
                  <span>{category.name}</span>
                  
                  {category.id !== 'all' && (
                    <button
                      onClick={(e) => handleSubscriptionToggle(category.id, e)}
                      className={`ml-1 p-1 rounded-full transition-colors ${
                        isSelected
                          ? 'bg-white/20 hover:bg-white/30 text-white'
                          : darkMode
                            ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                      }`}
                      aria-label={isSubscribed ? 'Unsubscribe' : 'Subscribe'}
                    >
                      {isSubscribed ? (
                        <Bell size={14} />
                      ) : (
                        <BellOff size={14} />
                      )}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;