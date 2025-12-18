
import React from 'react';
import { Cpu, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white">ElectraFlow</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading the electronics industry with premium products and AI-powered shopping experiences since 2024. Your future, delivered.
            </p>
            <div className="flex items-center gap-4">
              <button className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></button>
              <button className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></button>
              <button className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></button>
              <button className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Shop</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button className="hover:text-blue-400 transition-colors">Smartphones</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Laptops & PCs</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Audio & Music</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Wearable Tech</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Gaming Gear</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button className="hover:text-blue-400 transition-colors">Order Tracking</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Returns & Refunds</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Product Help</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Contact Us</button></li>
              <li><button className="hover:text-blue-400 transition-colors">Store Locator</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Connected</h4>
            <p className="text-slate-400 text-sm mb-4">Get the latest tech news and exclusive offers.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2024 ElectraFlow Inc. All rights reserved. Built with precision and passion.
          </p>
          <div className="flex gap-6 text-slate-500 text-xs">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors">Cookie Settings</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
