export interface FAQItem {
  question: string;
  answer: string;
  category: 'ordering' | 'purity' | 'shipping' | 'usage';
}

export const FAQS: FAQItem[] = [
  {
    category: 'ordering',
    question: 'How does WhatsApp ordering work without online payment?',
    answer: 'It is designed to be completely hassle-free! You select your preferred jars and sizes and enter your delivery address. When you tap "Order on WhatsApp", your WhatsApp opens automatically with an itemized order receipt. Our customer support team acknowledges your message, confirms your delivery details, and dispatches your order.',
  },
  {
    category: 'ordering',
    question: 'Do I need to sign up or create an account to place an order?',
    answer: 'Not at all! There is no login, no password, and no complicated checkout forms. You can place your order in under 60 seconds directly from your phone.',
  },
  {
    category: 'shipping',
    question: 'How do you safely ship glass jars across Pakistan?',
    answer: 'We pack each heavy-duty glass jar in thick shock-absorbing honeycomb air cushions and custom corrugated safety boxes. We guarantee 100% leak-proof and break-free transit via trusted courier partners. If any jar is damaged in transit, we replace it instantly at zero cost.',
  },
  {
    category: 'shipping',
    question: 'What are the delivery charges and delivery times?',
    answer: 'We deliver nationwide across Pakistan. Deliveries in Lahore, Islamabad, and Rawalpindi typically take 24–48 hours; Karachi, Peshawar, Multan, and other cities take 2–3 business days.',
  },
  {
    category: 'purity',
    question: 'How is Desi Swaad different from commercial supermarket ghee?',
    answer: 'Commercial ghee is often made by skimming raw cream using industrial centrifuges and boiling it with chemical clarifiers, or blended with hydrogenated palm oil. Desi Swaad uses traditional methods: cultured milk butter slow-simmered over low wood embers. This produces natural granular (danedar) texture, high butyric acid, and authentic aroma.',
  },
  {
    category: 'purity',
    question: 'How can I test the purity of Desi Swaad at home?',
    answer: '1. Palm Test: Put half a teaspoon on your palm; genuine desi ghee melts instantly at human body temperature (37°C). 2. Heat Test: Melt a spoonful in a pan; pure ghee turns golden brown quickly with sweet roasted aroma.',
  },
  {
    category: 'usage',
    question: 'What is the shelf life and how should I store it?',
    answer: 'Pure desi ghee naturally resists spoilage without refrigeration! Desi Swaad has a shelf life of 12 months at room temperature. Keep it in a dry cupboard away from direct stove heat. Keep water away and always use a clean, dry spoon.',
  },
];
