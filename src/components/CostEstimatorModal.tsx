import { useState, useId } from 'react';
import { X, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToQuote: (details: { type: string; area: number; tier: string; estimate: string }) => void;
}

export function CostEstimatorModal({ isOpen, onClose, onProceedToQuote }: CostEstimatorModalProps) {
  const [projectType, setProjectType] = useState<'villa' | 'commercial' | 'interior' | 'renovation'>('villa');
  const [area, setArea] = useState<number>(2400);
  const [qualityTier, setQualityTier] = useState<'standard' | 'luxury' | 'signature'>('luxury');
  const [district, setDistrict] = useState('Tirunelveli');

  const areaRangeInputId = useId();
  const districtSelectId = useId();

  if (!isOpen) return null;

  // Rate per sq.ft calculation matrix based on South TN market norms
  const rateMatrix = {
    villa: {
      standard: 2250,
      luxury: 2850,
      signature: 3600,
    },
    commercial: {
      standard: 2100,
      luxury: 2650,
      signature: 3400,
    },
    interior: {
      standard: 950,
      luxury: 1450,
      signature: 2100,
    },
    renovation: {
      standard: 1200,
      luxury: 1750,
      signature: 2400,
    },
  };

  const ratePerSqft = rateMatrix[projectType][qualityTier];
  const totalCost = area * ratePerSqft;
  const totalLakhs = (totalCost / 100000).toFixed(2);

  // Breakdown percentages
  const structuralCost = (totalCost * 0.48).toFixed(0);
  const finishesCost = (totalCost * 0.28).toFixed(0);
  const mepCost = (totalCost * 0.16).toFixed(0);
  const approvalsCost = (totalCost * 0.08).toFixed(0);

  const formatINR = (val: string | number) => {
    const num = Number(val);
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
    }).format(num);
  };

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
        {/* Header */}
        <div className="bg-[#071A33] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            aria-label="Close cost estimator"
            className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest mb-1.5">
            <Calculator className="w-4 h-4 text-[#C28A3E]" />
            <span>Interactive Cost Planning</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
            Construction Budget Estimator
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Estimate preliminary turnkey civil &amp; finishing costs across Tirunelveli, Tenkasi, Thoothukudi, Virudhunagar, and Kanniyakumari.
          </p>
        </div>

        {/* Content Form */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Project Typology Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Select Construction Typology
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'villa', label: 'Residential Villa' },
                { id: 'commercial', label: 'Commercial Hub' },
                { id: 'interior', label: 'Interior Fit-Out' },
                { id: 'renovation', label: 'Renovation' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setProjectType(t.id as any)}
                  className={`py-2.5 px-3 text-xs font-bold uppercase tracking-wider rounded border transition-all cursor-pointer ${
                    projectType === t.id
                      ? 'bg-[#071A33] border-[#071A33] text-white shadow-sm'
                      : 'border-slate-200 text-slate-700 hover:border-slate-400 bg-slate-50'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Area Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor={areaRangeInputId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Built-Up Area (Square Feet)
              </label>
              <span className="font-display text-base font-bold text-[#071A33] tabular-nums">
                {area.toLocaleString()} Sq.Ft
              </span>
            </div>
            <input
              id={areaRangeInputId}
              type="range"
              min="800"
              max="15000"
              step="100"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full accent-[#C28A3E] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-600 mt-1 tabular-nums">
              <span>800 sq.ft</span>
              <span>5,000 sq.ft</span>
              <span>10,000 sq.ft</span>
              <span>15,000+ sq.ft</span>
            </div>
          </div>

          {/* Quality Grade Tier */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Specification &amp; Finish Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  id: 'standard',
                  name: 'Essential Quality',
                  rate: rateMatrix[projectType].standard,
                  desc: 'Fe550D TMT, standard vitrified tiles, branded CP fittings, turnkey execution.',
                },
                {
                  id: 'luxury',
                  name: 'Luxury Architectural',
                  rate: rateMatrix[projectType].luxury,
                  desc: 'Imported tile slabs, teak joinery, concealed architectural lighting, Grohe fixtures.',
                },
                {
                  id: 'signature',
                  name: 'Signature Heritage',
                  rate: rateMatrix[projectType].signature,
                  desc: 'Italian marble, solid Burma teak, double-height atriums, automated facade screens.',
                },
              ].map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setQualityTier(tier.id as any)}
                  className={`p-3.5 text-left rounded border transition-all cursor-pointer ${
                    qualityTier === tier.id
                      ? 'border-[#C28A3E] bg-[#C28A3E]/10 ring-1 ring-[#C28A3E]'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs uppercase text-[#071A33]">
                      {tier.name}
                    </span>
                    <span className="text-xs font-bold text-[#C28A3E] tabular-nums">
                      ₹{tier.rate}/sq.ft
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    {tier.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* District selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor={districtSelectId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Target District
              </label>
              <select
                id={districtSelectId}
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full px-3.5 py-2 rounded border border-slate-300 text-xs sm:text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#C28A3E]"
              >
                <option value="Tirunelveli">Tirunelveli District</option>
                <option value="Tenkasi">Tenkasi District</option>
                <option value="Thoothukudi">Thoothukudi District</option>
                <option value="Virudhunagar">Virudhunagar District</option>
                <option value="Kanniyakumari">Kanniyakumari District</option>
              </select>
            </div>
            <div className="bg-slate-50 p-3 rounded border border-slate-200 flex flex-col justify-center">
              <span className="text-[11px] font-semibold text-slate-500 uppercase">
                Estimated Rate Metric
              </span>
              <span className="text-base font-extrabold text-[#071A33] tabular-nums">
                ₹{ratePerSqft.toLocaleString()} / Sq.Ft Built-Up
              </span>
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-[#071A33] text-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-slate-700 pb-4 mb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold block">
                  Estimated Turnkey Investment Range
                </span>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight mt-1">
                  ₹{totalLakhs} <span className="text-xl font-normal text-slate-300">Lakhs (Approx)</span>
                </div>
              </div>
              <span className="text-xs text-slate-400 mt-2 sm:mt-0 tabular-nums">
                ₹{formatINR(totalCost)} (INR)
              </span>
            </div>

            {/* Itemized Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-[#0b2447] p-2.5 rounded border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">RCC Civil Structure</span>
                <span className="font-bold text-white tabular-nums mt-0.5 block">₹{formatINR(structuralCost)}</span>
              </div>
              <div className="bg-[#0b2447] p-2.5 rounded border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Architectural Finishes</span>
                <span className="font-bold text-white tabular-nums mt-0.5 block">₹{formatINR(finishesCost)}</span>
              </div>
              <div className="bg-[#0b2447] p-2.5 rounded border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Electrical &amp; Plumbing</span>
                <span className="font-bold text-white tabular-nums mt-0.5 block">₹{formatINR(mepCost)}</span>
              </div>
              <div className="bg-[#0b2447] p-2.5 rounded border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase">Approvals &amp; PM</span>
                <span className="font-bold text-white tabular-nums mt-0.5 block">₹{formatINR(approvalsCost)}</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] text-slate-500">
              *Preliminary estimate based on current regional material index. Formal BoQ requires structural survey.
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
                  onProceedToQuote({
                    type: projectType,
                    area,
                    tier: qualityTier,
                    estimate: `₹${totalLakhs} Lakhs (${area} sq.ft ${qualityTier})`,
                  });
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C28A3E] hover:bg-[#A9742F] rounded shadow transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Request Detailed BoQ Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
