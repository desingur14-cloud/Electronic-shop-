
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';
import { Product, CartItem, Category } from './types';
import { SlidersHorizontal, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === Category.ALL) return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Optional: Open cart drawer automatically or show a toast
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = useMemo(() => cart.reduce((acc, curr) => acc + curr.quantity, 0), [cart]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <main className="flex-1">
        {selectedCategory === Category.ALL && <Hero />}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">
                <ChevronRight className="w-4 h-4" />
                Featured Tech
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                {selectedCategory === Category.ALL ? 'Premium Collection' : `${selectedCategory} Devices`}
              </h2>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <SlidersHorizontal className="w-4 h-4" />
                Filter & Sort
              </button>
              <div className="text-sm text-slate-500 bg-slate-100 px-3 py-2 rounded-lg">
                Showing {filteredProducts.length} items
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} 
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <SlidersHorizontal className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-500 mb-8">Try adjusting your filters or category selection.</p>
              <button 
                onClick={() => setSelectedCategory(Category.ALL)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Benefits Section */}
        <section className="bg-white py-16 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex items-start gap-5">
                <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Lightning Fast</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Same-day processing and priority shipping for all premium tech orders worldwide.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-green-50 p-4 rounded-2xl text-green-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Secure Protection</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Multi-layer security on all transactions and 2-year comprehensive device protection.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-purple-50 p-4 rounded-2xl text-purple-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Best Value</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Price-match guarantee and loyalty rewards for every dollar spent on ElectraFlow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <AIChat />
    </div>
  );
};

export default App;
