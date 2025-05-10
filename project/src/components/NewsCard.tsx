import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { incrementLikes, incrementComments, incrementShares } from '../features/news/newsSlice';
import { NewsItem, Category } from '../types';
import { getCategoryColor, getCategoryIcon } from '../utils/mockData';
import { Heart, MessageCircle, Share2, TrendingUp as Trending } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const categoryColor = getCategoryColor(news.category);
  const CategoryIcon = getCategoryIcon(news.category);

  const handleLikeClick = () => {
    dispatch(incrementLikes(news.id));
  };

  const handleCommentClick = () => {
    dispatch(incrementComments(news.id));
  };

  const handleShareClick = () => {
    dispatch(incrementShares(news.id));
  };

  const formattedDate = formatDistanceToNow(new Date(news.publishedAt), { addSuffix: true });

  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Image container with category badge and trending indicator */}
      <div className="relative">
        <img 
          src={news.imageUrl} 
          alt={news.title}
          className="w-full h-48 object-cover"
        />
        
        {/* Category badge */}
        <div className={`absolute top-4 left-4 ${categoryColor} text-white text-xs font-medium py-1 px-3 rounded-full flex items-center gap-1`}>
          <CategoryIcon size={14} />
          <span className="capitalize">{news.category}</span>
        </div>
        
        {/* Trending indicator */}
        {news.trending && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-medium py-1 px-3 rounded-full flex items-center gap-1">
            <Trending size={14} />
            <span>Trending</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        {/* Title and source */}
        <div className="mb-2">
          <h3 className="text-lg font-bold line-clamp-2">{news.title}</h3>
          <div className={`flex items-center mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <span>{news.source}</span>
            <span className="mx-2">•</span>
            <span>{formattedDate}</span>
          </div>
        </div>
        
        {/* Summary */}
        <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {news.summary}
        </p>
        
        {/* Engagement metrics */}
        <div className={`flex justify-between pt-3 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <button 
            onClick={handleLikeClick}
            className={`flex items-center gap-1 text-sm ${darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-600 hover:text-red-500'}`}
          >
            <Heart size={16} />
            <span>{news.likes}</span>
          </button>
          
          <button 
            onClick={handleCommentClick}
            className={`flex items-center gap-1 text-sm ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`}
          >
            <MessageCircle size={16} />
            <span>{news.comments}</span>
          </button>
          
          <button 
            onClick={handleShareClick}
            className={`flex items-center gap-1 text-sm ${darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-600 hover:text-green-500'}`}
          >
            <Share2 size={16} />
            <span>{news.shares}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;