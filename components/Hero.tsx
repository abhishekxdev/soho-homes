import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2670&auto=format&fit=crop" 
        alt="Dining Room" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="max-w-xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-4 leading-tight">
            In time for Christmas
          </h1>
          <p className="text-white text-sm md:text-base font-sans mb-8 leading-relaxed max-w-md">
            Order larger items like furniture, rugs and ceiling lights by 1pm on Sunday 14 December (UK mainland*) for delivery in time for Christmas. *Subject to availability
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full text-xs uppercase tracking-widest font-sans font-bold hover:bg-gray-100 transition-colors">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};