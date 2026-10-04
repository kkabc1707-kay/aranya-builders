import { useState, useId } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactSectionProps {
  initialProjectType?: string;
  initialLocation?: string;
}

export function ContactSection({ initialProjectType = 'Residential Villa', initialLocation = 'Tirunelveli' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: initialProjectType,
    location: initialLocation,
    approxArea: '2500',
    message: '',
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
  const approxAreaInputId = useId();
  const messageTextareaId = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name and phone number.');
      return;
    }

    if (formData.phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = 'AB-' + Math.floor(100000 + Math.random() * 900000);
      setRefId(generatedRef);
      setSubmitted(true);
    }, 700);
  };

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `Hello Aranya Builders! My name is ${formData.name}. I am inquiring about a ${formData.projectType} in ${formData.location} (~${formData.approxArea} sq.ft). Ref: ${refId}. Notes: ${formData.message}`
    );
    window.open(`https://wa.me/919087590575?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F4F5F7] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Info with Fade & Slide */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold tracking-widest text-[#C28A3E] uppercase block mb-2">
                Connect With Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A33] uppercase tracking-tight leading-[1.15] mb-6">
                Let’s Build Something Great.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Reach out directly to schedule a preliminary site visit, review our material specifications, or discuss your architectural requirements.
              </p>

              {/* Contact info list */}
              <div className="space-y-6">
                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#071A33] text-[#C28A3E] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Direct Phone
                    </span>
                    <div className="flex flex-col text-sm sm:text-base font-bold text-[#071A33] tabular-nums mt-0.5">
                      <a href="tel:+919087590575" className="hover:text-[#C28A3E] transition-colors">
                        +91 90875 90575
                      </a>
                      <a href="tel:+919087590675" className="hover:text-[#C28A3E] transition-colors">
                        +91 90875 90675
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#071A33] text-[#C28A3E] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Email Inquiries
                    </span>
                    <div className="flex flex-col text-xs sm:text-sm font-medium text-[#071A33] mt-0.5">
                      <a href="mailto:aranya.builderstvl@gmail.com" className="hover:text-[#C28A3E] transition-colors">
                        aranya.builderstvl@gmail.com
                      </a>
                      <a href="mailto:aranyabuilders.tvl@gmail.com" className="hover:text-[#C28A3E] transition-colors">
                        aranyabuilders.tvl@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#071A33] text-[#C28A3E] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Corporate Office
                    </span>
                    <p className="text-sm font-semibold text-[#071A33] mt-0.5">
                      Reddiarpatti, Tirunelveli – 627007
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#071A33] text-[#C28A3E] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Office Working Hours
                    </span>
                    <p className="text-sm font-medium text-[#071A33] mt-0.5">
                      Monday – Saturday: 9:00 AM – 7:30 PM
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Sunday: Site Inspections by Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response reassurance */}
            <div className="mt-8 pt-6 border-t border-slate-300">
              <span className="text-xs font-semibold text-slate-500">
                Active Districts: Tirunelveli · Tenkasi · Thoothukudi · Virudhunagar · Kanniyakumari
              </span>
            </div>
          </motion.div>

          {/* Right Column: Request A Quote Form with Fade & Slide */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-xl p-8 sm:p-10 shadow-lg border border-slate-200"
          >
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest text-[#C28A3E] uppercase block mb-1">
                Direct Inquiry Form
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#071A33] uppercase tracking-tight">
                Request A Quote
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Fill in your project details. Our principal civil engineer will review and contact you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-5 animate-in fade-in">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-display text-2xl font-bold text-[#071A33] uppercase">
                  Inquiry Received Successfully!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your project inquiry reference is{' '}
                  <strong className="text-[#C28A3E] font-mono">{refId}</strong>. Our engineering director will contact you on {formData.phone}.
                </p>
                
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppForward}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 rounded shadow transition-colors cursor-pointer"
                  >
                    Send Instantly via WhatsApp →
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        projectType: 'Residential Villa',
                        location: 'Tirunelveli',
                        approxArea: '2500',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 border border-slate-200 rounded transition-colors"
                  >
                    Submit Another Inquiry
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
                  {/* Name */}
                  <div>
                    <label htmlFor={nameInputId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id={nameInputId}
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. S. Ramanathan"
                      className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] focus:border-transparent bg-slate-50/50"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor={phoneInputId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id={phoneInputId}
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] focus:border-transparent bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor={emailInputId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id={emailInputId}
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] focus:border-transparent bg-slate-50/50"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor={projectTypeSelectId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Type
                    </label>
                    <select
                      id={projectTypeSelectId}
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] focus:border-transparent bg-slate-50/50"
                    >
                      <option value="Residential Villa">Residential Villa / Independent House</option>
                      <option value="Multi-Family Apartment">Multi-Family Apartment / Flats</option>
                      <option value="Commercial Plaza / Office">Commercial Plaza / Office / Showroom</option>
                      <option value="Interior Architecture">Luxury Interior Fit-out</option>
                      <option value="Structural Renovation">Renovation &amp; Expansion</option>
                      <option value="Turnkey Construction">Turnkey (Design to Key Handover)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Location District */}
                  <div>
                    <label htmlFor={locationSelectId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Location / District
                    </label>
                    <select
                      id={locationSelectId}
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] focus:border-transparent bg-slate-50/50"
                    >
                      <option value="Tirunelveli">Tirunelveli District</option>
                      <option value="Tenkasi">Tenkasi District</option>
                      <option value="Thoothukudi">Thoothukudi District</option>
                      <option value="Virudhunagar">Virudhunagar District</option>
                      <option value="Kanniyakumari">Kanniyakumari District</option>
                      <option value="Other South TN">Other (South Tamil Nadu)</option>
                    </select>
                  </div>

                  {/* Approximate Built-up Area */}
                  <div>
                    <label htmlFor={approxAreaInputId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Approx Built-up Area (Sq.Ft)
                    </label>
                    <input
                      id={approxAreaInputId}
                      type="number"
                      value={formData.approxArea}
                      onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                      placeholder="e.g. 2400"
                      className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] focus:border-transparent bg-slate-50/50 tabular-nums"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor={messageTextareaId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id={messageTextareaId}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide plot details, expected timeline, specific architectural preferences, or questions..."
                    className="w-full px-4 py-2.5 rounded border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C28A3E] focus:border-transparent bg-slate-50/50"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#C28A3E] hover:bg-[#A9742F] rounded shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span>Submitting Project Details...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
