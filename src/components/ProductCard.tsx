import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types/product';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-dark-300 group"
    >
      {/* Image section - always white background */}
      <div className="relative pt-[100%] bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-4 right-4 p-3 bg-brand-primary text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:bg-brand-secondary"
        >
          <ShoppingCart className="h-5 w-5" />
        </motion.button>
      </div>

      {/* Details section - dark background in dark mode */}
      <div className="p-4 bg-white dark:bg-dark-200">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-dark-800 truncate">
          {product.title}
        </h3>
        <div className="flex items-center mt-2">
          <div className="flex">{renderStars(product.rating.rate)}</div>
          <span className="ml-2 text-sm text-gray-600 dark:text-dark-400">
            ({product.rating.count})
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};