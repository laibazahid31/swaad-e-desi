import { Product } from '../types';
import singleJarImg from '../assets/images/desi_swaad_black_bottle_1791396149583.jpg';
import duoJarsImg from '../assets/images/desi_swaad_duo_black_jars_1791396160910.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'desi-swaad-ghee',
    name: 'Desi Swaad Pure Desi Ghee',
    urduName: 'دیسی سواد — خالص دیسی گھی',
    tagline: 'Har Boond Mein Asli Desi Swaad · 100% Pure & Organic',
    shortDescription: 'Pure traditional desi ghee prepared from fresh cultured butter in Multan. Rich golden granular (دانے دار) texture with an authentic village aroma in every drop.',
    fullDescription: 'Our signature Desi Swaad Pure Desi Ghee. Handcrafted using traditional slow wood-fire simmering so that natural milk solids caramelize to perfection, yielding an authentic golden danedar texture and rich traditional fragrance. 100% Pure, 100% Organic, Laboratory Tested with Money Back Guarantee.',
    category: 'ghee',
    image: singleJarImg,
    basePricePKR: 3500,
    unitLabel: 'per kg',
    danedarTextureRating: 5,
    highlights: [
      '100% Pure & 100% Organic',
      'Har Boond Mein Asli Desi Swaad',
      'Laboratory Tested · Money Back Guarantee',
      'Naturally Danedar (دانے دار) Grain',
      'Zero Dalda, Zero Palm Oil, Zero Chemicals',
      'Safe Break-Proof Glass Jar Delivery'
    ],
    variants: [
      {
        id: 'ghee-1kg',
        sizeLabel: '1 Kilogram',
        weightGrams: 1000,
        pricePKR: 3500,
        isPopular: true,
      },
      {
        id: 'ghee-2kg',
        sizeLabel: '2 Kilograms',
        weightGrams: 2000,
        pricePKR: 7000,
        isPopular: false,
      },
      {
        id: 'ghee-3kg',
        sizeLabel: '3 Kilograms',
        weightGrams: 3000,
        pricePKR: 10500,
        isPopular: false,
      },
      {
        id: 'ghee-4kg',
        sizeLabel: '4 Kilograms',
        weightGrams: 4000,
        pricePKR: 14000,
        isPopular: false,
      },
    ],
  },
  {
    id: 'desi-swaad-duo-jars',
    name: 'Desi Swaad Duo Jars Deal',
    urduName: 'دیسی سواد 2 جار ڈیل',
    tagline: 'Special Deal: 2 Pure Desi Ghee Jars for ₨ 6,500',
    shortDescription: 'Special value deal of two full jars of Desi Swaad pure desi ghee. 100% pure, unadulterated, and laboratory tested.',
    fullDescription: 'Special deal featuring two full jars of our signature Desi Swaad pure desi ghee. Pure traditional ghee prepared with zero chemicals, zero palm oil, and zero preservatives. Pure wholesome nutrition for your family.',
    category: 'duo-box',
    image: duoJarsImg,
    basePricePKR: 6500,
    unitLabel: 'for 2 jars',
    danedarTextureRating: 5,
    highlights: [
      'Deal of 2 Pure Desi Ghee Jars',
      'Special Price: ₨ 6,500 for Both Jars',
      '100% Pure & 100% Organic',
      'Har Boond Mein Asli Desi Swaad',
      'Safe Break-Proof Courier Delivery Across Pakistan'
    ],
    variants: [
      {
        id: 'duo-jars-standard',
        sizeLabel: '2 Jars Deal',
        weightGrams: 2000,
        pricePKR: 6500,
        isPopular: true,
      },
    ],
  },
];
