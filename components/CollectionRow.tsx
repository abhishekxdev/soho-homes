import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const collections = [
  { name: 'Beds & Mattresses', img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Table Lamps', img: 'https://images.unsplash.com/photo-1513506003013-1951915e5274?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Cushions', img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?q=80&w=1000&auto=format&fit=crop' },
  { name: 'Rugs & Runners', img: 'https://images.unsplash.com/photo-1534839868770-4e4d775ea480?q=80&w=1000&auto=format&fit=crop' },
];

export const CollectionRow: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-6 max-w-[1920px] mx-auto">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900">Explore the collection</h2>
        <div className="flex space-x-2">
           <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50"><ChevronLeft size={16} /></button>
           <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50"><ChevronRight size={16} /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {collections.map((item, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="overflow-hidden aspect-[4/5] bg-gray-100 mb-4">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-serif text-gray-900">{item.name}</h3>
          </div>
        ))}
      </div>
      
      <div className="w-full h-px bg-gray-200 mt-16 md:mt-24"></div>
    </section>
  );
};