import React from 'react';

interface FeatureSplitProps {
  reversed?: boolean;
  dark?: boolean;
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

export const FeatureSplit: React.FC<FeatureSplitProps> = ({ 
  reversed = false, 
  dark = false, 
  image, 
  title, 
  description, 
  buttonText 
}) => {
  return (
    <section className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[500px] md:h-[600px]`}>
      
      {/* Text Side */}
      <div className={`w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 
        ${dark ? 'bg-[#4a5157] text-white' : 'bg-[#f4f4f4] text-gray-900'}`}>
        <div className="max-w-md">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">{title}</h2>
          <p className={`text-sm md:text-base font-sans mb-8 leading-relaxed ${dark ? 'text-gray-200' : 'text-gray-700'}`}>
            {description}
          </p>
          <button className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-sans font-bold border transition-colors
            ${dark 
              ? 'border-white text-white hover:bg-white hover:text-black' 
              : 'border-black text-black hover:bg-black hover:text-white'}`}>
            {buttonText}
          </button>
        </div>
      </div>

      {/* Image Side */}
      <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
};