import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenEstimatorModal: () => void;
  onOpenQuoteModal: () => void;
}

export function Footer({ onOpenEstimatorModal, onOpenQuoteModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051122] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Branding Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-slate-800 gap-6">
          <div>
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              ARANYA BUILDERS
            </span>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light tracking-wide">
              Crafting Tomorrow’s Landmarks Today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span>Residential</span>
            <span aria-hidden="true">·</span>
            <span>Commercial</span>
            <span aria-hidden="true">·</span>
            <span>Interior</span>
            <span aria-hidden="true">·</span>
            <span>Renovation</span>
            <span aria-hidden="true">·</span>
            <span>Turnkey</span>
          </div>
        </div>

        {/* 4 Column Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-slate-800 text-sm">
          {/* Column 1: Company Links */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Construction Process
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenEstimatorModal}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Cost Estimator Tool
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Specialized Services */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Residential Villas &amp; Homes
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Commercial Showrooms &amp; Plazas
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Luxury Interior Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Structural Renovation &amp; Retrofit
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Complete Turnkey Civil Execution
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Coverage */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white mb-4">
              Districts Served
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Tirunelveli District (HQ)</li>
              <li>Thoothukudi District</li>
              <li>Tenkasi District</li>
              <li>Virudhunagar District</li>
              <li>Kanniyakumari District</li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C28A3E] shrink-0" />
                <a href="tel:+919087590575" className="hover:text-white transition-colors tabular-nums">
                  +91 90875 90575
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C28A3E] shrink-0" />
                <a href="mailto:aranya.builderstvl@gmail.com" className="hover:text-white transition-colors">
                  aranya.builderstvl@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C28A3E] shrink-0 mt-0.5" />
                <span>Reddiarpatti, Tirunelveli – 627007, Tamil Nadu</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="px-4 py-2 bg-[#C28A3E] hover:bg-[#A9742F] text-white text-[11px] font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Aranya Builders. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Terms of Engagement
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer ml-4"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
