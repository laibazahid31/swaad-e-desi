import { CustomerOrderDetails, Product, ProductVariant } from '../types';

export const STORE_WHATSAPP_NUMBER = '923007565856';
export const DISPLAY_WHATSAPP_NUMBER = '0300 7565856';

export const formatPKR = (amount: number): string => {
  return `₨ ${amount.toLocaleString('en-PK')}`;
};

export const sanitizeWhatsAppNumber = (phone: string): string => {
  let cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  if (cleaned.startsWith('03')) {
    cleaned = '92' + cleaned.substring(1);
  } else if (cleaned.startsWith('3') && cleaned.length === 10) {
    cleaned = '92' + cleaned;
  }
  return cleaned || STORE_WHATSAPP_NUMBER;
};

export const generateOrderId = (): string => {
  const random = Math.floor(1000 + Math.random() * 9000);
  return `SED-${random}`;
};

export const buildDirectWhatsAppOrderMessage = (params: {
  orderId: string;
  product: Product;
  variant: ProductVariant;
  quantity: number;
  customer: CustomerOrderDetails;
  totalPricePKR: number;
}): string => {
  const { orderId, product, variant, quantity, customer, totalPricePKR } = params;
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-PK', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const lines: string[] = [];

  lines.push('🌿 *آرڈر برائے دیسی سواد | New Order: Desi Swaad* 🌿');
  lines.push('✨ *Har Boond Mein Asli Desi Swaad* ✨');
  lines.push(`📋 *Order ID:* #${orderId}`);
  lines.push(`📅 *Date:* ${dateStr}`);
  lines.push('');
  lines.push('📦 *ORDER DETAILS:*');
  lines.push(`• *Product:* ${product.name}`);
  lines.push(`• *Selected Weight/Pack:* ${variant.sizeLabel}`);
  lines.push(`• *Quantity:* ${quantity} × ${formatPKR(variant.pricePKR)} = *${formatPKR(totalPricePKR)}*`);
  lines.push('');
  lines.push('👤 *CUSTOMER & DELIVERY INFO:*');
  lines.push(`• *Name:* ${customer.fullName || 'To be shared'}`);
  lines.push(`• *Phone:* ${customer.phone || 'To be confirmed'}`);
  lines.push(`• *City:* ${customer.city || 'Pakistan'}`);
  lines.push(`• *Address:* ${customer.deliveryAddress || 'Will share on chat'}`);
  if (customer.specialNotes && customer.specialNotes.trim()) {
    lines.push(`• *Special Instructions:* ${customer.specialNotes.trim()}`);
  }
  lines.push('');
  lines.push('━━━━━━━━━━━━━━━━━━━━');
  lines.push(`💰 *Total Order Price:* *${formatPKR(totalPricePKR)}*`);
  lines.push('━━━━━━━━━━━━━━━━━━━━');
  lines.push('');
  lines.push('_السلام علیکم! میں Desi Swaad سے یہ آرڈر واٹس ایپ پر کنفرم کرنا چاہتا/چاہتی ہوں۔ براہ کرم مجھے اکاؤنٹ و ڈیلیوری شیڈول بتائیں۔ شکریہ!_');

  return lines.join('\n');
};

export const buildQuickChatWhatsAppMessage = (productName?: string): string => {
  if (productName) {
    return `السلام علیکم Desi Swaad! میں "${productName}" کے متعلق آرڈر دینا چاہتا/چاہتی ہوں۔`;
  }
  return 'السلام علیکم Desi Swaad! میں خالص دیسی گھی کا آرڈر دینا چاہتا/چاہتی ہوں۔';
};

export const openWhatsApp = (phone: string, text: string) => {
  const sanitized = sanitizeWhatsAppNumber(phone);
  const encoded = encodeURIComponent(text);
  const waUrl = `https://wa.me/${sanitized}?text=${encoded}`;

  const win = window.open(waUrl, '_blank', 'noopener,noreferrer');
  if (!win) {
    window.location.href = waUrl;
  }
};
