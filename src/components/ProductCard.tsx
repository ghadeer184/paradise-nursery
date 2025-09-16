import React from 'react';
import { Plant, PlantCategory } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Plant;
  category: PlantCategory;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, category }) => {
  const { cart, addToCart } = useCart();
  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button 
          className={`btn btn-primary btn-sm w-full hover-up ${isInCart ? 'disabled' : ''}`}
          onClick={() => addToCart(product, category)}
          disabled={isInCart}
        >
          <span>{isInCart ? '✓ Added to Cart' : '🛒 Add to Cart'}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;