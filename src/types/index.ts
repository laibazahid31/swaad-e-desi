export interface ProductVariant {
  id: string;
  sizeLabel: string; // e.g. "1 kg", "2 kg", "3 kg", "4 kg"
  weightGrams: number;
  pricePKR: number;
  isPopular?: boolean;
}

export interface Product {
  id: string;
  name: string;
  urduName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  category: 'ghee' | 'duo-box';
  image: string;
  variants: ProductVariant[];
  basePricePKR: number;
  unitLabel: string;
  danedarTextureRating: number;
  highlights: string[];
}

export interface CustomerOrderDetails {
  fullName: string;
  phone: string;
  city: string;
  deliveryAddress: string;
  specialNotes?: string;
}

export interface DirectOrderPayload {
  product: Product;
  variant: ProductVariant;
  quantity: number;
  customer: CustomerOrderDetails;
  totalPricePKR: number;
}
