import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  quote: string;
  client: string;
  role: string;
  projectType: string;
  location: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'From the initial planning to the final handover, the team maintained excellent communication and quality. Our home in Tirunelveli was delivered right on schedule with zero compromise on the promised specifications.',
    client: 'S. Sundararajan',
    role: 'Homeowner',
    projectType: 'Independent Luxury Residence',
    location: 'Tirunelveli'
  },
  {
    quote: 'Managing commercial and residential construction while running a busy medical hospital was effortless with Aranya. Their weekly photographic and milestone logs meant complete peace of mind.',
    client: 'Dr. M. Kavitha',
    role: 'Client & Medical Practitioner',
    projectType: 'Kavitha House & Clinic Annex',
    location: 'Erode / Tirunelveli'
  },
  {
    quote: 'Their turnkey contract protected us from volatile material cost escalations. From the municipal DTCP approvals through to the final interior joinery, everything was handled under one accountable roof.',
    client: 'Justin Paul',
    role: 'Property Developer',
    projectType: 'Justin Multi-Family Apartments',
    location: 'Thoothukudi'
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      className="py-20 lg:py-28 bg-[#071A33] text-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Fade & Slide */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-widest text-[#C28A3E] uppercase block mb-2">
            Client Experiences
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Large Quote Container with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#0c2447] border border-slate-700/70 rounded-xl p-8 sm:p-12 shadow-2xl"
        >
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#071A33] border border-slate-700 flex items-center justify-center text-[#C28A3E]">
              <Quote className="w-6 h-6" />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="text-center">
                <p className="font-display text-lg sm:text-2xl text-slate-100 font-normal leading-relaxed italic max-w-3xl mx-auto">
                  “{current.quote}”
                </p>
              </blockquote>

              <div className="mt-8 text-center">
                <div className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                  {current.client}
                </div>
                <div className="text-xs sm:text-sm text-[#C28A3E] font-medium mt-0.5">
                  {current.role} · {current.projectType} ({current.location})
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-slate-700/60">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="p-2 rounded border border-slate-700 hover:border-[#C28A3E] text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 transition-all rounded-full cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#C28A3E]' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="p-2 rounded border border-slate-700 hover:border-[#C28A3E] text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
