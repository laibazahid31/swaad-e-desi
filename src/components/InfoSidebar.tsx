import React from 'react';
import { X, Star, ShieldCheck, MapPin, Sparkles, Award, TestTube, CheckCircle } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import { TESTIMONIALS } from '../data/reviews';
import { FAQS } from '../data/faqs';
import { DISPLAY_WHATSAPP_NUMBER } from '../utils/whatsapp';
import processImg from '../assets/images/craft_bilona_process_1790799793187.jpg';
import emblemImg from '../assets/images/desi_swaad_dark_emblem_1790879140236.jpg';

export const InfoSidebar: React.FC = () => {
  const { isSidebarOpen, closeSidebar, activeSidebarTab, setActiveSidebarTab } = useOrder();

  if (!isSidebarOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden bg-[#2C1E14]/75 backdrop-blur-sm flex justify-end"
      onClick={closeSidebar}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="w-full max-w-lg bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between border-l border-[#E8DFD1] text-left transform transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Header with Emblem */}
        <div className="p-4 sm:p-5 border-b border-[#E8DFD1] bg-[#FAF7F2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C28B12] shrink-0 bg-[#FAF7F2]">
              <img
                src={emblemImg}
                alt="Desi Swaad Emblem"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-[#1A3323]">
                Desi Swaad
              </h2>
              <p className="text-[11px] text-[#7A5B3E] font-medium">
                Har Boond Mein Asli Desi Swaad · {DISPLAY_WHATSAPP_NUMBER}
              </p>
            </div>
          </div>
          <button
            onClick={closeSidebar}
            aria-label="Close sidebar"
            className="p-2 text-[#7A6451] hover:text-[#2C1E14] hover:bg-[#F3ECE1] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Tabs */}
        <div className="bg-[#F0E8DC] p-1.5 border-b border-[#E8DFD1] grid grid-cols-4 gap-1 text-center text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveSidebarTab('reviews')}
            className={`py-2 px-1 rounded-xl transition-all cursor-pointer ${
              activeSidebarTab === 'reviews'
                ? 'bg-[#2C1E14] text-[#FAF7F2] shadow-xs'
                : 'text-[#5C4533] hover:text-[#2C1E14]'
            }`}
          >
            ⭐ Reviews
          </button>
          <button
            type="button"
            onClick={() => setActiveSidebarTab('process')}
            className={`py-2 px-1 rounded-xl transition-all cursor-pointer ${
              activeSidebarTab === 'process'
                ? 'bg-[#2C1E14] text-[#FAF7F2] shadow-xs'
                : 'text-[#5C4533] hover:text-[#2C1E14]'
            }`}
          >
            🏺 Bilona
          </button>
          <button
            type="button"
            onClick={() => setActiveSidebarTab('purity')}
            className={`py-2 px-1 rounded-xl transition-all cursor-pointer ${
              activeSidebarTab === 'purity'
                ? 'bg-[#2C1E14] text-[#FAF7F2] shadow-xs'
                : 'text-[#5C4533] hover:text-[#2C1E14]'
            }`}
          >
            🛡️ Purity
          </button>
          <button
            type="button"
            onClick={() => setActiveSidebarTab('faqs')}
            className={`py-2 px-1 rounded-xl transition-all cursor-pointer ${
              activeSidebarTab === 'faqs'
                ? 'bg-[#2C1E14] text-[#FAF7F2] shadow-xs'
                : 'text-[#5C4533] hover:text-[#2C1E14]'
            }`}
          >
            ❓ FAQs
          </button>
        </div>

        {/* Scrollable Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          
          {/* TAB 1: CUSTOMER REVIEWS */}
          {activeSidebarTab === 'reviews' && (
            <div className="space-y-4">
              <div className="border-b border-[#EFE8DC] pb-3">
                <span className="text-xs uppercase tracking-widest font-bold text-[#8C6D53]">Verified Buyer Feedback</span>
                <h3 className="font-serif font-bold text-xl text-[#2C1E14] mt-0.5">
                  What Our Customers Say
                </h3>
                <p className="text-xs text-[#5C4533]">
                  Real reviews from families across Multan, Lahore, Karachi, and Islamabad.
                </p>
              </div>

              <div className="space-y-3.5">
                {TESTIMONIALS.map((rev) => (
                  <div key={rev.id} className="bg-white p-4 rounded-2xl border border-[#E8DFD1] shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#C28B12] gap-0.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#C28B12]" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#8C6D53]">{rev.date}</span>
                    </div>

                    <p className="font-serif italic text-sm font-semibold text-[#2C1E14]">
                      "{rev.highlight}"
                    </p>

                    <p className="text-xs text-[#554032] leading-relaxed">
                      {rev.comment}
                    </p>

                    <div className="pt-2 border-t border-[#F2ECE1] flex items-center justify-between text-[11px] text-[#7A6451]">
                      <div>
                        <strong className="text-[#2C1E14] font-medium">{rev.name}</strong>
                        <div className="flex items-center gap-1 text-[10px] mt-0.5">
                          <MapPin className="w-3 h-3 text-[#C28B12]" />
                          <span>{rev.city}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-[#2E4F38] uppercase tracking-wider">
                        {rev.productBought}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: THE BILONA PROCESS */}
          {activeSidebarTab === 'process' && (
            <div className="space-y-4">
              <div className="border-b border-[#EFE8DC] pb-3">
                <span className="text-xs uppercase tracking-widest font-bold text-[#8C6D53]">Ancestral Craftsmanship</span>
                <h3 className="font-serif font-bold text-xl text-[#2C1E14] mt-0.5">
                  The Traditional Bilona Method
                </h3>
                <p className="text-xs text-[#5C4533]">
                  Handcrafted in Multan following centuries-old village techniques.
                </p>
              </div>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[#E8DFD1] shadow-xs">
                <img
                  src={processImg}
                  alt="Traditional Bilona Process Multan"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="bg-white p-3.5 rounded-xl border border-[#E8DFD1] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#C28B12] text-white flex items-center justify-center font-bold text-xs">1</span>
                    <h4 className="font-serif font-bold text-sm text-[#2C1E14]">Fresh Multan Pasture Milk</h4>
                  </div>
                  <p className="text-xs text-[#5C4533] pl-8">
                    Whole unadulterated milk collected at dawn from pasture-grazed cattle in Multan.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#E8DFD1] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#C28B12] text-white flex items-center justify-center font-bold text-xs">2</span>
                    <h4 className="font-serif font-bold text-sm text-[#2C1E14]">Clay Pot Fermentation (Dahi)</h4>
                  </div>
                  <p className="text-xs text-[#5C4533] pl-8">
                    Milk is boiled gently and curdled overnight into pure natural yogurt in earthenware pots.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#E8DFD1] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#C28B12] text-white flex items-center justify-center font-bold text-xs">3</span>
                    <h4 className="font-serif font-bold text-sm text-[#2C1E14]">Wooden Madhani Churning</h4>
                  </div>
                  <p className="text-xs text-[#5C4533] pl-8">
                    Curd is churned bidirectionally with wooden churners to extract golden cultured butter (Makhan).
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#E8DFD1] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#C28B12] text-white flex items-center justify-center font-bold text-xs">4</span>
                    <h4 className="font-serif font-bold text-sm text-[#2C1E14]">Slow Wood-Fire Simmering</h4>
                  </div>
                  <p className="text-xs text-[#5C4533] pl-8">
                    Makhan is simmered over low embers until water evaporates and milk solids caramelize to produce the golden danedar aroma.
                  </p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#E8DFD1] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#C28B12] text-white flex items-center justify-center font-bold text-xs">5</span>
                    <h4 className="font-serif font-bold text-sm text-[#2C1E14]">Muslin Filtering into Glass Jars</h4>
                  </div>
                  <p className="text-xs text-[#5C4533] pl-8">
                    Double-strained into sanitized glass containers where it slowly crystallizes naturally.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PURITY & TESTS */}
          {activeSidebarTab === 'purity' && (
            <div className="space-y-4">
              <div className="border-b border-[#EFE8DC] pb-3">
                <span className="text-xs uppercase tracking-widest font-bold text-[#7A5B3E]">Zero Compromise</span>
                <h3 className="font-serif font-bold text-xl text-[#1A3323] mt-0.5">
                  100% Purity & Lab Guarantee
                </h3>
                <p className="text-xs text-[#5C4533]">
                  How to test Desi Swaad purity on your kitchen counter.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-2xl border border-[#E8DFD1] space-y-1.5">
                  <span className="text-[10px] font-bold text-[#C28B12] uppercase tracking-wider">Test 01</span>
                  <h4 className="font-serif font-bold text-base text-[#2C1E14]">The Palm Melt Test</h4>
                  <p className="text-xs text-[#554032] leading-relaxed">
                    Place a drop of ghee on your palm. Pure desi ghee melts immediately at human body temperature (37°C). Adulterated ghee with palm oil or vanaspati remains pasty.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#E8DFD1] space-y-1.5">
                  <span className="text-[10px] font-bold text-[#C28B12] uppercase tracking-wider">Test 02</span>
                  <h4 className="font-serif font-bold text-base text-[#2C1E14]">The Quick Heat Test</h4>
                  <p className="text-xs text-[#554032] leading-relaxed">
                    Melt a teaspoon in a pan over low heat. Pure Multan bilona ghee turns light golden-brown with a sweet roasted fragrance in seconds. Fake ghee leaves yellow grease.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#E8DFD1] space-y-1.5">
                  <span className="text-[10px] font-bold text-[#C28B12] uppercase tracking-wider">Test 03</span>
                  <h4 className="font-serif font-bold text-base text-[#2C1E14]">The Iodine / Starch Test</h4>
                  <p className="text-xs text-[#554032] leading-relaxed">
                    Add two drops of iodine to melted ghee. If adulterated with boiled potato or starch, it turns purple. Desi Swaad stays pure golden amber.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-[#EAF2EC] rounded-2xl border border-[#C6DCB9] text-xs text-[#1E3625] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2E7D32] shrink-0" />
                <span>Zero Dalda, zero palm oil, zero chemical bleaching agents.</span>
              </div>
            </div>
          )}

          {/* TAB 4: FAQS */}
          {activeSidebarTab === 'faqs' && (
            <div className="space-y-4">
              <div className="border-b border-[#EFE8DC] pb-3">
                <span className="text-xs uppercase tracking-widest font-bold text-[#8C6D53]">Help & Assistance</span>
                <h3 className="font-serif font-bold text-xl text-[#2C1E14] mt-0.5">
                  Frequently Asked Questions
                </h3>
                <p className="text-xs text-[#5C4533]">
                  Everything about ordering, glass packaging & delivery.
                </p>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, i) => (
                  <div key={i} className="bg-white p-3.5 rounded-xl border border-[#E8DFD1] space-y-1">
                    <h4 className="font-serif font-bold text-sm text-[#2C1E14]">
                      {faq.question}
                    </h4>
                    <p className="text-xs text-[#554032] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Sidebar Simple Footer */}
        <div className="p-4 sm:p-5 border-t border-[#E8DFD1] bg-[#FAF7F2] text-center">
          <button
            onClick={closeSidebar}
            className="w-full py-2.5 px-4 rounded-xl bg-[#2C1E14] text-[#FAF7F2] text-xs font-semibold hover:bg-[#3D2B1D] cursor-pointer"
          >
            Close & Back to Ghee Ordering
          </button>
        </div>

      </div>
    </div>
  );
};
