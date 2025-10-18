
import React from 'react';
import { SearchIcon, ShoppingCartIcon, UserIcon } from './icons/Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-primary">Ezzmax</a>
          </div>
          <div className="hidden md:block flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for products, brands and categories"
                className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hidden md:block text-gray-600 hover:text-primary font-medium">Sell on Ezzmax</a>
            <button className="p-2 rounded-full text-gray-600 hover:text-primary hover:bg-orange-100">
              <UserIcon className="h-6 w-6" />
            </button>
            <button className="relative p-2 rounded-full text-gray-600 hover:text-primary hover:bg-orange-100">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-secondary ring-2 ring-white"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
