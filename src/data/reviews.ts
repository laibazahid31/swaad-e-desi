export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  productBought: string;
  comment: string;
  highlight: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Begum Rehana Tariq',
    city: 'Gulberg III, Lahore',
    rating: 5,
    productBought: 'Desi Swaad Pure Desi Ghee (1kg)',
    comment: 'I grew up in Multan and had forgotten what authentic pure desi ghee smelled like until my daughter ordered Desi Swaad on WhatsApp. When you melt it on a hot paratha, the grain (daana) melts evenly and the fragrant aroma fills the entire house.',
    highlight: 'The aroma brought back memories of pure Multani village taste',
    date: 'September 2026',
  },
  {
    id: 'rev-2',
    name: 'Chef Salman Farooqi',
    city: 'DHA Phase 6, Karachi',
    rating: 5,
    productBought: 'Desi Swaad Pure Desi Ghee (2kg)',
    comment: 'In Karachi, finding pure unadulterated desi ghee that is not cut with cheap dalda or palm oil is nearly impossible. Desi Swaad ghee makes our Sunday morning nihari taste extraordinarily rich. Ordering on WhatsApp 0300 7565856 was quick and hassle-free.',
    highlight: 'Purest desi ghee — zero vanaspati taste, purely danedar',
    date: 'September 2026',
  },
  {
    id: 'rev-3',
    name: 'Dr. Maryam Khan',
    city: 'F-8/2, Islamabad',
    rating: 5,
    productBought: 'Desi Swaad Duo Jars Deal',
    comment: 'As a doctor and nutritionist, I tested this jar at home using both the palm melt test and heat browning test — it cleared both flawlessly. We now use it daily for our family. The packaging is exquisite.',
    highlight: 'Passed home purity tests with flying colors',
    date: 'August 2026',
  },
  {
    id: 'rev-4',
    name: 'Usman Ghani',
    city: 'Bosan Road, Multan',
    rating: 5,
    productBought: 'Desi Swaad Pure Desi Ghee (4kg Family Pack)',
    comment: 'Being in Multan, we know real desi ghee. Desi Swaad is as authentic as it gets. Ordered the 4kg pack for our family. Fast response on WhatsApp and securely packed glass jars.',
    highlight: 'Genuine Multan quality, perfectly crystallized',
    date: 'August 2026',
  },
];
