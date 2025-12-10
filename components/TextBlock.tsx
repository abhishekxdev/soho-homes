import React from 'react';

export const TextBlock: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-[#f9f9f9]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">Interiors by Soho House</h2>
        <p className="text-sm font-sans mb-6 leading-relaxed text-gray-700">
          Soho Home is an interior design and homeware brand that is part of the private members' club, Soho House.
        </p>
        <p className="text-sm font-sans leading-relaxed text-gray-700">
          The collection was born out of a desire from members to recreate the comfortable and characterful interiors of Soho Houses within their own homes.
        </p>
      </div>
    </section>
  );
};