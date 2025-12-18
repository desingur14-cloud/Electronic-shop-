
import React from 'react';
import { Star, Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-800 uppercase tracking-wider shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1 text-amber-400 mb-2">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-slate-500 mb-4 line-clamp-2 h-10">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-2xl font-bold text-slate-900">
            ${product.price.toLocaleString()}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 active:scale-95"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
