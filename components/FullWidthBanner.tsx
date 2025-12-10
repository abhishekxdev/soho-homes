import React from 'react';

export const FullWidthBanner: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      <img 
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2670&auto=format&fit=crop" 
        alt="Interior Scene" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-3xl md:text-5xl font-serif mb-4 drop-shadow-md">Bringing The House Home Vol. 2</h2>
        <p className="text-white text-sm md:text-base max-w-lg mb-8 drop-shadow-md">
          Introducing our second book, filled with tips and advice from the team, as well as a closer look at our Houses around the world
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full text-xs uppercase tracking-widest font-sans font-bold hover:bg-gray-100 transition-colors">
          Explore
        </button>
      </div>
    </section>
  );
};