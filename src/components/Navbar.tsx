import React from 'react';
import { Star, Menu } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import emblemImg from '../assets/images/desi_swaad_dark_emblem_1790879140236.jpg';

export const Navbar: React.FC = () => {
  const { openSidebar } = useOrder();

  return (
    <>
      {/* Top Announcement Ribbon */}
      <div className="bg-[#1A3323] text-[#FAF7F2] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#2A4D35]">
        <span className="text-[#E5B232]">✦</span>
        <span>
          <strong>Desi Swaad</strong> · Har Boond Mein Asli Desi Swaad · WhatsApp: <strong>0300 7565856</strong>
        </span>
        <span className="hidden sm:inline text-[#E5B232]">✦</span>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD1] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo with Circular Emblem Badge */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-3 text-left"
            >
              {/* Circular Emblem Image from User's Design */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#C28B12] shadow-md shrink-0 bg-[#FAF7F2]">
                <img
                  src={emblemImg}
                  alt="Desi Swaad Pure Desi Ghee Logo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A3323] group-hover:text-[#C28B12] transition-colors leading-none">
                  Desi Swaad
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-wide text-[#7A5B3E] font-medium mt-1">
                  Har Boond Mein Asli Desi Swaad · <span className="font-urdu font-bold text-[#1A3323]">دیسی سواد</span>
                </span>
              </div>
            </a>
          </div>

          {/* Customer Reviews & Process Trigger */}
          <button
            onClick={() => openSidebar('reviews')}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-semibold text-[#1A3323] bg-[#EAF2EC] hover:bg-[#D5E5D8] rounded-xl border border-[#BBD4C2] transition-colors cursor-pointer"
            aria-label="Open Customer Reviews and Information"
          >
            <Star className="w-3.5 h-3.5 fill-[#C28B12] text-[#C28B12]" />
            <span className="hidden sm:inline">Purity Guarantees & Reviews</span>
            <span className="sm:hidden">Guarantees</span>
            <Menu className="w-3.5 h-3.5 ml-1 text-[#4A6B53]" />
          </button>

        </div>
      </header>
    </>
  );
};
