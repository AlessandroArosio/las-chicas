/**
 * Central site configuration. Update placeholders before launch.
 * NAP (name, address, phone) must match Google Business Profile exactly.
 */
export const siteConfig = {
  name: 'Las Chicas Cleaning',
  legalName: 'Las Chicas Cleaning',
  tagline: "Edinburgh's Premium Cleaning Service",
  description:
    'Professional cleaning in Edinburgh and the Lothians. Domestic homes, offices, Airbnb turnarounds and end-of-tenancy cleans. Fully insured.',
  phone: '+447947941337',
  phoneDisplay: '+44 (0) 79 4794 1337',
  email: 'hello@laschicascleaning.co.uk',
  instagram: 'https://instagram.com/laschicascleaning',
  facebook: 'https://facebook.com/laschicascleaning',
  areaServed: ['Edinburgh', 'The Lothians'],
  address: {
    locality: 'Edinburgh',
    region: 'Scotland',
    country: 'GB',
    postalCode: 'EH1',
  },
  priceRange: '££',
  ogImage:
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
} as const;

/** Service and hero imagery (Unsplash). Verify URLs return HTTP 200 before deploy. */
export const images = {
  heroLuxury:
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80',
  domestic:
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
  holidayLet:
    'https://images.unsplash.com/photo-1638929786164-04068be458e0?auto=format&fit=crop&w=800&q=80',
  commercial:
    'https://images.unsplash.com/photo-1745015446589-7ee6f702d8c1?auto=format&fit=crop&w=800&q=80',
  endOfTenancy:
    'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
} as const;
