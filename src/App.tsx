import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CursorFollow } from './components/CursorFollow';
import { Home } from './pages/Home';
import { Products } from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-50 text-gray-900 dark:text-dark-800 transition-colors duration-200">
        <CursorFollow />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;