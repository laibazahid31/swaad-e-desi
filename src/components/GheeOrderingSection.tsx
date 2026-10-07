import React, { useState } from 'react';
import { MessageCircle, ShieldCheck, CheckCircle2, Star, Truck, Sparkles, Award, TestTube, CheckCircle } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useOrder } from '../context/OrderContext';
import { formatPKR, DISPLAY_WHATSAPP_NUMBER } from '../utils/whatsapp';
import bannerImg from '../assets/images/desi_swaad_green_banner_1790879189322.jpg';
import emblemImg from '../assets/images/desi_swaad_dark_emblem_1790879140236.jpg';

export const GheeOrderingSection: React.FC = () => {
  const { startOrder, openSidebar } = useOrder();

  const gheeProduct = PRODUCTS[0];
  const duoProduct = PRODUCTS[1];

  const [selectedGheeVariant, setSelectedGheeVariant] = useState(gheeProduct.variants[0]);
  const [gheeQuantity, setGheeQuantity] = useState(1);
  const [duoQuantity, setDuoQuantity] = useState(1);

  const gheeTotal = selectedGheeVariant.pricePKR * gheeQuantity;
  const duoTotal = duoProduct.basePricePKR * duoQuantity;

  return (
    <div className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10 text-left">
      
      {/* BRAND HERO BANNER WITH EMBLEM LOGO */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-[#C28B12]/40 shadow-2xl bg-[#1A3323] text-white">
        {/* Scenic Background Image */}
        <div className="absolute inset-0">
          <img
            src={bannerImg}
            alt="Desi Swaad Punjab Pastures"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14281B] via-[#1A3323]/95 to-[#14281B]/80" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          
          {/* Circular Emblem Artwork */}
          <div className="shrink-0 relative group">
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#E5B232] shadow-2xl bg-[#FAF7F2] p-1 ring-4 ring-[#C28B12]/30">
              <img
                src={emblemImg}
                alt="Desi Swaad Official Seal"
                className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#C28B12] text-[#1A3323] font-bold text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap">
              Traditional Goodness
            </div>
          </div>

          {/* Banner Copy & Pillars */}
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5B232]/20 border border-[#E5B232]/40 text-xs font-semibold text-[#E5B232]">
              <span>✦</span>
              <span>100% Pure Traditional Multan Desi Ghee</span>
              <span>✦</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#FAF7F2] leading-tight">
                Desi Swaad
              </h1>
              <p className="font-urdu text-xl sm:text-2xl text-[#E5B232] mt-1 font-semibold">
                ہر بوند میں اصلی دیسی سواد
              </p>
              <p className="font-serif italic text-base sm:text-lg text-[#E3D6C1] mt-1">
                "Har Boond Mein Asli Desi Swaad"
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#D8CEBE] max-w-xl leading-relaxed">
              Crafted from pure unadulterated fresh butter in Multan using traditional wood-fire slow simmering. 
              Rich golden granular (دانے دار) texture with an authentic village aroma in every jar.
            </p>

            {/* 4 Guarantees from the uploaded badge */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] sm:text-xs font-semibold">
              <div className="bg-white/10 backdrop-blur-xs px-3 py-2 rounded-xl border border-white/15 flex items-center gap-2 text-[#FAF7F2]">
                <Sparkles className="w-4 h-4 text-[#E5B232] shrink-0" />
                <span>100% PURE</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs px-3 py-2 rounded-xl border border-white/15 flex items-center gap-2 text-[#FAF7F2]">
                <Award className="w-4 h-4 text-[#E5B232] shrink-0" />
                <span>100% ORGANIC</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs px-3 py-2 rounded-xl border border-white/15 flex items-center gap-2 text-[#FAF7F2]">
                <TestTube className="w-4 h-4 text-[#E5B232] shrink-0" />
                <span>LAB TESTED</span>
              </div>
              <div className="bg-white/10 backdrop-blur-xs px-3 py-2 rounded-xl border border-white/15 flex items-center gap-2 text-[#FAF7F2]">
                <CheckCircle className="w-4 h-4 text-[#E5B232] shrink-0" />
                <span>MONEY BACK</span>
              </div>
            </div>

            {/* Read Reviews link */}
            <div className="pt-1">
              <button
                onClick={() => openSidebar('reviews')}
                className="inline-flex items-center gap-1.5 text-xs text-[#E5B232] hover:text-white font-semibold underline underline-offset-4 cursor-pointer"
              >
                <Star className="w-3.5 h-3.5 fill-[#E5B232] text-[#E5B232]" />
                <span>Read Customer Reviews & Purity (⭐ 5.0) →</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* The Two Main Products Grid (ONLY 2 Order on WhatsApp Buttons Here) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* PRODUCT 1: DESI SWAAD PURE DESI GHEE (Single Jar with Label) */}
        <div className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl border-2 border-[#C28B12]/40 shadow-xl overflow-hidden flex flex-col justify-between">
          <div>
            {/* Jar Image with Brand Label */}
            <div className="relative aspect-[4/3] sm:aspect-[1/1] max-h-[440px] bg-[#F2ECE1] overflow-hidden">
              <img
                src={gheeProduct.image}
                alt="Desi Swaad Pure Desi Ghee Glass Jar with Black Lid and Granular Texture"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#1A3323]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#E5B232] border border-[#C28B12] shadow-xs flex items-center gap-1.5">
                <span className="text-[#E5B232]">✦</span>
                <span>Naturally Danedar (دانے دار)</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-[#1A3323]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#FAF7F2] border border-[#C28B12] shadow-xs">
                Desi Swaad Signature Bottle
              </div>
            </div>

            {/* Bottle Details */}
            <div className="p-6 sm:p-7 space-y-5">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-[#2E4F38] block mb-1">
                  Single Glass Jar · Multan Handcrafted
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A3323]">
                  {gheeProduct.name}
                </h2>
                <p className="font-urdu text-base text-[#7A5B3E] mt-0.5 font-bold">
                  {gheeProduct.urduName}
                </p>
                <p className="text-xs sm:text-sm text-[#5C4533] mt-2 leading-relaxed">
                  {gheeProduct.shortDescription}
                </p>
              </div>

              {/* Weight Selector: 1 KG, 2 KG, 3 KG, 4 KG */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-bold text-[#7A5B3E] block">
                  Select Weight (1 KG = ₨ 3,500):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {gheeProduct.variants.map((v) => {
                    const isSelected = selectedGheeVariant.id === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedGheeVariant(v)}
                        className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#1A3323] border-[#1A3323] text-[#FAF7F2] shadow-sm scale-[1.02]'
                            : 'bg-white border-[#E3D6C1] text-[#2C1E14] hover:border-[#C28B12]'
                        }`}
                      >
                        <div className="text-sm font-bold">{v.sizeLabel}</div>
                        <div className={`text-xs font-mono font-bold mt-1 ${isSelected ? 'text-[#E5B232]' : 'text-[#7A5B3E]'}`}>
                          {formatPKR(v.pricePKR)}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Stepper */}
              <div className="flex items-center justify-between py-2 border-y border-[#EFE8DC]">
                <span className="text-xs uppercase tracking-wider font-bold text-[#7A5B3E]">
                  Number of Bottles:
                </span>
                <div className="flex items-center border border-[#E3D6C1] rounded-xl bg-white">
                  <button
                    type="button"
                    onClick={() => setGheeQuantity(Math.max(1, gheeQuantity - 1))}
                    aria-label="Decrease quantity"
                    className="w-10 h-10 flex items-center justify-center text-base font-bold text-[#2C1E14] hover:bg-[#F3ECE1] rounded-l-xl cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-sm font-bold font-mono tabular-nums">
                    {gheeQuantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGheeQuantity(gheeQuantity + 1)}
                    aria-label="Increase quantity"
                    className="w-10 h-10 flex items-center justify-center text-base font-bold text-[#2C1E14] hover:bg-[#F3ECE1] rounded-r-xl cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Highlights from Image Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs text-[#3D2E22]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                  <span>100% Pure & Organic</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                  <span>Laboratory Tested</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                  <span>Money Back Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                  <span>Break-Proof Glass Packaging</span>
                </div>
              </div>

            </div>
          </div>

          {/* Place 1: Order on WhatsApp Button */}
          <div className="p-6 bg-[#F6EFE3] border-t border-[#E8DFD1] space-y-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#7A5B3E] font-semibold block">
                  Total Order Price:
                </span>
                <span className="text-2xl sm:text-3xl font-bold font-mono text-[#1A3323] tabular-nums">
                  {formatPKR(gheeTotal)}
                </span>
                <span className="text-xs text-[#7A6451] ml-2 font-medium">
                  ({gheeQuantity} × {selectedGheeVariant.sizeLabel})
                </span>
              </div>
            </div>

            {/* FIRST WHATSAPP BUTTON */}
            <button
              onClick={() => startOrder(gheeProduct, selectedGheeVariant, gheeQuantity)}
              className="w-full min-h-[52px] px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base rounded-2xl shadow-lg shadow-[#25D366]/25 flex items-center justify-center gap-2.5 active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Order on WhatsApp (0300 7565856)</span>
            </button>
          </div>
        </div>

        {/* PRODUCT 2: DESI SWAAD DUO JARS DEAL (Priced ₨ 6,500, 2 Jars with Desi Swaad Label) */}
        <div className="lg:col-span-5 bg-[#FAF7F2] rounded-3xl border-2 border-[#E8DFD1] hover:border-[#C28B12] shadow-xl overflow-hidden flex flex-col justify-between">
          <div>
            {/* Duo Jars Image with Desi Swaad Label */}
            <div className="relative aspect-[4/3] bg-[#F2ECE1] overflow-hidden">
              <img
                src={duoProduct.image}
                alt="Desi Swaad Duo Jars Deal"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#1A3323]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#E5B232] border border-[#C28B12] shadow-xs">
                <span>Special 2 Jars Deal</span>
              </div>
              <div className="absolute top-4 right-4 bg-[#1A3323] text-[#E5B232] px-3.5 py-1 rounded-full text-xs font-mono font-bold shadow-md border border-[#E5B232]/50">
                ₨ 6,500
              </div>
              <div className="absolute bottom-3 right-3 bg-[#1A3323]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#FAF7F2] border border-[#C28B12] shadow-xs">
                Desi Swaad Duo
              </div>
            </div>

            {/* Duo Deal Details */}
            <div className="p-6 space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-[#C28B12] block mb-1">
                  Value Deal · 2 Jars
                </span>
                <h2 className="font-serif font-bold text-2xl text-[#1A3323]">
                  {duoProduct.name}
                </h2>
                <p className="font-urdu text-base text-[#7A5B3E] mt-0.5 font-bold">
                  {duoProduct.urduName}
                </p>
                <p className="text-xs sm:text-sm text-[#5C4533] mt-2 leading-relaxed">
                  Special deal of two full jars of Desi Swaad pure desi ghee. 100% pure, natural, and granular.
                </p>
              </div>

              {/* What's Included */}
              <div className="p-4 bg-[#F2ECE1] rounded-2xl border border-[#E3D6C1] space-y-1.5 text-xs text-[#4A382A]">
                <p className="font-bold text-[#1A3323]">📦 Deal Details:</p>
                <ul className="space-y-1 pl-4 list-disc list-outside text-[#554032]">
                  <li>2× Full Glass Jars with Desi Swaad Label</li>
                  <li>Special combo price: <strong>₨ 6,500</strong> for both jars</li>
                  <li>100% Pure, Organic & Lab-Tested</li>
                  <li>Safe break-proof delivery directly to your doorstep</li>
                </ul>
              </div>

              {/* Quantity Stepper */}
              <div className="flex items-center justify-between py-2 border-y border-[#EFE8DC]">
                <span className="text-xs uppercase tracking-wider font-bold text-[#7A5B3E]">
                  Number of Deals (2 Jars Each):
                </span>
                <div className="flex items-center border border-[#E3D6C1] rounded-xl bg-white">
                  <button
                    type="button"
                    onClick={() => setDuoQuantity(Math.max(1, duoQuantity - 1))}
                    aria-label="Decrease duo quantity"
                    className="w-10 h-10 flex items-center justify-center text-base font-bold text-[#2C1E14] hover:bg-[#F3ECE1] rounded-l-xl cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-sm font-bold font-mono tabular-nums">
                    {duoQuantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setDuoQuantity(duoQuantity + 1)}
                    aria-label="Increase duo quantity"
                    className="w-10 h-10 flex items-center justify-center text-base font-bold text-[#2C1E14] hover:bg-[#F3ECE1] rounded-r-xl cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Place 2: Order on WhatsApp Button */}
          <div className="p-6 bg-[#F6EFE3] border-t border-[#E8DFD1] space-y-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#7A5B3E] font-semibold block">
                  Total Duo Deal Price:
                </span>
                <span className="text-2xl sm:text-3xl font-bold font-mono text-[#1A3323] tabular-nums">
                  {formatPKR(duoTotal)}
                </span>
              </div>
            </div>

            {/* SECOND WHATSAPP BUTTON */}
            <button
              onClick={() => startOrder(duoProduct, duoProduct.variants[0], duoQuantity)}
              className="w-full min-h-[52px] px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base rounded-2xl shadow-lg shadow-[#25D366]/25 flex items-center justify-center gap-2.5 active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Order Duo Deal on WhatsApp (₨ 6,500)</span>
            </button>
          </div>
        </div>

      </div>

      {/* Trust & Courier Reassurance Bar */}
      <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD1] flex flex-wrap items-center justify-between gap-4 text-xs text-[#5C4533]">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-[#2E7D32]" />
          <span><strong>Fast Doorstep Courier Delivery</strong> across Multan, Lahore, Karachi, Islamabad & nationwide</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#C28B12]" />
          <span><strong>100% Breakage-Free Glass Guarantee</strong> · Instant replacement if damaged</span>
        </div>
      </div>

    </div>
  );
};
