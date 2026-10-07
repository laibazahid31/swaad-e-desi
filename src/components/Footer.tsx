import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import { DISPLAY_WHATSAPP_NUMBER } from '../utils/whatsapp';
import emblemImg from '../assets/images/desi_swaad_dark_emblem_1790879140236.jpg';

export const Footer: React.FC = () => {
  const { openSidebar } = useOrder();

  return (
    <footer className="bg-[#14281B] text-[#FAF7F2] pt-12 pb-12 border-t border-[#2A4D35] text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#2A4D35]">
          
          {/* Brand Info with Emblem */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#E5B232] shrink-0 bg-[#FAF7F2]">
                <img
                  src={emblemImg}
                  alt="Desi Swaad Seal"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif text-3xl font-bold tracking-tight text-[#FAF7F2]">
                  Desi Swaad
                </span>
                <p className="font-urdu text-base text-[#E5B232] font-semibold">
                  ہر بوند میں اصلی دیسی سواد
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#C8BCB0] leading-relaxed max-w-md">
              Pure traditional desi ghee prepared from fresh butter in Multan. 
              100% Pure · 100% Organic · Laboratory Tested · Money Back Guarantee.
            </p>

            <p className="text-xs text-[#E5B232] font-semibold">
              Official WhatsApp: <span className="font-mono text-white text-sm font-bold">{DISPLAY_WHATSAPP_NUMBER}</span>
            </p>
          </div>

          {/* Quick Info & Guarantees Trigger */}
          <div className="lg:col-span-6 space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#E5B232]">
              Customer Guarantees & Information
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => openSidebar('reviews')}
                className="px-3 py-2 rounded-xl bg-[#1F3D2A] hover:bg-[#2A4E36] text-white font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Star className="w-3.5 h-3.5 fill-[#E5B232] text-[#E5B232]" />
                <span>View Customer Reviews (⭐ 5.0)</span>
              </button>
              <button
                onClick={() => openSidebar('process')}
                className="px-3 py-2 rounded-xl bg-[#1F3D2A] hover:bg-[#2A4E36] text-white font-medium transition-colors cursor-pointer"
              >
                The Bilona Method
              </button>
              <button
                onClick={() => openSidebar('purity')}
                className="px-3 py-2 rounded-xl bg-[#1F3D2A] hover:bg-[#2A4E36] text-white font-medium transition-colors cursor-pointer"
              >
                Purity & Lab Tests
              </button>
              <button
                onClick={() => openSidebar('faqs')}
                className="px-3 py-2 rounded-xl bg-[#1F3D2A] hover:bg-[#2A4E36] text-white font-medium transition-colors cursor-pointer"
              >
                Frequently Asked Questions
              </button>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#E5B232]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Safe Delivery from Multan to all cities in Pakistan</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Instagram placed directly below @2026 */}
        <div className="pt-6 flex flex-col items-center justify-center text-center gap-1.5 text-xs text-[#A8988B]">
          <p>
            © {new Date().getFullYear()} Desi Swaad. All Rights Reserved. WhatsApp: <strong className="text-white font-mono">{DISPLAY_WHATSAPP_NUMBER}</strong>
          </p>
          <p className="text-xs">
            <a
              href="https://instagram.com/desiswaad.pure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E5B232] hover:text-white font-mono font-medium underline underline-offset-2"
            >
              Instagram: @desiswaad.pure
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
