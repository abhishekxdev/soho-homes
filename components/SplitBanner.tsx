import React from 'react';

export const SplitBanner: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Left Item */}
      <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[16/10] group overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1540932296774-3ed6d2dee425?q=80&w=2000&auto=format&fit=crop" 
          alt="Personalised gift" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-10 left-6 md:left-10">
          <h3 className="text-white text-2xl md:text-3xl font-serif mb-6">Create a personalised gift</h3>
          <button className="bg-white text-black px-8 py-3 rounded-full text-xs uppercase tracking-widest font-sans font-bold hover:bg-gray-100 transition-colors">
            Shop now
          </button>
        </div>
      </div>

      {/* Right Item */}
      <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[16/10] group overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop" 
          alt="Home bar" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-10 left-6 md:left-10">
          <h3 className="text-white text-2xl md:text-3xl font-serif mb-6">Our home bar collection</h3>
          <button className="bg-white text-black px-8 py-3 rounded-full text-xs uppercase tracking-widest font-sans font-bold hover:bg-gray-100 transition-colors">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};