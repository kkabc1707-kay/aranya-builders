import { useState } from 'react';
import { X, ArrowRight, MapPin, Calendar, CheckCircle2, ShieldCheck, Ruler } from 'lucide-react';
import { Project } from '../data/projectsData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenQuoteModal: (projectName?: string) => void;
}

export function CaseStudyModal({ project, onClose, onOpenQuoteModal }: CaseStudyModalProps) {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  if (!project) return null;

  const currentHero = selectedGalleryImg || project.heroImage;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-30 p-2 text-white bg-black/60 hover:bg-black/85 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C28A3E]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
          <img
            src={currentHero}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/50 to-transparent" />

          {/* Project Title Over Hero */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest mb-1.5">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.status}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
              {project.title}
            </h2>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-200 mt-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#C28A3E]" />
              <span>{project.location}, Tamil Nadu</span>
            </div>
          </div>
        </div>

        {/* Image Gallery Switcher */}
        {project.galleryImages && project.galleryImages.length > 1 && (
          <div className="px-6 py-3 bg-slate-100 border-b border-slate-200 flex items-center gap-3 overflow-x-auto">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 shrink-0">
              Gallery Views:
            </span>
            {project.galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedGalleryImg(img)}
                className={`relative w-16 h-11 rounded overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  currentHero === img ? 'border-[#C28A3E] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 uppercase tracking-wider font-semibold block mb-0.5">
                Type
              </span>
              <span className="font-bold text-slate-900">{project.category}</span>
            </div>
            <div>
              <span className="text-slate-500 uppercase tracking-wider font-semibold block mb-0.5">
                Location
              </span>
              <span className="font-bold text-slate-900">{project.location}</span>
            </div>
            <div>
              <span className="text-slate-500 uppercase tracking-wider font-semibold block mb-0.5">
                Scope
              </span>
              <span className="font-bold text-slate-900">{project.scope}</span>
            </div>
            <div>
              <span className="text-slate-500 uppercase tracking-wider font-semibold block mb-0.5">
                Status
              </span>
              <span className="font-bold text-emerald-700">{project.status}</span>
            </div>
          </div>

          {/* The Project Overview */}
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[#071A33] mb-3">
              The Project
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              {project.description}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong className="text-slate-900">Architectural Solution:</strong> {project.architecturalSolution}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[#071A33] mb-3">
              Engineering &amp; Design Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#C28A3E] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details / Technical Specs Table */}
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[#071A33] mb-3">
              Project Details &amp; Structural Specifications
            </h3>
            <div className="border border-slate-200 rounded overflow-hidden">
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody className="divide-y divide-slate-200">
                  {project.specifications.map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="px-4 py-2.5 font-semibold text-slate-600 w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-4 py-2.5 text-slate-900 font-medium">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Client Feedback if available */}
          {project.clientFeedback && (
            <div className="p-5 bg-[#071A33] text-white rounded border border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C28A3E] block mb-1">
                Client Testimonial
              </span>
              <p className="text-sm italic text-slate-200 mb-3">
                “{project.clientFeedback.quote}”
              </p>
              <div className="text-xs font-bold text-white">
                {project.clientFeedback.client} · <span className="text-slate-400 font-normal">{project.clientFeedback.role}</span>
              </div>
            </div>
          )}

          {/* Bottom Conversion Strip: Have a similar project in mind? */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 sm:p-8 rounded-b-lg">
            <div>
              <h4 className="font-display text-base font-bold uppercase tracking-tight text-[#071A33]">
                Have a similar project in mind?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Our architects can evaluate your plot and provide preliminary elevations.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal(project.title);
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#C28A3E] hover:bg-[#A9742F] rounded shadow transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
