import React from 'react';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/productsSlice';
import { motion } from 'framer-motion';

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full max-w-xl"
    >
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400 dark:text-dark-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-dark-200 rounded-xl leading-5 bg-white dark:bg-dark-100 text-gray-900 dark:text-dark-800 placeholder-gray-500 dark:placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-200"
        placeholder="Search products..."
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </motion.div>
  );
};