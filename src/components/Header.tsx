import { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
  onOpenEstimatorModal: () => void;
}

export function Header({ onOpenQuoteModal, onOpenEstimatorModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-gradient-to-b from-[#071A33]/80 via-[#071A33]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark (Display face) */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C28A3E]"
          >
            <span
              className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                isScrolled ? 'text-[#071A33]' : 'text-white'
              }`}
            >
              ARANYA BUILDERS
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[#C28A3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C28A3E] rounded px-1 ${
                  isScrolled ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenEstimatorModal}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-[#C28A3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C28A3E] rounded px-1 cursor-pointer ${
                isScrolled ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              Estimator
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions (Phone call + Quote CTA) */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919087590575"
              className={`hidden lg:flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C28A3E] rounded px-2 py-1 ${
                isScrolled ? 'text-[#071A33] hover:text-[#C28A3E]' : 'text-white hover:text-amber-300'
              }`}
            >
              <Phone className="w-4 h-4 text-[#C28A3E]" />
              <span className="tabular-nums whitespace-nowrap">+91 90875 90575</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#C28A3E] hover:bg-[#A9742F] active:scale-[0.98] transition-all rounded shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C28A3E] focus-visible:ring-offset-2 whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className={`md:hidden p-2 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C28A3E] ${
                isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071A33] border-t border-slate-700/60 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-white hover:translate-x-1 transition-all py-1.5"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimatorModal();
              }}
              className="text-left text-base font-medium text-slate-200 hover:text-white hover:translate-x-1 transition-all py-1.5 cursor-pointer"
            >
              Cost Estimator Calculator
            </button>
          </div>

          <div className="pt-4 border-t border-slate-700/60 flex flex-col gap-3">
            <a
              href="tel:+919087590575"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-amber-300 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C28A3E]" />
              <span className="tabular-nums">+91 90875 90575</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-[#C28A3E] hover:bg-[#A9742F] rounded transition-colors"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
