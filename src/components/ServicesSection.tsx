import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteModal: (preselectedService?: string) => void;
}

export function ServicesSection({ onSelectService, onOpenQuoteModal }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8F9FA] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Fade & Slide */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-slate-300"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#C28A3E] uppercase block mb-2">
              Comprehensive Construction Solutions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight uppercase">
              Our Services
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              From architectural drafting and approvals to structural concrete casting, fine interior carpentry, and turnkey handovers.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            className="mt-6 md:mt-0 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C28A3E] hover:text-[#071A33] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Request Scope Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* 6 Premium Service Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => onSelectService(service)}
              className="group relative h-[380px] rounded-md overflow-hidden shadow-md cursor-pointer border border-slate-200/90 flex flex-col justify-end p-6 sm:p-8 transition-shadow duration-500 hover:shadow-2xl"
            >
              {/* Background architectural image */}
              <img
                src={service.image}
                alt={service.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Scrim overlay for high contrast text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/75 to-transparent transition-opacity group-hover:via-[#071A33]/65" />

              {/* Card Content */}
              <div className="relative z-10 text-white">
                <span className="text-xs font-bold tracking-widest text-[#C28A3E] uppercase block mb-1">
                  0{index + 1}
                </span>

                <h3 className="font-display text-2xl font-extrabold text-white uppercase tracking-tight mb-1 group-hover:text-amber-100 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-3">
                  {service.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed mb-4 font-normal">
                  {service.description}
                </p>

                {/* View Service Trigger */}
                <div className="flex items-center justify-between pt-3 border-t border-white/20 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#C28A3E] transition-colors">
                  <span>View Service</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
