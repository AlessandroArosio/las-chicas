import type { LucideIcon } from 'lucide-react';
import { Building2, Home, Key, Sparkles } from 'lucide-react';
import { images } from '../config/site';

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: number;
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  desc: string;
  img: string;
  imgAlt: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  body: string[];
  faqs: ServiceFaq[];
}

export const servicesData: Service[] = [
  {
    id: 1,
    slug: 'domestic-cleaning-edinburgh',
    icon: Home,
    title: 'Domestic Cleaning',
    short: 'Edinburgh homes & flats',
    desc: 'Reliable weekly or fortnightly cleaning. Vetted local staff who treat your home with the utmost respect.',
    img: images.domestic,
    imgAlt: 'Domestic kitchen cleaning in an Edinburgh home',
    path: '/services/domestic-cleaning-edinburgh',
    metaTitle: 'Domestic Cleaning Edinburgh | Las Chicas Cleaning',
    metaDescription:
      'Weekly and fortnightly domestic cleaning in Edinburgh and the Lothians. Trusted home cleaners for flats, houses and luxury residences.',
    h1: 'Domestic Cleaning in Edinburgh',
    intro:
      'Keep your Edinburgh home immaculate without sacrificing your weekends. Las Chicas Cleaning offers dependable domestic cleaning tailored to how you live — whether you need a weekly refresh, a fortnightly deep clean, or a one-off visit before guests arrive.',
    body: [
      'Our domestic service covers kitchens, bathrooms, living spaces and bedrooms using professional-grade products suited to your surfaces. We work discreetly, respect your belongings, and adapt to pets, children and busy schedules.',
      'Many of our clients are professionals in the New Town, Stockbridge and Leith who value consistency and attention to detail. Every cleaner is fully insured, and we welcome key-holder arrangements for regular visits.',
      'From Victorian tenements to modern waterfront apartments, we understand Edinburgh homes. Request a quote and tell us your priorities — we will build a cleaning plan around them.',
    ],
    faqs: [
      {
        question: 'How often can I book domestic cleaning in Edinburgh?',
        answer:
          'We offer weekly, fortnightly and monthly schedules, plus one-off cleans. Most Edinburgh clients choose weekly or fortnightly visits.',
      },
      {
        question: 'Do I need to provide cleaning products?',
        answer:
          'No. We bring professional supplies. If you prefer eco-friendly or specific products, let us know and we will use yours.',
      },
      {
        question: 'Are your domestic cleaners insured?',
        answer:
          'Yes. Las Chicas Cleaning is fully insured for domestic work across Edinburgh and the Lothians.',
      },
    ],
  },
  {
    id: 2,
    slug: 'holiday-let-cleaning-edinburgh',
    icon: Key,
    title: 'Holiday Lets & Airbnb',
    short: '5-star turnarounds',
    desc: 'Fast, hotel-standard cleaning between guests. We handle linens, restocking, and key management.',
    img: images.holidayLet,
    imgAlt: 'Holiday let bedroom prepared for Airbnb guests in Edinburgh',
    path: '/services/holiday-let-cleaning-edinburgh',
    metaTitle: 'Airbnb & Holiday Let Cleaning Edinburgh | Las Chicas Cleaning',
    metaDescription:
      'Fast Airbnb and short-term let turnarounds in Edinburgh. Hotel-standard cleans, linen changes, restocking and key handover between guests.',
    h1: 'Holiday Let & Airbnb Cleaning in Edinburgh',
    intro:
      'Edinburgh\'s short-term let market demands flawless turnarounds. Las Chicas Cleaning helps hosts maintain five-star reviews with rapid, hotel-standard cleans between every guest — including linen changes, restocking essentials and photo-ready presentation.',
    body: [
      'We work with landlords and property managers across the Old Town, West End and festival-season hotspots. Tight checkout-to-check-in windows are our speciality; we coordinate with your booking calendar and key-safe access.',
      'Our checklist covers kitchens, bathrooms, beds made to hotel standard, floors, surfaces and final staging so your listing photographs itself. Optional add-ons include laundry, welcome packs and damage reporting.',
      'Reliable holiday let cleaning protects your Superhost status and reduces guest complaints. Contact us for a turnover schedule that matches your occupancy.',
    ],
    faqs: [
      {
        question: 'How quickly can you turn around an Edinburgh Airbnb?',
        answer:
          'We routinely complete same-day turnarounds between standard checkout and check-in times. Rush slots are available — contact us with your calendar.',
      },
      {
        question: 'Do you handle laundry for holiday lets?',
        answer:
          'Yes. We can wash, dry and remake beds as part of your turnover package. Discuss linen volume when requesting a quote.',
      },
      {
        question: 'Can you restock toiletries and essentials?',
        answer:
          'We offer restocking of toilet paper, soap, coffee and other essentials. Provide your preferred list and we will keep supplies topped up.',
      },
    ],
  },
  {
    id: 3,
    slug: 'commercial-cleaning-edinburgh',
    icon: Building2,
    title: 'Commercial Spaces',
    short: 'Offices & Retail',
    desc: 'Out-of-hours cleaning for offices, retail stores, and hospitality venues across the city.',
    img: images.commercial,
    imgAlt: 'Modern glass-fronted office building in Edinburgh city centre',
    path: '/services/commercial-cleaning-edinburgh',
    metaTitle: 'Commercial & Office Cleaning Edinburgh | Las Chicas Cleaning',
    metaDescription:
      'Out-of-hours commercial cleaning for Edinburgh offices, retail and hospitality. Reliable contract cleaning with minimal disruption to your business.',
    h1: 'Commercial Cleaning in Edinburgh',
    intro:
      'First impressions matter for staff and clients alike. Las Chicas Cleaning provides out-of-hours commercial cleaning for offices, retail units, salons and hospitality venues across Edinburgh — so your workspace is spotless before doors open.',
    body: [
      'We tailor contracts to your footprint: daily desk and kitchen cleans, weekly deep cleans, or post-event resets. Our team works quietly and efficiently, with flexible early-morning or evening slots.',
      'Services include vacuuming, mopping, sanitising high-touch surfaces, kitchenettes, washrooms and glass. We can supply consumables and follow your site-specific health and safety requirements.',
      'From George Street offices to Leith retail parks, we help Edinburgh businesses present a professional, hygienic environment. Request a site visit for a tailored quote.',
    ],
    faqs: [
      {
        question: 'Do you clean outside business hours?',
        answer:
          'Yes. Most Edinburgh commercial clients prefer early morning or evening cleans to avoid disrupting staff and customers.',
      },
      {
        question: 'Can you clean retail and hospitality venues?',
        answer:
          'Absolutely. We clean offices, shops, cafés and small hospitality spaces. Tell us your opening hours and we will schedule accordingly.',
      },
      {
        question: 'Do you offer commercial cleaning contracts?',
        answer:
          'Yes. We offer daily, weekly and bespoke contract schedules with fixed monthly pricing.',
      },
    ],
  },
  {
    id: 4,
    slug: 'end-of-tenancy-cleaning-edinburgh',
    icon: Sparkles,
    title: 'End of Tenancy',
    short: 'Deposit return guaranteed',
    desc: 'A rigorous deep clean designed to meet the strict standards of Edinburgh letting agents.',
    img: images.endOfTenancy,
    imgAlt: 'End of tenancy deep clean in an Edinburgh rental property',
    path: '/services/end-of-tenancy-cleaning-edinburgh',
    metaTitle: 'End of Tenancy Cleaning Edinburgh | Las Chicas Cleaning',
    metaDescription:
      'Deposit-back end of tenancy cleaning in Edinburgh. Agent-approved deep cleans for flats and houses across the city and Lothians.',
    h1: 'End of Tenancy Cleaning in Edinburgh',
    intro:
      'Moving out of an Edinburgh rental? Las Chicas Cleaning delivers agent-approved end of tenancy deep cleans designed to maximise your deposit return. We follow the check-out standards used by major letting agents across the city.',
    body: [
      'Our end of tenancy package covers ovens, appliances, bathrooms, limescale removal, inside windows, skirting boards, cupboards and full floor care. We work to inventory checklists and can revisit if your agent flags minor items.',
      'Students, professionals and landlords across Marchmont, Morningside and beyond trust us for reliable move-out cleans. Book early during peak summer letting season to secure your slot.',
      'Transparent pricing with no hidden extras. Send your agent\'s checklist when requesting a quote and we will confirm everything included.',
    ],
    faqs: [
      {
        question: 'Will this meet my letting agent\'s standards?',
        answer:
          'Our checklist aligns with common Edinburgh agent requirements. Share your inventory report and we will confirm coverage before booking.',
      },
      {
        question: 'Do you clean ovens and appliances for end of tenancy?',
        answer:
          'Yes. Oven, hob, extractor, fridge and washing machine cleaning are included in our standard end of tenancy package.',
      },
      {
        question: 'How far in advance should I book?',
        answer:
          'Book at least one week ahead, or two to three weeks during June–August when Edinburgh move-out demand peaks.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((s) => s.slug === slug);
}
