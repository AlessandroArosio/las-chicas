import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { servicesData } from '../content/services';
import { withBase } from '../utils/paths';

export default function ServicesAccordion() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  return (
    <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start relative">
      <div className="border-t border-white/10 relative z-10">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          const isOpen = openAccordion === service.id;

          return (
            <div key={service.id} className="border-b border-white/10">
              <button
                onClick={() => setOpenAccordion(isOpen ? null : service.id)}
                className="w-full py-6 md:py-8 flex justify-between items-center text-left hover:text-amber-500 transition-colors group"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-slate-600 text-xs md:text-sm font-mono tracking-widest">
                    0{index + 1}
                  </span>
                  <span
                    className={`text-xl md:text-3xl font-light transition-colors ${
                      isOpen ? 'text-amber-500' : 'text-white group-hover:text-amber-500'
                    }`}
                  >
                    {service.title}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 ${
                    isOpen ? 'rotate-180 text-amber-500' : 'text-slate-600'
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-[600px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-12 md:pl-16 pr-4 md:pr-8">
                  <p className="text-amber-500 text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    {service.short}
                  </p>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-lg mb-6">
                    {service.desc}
                  </p>
                  <a
                    href={withBase(service.path)}
                    className="text-white text-xs tracking-widest uppercase border-b border-amber-500 pb-1 hover:text-amber-500 transition-colors"
                  >
                    Learn more about {service.title.toLowerCase()}
                  </a>

                  <div className="mt-6 md:hidden aspect-video w-full relative rounded overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.imgAlt}
                      className="w-full h-full object-cover opacity-80"
                      width="800"
                      height="450"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hidden md:block sticky top-32 aspect-[3/4] w-full border border-white/10 relative overflow-hidden bg-slate-900 rounded-sm">
        {servicesData.map((service) => (
          <img
            key={service.id}
            src={service.img}
            alt={service.imgAlt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              openAccordion === service.id ? 'opacity-80 z-10' : 'opacity-0 z-0'
            }`}
            width="800"
            height="1067"
            loading="lazy"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-20 pointer-events-none" />
      </div>
    </div>
  );
}
