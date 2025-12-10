import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCarouselProps {
  onProductClick?: (product: Product) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: "Caleb Modular Corner Sofa, Blonde Burl, Velvet",
    regularPrice: "£13,075",
    memberPrice: "£11,114",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Siya Console, Dark Emperador Marble",
    regularPrice: "£2,595",
    memberPrice: "£2,206",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Pair of Molina Dining Chairs, Skylar Print, Grey Blue, Velvet",
    regularPrice: "£1,795",
    memberPrice: "£1,526",
    image: "https://images.unsplash.com/photo-1544457078-69411a1b343e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Murcell Oval Coffee Table",
    regularPrice: "£6,995",
    memberPrice: "£5,946",
    image: "https://images.unsplash.com/photo-1532323544230-7191fd510c59?q=80&w=800&auto=format&fit=crop"
  }
];

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ onProductClick }) => {
  return (
    <section className="py-16 md:py-24 px-6 max-w-[1920px] mx-auto">
       <div className="flex justify-between items-end mb-8">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900">Interiors by Soho House</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group cursor-pointer"
            onClick={() => onProductClick && onProductClick(product)}
          >
            <div className="relative aspect-[4/5] bg-gray-100 mb-4 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="absolute top-4 right-4 text-gray-600 hover:text-black" onClick={(e) => e.stopPropagation()}>
                <Heart size={20} />
              </button>
            </div>
            
            <h3 className="text-sm font-sans font-medium text-gray-900 mb-1 leading-snug">{product.name}</h3>
            
            <div className="flex items-center gap-4 text-xs font-sans mt-2">
              <span className="text-gray-900">{product.regularPrice} <span className="text-gray-500">Regular</span></span>
              <span className="text-gray-900">{product.memberPrice} <span className="text-gray-500">Member</span></span>
            </div>

            {product.id === 1 && (
               <div className="flex gap-2 mt-3">
                 <div className="w-4 h-4 rounded-full bg-[#8B5A2B]"></div>
                 <div className="w-4 h-4 rounded-full bg-[#5C5C5C]"></div>
                 <div className="w-4 h-4 rounded-full bg-[#2F4F4F]"></div>
                 <span className="text-xs text-gray-500">+6</span>
               </div>
            )}
          </div>
        ))}
      </div>
       <div className="w-full h-px bg-gray-200 mt-16 md:mt-24"></div>
    </section>
  );
};