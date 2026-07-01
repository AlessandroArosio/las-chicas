import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const navLinks = [
  { href: `${base}`, label: 'Home' },
  { href: `${base}#services`, label: 'The Services' },
  { href: `${base}contact`, label: 'Contact' },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {menuOpen && (
        <div className="fixed inset-0 bg-[#0a0a0a] z-[60] flex flex-col items-center justify-center animate-in fade-in duration-300">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 text-white p-2 hover:text-amber-500 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col text-center space-y-8 text-3xl md:text-4xl text-white font-light">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${base}contact`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-amber-500 transition-colors text-amber-500 italic mt-8 border-b border-amber-500/30 pb-2"
            >
              Request Booking
            </a>
          </div>
        </div>
      )}

      <nav
        className="absolute top-0 w-full z-40 border-b border-white/10 bg-gradient-to-b from-black/80 to-transparent"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
          <a
            href={`${base}`}
            className="text-white font-light text-lg md:text-xl tracking-[0.2em] uppercase"
          >
            Las Chicas<span className="text-amber-500 font-bold"> Cleaning</span>
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-3 text-white text-xs md:text-sm tracking-widest uppercase hover:text-amber-500 transition-colors"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span className="hidden sm:inline">Menu</span>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </>
  );
}
