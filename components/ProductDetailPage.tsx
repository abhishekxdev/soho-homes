import React, { useState } from 'react';
import { Minus, Plus, Heart, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailPageProps {
  product: Product;
  onNavigate: (page: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onNavigate }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [isDimensionsOpen, setIsDimensionsOpen] = useState(false);

  // Mock additional images for the gallery
  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616486029423-aaa4789e8c95?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595514020175-1c863c3d550b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
  ];

  const relatedProducts = [
    {
      id: 101,
      name: "Railton Modular Wardrobe",
      regularPrice: "£11,495",
      memberPrice: "£9,771",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 102,
      name: "Benedetta Bedside Table, Carrara Marble",
      regularPrice: "£1,595",
      memberPrice: "£1,356",
      image: "https://images.unsplash.com/photo-1532323544230-7191fd510c59?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 103,
      name: "Cora Bedside Table",
      regularPrice: "£1,995",
      memberPrice: "£1,696",
      image: "https://images.unsplash.com/photo-1540932296774-3ed6d2dee425?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 104,
      name: "Alana Bed",
      regularPrice: "from £5,995",
      memberPrice: "from £5,096",
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-[100px] bg-white">
      {/* Breadcrumb */}
      <div className="max-w-[1920px] mx-auto px-6 py-6">
        <button 
          onClick={() => onNavigate('furniture')}
          className="text-xs font-sans uppercase tracking-widest text-gray-500 hover:text-black flex items-center gap-1"
        >
          <ChevronLeft size={14} /> View all Bedside Tables, Chest of Drawers & Wardrobes
        </button>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left Column: Image Gallery */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Main Image - Full Width on Mobile, spans 2 cols on desktop */}
              <div className="md:col-span-2 aspect-[4/3] bg-gray-50">
                <img 
                  src={productImages[0]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm flex items-center gap-2">
                    Inspired by <span className="font-serif capitalize">Soho House Rome</span>
                  </span>
                </div>
              </div>

              {/* Grid Images */}
              {productImages.slice(1).map((img, idx) => (
                <div key={idx} className="aspect-[3/4] bg-gray-50">
                  <img src={img} alt={`Detail ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Tabs Section */}
            <div className="mt-24 border-t border-gray-200 pt-8">
              <div className="flex gap-8 border-b border-gray-200 mb-8">
                {['Details', 'Delivery & Returns', 'About us'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
                    className={`pb-4 text-xl font-serif transition-colors ${activeTab === tab.toLowerCase().split(' ')[0] ? 'text-black border-b-2 border-black -mb-px' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#f9f9f9] p-8 md:p-12">
                <div>
                   {/* Product Image for Spec */}
                   <img src={product.image} alt="Spec" className="w-full h-auto object-cover mix-blend-multiply" />
                </div>
                <div className="font-sans text-sm leading-relaxed space-y-4">
                   <div className="grid grid-cols-3 py-2 border-b border-gray-200">
                     <span className="font-bold">Dimensions:</span>
                     <span className="col-span-2">H210 x W188.2 x D60cm / H82.7 x W74.1 x D23.6"</span>
                   </div>
                   <div className="grid grid-cols-3 py-2 border-b border-gray-200">
                     <span className="font-bold">Weight:</span>
                     <span className="col-span-2">476kg / 1049.4lbs</span>
                   </div>
                   <div className="grid grid-cols-3 py-2 border-b border-gray-200">
                     <span className="font-bold">Number of boxes:</span>
                     <span className="col-span-2">5</span>
                   </div>
                   <div className="grid grid-cols-3 py-2 border-b border-gray-200">
                     <span className="font-bold">Material:</span>
                     <span className="col-span-2">Oak Wood, Oak Veneer, Poplar Veneer and Steel</span>
                   </div>
                   <div className="grid grid-cols-3 py-2 border-b border-gray-200">
                     <span className="font-bold">Care instructions:</span>
                     <span className="col-span-2">Dust often using a clean, soft, dry and lint-free cloth. Blot spills immediately.</span>
                   </div>

                   <div className="flex gap-4 mt-8 pt-4">
                     <button className="px-6 py-2 border border-black rounded-full text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-colors">
                       Download tearsheet
                     </button>
                     <button className="px-6 py-2 border border-black rounded-full text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-colors">
                       Detailed Dimensions
                     </button>
                      <button className="px-6 py-2 border border-black rounded-full text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-colors">
                       Will it fit
                     </button>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar Details */}
          <div className="w-full lg:w-1/3 relative">
            <div className="sticky top-28 space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif mb-2">{product.name}</h1>
                <p className="text-xs font-sans text-gray-500 uppercase tracking-widest">Delivery from 4 weeks</p>
              </div>

              <div className="text-sm font-sans leading-relaxed text-gray-700 space-y-4">
                <p>The wraparound silhouette of this modular design features warm, solid oak door fronts with rigid carved detailing.</p>
                <p>Our Railton modular wardrobe is designed to complement any space, offering a right corner unit. Fitted with antique brass-finish handles and a range of flexible storage.</p>
              </div>

              {/* Dimensions Dropdown */}
              <div className="border-t border-b border-gray-200 py-4 cursor-pointer" onClick={() => setIsDimensionsOpen(!isDimensionsOpen)}>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold font-sans">Dimensions & tearsheet</span>
                  <ChevronDown size={16} className={`transform transition-transform ${isDimensionsOpen ? 'rotate-180' : ''}`} />
                </div>
                {isDimensionsOpen && (
                  <div className="mt-4 text-sm text-gray-600">
                    <p>H210 x W188.2 x D60cm</p>
                  </div>
                )}
              </div>

              {/* Price */}
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-2xl font-serif">{product.regularPrice}</span>
                  <span className="text-sm text-gray-500">Regular price</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xl font-serif text-gray-800">{product.memberPrice}</span>
                  <span className="text-sm text-gray-500">Member price</span>
                </div>
                <p className="text-xs text-right text-gray-500 mt-1">Save £2,099 for £100 per year</p>
              </div>

              {/* Info Box */}
              <div className="bg-[#f4f1ea] p-4 text-xs leading-relaxed text-gray-700">
                Due to the size of this item, we recommend that you check the product dimensions and our self-measuring guide to ensure it will fit your space before purchasing.
              </div>

              {/* Actions */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex gap-4">
                  {/* Quantity */}
                  <div className="flex items-center justify-between border border-gray-300 rounded-full px-4 py-3 w-32">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-gray-500"><Minus size={14} /></button>
                    <span className="font-sans font-medium">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="hover:text-gray-500"><Plus size={14} /></button>
                  </div>
                  
                  {/* Add to Basket */}
                  <button className="flex-1 bg-black text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-gray-800 transition-colors">
                    Add to basket
                  </button>

                  {/* Wishlist */}
                  <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50">
                    <Heart size={20} />
                  </button>
                </div>
                <p className="text-[10px] text-gray-500 text-center">
                  Delivery charges may vary according to item weight and order destination. Click here for details
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="max-w-[1920px] mx-auto px-6 py-16 border-t border-gray-200">
        <div className="flex justify-between items-end mb-8">
           <h2 className="text-2xl md:text-3xl font-serif text-gray-900">Customers also bought</h2>
           <div className="flex gap-2">
             <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50"><ChevronLeft size={16} /></button>
             <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-50"><ChevronRight size={16} /></button>
           </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
             <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-gray-100 mb-4 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button className="absolute top-4 right-4 text-gray-600 hover:text-black">
                  <Heart size={20} />
                </button>
              </div>
              <h3 className="text-sm font-sans font-medium text-gray-900 mb-1 leading-snug">{item.name}</h3>
              <div className="flex gap-4 text-xs font-sans mt-2">
                <span className="text-gray-900">{item.regularPrice} <span className="text-gray-500">Regular</span></span>
                <span className="text-gray-900">{item.memberPrice} <span className="text-gray-500">Member</span></span>
              </div>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-full text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Add to basket
              </button>
            </div>
          ))}
        </div>
      </div>
      
       <div className="max-w-[1920px] mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8">Recently viewed</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-gray-100 mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button className="absolute top-4 right-4 text-gray-600 hover:text-black">
                  <Heart size={20} />
                </button>
              </div>
              <h3 className="text-sm font-sans font-medium text-gray-900 mb-1 leading-snug">{product.name}</h3>
              <div className="flex gap-4 text-xs font-sans mt-2">
                <span className="text-gray-900">{product.regularPrice} <span className="text-gray-500">Regular</span></span>
                <span className="text-gray-900">{product.memberPrice} <span className="text-gray-500">Member</span></span>
              </div>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-full text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Add to basket
              </button>
            </div>
         </div>
       </div>

    </div>
  );
};