import React from 'react';
import { useAppSelector } from '../store/hooks';
import { NewsItem } from '../types';
import { formatDistanceToNow } from 'date-fns';
import { TrendingUp as Trending } from 'lucide-react';

const TrendingSection: React.FC = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const allNews = useAppSelector((state) => state.news.items);
  
  // Get trending news sorted by engagement (likes + comments + shares)
  const trendingNews = allNews
    .filter(news => news.trending)
    .sort((a, b) => 
      (b.likes + b.comments + b.shares) - (a.likes + a.comments + a.shares)
    )
    .slice(0, 5);

  if (trendingNews.length === 0) return null;

  return (
    <div className={`rounded-lg shadow ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    } p-4 mb-6`}>
      <div className="flex items-center gap-2 mb-4">
        <Trending className="text-red-500" size={20} />
        <h2 className="text-xl font-bold">Trending Now</h2>
      </div>
      
      <div className="space-y-4">
        {trendingNews.map((news, index) => (
          <TrendingNewsItem 
            key={news.id} 
            news={news} 
            index={index + 1}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
};

interface TrendingNewsItemProps {
  news: NewsItem;
  index: number;
  darkMode: boolean;
}

const TrendingNewsItem: React.FC<TrendingNewsItemProps> = ({ news, index, darkMode }) => {
  const formattedDate = formatDistanceToNow(new Date(news.publishedAt), { addSuffix: true });

  return (
    <div className="flex items-start gap-3">
      <div className={`font-bold text-xl ${
        darkMode ? 'text-gray-400' : 'text-gray-500'
      } min-w-[24px]`}>
        {index}
      </div>
      <div>
        <h3 className="font-medium line-clamp-2">{news.title}</h3>
        <div className={`text-xs ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        } mt-1 flex items-center`}>
          <span className="capitalize">{news.category}</span>
          <span className="mx-1">•</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;