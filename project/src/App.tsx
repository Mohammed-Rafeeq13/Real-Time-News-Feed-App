import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getSocket } from './services/socket';
import Header from './components/Header';
import CategorySelector from './components/CategorySelector';
import NewsFeed from './components/NewsFeed';
import TrendingSection from './components/TrendingSection';
import LiveIndicator from './components/LiveIndicator';

function App() {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  
  // Initialize WebSocket connection
  useEffect(() => {
    const socket = getSocket(dispatch);
    socket.connect();
    
    return () => {
      socket.disconnect();
    };
  }, [dispatch]);
  
  // Apply dark mode to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-gray-900');
      document.body.classList.remove('bg-gray-100');
    } else {
      document.body.classList.add('bg-gray-100');
      document.body.classList.remove('bg-gray-900');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      <Header />
      <CategorySelector />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest News</h2>
          <LiveIndicator />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <NewsFeed />
          </div>
          
          <div className="lg:col-span-1">
            <TrendingSection />
            
            <div className={`rounded-lg shadow p-4 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className="font-bold mb-2">About PULSENews</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Stay updated with the latest news from around the world. 
                Subscribe to categories you're interested in to receive real-time updates.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className={`mt-12 py-6 border-t ${
        darkMode ? 'bg-gray-900 border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-gray-600'
      }`}>
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© 2025 PULSENews. All rights reserved.</p>
          <p className="mt-1">
            Bringing you real-time news from around the world.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;