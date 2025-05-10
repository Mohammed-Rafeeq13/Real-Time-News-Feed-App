import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSearchQuery } from '../features/news/newsSlice';
import { toggleDarkMode } from '../features/theme/themeSlice';
import { Search, Moon, Sun, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const searchQuery = useAppSelector((state) => state.news.searchQuery);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleThemeToggle = () => {
    dispatch(toggleDarkMode());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      } ${
        scrolled ? (darkMode ? 'shadow-lg shadow-gray-800/20' : 'shadow-lg shadow-gray-200/60') : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-blue-500">PULSE</span>News
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className={`relative flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <Search className="absolute left-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={handleSearchChange}
                className={`pl-10 pr-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-800 text-white border-gray-700' 
                    : 'bg-gray-100 text-gray-900 border-gray-200'
                }`}
              />
            </div>

            <button
              onClick={handleThemeToggle}
              className={`p-2 rounded-full ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                darkMode ? 'text-white hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className={`md:hidden py-4 px-2 space-y-4 ${
              darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
            }`}
          >
            <div className={`relative flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <Search className="absolute left-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={handleSearchChange}
                className={`pl-10 pr-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-800 text-white border-gray-700' 
                    : 'bg-gray-100 text-gray-900 border-gray-200'
                }`}
              />
            </div>

            <div className="flex justify-between items-center">
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                {darkMode ? 'Dark Mode' : 'Light Mode'}
              </span>
              <button
                onClick={handleThemeToggle}
                className={`p-2 rounded-full ${
                  darkMode 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;