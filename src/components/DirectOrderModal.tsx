import React, { useState } from 'react';
import { X, MessageCircle, Check, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import { formatPKR, DISPLAY_WHATSAPP_NUMBER } from '../utils/whatsapp';
import emblemImg from '../assets/images/desi_swaad_dark_emblem_1790879140236.jpg';

const POPULAR_PAKISTANI_CITIES = [
  'Lahore',
  'Karachi',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Multan',
  'Peshawar',
  'Gujranwala',
  'Sialkot',
  'Quetta',
];

export const DirectOrderModal: React.FC = () => {
  const {
    isOrderModalOpen,
    setIsOrderModalOpen,
    orderingProduct,
    orderingVariant,
    setOrderingVariant,
    orderingQuantity,
    setOrderingQuantity,
    customerDetails,
    updateCustomerDetails,
    sendWhatsAppOrder,
    instantWhatsAppChat,
  } = useOrder();

  const [customCityMode, setCustomCityMode] = useState(!POPULAR_PAKISTANI_CITIES.includes(customerDetails.city));

  if (!isOrderModalOpen) return null;

  const currentTotal = orderingVariant.pricePKR * orderingQuantity;

  const handleCitySelect = (city: string) => {
    updateCustomerDetails({ city });
    setCustomCityMode(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-[#2C1E14]/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 text-left"
      role="dialog"
      aria-modal="true"
      onClick={() => setIsOrderModalOpen(false)}
    >
      <div 
        className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full border border-[#E8DFD1] shadow-2xl overflow-hidden relative my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 border-b border-[#E8DFD1] bg-[#FAF7F2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C28B12] shrink-0 bg-[#FAF7F2]">
              <img
                src={emblemImg}
                alt="Desi Swaad Emblem"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-[#1A3323]">
                Desi Swaad — Order on WhatsApp
              </h2>
              <p className="text-[11px] text-[#7A6451]">
                Har Boond Mein Asli Desi Swaad · <span className="font-semibold text-[#1A3323]">{DISPLAY_WHATSAPP_NUMBER}</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOrderModalOpen(false)}
            aria-label="Close modal"
            className="p-2 text-[#7A6451] hover:text-[#2C1E14] hover:bg-[#F3ECE1] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Summary & Weight/Qty Selector */}
        <div className="p-4 sm:p-5 space-y-4 max-h-[75vh] overflow-y-auto">
          
          {/* Chosen Product Bar */}
          <div className="bg-white p-3.5 rounded-2xl border border-[#E8DFD1] flex gap-3.5 items-center">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#F2ECE1] shrink-0 border border-[#EFE8DC]">
              <img
                src={orderingProduct.image}
                alt={orderingProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-[#2E4F38] font-bold block">
                Selected Item
              </span>
              <h3 className="font-serif font-bold text-base text-[#2C1E14] truncate">
                {orderingProduct.name}
              </h3>
              <p className="font-urdu text-xs text-[#8C6D53]">
                {orderingProduct.urduName}
              </p>
            </div>
          </div>

          {/* Size / Weight Selector (1kg, 2kg, 3kg, 4kg) */}
          {orderingProduct.variants.length > 1 && (
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#8C6D53] block">
                Choose Weight / Quantity:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {orderingProduct.variants.map((v) => {
                  const isSelected = orderingVariant.id === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setOrderingVariant(v)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#2C1E14] bg-[#2C1E14] text-[#FAF7F2] shadow-sm'
                          : 'border-[#E3D6C1] bg-white text-[#2C1E14] hover:border-[#C28B12]'
                      }`}
                    >
                      <div className="text-xs font-bold">{v.sizeLabel}</div>
                      <div className={`text-xs font-mono font-semibold mt-0.5 ${isSelected ? 'text-[#E5B232]' : 'text-[#8C6D53]'}`}>
                        {formatPKR(v.pricePKR)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity Stepper */}
          <div className="flex items-center justify-between py-2 border-y border-[#EFE8DC]">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8C6D53]">
              Number of Jars / Packs:
            </span>
            <div className="flex items-center border border-[#E3D6C1] rounded-xl bg-white">
              <button
                type="button"
                onClick={() => setOrderingQuantity(Math.max(1, orderingQuantity - 1))}
                aria-label="Decrease quantity"
                className="w-9 h-9 flex items-center justify-center text-sm font-bold text-[#2C1E14] hover:bg-[#F3ECE1] rounded-l-xl cursor-pointer"
              >
                -
              </button>
              <span className="w-10 text-center text-sm font-bold font-mono tabular-nums">
                {orderingQuantity}
              </span>
              <button
                type="button"
                onClick={() => setOrderingQuantity(orderingQuantity + 1)}
                aria-label="Increase quantity"
                className="w-9 h-9 flex items-center justify-center text-sm font-bold text-[#2C1E14] hover:bg-[#F3ECE1] rounded-r-xl cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Quick Delivery Details Form */}
          <div className="space-y-3 pt-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#2C1E14]">
              <MapPin className="w-3.5 h-3.5 text-[#C28B12]" />
              <span>Your Delivery Details (Takes 20 seconds):</span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5C4533] mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                value={customerDetails.fullName}
                onChange={(e) => updateCustomerDetails({ fullName: e.target.value })}
                placeholder="e.g. Fatima Ali / Muhammad Raza"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8CEBE] rounded-xl focus:outline-none focus:border-[#C28B12] text-[#2C1E14]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5C4533] mb-1">
                Your WhatsApp Phone Number
              </label>
              <input
                type="tel"
                value={customerDetails.phone}
                onChange={(e) => updateCustomerDetails({ phone: e.target.value })}
                placeholder="e.g. 0300 1234567"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8CEBE] rounded-xl focus:outline-none focus:border-[#C28B12] text-[#2C1E14]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5C4533] mb-1">
                Delivery City
              </label>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {POPULAR_PAKISTANI_CITIES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => handleCitySelect(c)}
                    className={`px-2.5 py-1 text-xs rounded-lg transition-colors cursor-pointer ${
                      customerDetails.city === c && !customCityMode
                        ? 'bg-[#2C1E14] text-white font-medium'
                        : 'bg-[#F2ECE1] text-[#5C4533] hover:bg-[#E8DFD1]'
                    }`}
                  >
                    {c}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setCustomCityMode(true)}
                  className={`px-2.5 py-1 text-xs rounded-lg transition-colors cursor-pointer ${
                    customCityMode
                      ? 'bg-[#2C1E14] text-white font-medium'
                      : 'bg-[#F2ECE1] text-[#5C4533] hover:bg-[#E8DFD1]'
                  }`}
                >
                  Other
                </button>
              </div>

              {customCityMode && (
                <input
                  type="text"
                  value={customerDetails.city}
                  onChange={(e) => updateCustomerDetails({ city: e.target.value })}
                  placeholder="Type your city in Pakistan..."
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#D8CEBE] rounded-xl focus:outline-none focus:border-[#C28B12] text-[#2C1E14]"
                />
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5C4533] mb-1">
                Complete Delivery Address
              </label>
              <textarea
                rows={2}
                value={customerDetails.deliveryAddress}
                onChange={(e) => updateCustomerDetails({ deliveryAddress: e.target.value })}
                placeholder="House / Apartment #, Street, Area landmark..."
                className="w-full px-3.5 py-2 text-sm bg-white border border-[#D8CEBE] rounded-xl focus:outline-none focus:border-[#C28B12] text-[#2C1E14]"
              />
            </div>
          </div>

          {/* Purity & Transit Guarantee */}
          <div className="p-3 bg-[#F0E6D5] rounded-xl border border-[#E3D6C1] flex items-center gap-2 text-xs text-[#5C4533]">
            <ShieldCheck className="w-4 h-4 text-[#2E4F38] shrink-0" />
            <span>100% Break-Proof Glass Jar Packaging · Fresh Small Batch Churned</span>
          </div>

        </div>

        {/* Modal Sticky Footer */}
        <div className="p-4 sm:p-5 border-t border-[#E8DFD1] bg-[#FAF7F2] space-y-2.5">
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-wider text-[#8C6D53] font-semibold">
              Total Order Price:
            </span>
            <span className="text-xl font-bold font-mono text-[#2C1E14] tabular-nums">
              {formatPKR(currentTotal)}
            </span>
          </div>

          {/* Primary Action Button: Large ergonomic WhatsApp CTA */}
          <button
            type="button"
            onClick={sendWhatsAppOrder}
            className="w-full min-h-[50px] px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25 active:scale-[0.98] transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Send Order to WhatsApp ({DISPLAY_WHATSAPP_NUMBER})</span>
          </button>

          {/* Direct Instant Chat Fallback */}
          <button
            type="button"
            onClick={() => {
              setIsOrderModalOpen(false);
              instantWhatsAppChat(orderingProduct.name);
            }}
            className="w-full py-2 text-center text-xs text-[#5C4533] hover:text-[#2C1E14] font-medium transition-colors cursor-pointer"
          >
            Or tap here to directly message us without filling the form →
          </button>
        </div>

      </div>
    </div>
  );
};
