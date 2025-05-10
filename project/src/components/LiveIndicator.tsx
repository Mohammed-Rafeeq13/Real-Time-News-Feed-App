import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../store/hooks';
import { Radio } from 'lucide-react';

const LiveIndicator: React.FC = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Blink effect
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex items-center gap-2 rounded-full py-1 px-3 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-100'
    }`}>
      <Radio 
        size={16} 
        className={`transition-opacity ${
          isVisible ? 'text-red-500 opacity-100' : 'text-red-500 opacity-50'
        }`} 
      />
      <span className={`text-sm font-medium ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        LIVE
      </span>
    </div>
  );
};

export default LiveIndicator;