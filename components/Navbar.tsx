import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (page: string) => void;
  variant?: 'transparent' | 'solid';
}

const navLinks = [
  "New", "Furniture", "Bathroom", "Lighting", "Rugs & Textiles", 
  "Mirrors & Decor", "Outdoor", "Dining", "Fragrance", "Art", "Gifting", 
  "Sale", "Interior Design"
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, variant = 'transparent' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (link: string) => {
    if (activeDropdown === link) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(link);
    }
  };

  const handleLinkClick = (link: string) => {
    if (link === 'New') {
      toggleDropdown(link);
    } else if (onNavigate) {
      setActiveDropdown(null);
      // Convert link name to slug format for navigation
      const slug = link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
      onNavigate(slug);
    }
  };

  const handleSubLinkClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    setActiveDropdown(null);
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // Determine styles based on variant and state
  const isSolid = variant === 'solid' || activeDropdown !== null || isScrolled;
  const headerClasses = isSolid 
    ? 'bg-white text-black shadow-sm' 
    : 'bg-transparent text-white hover:bg-white hover:text-black';

  return (
    <div className="flex flex-col w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300" onMouseLeave={() => setActiveDropdown(null)}>
      {/* Announcement Bar */}
      <div className="bg-black text-white text-[10px] uppercase tracking-widest text-center py-2 px-4 font-sans font-medium relative z-[60]">
        Order large items by Sunday 14 December for Christmas delivery
      </div>

      {/* Main Header */}
      <header 
        className={`relative w-full transition-all duration-300 z-50 group ${headerClasses}`}
      >
        <div className="max-w-[1920px] mx-auto px-6 py-5 flex items-center justify-between relative">
          
          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>

          {/* Logo */}
          <div 
            className="text-2xl font-serif tracking-widest uppercase font-bold lg:mr-8 cursor-pointer"
            onClick={() => onNavigate && onNavigate('home')}
          >
            Soho Home
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 flex-1">
            {navLinks.map((link) => (
              <button 
                key={link} 
                onClick={() => handleLinkClick(link)}
                className={`text-[11px] xl:text-[12px] uppercase tracking-wide font-sans hover:text-gray-500 transition-colors whitespace-nowrap pb-1 border-b-2 ${activeDropdown === link ? 'border-black' : 'border-transparent'}`}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Search size={18} className="cursor-pointer hover:text-gray-500" />
            <User size={18} className="hidden sm:block cursor-pointer hover:text-gray-500" />
            <Heart size={18} className="hidden sm:block cursor-pointer hover:text-gray-500" />
            <ShoppingBag size={18} className="cursor-pointer hover:text-gray-500" />
            <button className={`hidden sm:block text-[11px] uppercase tracking-widest px-6 py-2 rounded-full font-sans transition-colors ${isSolid ? 'bg-black text-white' : 'bg-[#1c1c1c] text-white group-hover:bg-black'}`}>
              Membership
            </button>
          </div>
        </div>

        {/* Mega Menu Content */}
        {activeDropdown === 'New' && (
          <div className="absolute top-full left-0 w-full bg-white text-black border-t border-gray-100 shadow-lg animate-in fade-in slide-in-from-top-1 duration-200">
            <div className="max-w-[1920px] mx-auto px-6 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Column 1: Links */}
                <div className="lg:col-span-2">
                  <a 
                    href="#" 
                    onClick={(e) => handleSubLinkClick(e, 'new-arrivals')}
                    className="block text-base font-serif mb-6 hover:underline"
                  >
                    View All New Arrivals
                  </a>
                  <div className="space-y-4">
                    {['Furniture', 'Bathroom', 'Rugs & Textiles', 'Lighting', 'Mirrors & Decor'].map(category => (
                      <a 
                        key={category} 
                        href="#" 
                        onClick={(e) => handleSubLinkClick(e, category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))}
                        className="block text-sm font-sans text-gray-800 hover:text-black hover:underline decoration-1 underline-offset-4"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 2: Featured Image 1 */}
                <div className="lg:col-span-5">
                   <div 
                     className="aspect-[16/10] overflow-hidden bg-gray-100 mb-6 cursor-pointer"
                     onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('interiors'); setActiveDropdown(null); }}
                   >
                     <img 
                       src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop" 
                       alt="Interiors by Soho House" 
                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                     />
                   </div>
                   <h3 className="text-2xl font-serif mb-2">New collection, Interiors by Soho House</h3>
                   <a 
                    href="#" 
                    onClick={(e) => handleSubLinkClick(e, 'interiors')}
                    className="text-xs font-bold font-sans uppercase tracking-widest border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600"
                   >
                     Discover the rooms
                   </a>
                </div>

                {/* Column 3: Featured Image 2 */}
                <div className="lg:col-span-5">
                   <div 
                    className="aspect-[16/10] overflow-hidden bg-gray-100 mb-6 cursor-pointer"
                    onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('new-arrivals'); setActiveDropdown(null); }}
                   >
                     <img 
                       src="https://images.unsplash.com/photo-1595514020175-1c863c3d550b?q=80&w=1200&auto=format&fit=crop" 
                       alt="New Arrivals" 
                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                     />
                   </div>
                   <a href="#" onClick={(e) => handleSubLinkClick(e, 'new-arrivals')}>
                    <h3 className="text-2xl font-serif hover:underline">View All New Arrivals</h3>
                   </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[70] overflow-y-auto text-black">
          <div className="flex justify-between items-center p-6 border-b">
            <span className="text-xl font-serif uppercase tracking-widest">Menu</span>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-lg font-serif text-gray-800">{link}</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};