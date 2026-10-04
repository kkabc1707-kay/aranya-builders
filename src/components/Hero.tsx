import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#071A33]">
      {/* Cinematic Architectural Background Image with resilient fallback */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.08, opacity: 0.8 }}
          animate={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          src="/src/assets/images/hero_architectural_villa_1790865258276.jpg"
          alt="Aranya Builders luxury architectural villa at twilight with warm ambient illumination"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured scrim ensuring WCAG AA contrast across all luminance frames */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/70 to-[#071A33]/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A33]/85 via-[#071A33]/50 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28 w-full flex flex-col justify-between min-h-[85vh]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl my-auto"
        >
          {/* Subtle architectural kicker */}
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold tracking-wider text-amber-300 uppercase">
            <span>Engineering Excellence</span>
            <span aria-hidden="true">·</span>
            <span>Turnkey Integrity</span>
            <span aria-hidden="true">·</span>
            <span>South Tamil Nadu</span>
          </div>

          {/* Master Headline (Text-wrap balance, no orphan words) */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight uppercase [text-wrap:balance]">
            We Build Spaces <br />
            <span className="text-[#F1E5D1]">That Last For Generations.</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-normal">
            Premium residential, commercial and turnkey construction solutions across Tirunelveli, Tenkasi, Thoothukudi, Virudhunagar &amp; Kanniyakumari.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#071A33] bg-white hover:bg-slate-100 transition-all rounded shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Our Projects
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#C28A3E] hover:bg-[#A9742F] transition-all rounded shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C28A3E] whitespace-nowrap flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Bottom of hero credential strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="pt-10 border-t border-white/15 mt-12"
        >
          <div className="grid grid-cols-3 gap-4 max-w-2xl text-slate-200">
            <div>
              <div className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                12+ Years
              </div>
              <div className="text-xs text-slate-300 uppercase tracking-wider mt-0.5">
                Experience
              </div>
            </div>
            <div className="border-l border-white/15 pl-4 sm:pl-6">
              <div className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                80+ Projects
              </div>
              <div className="text-xs text-slate-300 uppercase tracking-wider mt-0.5">
                Delivered
              </div>
            </div>
            <div className="border-l border-white/15 pl-4 sm:pl-6">
              <div className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                5 Districts
              </div>
              <div className="text-xs text-slate-300 uppercase tracking-wider mt-0.5">
                Across South TN
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down indicator */}
      <a
        href="#trust-strip"
        aria-label="Scroll to Trust section"
        className="hidden sm:flex absolute bottom-4 right-8 z-10 text-white/50 hover:text-white transition-colors flex-col items-center gap-1"
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-400">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
