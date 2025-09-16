import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlantCategory } from '../types';
import ProductGrid from './ProductGrid';
import { useCart } from '../context/CartContext';

const ShoppingPage: React.FC = () => {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const [activeCategory, setActiveCategory] = useState<PlantCategory | 'all'>('all');

  const categories = [
    { id: 'all', label: 'All Plants' },
    { id: 'orchidaceae', label: 'Orchids' },
    { id: 'cactaceae', label: 'Cacti' },
    { id: 'rosaceae', label: 'Roses' }
  ] as const;

  return (
    <div className="shopping-page min-h-screen bg-gradient-to-b from-mint-50 to-mint-100">
      <header className="header bg-white shadow-md sticky top-0 z-50">
        <div className="header-content container">
          <div 
            className="logo transition-all hover-scale cursor-pointer"
            onClick={() => navigate('/')}
          >
            Paradise Nursery
          </div>
          
          <nav className="category-filters gap-4">
            {categories.map(({ id, label }) => (
              <button
                key={id}
                className={`filter-btn rounded-full transition-all ${
                  activeCategory === id ? 'active' : ''
                }`}
                onClick={() => setActiveCategory(id as PlantCategory | 'all')}
              >
                {label}
              </button>
            ))}
          </nav>
          
          <button 
            className="cart-icon bg-primary rounded-full shadow-md transition-all hover-scale"
            onClick={() => navigate('/cart')}
          >
            🛒
            <span className="cart-badge">{totalItems}</span>
          </button>
        </div>
      </header>

      <ProductGrid category={activeCategory} />
    </div>
  );
};

export default ShoppingPage;