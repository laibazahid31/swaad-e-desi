import React, { createContext, useContext, useEffect, useState } from 'react';
import { CustomerOrderDetails, Product, ProductVariant } from '../types';
import { PRODUCTS } from '../data/products';
import { buildDirectWhatsAppOrderMessage, generateOrderId, openWhatsApp, STORE_WHATSAPP_NUMBER, DISPLAY_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface OrderContextType {
  whatsappNumber: string;
  displayNumber: string;
  setWhatsappNumber: (num: string) => void;
  
  // Ordering Modal state
  isOrderModalOpen: boolean;
  setIsOrderModalOpen: (open: boolean) => void;
  orderingProduct: Product;
  setOrderingProduct: (product: Product) => void;
  orderingVariant: ProductVariant;
  setOrderingVariant: (variant: ProductVariant) => void;
  orderingQuantity: number;
  setOrderingQuantity: (qty: number) => void;

  // Customer Form Details
  customerDetails: CustomerOrderDetails;
  updateCustomerDetails: (details: Partial<CustomerOrderDetails>) => void;

  // Actions
  startOrder: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  sendWhatsAppOrder: () => void;
  instantWhatsAppChat: (productName?: string) => void;

  // Sidebar State for Reviews & Information
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  activeSidebarTab: 'reviews' | 'process' | 'purity' | 'faqs';
  setActiveSidebarTab: (tab: 'reviews' | 'process' | 'purity' | 'faqs') => void;
  openSidebar: (tab?: 'reviews' | 'process' | 'purity' | 'faqs') => void;
  closeSidebar: () => void;

  // Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const DEFAULT_CUSTOMER: CustomerOrderDetails = {
  fullName: '',
  phone: '',
  city: 'Lahore',
  deliveryAddress: '',
  specialNotes: '',
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [whatsappNumber, setWhatsappNumberState] = useState<string>(() => {
    try {
      return localStorage.getItem('swaad_wa_num') || STORE_WHATSAPP_NUMBER;
    } catch {
      return STORE_WHATSAPP_NUMBER;
    }
  });

  const [orderingProduct, setOrderingProduct] = useState<Product>(PRODUCTS[0]);
  const [orderingVariant, setOrderingVariant] = useState<ProductVariant>(PRODUCTS[0].variants[0]);
  const [orderingQuantity, setOrderingQuantity] = useState<number>(1);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [customerDetails, setCustomerDetails] = useState<CustomerOrderDetails>(() => {
    try {
      const saved = localStorage.getItem('swaad_customer');
      return saved ? { ...DEFAULT_CUSTOMER, ...JSON.parse(saved) } : DEFAULT_CUSTOMER;
    } catch {
      return DEFAULT_CUSTOMER;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('swaad_customer', JSON.stringify(customerDetails));
    } catch {}
  }, [customerDetails]);

  const setWhatsappNumber = (num: string) => {
    setWhatsappNumberState(num);
    try {
      localStorage.setItem('swaad_wa_num', num);
    } catch {}
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const updateCustomerDetails = (details: Partial<CustomerOrderDetails>) => {
    setCustomerDetails((prev) => ({ ...prev, ...details }));
  };

  const startOrder = (product: Product, variant?: ProductVariant, quantity = 1) => {
    setOrderingProduct(product);
    setOrderingVariant(variant || product.variants[0]);
    setOrderingQuantity(quantity);
    setIsOrderModalOpen(true);
  };

  const sendWhatsAppOrder = () => {
    const orderId = generateOrderId();
    const totalPrice = orderingVariant.pricePKR * orderingQuantity;
    const message = buildDirectWhatsAppOrderMessage({
      orderId,
      product: orderingProduct,
      variant: orderingVariant,
      quantity: orderingQuantity,
      customer: customerDetails,
      totalPricePKR: totalPrice,
    });

    setIsOrderModalOpen(false);
    showToast('Opening WhatsApp with your order...');
    openWhatsApp(whatsappNumber, message);
  };

  const instantWhatsAppChat = (productName?: string) => {
    const text = productName
      ? `السلام علیکم! میں Desi Swaad کے ${productName} کا آرڈر دینا چاہتا/چاہتی ہوں۔`
      : 'السلام علیکم Desi Swaad! میں خالص دیسی گھی کا آرڈر دینا چاہتا/چاہتی ہوں۔';
    openWhatsApp(whatsappNumber, text);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSidebarTab, setActiveSidebarTab] = useState<'reviews' | 'process' | 'purity' | 'faqs'>('reviews');

  const openSidebar = (tab: 'reviews' | 'process' | 'purity' | 'faqs' = 'reviews') => {
    setActiveSidebarTab(tab);
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <OrderContext.Provider
      value={{
        whatsappNumber,
        displayNumber: DISPLAY_WHATSAPP_NUMBER,
        setWhatsappNumber,
        isOrderModalOpen,
        setIsOrderModalOpen,
        orderingProduct,
        setOrderingProduct,
        orderingVariant,
        setOrderingVariant,
        orderingQuantity,
        setOrderingQuantity,
        customerDetails,
        updateCustomerDetails,
        startOrder,
        sendWhatsAppOrder,
        instantWhatsAppChat,
        isSidebarOpen,
        setIsSidebarOpen,
        activeSidebarTab,
        setActiveSidebarTab,
        openSidebar,
        closeSidebar,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
