import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import NewsCard from './NewsCard';
import { NewsItem } from '../types';
import { Newspaper, AlertCircle } from 'lucide-react';

const NewsFeed: React.FC = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const allNews = useAppSelector((state) => state.news.items);
  const selectedCategory = useAppSelector((state) => state.categories.selectedCategory);
  const searchQuery = useAppSelector((state) => state.news.searchQuery);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Filter news based on selected category and search query
    let filtered = [...allNews];
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(news => news.category === selectedCategory);
    }
    
    // Apply search filter if there's a query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(news => 
        news.title.toLowerCase().includes(query) || 
        news.summary.toLowerCase().includes(query) ||
        news.content.toLowerCase().includes(query) ||
        news.category.toLowerCase().includes(query) ||
        news.author.toLowerCase().includes(query) ||
        news.source.toLowerCase().includes(query)
      );
    }
    
    // Sort by most recent first using a new array to avoid mutating the filtered array
    filtered = [...filtered].sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    
    setFilteredNews(filtered);
  }, [allNews, selectedCategory, searchQuery]);

  return (
    <div className="py-6">
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <div className={`flex flex-col items-center justify-center py-12 rounded-lg ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
        }`}>
          {searchQuery ? (
            <>
              <AlertCircle size={48} className="text-gray-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">No results found</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                We couldn't find any news for "{searchQuery}"
              </p>
            </>
          ) : (
            <>
              <Newspaper size={48} className="text-gray-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">No news available</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                There are no news items in the {selectedCategory === 'all' ? 'selected' : selectedCategory} category
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsFeed;