
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark tracking-tight">
            Africa's Marketplace, <span className="text-primary">Redefined</span>.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Discover thousands of products from local sellers and top brands. Fast delivery, secure payments, and unbeatable deals.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#"
              className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Shop Now
            </a>
            <a
              href="#"
              className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg ring-1 ring-inset ring-gray-200 hover:bg-gray-50"
            >
              Become a Seller
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
