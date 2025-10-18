
import React from 'react';
import { Product } from '../types';
import { StarIcon } from './icons/Icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img className="h-56 w-full object-cover" src={product.imageUrl} alt={product.name} />
        <span className="absolute top-2 left-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-dark truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
        <div className="flex items-center mt-2">
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className={`h-5 w-5 ${i < Math.round(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">({product.reviewCount} reviews)</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
          <button className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
