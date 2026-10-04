import { useState, useEffect, useId } from 'react';
import { X, ArrowRight, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillProjectOrService?: string;
  prefillLocation?: string;
}

export function QuoteModal({
  isOpen,
  onClose,
  prefillProjectOrService = '',
  prefillLocation = 'Tirunelveli',
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Villa',
    location: prefillLocation,
    plotSize: '2400 sq.ft',
    timeline: 'Immediate (Within 1-2 Months)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const nameInputId = useId();
  const phoneInputId = useId();
  const emailInputId = useId();
  const projectTypeSelectId = useId();
  const locationSelectId = useId();
  const timelineSelectId = useId();
  const plotSizeInputId = useId();
  const notesTextareaId = useId();

  useEffect(() => {
    if (prefillProjectOrService) {
      setFormData((prev) => ({
        ...prev,
        notes: `Inquiring specifically regarding: ${prefillProjectOrService}`,
      }));
    }
  }, [prefillProjectOrService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and valid phone number.');
      return;
    }

    if (formData.phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = 'AB-QUO-' + Math.floor(10000 + Math.random() * 90000);
      setRefId(generatedRef);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Aranya Builders! I submitted quote request #${refId} for ${formData.projectType} in ${formData.location} (Plot/Area: ${formData.plotSize}). My name is ${formData.name}.`
    );
    window.open(`https://wa.me/919087590575?text=${text}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#071A33] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            aria-label="Close quote modal"
            className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-1">
            Aranya Builders · Free Quote &amp; Site Assessment
          </span>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
            Start Your Project
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Complimentary preliminary consultation, architectural elevation appraisal, and itemized BoQ.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-6 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#071A33] uppercase">
                Quote Request Confirmed!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your inquiry reference is{' '}
                <strong className="text-[#C28A3E] font-mono">{refId}</strong>. Our senior project engineer will reach out to discuss your plot and requirements.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 rounded shadow transition-colors cursor-pointer"
                >
                  Forward Directly to WhatsApp →
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 border border-slate-200 rounded transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={nameInputId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id={nameInputId}
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. S. Ramanathan"
                    className="w-full px-3.5 py-2 rounded border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] bg-slate-50"
                  />
                </div>

                <div>
                  <label htmlFor={phoneInputId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Mobile Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id={phoneInputId}
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 90875 90575"
                    className="w-full px-3.5 py-2 rounded border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] bg-slate-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={emailInputId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id={emailInputId}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@gmail.com"
                    className="w-full px-3.5 py-2 rounded border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] bg-slate-50"
                  />
                </div>

                <div>
                  <label htmlFor={projectTypeSelectId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Project Type
                  </label>
                  <select
                    id={projectTypeSelectId}
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2 rounded border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] bg-slate-50"
                  >
                    <option value="Residential Villa">Residential Villa / Independent House</option>
                    <option value="Commercial Complex">Commercial Complex / Showroom</option>
                    <option value="Multi-Family Apartment">Multi-Family Apartment / Flats</option>
                    <option value="Interior Architecture">Luxury Interior Fit-out</option>
                    <option value="Renovation & Upgrades">Renovation &amp; Remodeling</option>
                    <option value="Turnkey Construction">Turnkey (Civil to Key Handover)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor={locationSelectId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    District
                  </label>
                  <select
                    id={locationSelectId}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2 rounded border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] bg-slate-50"
                  >
                    <option value="Tirunelveli">Tirunelveli</option>
                    <option value="Tenkasi">Tenkasi</option>
                    <option value="Thoothukudi">Thoothukudi</option>
                    <option value="Virudhunagar">Virudhunagar</option>
                    <option value="Kanniyakumari">Kanniyakumari</option>
                    <option value="Other South TN">Other (South TN)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={timelineSelectId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Planned Start
                  </label>
                  <select
                    id={timelineSelectId}
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2 rounded border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] bg-slate-50"
                  >
                    <option value="Immediate (Within 1-2 Months)">Within 1-2 Months</option>
                    <option value="Within 3-6 Months">Within 3-6 Months</option>
                    <option value="Planning Phase (6+ Months)">Planning Phase</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={plotSizeInputId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Plot / Built Area
                  </label>
                  <input
                    id={plotSizeInputId}
                    type="text"
                    value={formData.plotSize}
                    onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                    placeholder="e.g. 2400 sq.ft"
                    className="w-full px-3.5 py-2 rounded border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor={notesTextareaId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Specific Requirements or Questions
                </label>
                <textarea
                  id={notesTextareaId}
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details on plot location, preferred architectural style (modern, classical, courtyard), or special requests..."
                  className="w-full px-3.5 py-2 rounded border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] bg-slate-50"
                />
              </div>

              {/* Direct call prompt */}
              <div className="p-3 bg-slate-100 rounded text-xs text-slate-700 flex items-center justify-between">
                <span>Prefer speaking directly right away?</span>
                <a
                  href="tel:+919087590575"
                  className="font-bold text-[#071A33] hover:text-[#C28A3E] flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C28A3E]" />
                  <span>+91 90875 90575</span>
                </a>
              </div>

              {/* Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#C28A3E] hover:bg-[#A9742F] rounded shadow transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Get Free Quotation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
