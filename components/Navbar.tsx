
import React from 'react';
import { ShoppingCart, Search, Menu, Cpu } from 'lucide-react';
import { Category } from '../types';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  selectedCategory: Category;
  onCategoryChange: (cat: Category) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, selectedCategory, onCategoryChange }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onCategoryChange(Category.ALL)}>
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              ElectraFlow
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {Object.values(Category).map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`text-sm font-medium transition-colors ${
                  selectedCategory === cat ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search tech..."
                className="pl-10 pr-4 py-1.5 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 w-48 lg:w-64 transition-all"
              />
              <Search className="absolute left-3 top-2 w-4 h-4 text-slate-400" />
            </div>
            
            <button 
              onClick={onCartClick}
              className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button className="md:hidden p-2 text-slate-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
