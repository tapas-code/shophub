import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortBy } from '../store/productsSlice';

export const SortControls: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <select
      onChange={(e) => dispatch(setSortBy(e.target.value as any))}
      className="block w-48 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    >
      <option value="">Sort by</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating-desc">Highest Rated</option>
      <option value="rating-asc">Lowest Rated</option>
    </select>
  );
};