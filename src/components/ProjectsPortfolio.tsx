import { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA, Project } from '../data/projectsData';

interface ProjectsPortfolioProps {
  onSelectProject: (project: Project) => void;
  onOpenQuoteModal: () => void;
}

type FilterCategory = 'ALL' | 'RESIDENTIAL' | 'COMMERCIAL' | 'INTERIOR' | 'RENOVATION';

export function ProjectsPortfolio({ onSelectProject, onOpenQuoteModal }: ProjectsPortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  const categories: FilterCategory[] = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'INTERIOR', 'RENOVATION'];

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F4F5F7] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Fade & Slide entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-12"
        >
          <div>
            <span className="text-xs font-bold tracking-widest text-[#C28A3E] uppercase block mb-2">
              Featured Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight uppercase">
              Our Projects
            </h2>
            <div className="mt-2 font-display text-base sm:text-lg font-bold text-[#C28A3E] tracking-widest uppercase">
              Built. Delivered. Trusted.
            </div>
          </div>

          {/* Interactive Filter Tabs (functional segmented buttons) */}
          <div className="mt-6 lg:mt-0 flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-[#071A33] text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Asymmetric / Masonry Grid with Animated Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              // Asymmetric layout logic: 1st and 4th projects get wider column spans
              const isWide = idx % 3 === 0;
              const colSpan = isWide ? 'md:col-span-8' : 'md:col-span-4';
              const aspectClass = isWide ? 'aspect-[16/10]' : 'aspect-[4/3] md:aspect-[3/4]';

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.55,
                    delay: (idx % 3) * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`${colSpan} group relative rounded-md overflow-hidden bg-slate-900 cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500`}
                  onClick={() => onSelectProject(project)}
                >
                  <div className={`w-full ${aspectClass} relative overflow-hidden`}>
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Scrim Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                    {/* Top category label unboxed */}
                    <div className="absolute top-4 left-4 z-10 text-[11px] font-bold uppercase tracking-wider text-amber-300 drop-shadow">
                      {project.category} · {project.location}
                    </div>

                    {/* Quick view icon */}
                    <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4" />
                    </div>

                    {/* Bottom details card on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white transform transition-transform duration-300">
                      <div className="text-xs text-slate-300 font-medium mb-1">
                        {project.scope} · {project.area}
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-amber-100 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs text-slate-200 line-clamp-2 mb-3 font-normal opacity-90 group-hover:opacity-100">
                        {project.excerpt}
                      </p>

                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C28A3E] group-hover:text-amber-300 transition-colors">
                        <span>View Project</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom CTA strip with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-slate-600 mb-4">
            Have a residential, commercial or renovation concept in Mind?
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#071A33] hover:bg-[#0c2a52] rounded shadow-md transition-all cursor-pointer inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Your Architectural Project</span>
            <ArrowRight className="w-4 h-4 text-[#C28A3E]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
