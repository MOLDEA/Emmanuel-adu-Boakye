
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import StrategyAssistant from './components/StrategyAssistant';

const App: React.FC = () => {
  return (
    <div className="bg-light min-h-screen font-sans text-dark">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
      <StrategyAssistant />
    </div>
  );
};

export default App;
