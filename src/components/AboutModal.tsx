import { X, CheckCircle2, ShieldCheck, Award, FileCheck, ArrowRight } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export function AboutModal({ isOpen, onClose, onOpenQuoteModal }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#071A33] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            aria-label="Close about modal"
            className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
            Corporate Profile &amp; Governance
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
            About Aranya Builders
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Established in Tirunelveli with a mission to deliver enduring architectural spaces through disciplined civil engineering.
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="font-display text-lg font-bold text-[#071A33] uppercase tracking-wide mb-2">
              Our Founding Creed
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Aranya Builders was established over 12 years ago to bridge a fundamental gap in South Tamil Nadu construction: providing homeowners and commercial developers with international-standard architectural execution, transparent fixed billing, and genuine timeline adherence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded border border-slate-200">
              <Award className="w-6 h-6 text-[#C28A3E] mb-2" />
              <div className="text-xs font-bold uppercase text-slate-900 mb-1">
                Engineering Integrity
              </div>
              <p className="text-xs text-slate-600">
                Exclusive use of tested primary steel and certified Ready-Mix Concrete.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200">
              <FileCheck className="w-6 h-6 text-emerald-600 mb-2" />
              <div className="text-xs font-bold uppercase text-slate-900 mb-1">
                Transparent BoQ
              </div>
              <p className="text-xs text-slate-600">
                Comprehensive itemized bill of quantities with fixed-price milestone clauses.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200">
              <ShieldCheck className="w-6 h-6 text-indigo-600 mb-2" />
              <div className="text-xs font-bold uppercase text-slate-900 mb-1">
                10-Year Warranty
              </div>
              <p className="text-xs text-slate-600">
                Guaranteed post-handover structural support and annual maintenance visits.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-[#071A33] uppercase tracking-wide mb-2">
              Our Turnkey Standard Operating Procedure
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Phase Soil Testing:</strong> Complete geotechnical laboratory analysis determining safe bearing capacity before structural column footings are cast.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>3D Architectural Walkthroughs:</strong> Detailed CAD elevations and photorealistic renders so you inspect every room before groundbreaking.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Dedicated Site Engineer:</strong> A permanent qualified civil engineer stationed on-site daily to enforce slump tests and curing protocols.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Weekly Digital Drone &amp; Log Reports:</strong> Real-time photographic updates delivered straight to your WhatsApp and email.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Head Office: Reddiarpatti, Tirunelveli – 627007
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal();
                }}
                className="w-full sm:w-auto px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#C28A3E] hover:bg-[#A9742F] rounded shadow transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Consult Our Engineers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
