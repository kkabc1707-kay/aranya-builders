import { useState } from 'react';
import { MapPin, Building2, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { DISTRICTS_DATA, DistrictInfo } from '../data/districtsData';

interface ServiceAreasSectionProps {
  onOpenQuoteModal: (district?: string) => void;
}

export function ServiceAreasSection({ onOpenQuoteModal }: ServiceAreasSectionProps) {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictInfo>(DISTRICTS_DATA[0]);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 overflow-hidden">
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
            Regional Footprint
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight uppercase">
            Where We Build
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Providing on-ground engineering teams, local municipal liaison, and dedicated supervision across 5 key southern Tamil Nadu districts.
          </p>
        </motion.div>

        {/* Interactive District Map & Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Stylized Interactive Regional Architectural Map */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#071A33] rounded-xl p-6 sm:p-8 text-white relative shadow-xl overflow-hidden min-h-[440px] flex flex-col justify-between"
          >
            {/* Background grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#132847_1px,transparent_1px),linear-gradient(to_bottom,#132847_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

            <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                South Tamil Nadu Construction Corridor
              </span>
              <span className="text-xs text-slate-400">
                Click district pins to inspect
              </span>
            </div>

            {/* Stylized Geographic Pin Matrix */}
            <div className="relative z-10 h-72 w-full my-4">
              {/* Map Outline Abstract SVG */}
              <svg className="w-full h-full opacity-20 pointer-events-none" viewBox="0 0 500 400" fill="none" stroke="currentColor">
                <path d="M 220,40 L 320,80 L 380,180 L 360,250 L 260,370 L 190,320 L 170,220 Z" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 200,120 Q 240,240 250,350" strokeWidth="1" />
              </svg>

              {/* District Pins */}
              {DISTRICTS_DATA.map((district) => {
                const isSelected = selectedDistrict.id === district.id;
                return (
                  <button
                    key={district.id}
                    onClick={() => setSelectedDistrict(district)}
                    style={{
                      left: `${district.coordinates.x}%`,
                      top: `${district.coordinates.y}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus-visible:outline-none transition-transform ${
                      isSelected ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                    }`}
                  >
                    <div className="relative flex flex-col items-center">
                      {/* Pin Bubble */}
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                          isSelected
                            ? 'bg-[#C28A3E] text-white ring-4 ring-amber-400/30'
                            : 'bg-[#0f2d57] text-slate-200 border border-slate-600 hover:bg-[#C28A3E] hover:text-white'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>

                      {/* Pin Label */}
                      <span
                        className={`mt-1.5 px-2 py-0.5 rounded text-[11px] font-bold tracking-wide whitespace-nowrap shadow transition-colors ${
                          isSelected
                            ? 'bg-white text-[#071A33]'
                            : 'bg-black/60 text-slate-200 group-hover:text-white'
                        }`}
                      >
                        {district.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick stats footer inside map */}
            <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#C28A3E]" />
                <span>Central HQ: Reddiarpatti, Tirunelveli</span>
              </div>
              <span className="tabular-nums font-semibold text-white">80+ Sites Delivered</span>
            </div>
          </motion.div>

          {/* Right: Selected District Inspector Card */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#F8F9FA] border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C28A3E]">
                  District Overview
                </span>
                <span className="text-xs font-bold px-2 py-0.5 bg-slate-200 text-slate-800 rounded tabular-nums">
                  {selectedDistrict.activeProjects} Projects Executed
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#071A33] uppercase tracking-tight mb-1">
                {selectedDistrict.name}
              </h3>

              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                {selectedDistrict.role}
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                {selectedDistrict.highlight}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#071A33] mb-3">
                  Core Projects in {selectedDistrict.name}
                </h4>
                <div className="space-y-2">
                  {selectedDistrict.focalServices.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenQuoteModal(selectedDistrict.name)}
                className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#071A33] hover:bg-[#0c2a52] rounded shadow transition-colors flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Plan Project in {selectedDistrict.name}</span>
                <ArrowRight className="w-4 h-4 text-[#C28A3E]" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* 5 District Pills Row for quick touch targets */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-3"
        >
          {DISTRICTS_DATA.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDistrict(d)}
              className={`p-3 rounded border text-left transition-all cursor-pointer ${
                selectedDistrict.id === d.id
                  ? 'border-[#C28A3E] bg-[#C28A3E]/10 font-bold text-[#071A33]'
                  : 'border-slate-200 hover:border-slate-300 text-slate-600'
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wide">
                {d.name}
              </div>
              <div className="text-[11px] text-slate-500 tabular-nums">
                {d.activeProjects} Projects
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
