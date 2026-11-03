'use client';

import { useState } from 'react';
import { Calculator, Ruler } from 'lucide-react';

const ESTIMATES: Record<string, { base: number; perSqm: number }> = {
  balustrades: { base: 5000, perSqm: 850 },
  pools: { base: 150000, perSqm: 3200 },
  staircases: { base: 45000, perSqm: 2100 },
  decking: { base: 25000, perSqm: 1400 },
  waterproofing: { base: 15000, perSqm: 650 },
  solar: { base: 80000, perSqm: 1200 },
  shutters: { base: 12000, perSqm: 950 },
  garage: { base: 35000, perSqm: 1800 },
  skimming: { base: 8000, perSqm: 450 },
};

export default function CADEstimator({ className = '' }: { className?: string }) {
  const [service, setService] = useState('balustrades');
  const [area, setArea] = useState(100);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const est = ESTIMATES[service];
    const total = est.base + est.perSqm * area;
    setResult(total);
  };

  const services = [
    { key: 'balustrades', label: 'Steel & Glass Balustrades' },
    { key: 'pools', label: 'Swimming Pools' },
    { key: 'staircases', label: 'Steel Staircases' },
    { key: 'decking', label: 'Decking' },
    { key: 'waterproofing', label: 'Waterproofing' },
    { key: 'solar', label: 'Solar Energy' },
    { key: 'shutters', label: 'Roller Shutters' },
    { key: 'garage', label: 'Garage Doors' },
    { key: 'skimming', label: 'Wall Skimming' },
  ];

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Real-Time CAD Estimator
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Service Division
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-brand-primary border border-white/30 dark:border-brand-dark/30 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    {services.map((item) => (
                      <option key={item.key} value={item.key}>{item.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Area (m²)
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 bg-white dark:bg-brand-primary border border-white/30 dark:border-brand-dark/30 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="e.g. 100"
                  />
                </div>
                <button
                  onClick={calculate}
                  className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Ruler className="w-4 h-4" /> Calculate Estimate
                </button>
              </div>
            </div>
            <div className="flex-1 bg-white/50 dark:bg-brand-primary/30 rounded-xl p-6 border border-white/10 dark:border-brand-dark/30">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1 uppercase tracking-wider">
                Estimated Project Cost
              </h4>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {result !== null ? `ZAR ${result.toLocaleString()}` : 'Enter details above'}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Estimate includes base mobilization fee + per-square-meter rate.
                Final quote subject to site assessment and engineering review.
              </p>
              <div className="mt-4 pt-4 border-t border-white/20 dark:border-brand-dark/30">
                <p className="text-xs text-slate-500 dark:text-slate-400">Branch Rates:</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Gauteng: Standard pricing</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Harare: +15% transport levy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}