import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { ProductListingPage } from './components/ProductListingPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { Footer } from './components/Footer';
import { Product } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleProductClick = (product: Product) => {
    setCurrentProduct(product);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (currentPage === 'home') {
      return <HomePage onProductClick={handleProductClick} />;
    }
    if (currentPage === 'product' && currentProduct) {
      return <ProductDetailPage product={currentProduct} onNavigate={handleNavigate} />;
    }
    return <ProductListingPage category={currentPage} onProductClick={handleProductClick} />;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        onNavigate={handleNavigate} 
        variant={currentPage === 'home' ? 'transparent' : 'solid'} 
      />
      
      {renderContent()}
      
      <Footer />
    </div>
  );
}

export default App;