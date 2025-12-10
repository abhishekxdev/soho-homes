import React from 'react';
import { Heart, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { Product } from '../types';

interface ProductListingPageProps {
  category?: string;
  onProductClick?: (product: Product) => void;
}

type GridItem = 
  | ({ type: 'product' } & Product)
  | { type: 'banner'; title: string; subtitle?: string; image: string; style: 'overlay' | 'below', cta?: string };

const FURNITURE_ITEMS: GridItem[] = [
  {
    type: 'product',
    id: 1,
    name: "Railton Modular Corner Wardrobe, Right",
    regularPrice: "£13,995",
    memberPrice: "£11,896",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 2,
    name: "Drew Lounge Chair, Leather, Chestnut",
    regularPrice: "£2,195",
    memberPrice: "£1,866",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 3,
    name: "Drew Footstool, Leather, Chestnut",
    regularPrice: "£1,595",
    memberPrice: "£1,356",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 4,
    name: "Railton Modular Corner Wardrobe, Left",
    regularPrice: "£13,995",
    memberPrice: "£11,896",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c95?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 5,
    name: "Aden Sofa, Textured Linen",
    regularPrice: "£4,995",
    memberPrice: "£4,246",
    image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 6,
    name: "Alana Bed",
    regularPrice: "from £5,995",
    memberPrice: "from £5,096",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop",
    swatches: ['#8B5A2B', '#5C5C5C', '#2F4F4F', '#D2B48C', '#000000']
  },
  {
    type: 'banner',
    title: "Shop by Room",
    subtitle: "See how we style our interiors collections in the different spaces of the home",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    style: 'overlay'
  },
  {
    type: 'product',
    id: 8,
    name: "Devon Bedside Table",
    regularPrice: "£995",
    memberPrice: "£846",
    image: "https://images.unsplash.com/photo-1532323544230-7191fd510c59?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 9,
    name: "Railton Double Wardrobe",
    regularPrice: "£5,995",
    memberPrice: "£5,096",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 10,
    name: "Railton Modular Wardrobe",
    regularPrice: "£11,495",
    memberPrice: "£9,771",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 11,
    name: "Sofia Footstool, Skylar Print",
    regularPrice: "£595",
    memberPrice: "£506",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 12,
    name: "Madelyn Three Seater Sofa, Skylar Print",
    regularPrice: "£4,695",
    memberPrice: "£3,991",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
    swatches: ['#556B2F']
  },
  {
    type: 'product',
    id: 13,
    name: "Madelyn Three Seater Sofa",
    regularPrice: "£4,595",
    memberPrice: "£3,906",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=800&auto=format&fit=crop",
    swatches: ['#3E2723', '#795548', '#8D6E63', '#A1887F', '#4a5157']
  },
  {
    type: 'product',
    id: 14,
    name: "Caleb Modular L-Shape Sofa, Blonde Burl, Velvet, Lichen",
    regularPrice: "£10,580",
    memberPrice: "£8,993",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 15,
    name: "Vivienne Armchair, Theron",
    regularPrice: "£1,895",
    memberPrice: "£1,611",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop",
    swatches: ['#D7CCC8']
  },
  {
    type: 'banner',
    title: "Gifting by Soho House",
    subtitle: "Discover our curation of considered gifts for the important people in your life - each inspired by the Soho House experience",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
    style: 'below'
  },
  {
    type: 'product',
    id: 17,
    name: "Caleb Modular Sofa, Dark Burl, Velvet",
    regularPrice: "from £5,390",
    memberPrice: "from £4,582",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
    swatches: ['#8B4513', '#A0522D', '#6B4226', '#000000', '#D2691E']
  },
  {
    type: 'product',
    id: 18,
    name: "Milo Armchair, Leather, Moss",
    regularPrice: "£2,495",
    memberPrice: "£2,121",
    image: "https://images.unsplash.com/photo-1595514020175-1c863c3d550b?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 19,
    name: "Milo Armchair, Leather, Black",
    regularPrice: "£2,495",
    memberPrice: "£2,121",
    image: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 20,
    name: "Caleb Armchair, Dark Burl, Velvet",
    regularPrice: "£2,195",
    memberPrice: "£1,866",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    swatches: ['#8B4513', '#A0522D', '#6B4226', '#000000', '#D2691E']
  },
  {
    type: 'product',
    id: 21,
    name: "Romi Footstool, Leather",
    regularPrice: "£4,595",
    memberPrice: "£761",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=800&auto=format&fit=crop",
    swatches: ['#556B2F']
  },
  {
    type: 'product',
    id: 22,
    name: "Linus Bed, Velvet, Grey Blue",
    regularPrice: "from £7,495",
    memberPrice: "from £6,371",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop"
  }
];

const BATHROOM_ITEMS: GridItem[] = [
  {
    type: 'product',
    id: 101,
    name: "House Pool Towel, Ocho Rios",
    regularPrice: "£65",
    memberPrice: "£55",
    image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=800&auto=format&fit=crop",
    isNew: true,
    swatches: ['#1c1c1c', '#2F4F4F', '#f4f1ea']
  },
  {
    type: 'product',
    id: 102,
    name: "House Hooded Robe, White",
    regularPrice: "£100",
    memberPrice: "£85",
    image: "https://images.unsplash.com/photo-1555811776-59c40294e022?q=80&w=800&auto=format&fit=crop",
    swatches: ['#FFFFFF', '#D3D3D3']
  },
  {
    type: 'product',
    id: 103,
    name: "Marble Toothbrush Holder, Carrara",
    regularPrice: "£45",
    memberPrice: "£38",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 104,
    name: "Barwell Cut Crystal Soap Dispenser",
    regularPrice: "£85",
    memberPrice: "£72",
    image: "https://images.unsplash.com/photo-1585233527494-017e4758d922?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'banner',
    title: "Cowshed Spa",
    subtitle: "Bring the spa home with our natural products",
    image: "https://images.unsplash.com/photo-1544367563-12123d896889?q=80&w=1200&auto=format&fit=crop",
    style: 'overlay'
  },
  {
    type: 'product',
    id: 105,
    name: "Monroe Vanity Mirror",
    regularPrice: "£295",
    memberPrice: "£250",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 106,
    name: "House Bath Sheet, Sage",
    regularPrice: "£55",
    memberPrice: "£46",
    image: "https://images.unsplash.com/photo-1517614068800-0081079d6364?q=80&w=800&auto=format&fit=crop",
    swatches: ['#556B2F', '#D7CCC8', '#FFFFFF']
  },
  {
    type: 'product',
    id: 107,
    name: "Marble Soap Dish",
    regularPrice: "£35",
    memberPrice: "£29",
    image: "https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 108,
    name: "Waffle Robe, Grey",
    regularPrice: "£90",
    memberPrice: "£76",
    image: "https://images.unsplash.com/photo-1596428465487-77b5f1595180?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 109,
    name: "Cotton Storage Jar",
    regularPrice: "£30",
    memberPrice: "£25",
    image: "https://images.unsplash.com/photo-1512413316925-fd4b93f31521?q=80&w=800&auto=format&fit=crop"
  },
  {
    type: 'product',
    id: 110,
    name: "House Bath Mat, Stone",
    regularPrice: "£45",
    memberPrice: "£38",
    image: "https://images.unsplash.com/photo-1576426863848-c2185fc6e941?q=80&w=800&auto=format&fit=crop",
    swatches: ['#808080', '#FFFFFF', '#000000']
  },
  {
    type: 'banner',
    title: "Bathroom Accessories",
    subtitle: "Complete the look",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1200&auto=format&fit=crop",
    style: 'below'
  }
];

export const ProductListingPage: React.FC<ProductListingPageProps> = ({ category = 'furniture', onProductClick }) => {
  // Format category slug to Title (e.g., 'rugs-textiles' -> 'Rugs & Textiles', 'new-arrivals' -> 'New Arrivals')
  const getTitle = (slug: string) => {
    if (slug === 'new-arrivals') return 'New Arrivals';
    if (slug === 'interiors') return 'Interiors by Soho House';
    
    // Default capitalization handling
    return slug
      .split('-')
      .map(word => {
        if (word === 'and') return '&';
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ')
      .replace(/&/g, '&');
  };

  const title = `New In ${getTitle(category)}`;
  const displayTitle = category === 'new-arrivals' ? 'All New Arrivals' : title;
  
  // Dynamic description
  const getDescription = () => {
    if (category === 'furniture') {
      return <>Make your house a home with our furniture collection, including <span className="underline decoration-1 underline-offset-2">sofas</span>, <span className="underline decoration-1 underline-offset-2">armchairs</span>, <span className="underline decoration-1 underline-offset-2">tables</span> and <span className="underline decoration-1 underline-offset-2">footstools</span> inspired by our <span className="underline decoration-1 underline-offset-2">Houses.</span></>;
    }
    if (category === 'bathroom') {
      return <>Create a sanctuary with our bathroom collection. From soft <span className="underline decoration-1 underline-offset-2">towels</span> and <span className="underline decoration-1 underline-offset-2">robes</span> to elegant <span className="underline decoration-1 underline-offset-2">accessories</span> and <span className="underline decoration-1 underline-offset-2">storage</span>, find everything you need to elevate your daily routine.</>;
    }
    return <>Discover our latest additions to the {getTitle(category)} collection. Bring the atmosphere of our Houses into your home with our newest designs.</>;
  };

  const items = category === 'bathroom' ? BATHROOM_ITEMS : FURNITURE_ITEMS;

  return (
    <div className="pt-[140px] pb-24">
      {/* Header Section */}
      <div className="max-w-[1920px] mx-auto px-6 mb-10">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">{displayTitle}</h1>
        <p className="max-w-3xl text-sm md:text-base font-sans text-gray-800 leading-relaxed">
          {getDescription()}
        </p>
      </div>

      {/* Toolbar */}
      <div className="z-30 bg-white border-b border-gray-200">
        <div className="max-w-[1920px] mx-auto px-6 py-4">
           {/* Top Row: Filters & Ready to Ship */}
           <div className="flex justify-between items-center mb-6">
             <button className="flex items-center gap-2 bg-[#1c1c1c] text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-sans font-bold hover:bg-gray-800 transition-colors">
               Filters <SlidersHorizontal size={14} />
             </button>

             <div className="flex items-center gap-3">
               <div className="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
               </div>
               <span className="text-xs uppercase tracking-widest font-sans font-bold">Ready to ship ({items.filter(i => i.type === 'product').length})</span>
             </div>
           </div>

           {/* Bottom Row: Count & Sort */}
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-sans text-gray-600">
             <div className="mb-2 md:mb-0">1 - {items.length} of {items.length + 42} results</div>
             <div className="flex items-center gap-6">
               <div className="flex items-center gap-2">
                 <span>View:</span>
                 <button className="font-bold text-black">20</button>
                 <button className="hover:text-black">40</button>
                 <button className="hover:text-black">60</button>
                 <button className="hover:text-black">80</button>
               </div>
               <div className="flex items-center gap-1 cursor-pointer group">
                 <span>Sort by:</span>
                 <span className="font-bold text-black">Bestsellers</span>
                 <ChevronDown size={14} className="text-black" />
               </div>
             </div>
           </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1920px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {items.map((item, idx) => {
            if (item.type === 'banner') {
              return (
                <div key={idx} className="relative group cursor-pointer h-full flex flex-col">
                   <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 w-full">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      {item.style === 'overlay' && (
                        <div className="absolute inset-0 p-8 flex flex-col justify-end text-white bg-black/10">
                          <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                          {item.subtitle && <p className="text-xs font-bold font-sans uppercase tracking-widest leading-relaxed">{item.subtitle}</p>}
                        </div>
                      )}
                   </div>
                   {item.style === 'below' && (
                     <div className="pt-4">
                        <h3 className="text-lg font-serif text-gray-900 mb-2">{item.title}</h3>
                        {item.subtitle && <p className="text-xs font-sans text-gray-600 font-bold leading-relaxed">{item.subtitle}</p>}
                     </div>
                   )}
                </div>
              );
            }

            return (
              <div 
                key={idx} 
                className="group cursor-pointer"
                onClick={() => onProductClick && onProductClick(item)}
              >
                <div className="relative aspect-[4/5] bg-gray-100 mb-4 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button className="absolute top-4 right-4 text-gray-600 hover:text-black transition-colors" onClick={(e) => e.stopPropagation()}>
                    <Heart size={20} />
                  </button>
                  {item.isNew && (
                    <span className="absolute top-4 left-4 bg-white px-2 py-1 text-[10px] uppercase tracking-widest font-bold">New</span>
                  )}
                </div>
                
                <h3 className="text-sm font-sans font-medium text-gray-900 mb-1 leading-snug pr-4">{item.name}</h3>
                
                <div className="flex flex-col gap-0.5 text-xs font-sans mt-2">
                  <span className="text-gray-900">{item.regularPrice} <span className="text-gray-500">Regular</span></span>
                  <span className="text-gray-900">{item.memberPrice} <span className="text-gray-500">Member</span></span>
                </div>

                {item.type === 'product' && (
                    <div className="mt-3 text-xs text-gray-500 font-sans">
                      {item.swatches ? (
                         <div className="flex items-center gap-2">
                           {item.swatches.slice(0, 4).map((color, i) => (
                             <div key={i} className="w-4 h-4 rounded-full border border-gray-200" style={{ backgroundColor: color }}></div>
                           ))}
                           {item.swatches.length > 4 && <span>+{item.swatches.length - 4}</span>}
                         </div>
                      ) : (
                        item.id === 6 ? <span>Made-to-order</span> : null
                      )}
                    </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 py-12 text-xs font-sans uppercase tracking-widest text-gray-500">
        <button className="hover:text-black">Prev</button>
        <button className="text-black font-bold">1</button>
        <button className="hover:text-black">2</button>
        <button className="hover:text-black">3</button>
        <span>...</span>
        <button className="hover:text-black">5</button>
        <button className="hover:text-black text-black">Next</button>
      </div>
    </div>
  );
};