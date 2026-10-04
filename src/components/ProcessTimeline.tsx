import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProcessStep {
  step: string;
  title: string;
  shortDesc: string;
  details: string;
  deliverables: string[];
  duration: string;
}

const STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'CONSULTATION',
    shortDesc: 'Tell us about your project.',
    details: 'Initial in-depth discovery session discussing your plot dimensions, family or commercial spatial requirements, aesthetic inclinations, and financial parameters.',
    deliverables: ['Site orientation appraisal', 'Preliminary spatial checklist', 'Initial budget outline'],
    duration: '1 - 3 Days'
  },
  {
    step: '02',
    title: 'PLANNING',
    shortDesc: 'Requirements, budget & feasibility.',
    details: 'Soil testing, topographical survey, local municipal DTCP/corporation regulatory feasibility, and itemized structural cost estimations.',
    deliverables: ['Geotechnical soil test report', 'Statutory regulatory checklist', 'Comprehensive Itemized BoQ'],
    duration: '1 - 2 Weeks'
  },
  {
    step: '03',
    title: 'DESIGN',
    shortDesc: 'Architectural planning & visualization.',
    details: 'Translating concepts into high-precision CAD floorplans, 3D exterior elevations, structural column grid drawings, and photo-realistic interior walkthroughs.',
    deliverables: ['Vastu-harmonized floor plans', '3D Photorealistic exterior views', 'MEP & structural engineering blueprints'],
    duration: '2 - 3 Weeks'
  },
  {
    step: '04',
    title: 'CONSTRUCTION',
    shortDesc: 'Professional execution & supervision.',
    details: 'Earthwork excavation, high-grade Fe550D reinforcement, continuous concrete cube testing, brick masonry, and weekly milestone reports to your client portal.',
    deliverables: ['Daily digital site logs', 'Material batch test certificates', 'Weekly video & milestone reports'],
    duration: '6 - 12 Months'
  },
  {
    step: '05',
    title: 'QUALITY CHECK',
    shortDesc: 'Inspection and finishing.',
    details: 'Rigorous 120-point quality audit covering electrical continuity, water pressure, tile levels, waterproofing pond tests, and door/window alignment.',
    deliverables: ['120-Point snag checklist', 'Terrace water-ponding test sign-off', 'Deep polishing & sanitization'],
    duration: '2 Weeks'
  },
  {
    step: '06',
    title: 'HANDOVER',
    shortDesc: 'Your completed space.',
    details: 'Official key handover ceremony with complete as-built CAD drawings, warranty dossiers, service vendor directory, and permanent ongoing support.',
    deliverables: ['Original As-Built documentation', '10-Year structural warranty certificate', 'Key handover ceremony package'],
    duration: 'Handover Day'
  },
];

interface ProcessTimelineProps {
  onOpenQuoteModal: () => void;
}

export function ProcessTimeline({ onOpenQuoteModal }: ProcessTimelineProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-20 lg:py-28 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Fade & Slide */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-[#C28A3E] uppercase block mb-2">
            Engineered Methodology
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight uppercase">
            From Idea To Handover
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Our systematic, step-by-step construction methodology ensures zero surprises, rigorous quality control, and on-time delivery.
          </p>
        </motion.div>

        {/* Horizontal Stepped Timeline Bar with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4 mb-10"
        >
          {STEPS.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 sm:p-5 rounded border transition-all cursor-pointer relative ${
                  isActive
                    ? 'bg-[#071A33] border-[#071A33] text-white shadow-lg'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-display text-2xl font-black tabular-nums tracking-tight ${
                      isActive ? 'text-[#C28A3E]' : 'text-slate-400'
                    }`}
                  >
                    {s.step}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      isActive ? 'text-amber-200' : 'text-slate-500'
                    }`}
                  >
                    {s.duration}
                  </span>
                </div>

                <div
                  className={`font-display text-xs sm:text-sm font-bold tracking-wider uppercase mb-1 ${
                    isActive ? 'text-white' : 'text-[#071A33]'
                  }`}
                >
                  {s.title}
                </div>

                <div
                  className={`text-[11px] leading-snug line-clamp-2 ${
                    isActive ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  {s.shortDesc}
                </div>

                {/* Active arrow indicator on desktop */}
                {isActive && (
                  <div className="hidden lg:block absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#071A33]" />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Active Step Detailed Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#F8F9FA] border border-slate-200 rounded-lg p-6 sm:p-10 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-2 text-xs font-bold text-[#C28A3E] uppercase tracking-wider">
                <span>Phase {STEPS[activeStep].step}</span>
                <span aria-hidden="true">·</span>
                <span>Typical Duration: {STEPS[activeStep].duration}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#071A33] uppercase tracking-tight mb-4">
                {STEPS[activeStep].title} — {STEPS[activeStep].shortDesc}
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {STEPS[activeStep].details}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#071A33] mb-3">
                  Phase Deliverables &amp; Milestones:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STEPS[activeStep].deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                  Aranya Quality Protocol
                </span>
                <h4 className="font-display text-lg font-bold text-[#071A33] uppercase mb-2">
                  Client Transparency Promise
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Every phase is gated. We only proceed to consecutive stages once you have formally reviewed and approved the milestone inspection report.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Ready to initiate Phase 01?
                </span>
                <button
                  onClick={onOpenQuoteModal}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#C28A3E] hover:bg-[#A9742F] rounded transition-colors flex items-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
