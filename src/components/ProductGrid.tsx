import React from 'react';
import { Plant, PlantCategory } from '../types';
import ProductCard from './ProductCard';
import { plantsData } from '../data/plants';

interface ProductGridProps {
  category: PlantCategory | 'all';
}

const ProductGrid: React.FC<ProductGridProps> = ({ category }) => {
  interface ProductWithCategory {
    product: Plant;
    category: PlantCategory;
  }

  const getFilteredProducts = (): ProductWithCategory[] => {
    if (category === 'all') {
      return Object.entries(plantsData).flatMap(([cat, products]: [string, Plant[]]) => 
        products.map((product: Plant) => ({ product, category: cat as PlantCategory }))
      );
    }
    return plantsData[category as PlantCategory].map((product: Plant) => ({ 
      product, 
      category: category as PlantCategory 
    }));
  };

  const products = getFilteredProducts();

  return (
    <div className="container">
      <h2 className="text-3xl font-bold text-primary-dark text-center mt-8 mb-8">
        Our Premium Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(({ product, category }) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            category={category} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;