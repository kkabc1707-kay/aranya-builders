import { motion } from 'framer-motion';

interface Reason {
  number: string;
  title: string;
  description: string;
  metric: string;
}

const REASONS: Reason[] = [
  {
    number: '01',
    title: 'On-Time Delivery',
    description: 'Projects planned and executed with clear timelines, critical-path scheduling, and weekly milestone tracking to guarantee completion on the promised date.',
    metric: '98% On-Schedule Rate'
  },
  {
    number: '02',
    title: 'Transparent Process',
    description: 'Clear communication from planning to handover with zero hidden costs, itemized stage billing, and direct digital photo and material test logs.',
    metric: 'Fixed-Price Contracts'
  },
  {
    number: '03',
    title: 'Quality Construction',
    description: 'Uncompromising focus on certified materials, slump and cube testing, Fe550D TMT steel, and multistage damp-proofing to maximize structure longevity.',
    metric: '10-Year Warranty'
  },
  {
    number: '04',
    title: 'Complete Solutions',
    description: 'Architecture, structural engineering, DTCP approvals, civil execution, interior woodwork, and MEP under a single unified point of responsibility.',
    metric: 'Single Source Turnkey'
  },
  {
    number: '05',
    title: 'Experienced Team',
    description: 'Veteran civil engineers, licensed architects, and dedicated site supervisors with over 12 years of hands-on regional execution experience.',
    metric: '12+ Years Expertise'
  },
  {
    number: '06',
    title: 'Client Focused',
    description: 'Solutions designed strictly around your family lifestyle, spatial habits, aesthetic preferences, and realistic budget parameters.',
    metric: '100% Tailored'
  }
];

export function WhyChooseAranya() {
  return (
    <section className="py-20 lg:py-28 bg-[#071A33] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Fade & Slide */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-[#C28A3E] uppercase block mb-2">
            The Aranya Advantage
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            Why Aranya Builders?
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Constructing a home or commercial landmark is a once-in-a-lifetime investment. Here is how our engineering discipline and contractual integrity safeguard your vision.
          </p>
        </motion.div>

        {/* 6 Pillars with Large Bold Numbers (01 - 06) and Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {REASONS.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: (idx % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-[#0b2447] border border-slate-700/60 p-8 rounded hover:border-[#C28A3E]/60 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Large stylized editorial number */}
                <div className="font-display text-4xl sm:text-5xl font-black text-[#C28A3E]/80 group-hover:text-[#C28A3E] transition-colors tabular-nums tracking-tighter mb-4">
                  {item.number}
                </div>

                <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide mb-3 group-hover:text-amber-100 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Quiet metric proof label */}
              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span className="uppercase tracking-wider font-semibold text-amber-200/90">
                  {item.metric}
                </span>
                <span className="text-[#C28A3E] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
