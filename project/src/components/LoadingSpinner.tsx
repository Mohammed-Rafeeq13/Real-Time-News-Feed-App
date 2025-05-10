import React from 'react';
import { useAppSelector } from '../store/hooks';

const LoadingSpinner: React.FC = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  
  return (
    <div className="flex justify-center items-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
};

export default LoadingSpinner;