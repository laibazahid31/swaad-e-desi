import React from 'react';
import { OrderProvider, useOrder } from './context/OrderContext';
import { Navbar } from './components/Navbar';
import { GheeOrderingSection } from './components/GheeOrderingSection';
import { Footer } from './components/Footer';
import { DirectOrderModal } from './components/DirectOrderModal';
import { InfoSidebar } from './components/InfoSidebar';

const ToastBanner: React.FC = () => {
  const { toastMessage } = useOrder();
  if (!toastMessage) return null;

  return (
    <div 
      role="status"
      aria-live="polite"
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-[#2C1E14] text-[#FAF7F2] px-4 py-2.5 rounded-full shadow-2xl border border-[#E5B232]/50 text-xs font-medium flex items-center gap-2"
    >
      <span className="w-4 h-4 rounded-full bg-[#E5B232] text-[#2C1E14] flex items-center justify-center font-bold text-[10px]">
        ✓
      </span>
      <span>{toastMessage}</span>
    </div>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C1E14] selection:bg-[#E5B232]/30 selection:text-[#2C1E14]">
      <ToastBanner />
      <Navbar />
      
      {/* On main page: ONLY ghee ordering with exactly 2 WhatsApp order buttons */}
      <main className="flex-1">
        <GheeOrderingSection />
      </main>

      <Footer />

      {/* Direct Order on WhatsApp Modal */}
      <DirectOrderModal />

      {/* Side Bar Drawer for Customer Reviews, Bilona Process, Purity & FAQs */}
      <InfoSidebar />
    </div>
  );
};

export default function App() {
  return (
    <OrderProvider>
      <MainContent />
    </OrderProvider>
  );
}
