import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface FinalCTAProps {
  onOpenQuoteModal: () => void;
}

export function FinalCTA({ onOpenQuoteModal }: FinalCTAProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#071A33] overflow-hidden text-white">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_architectural_villa_1790865258276.jpg"
          alt="Aranya Builders Architectural Milestone"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Measured dark scrim */}
        <div className="absolute inset-0 bg-[#071A33]/90 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-transparent to-[#071A33]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <span className="text-xs sm:text-sm font-bold tracking-widest text-[#C28A3E] uppercase block mb-3">
          Initiate Your Construction Journey
        </span>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight [text-wrap:balance]">
          Have A Project In Mind?
        </h2>

        <p className="mt-6 text-lg sm:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
          Let’s turn your vision into a structure that lasts for generations.
        </p>

        {/* 3 Prominent Action Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#C28A3E] hover:bg-[#A9742F] rounded shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
          >
            <span>Get A Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:+919087590575"
            className="px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#071A33] bg-white hover:bg-slate-100 rounded shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#C28A3E]" />
            <span className="tabular-nums">Call +91 90875 90575</span>
          </a>

          <a
            href="https://wa.me/919087590575?text=Hello%20Aranya%20Builders,%20I%20would%20like%20to%20discuss%20a%20construction%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 rounded shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Reassurance text */}
        <p className="mt-8 text-xs text-slate-400">
          Complimentary site inspection &amp; conceptual structural layout within 48 hours.
        </p>
      </motion.div>
    </section>
  );
}
