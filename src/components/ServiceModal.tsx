import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../data/servicesData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuoteModal: (serviceName: string) => void;
}

export function ServiceModal({ service, onClose, onOpenQuoteModal }: ServiceModalProps) {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image Strip */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-[#071A33]/60 to-transparent" />
          
          <button
            onClick={onClose}
            aria-label="Close service modal"
            className="absolute top-4 right-4 p-2 text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C28A3E]">
              Scope Overview
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              {service.title}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-amber-300 uppercase tracking-wider mt-1">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
              Service Scope &amp; Methodology
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Subcategories */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
              Specialized Project Categories
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700">
              {service.subcategories.map((sub, idx) => (
                <div key={idx} className="flex items-center gap-1.5 py-1 px-2.5 bg-slate-100 rounded text-slate-800">
                  <span className="text-[#C28A3E] font-bold">✓</span>
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Features */}
            <div className="bg-slate-50 p-5 rounded border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#071A33] mb-3">
                Key Technical Inclusions
              </h4>
              <ul className="space-y-2.5">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-[#C28A3E] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="bg-slate-50 p-5 rounded border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#071A33] mb-3">
                Guaranteed Client Deliverables
              </h4>
              <ul className="space-y-2.5">
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Need a customized quotation or architectural consultation?
            </span>
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
                  onOpenQuoteModal(service.title);
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C28A3E] hover:bg-[#A9742F] rounded shadow transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Request Quote for {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
