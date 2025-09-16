import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import LandingPage from './components/LandingPage';
import ShoppingPage from './components/ShoppingPage';
import CartPage from './components/CartPage';
import './styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShoppingPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;