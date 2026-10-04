import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
  onOpenQualityModal: () => void;
}

export function AboutSection({ onOpenQuoteModal, onOpenQualityModal }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Photo with structural detail framing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 overflow-hidden rounded-md shadow-xl border border-slate-200 aspect-[4/3] bg-slate-900">
              <img
                src="/src/assets/images/project_kavitha_house_1790865297735.jpg"
                alt="Aranya Builders construction site and precision engineering"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block mb-1">
                  On-Site Craftsmanship
                </span>
                <p className="text-sm font-medium text-slate-100">
                  Engineered with certified structural steel, tested concrete grades, and uncompromised site supervision.
                </p>
              </div>
            </div>

            {/* Architectural accent backdrop border */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-full h-full border-2 border-[#C28A3E]/30 rounded-md -z-0" />

            {/* Quality seal badge (zero pill capsule, clean card) */}
            <div className="absolute top-6 right-6 z-20 bg-white/95 backdrop-blur-md p-4 rounded shadow-lg border border-slate-200/90 max-w-[200px]">
              <div className="flex items-center gap-2 text-[#C28A3E] mb-1">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Certified Standards
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-tight">
                IS 456 &amp; NBC Code compliant structural supervision.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs font-bold tracking-widest text-[#C28A3E] uppercase mb-2 block">
              About Aranya Builders
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight uppercase leading-[1.1] mb-6">
              Building With Purpose. <br />
              <span className="text-[#C28A3E]">Delivering With Trust.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6">
              Aranya Builders is a construction company based in Tirunelveli providing residential, commercial, renovation, interior and turnkey construction solutions across South Tamil Nadu.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              Founded on the bedrock of uncompromising engineering rigor, transparent billing, and punctual handovers, we take total ownership of your building journey. From conceptual sketches and municipal DTCP approvals to structural casting and fine interior millwork, our in-house specialists ensure perfection at every milestone.
            </p>

            {/* Stats highlight cards */}
            <div className="grid grid-cols-2 gap-6 py-6 border-y border-slate-200 mb-8">
              <div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tabular-nums">
                  12+ Years
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  Industry Experience
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Over a decade of trusted regional civil leadership.
                </p>
              </div>

              <div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tabular-nums">
                  80+
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  Completed Projects
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Residential villas, apartments &amp; commercial hubs.
                </p>
              </div>
            </div>

            {/* Credibility checkpoints */}
            <div className="space-y-2.5 mb-8">
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent Itemized BoQ with zero hidden escalation clauses</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated on-site site engineer and digital weekly progress updates</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>10-year comprehensive structural warranty upon final key handover</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQualityModal}
                className="px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#071A33] hover:bg-[#0c2a52] transition-colors rounded shadow flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>More About Aranya</span>
                <ArrowRight className="w-4 h-4 text-[#C28A3E]" />
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#071A33] border border-slate-300 hover:border-slate-800 transition-colors rounded cursor-pointer"
              >
                Start A Conversation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
