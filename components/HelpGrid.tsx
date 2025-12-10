import React from 'react';

const items = [
  { title: "Contact us", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop" },
  { title: "Find a Studio", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" },
  { title: "Interior Design Service", img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c95?q=80&w=800&auto=format&fit=crop" },
  { title: "Buying guides", img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop" }
];

export const HelpGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 max-w-[1920px] mx-auto bg-[#f4f4f4]">
      <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8">We're here to help</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="overflow-hidden aspect-square mb-4">
               <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-serif text-gray-900 group-hover:underline decoration-1 underline-offset-4">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};