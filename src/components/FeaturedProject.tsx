import { ArrowRight, Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../data/projectsData';

interface FeaturedProjectProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onOpenQuoteModal: () => void;
}

export function FeaturedProject({ project, onSelectProject, onOpenQuoteModal }: FeaturedProjectProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F5F7] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header kicker with fade & slide */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-slate-300"
        >
          <div>
            <span className="text-xs font-bold tracking-widest text-[#C28A3E] uppercase">
              Portfolio Highlight
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#071A33] tracking-tight uppercase mt-1">
              Featured Project
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium mt-2 sm:mt-0">
            Selected Architectural Case Study
          </span>
        </motion.div>

        {/* Split Showcase Layout with smooth staggered entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Large Image with zoom affordance */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div
              onClick={() => onSelectProject(project)}
              className="group relative overflow-hidden rounded-md cursor-pointer shadow-lg bg-slate-900 aspect-[16/10]"
            >
              <img
                src={project.heroImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Subtle hover prompt */}
              <div className="absolute top-4 right-4 bg-[#071A33]/80 backdrop-blur-sm text-white p-2.5 rounded hover:bg-[#C28A3E] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
                  {project.location} · {project.area}
                </div>
                <div className="font-display text-2xl sm:text-3xl font-bold">
                  {project.title}
                </div>
              </div>
            </div>

            {/* 2-3 smaller project preview images underneath */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-4">
              {project.galleryImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => onSelectProject(project)}
                  className="relative aspect-video rounded overflow-hidden cursor-pointer group border border-slate-200 shadow-sm"
                >
                  <img
                    src={img}
                    alt={`${project.title} detail view ${i + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Narrative & Project Specs */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
              <span>Residential</span>
              <span aria-hidden="true">·</span>
              <span>Villa Enclave</span>
              <span aria-hidden="true">·</span>
              <span>Completed {project.year}</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#071A33] tracking-tight uppercase leading-tight">
              {project.title}
            </h3>

            <div className="text-xs font-bold text-[#C28A3E] uppercase tracking-wider mt-1 mb-4">
              {project.location}, Tamil Nadu
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {project.excerpt}
            </p>

            {/* Architectural Specs unboxed list */}
            <div className="my-6 py-5 border-y border-slate-200/90 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Built-up Scope
                </span>
                <span className="text-sm font-bold text-slate-900 tabular-nums">
                  {project.area}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Contract Model
                </span>
                <span className="text-sm font-bold text-slate-900">
                  Full Turnkey Civil
                </span>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Structural Typology
                </span>
                <span className="text-sm font-bold text-slate-900">
                  Seismic RCC Grid
                </span>
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Handover Time
                </span>
                <span className="text-sm font-bold text-slate-900">
                  Ahead of Schedule
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => onSelectProject(project)}
                className="px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-[#071A33] hover:bg-[#0c2a52] transition-colors rounded shadow flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Project</span>
                <ArrowRight className="w-4 h-4 text-[#C28A3E]" />
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-3 text-xs sm:text-sm font-semibold tracking-wider text-slate-700 hover:text-[#071A33] transition-colors cursor-pointer"
              >
                Inquire Similar →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
