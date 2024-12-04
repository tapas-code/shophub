import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-dark-100/80 backdrop-blur-xl border-b border-gray-200 dark:border-dark-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <ShoppingBag className="h-8 w-8 text-brand-primary group-hover:text-brand-secondary transition-colors" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              ShopHub
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`text-gray-600 dark:text-dark-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors ${
                  location.pathname === '/' ? 'text-brand-primary dark:text-brand-primary' : ''
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`text-gray-600 dark:text-dark-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors ${
                  location.pathname === '/products' ? 'text-brand-primary dark:text-brand-primary' : ''
                }`}
              >
                Products
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
};