import { useEffect, useState, useRef } from 'react';

interface MetricItem {
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const METRICS: MetricItem[] = [
  { target: 12, suffix: '+', label: 'Years Experience', sublabel: 'Continuous civil excellence' },
  { target: 80, suffix: '+', label: 'Projects Completed', sublabel: 'Villas, commercial & turnkey' },
  { target: 5, suffix: '', label: 'Districts Served', sublabel: 'Tirunelveli to Kanniyakumari' },
  { target: 100, suffix: '%', label: 'Commitment to Quality', sublabel: 'Material & structural integrity' },
];

export function TrustStrip() {
  const [isInView, setIsInView] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (stripRef.current) {
      observer.observe(stripRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400; // ms
    const frames = 40;
    const intervalTime = duration / frames;
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / frames;
      const easeOut = 1 - Math.pow(1 - progress, 3); // cubic ease out

      setCounts(
        METRICS.map((m) => Math.min(Math.round(m.target * easeOut), m.target))
      );

      if (currentFrame >= frames) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section id="trust-strip" ref={stripRef} className="bg-[#071A33] border-t border-slate-800 text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
          {METRICS.map((metric, idx) => (
            <div key={metric.label} className={`pt-6 md:pt-0 ${idx !== 0 ? 'md:pl-8 lg:pl-10' : ''}`}>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tabular-nums tracking-tight">
                  {counts[idx]}
                </span>
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#C28A3E]">
                  {metric.suffix}
                </span>
              </div>
              <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-100 uppercase tracking-wider">
                {metric.label}
              </h3>
              <p className="mt-1 text-xs text-slate-400 font-normal">
                {metric.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
