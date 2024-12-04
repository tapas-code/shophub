import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Package, CreditCard, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({
  icon,
  title,
  description,
  delay
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white/90 dark:bg-dark-200/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
  >
    <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-xl mb-4 w-14 h-14 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-dark-800 mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-dark-500">{description}</p>
  </motion.div>
);

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-dark-50 dark:to-dark-100" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-[100%] h-[100%] bg-gradient-to-br from-purple-400/20 to-blue-400/20 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mx-auto mb-8 flex items-center justify-center transform rotate-12"
            >
              <ShoppingBag className="w-12 h-12 text-white transform -rotate-12" />
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              {...fadeInUp}
            >
              Shop Smarter
              <br />
              Live Better
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-600 dark:text-dark-500 mb-8 max-w-2xl mx-auto"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Discover a world of amazing products curated just for you.
              Premium quality, unbeatable prices, and exceptional service.
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Explore Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Featured Categories */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <FeatureCard
                icon={<Package className="w-6 h-6 text-blue-500" />}
                title="Premium Selection"
                description="Handpicked products from top brands worldwide"
                delay={0.2}
              />
              <FeatureCard
                icon={<CreditCard className="w-6 h-6 text-purple-500" />}
                title="Secure Shopping"
                description="Safe payments and buyer protection guaranteed"
                delay={0.4}
              />
              <FeatureCard
                icon={<Truck className="w-6 h-6 text-blue-500" />}
                title="Express Delivery"
                description="Fast and reliable shipping to your doorstep"
                delay={0.6}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};