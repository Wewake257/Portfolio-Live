import React, { useState } from 'react';
import { 
  Brain, 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  Sliders, 
  Layers, 
  Activity, 
  CheckCircle2, 
  FolderGit2,
  DollarSign
} from 'lucide-react';

export const BentoGridInteractive = () => {
  // --- Widget 1: Churn ROI Simulator State ---
  const [monthlyRevenue, setMonthlyRevenue] = useState(75000);
  const [churnRate, setChurnRate] = useState(16);
  const [interventionCost, setInterventionCost] = useState(120);

  // Financial model logic derived from Vivek's calibrated threshold at p=0.28
  const annualRevenue = monthlyRevenue * 12;
  const naturallyLostRevenue = annualRevenue * (churnRate / 100);
  // Calibrated LightGBM captures 4.2x natural churn density in top decile with 68% retention success
  const savedRevenue = Math.round(naturallyLostRevenue * 0.42 * 0.68);
  const programCost = Math.round((annualRevenue / 4000) * interventionCost);
  const netRetainedValue = Math.max(0, savedRevenue - programCost);
  const roiMultiplier = programCost > 0 ? ((netRetainedValue / programCost) * 100).toFixed(1) : '0';

  // --- Widget 2: Attribution Simulator State ---
  const [attributionModel, setAttributionModel] = useState<'lastTouch' | 'linear' | 'markov'>('markov');
  
  const attributionData = {
    lastTouch: [
      { channel: 'Paid Search (Google)', share: 44, roas: '2.8x', note: 'Over-credited (+31% skew)' },
      { channel: 'Social Ads (Meta)', share: 28, roas: '2.4x', note: 'Mid-funnel assist uncredited' },
      { channel: 'Email Retargeting', share: 14, roas: '6.1x', note: 'Severely undervalued' },
      { channel: 'Organic & Direct', share: 14, roas: 'N/A', note: 'Baseline brand anchor' },
    ],
    linear: [
      { channel: 'Paid Search (Google)', share: 32, roas: '3.3x', note: 'Equal touchpoint dilution' },
      { channel: 'Social Ads (Meta)', share: 29, roas: '2.9x', note: 'Standard attribution' },
      { channel: 'Email Retargeting', share: 21, roas: '4.8x', note: 'Moderate weight' },
      { channel: 'Organic & Direct', share: 18, roas: 'N/A', note: 'Evenly distributed' },
    ],
    markov: [
      { channel: 'Paid Search (Google)', share: 29, roas: '4.1x', note: 'True removal impact (Calibrated)' },
      { channel: 'Social Ads (Meta)', share: 31, roas: '3.6x', note: 'Critical high-intent catalyst' },
      { channel: 'Email Retargeting', share: 26, roas: '8.4x', note: 'High conversion linchpin (+85% lift)' },
      { channel: 'Organic & Direct', share: 14, roas: 'N/A', note: 'Independent baseline retention' },
    ]
  };

  // --- Widget 3: PEAD Capital Markets Signal Radar ---
  const [selectedTicker, setSelectedTicker] = useState<'NVDA' | 'MSFT' | 'AAPL'>('NVDA');
  const tickerInsights = {
    NVDA: { surprise: '+11.2%', sentiment: '+0.84 (Loughran-McDonald)', signal: 'STRONG BUY // CATALYST', car30: '+14.6%', precision: '100%' },
    MSFT: { surprise: '+6.5%', sentiment: '+0.71 (Loughran-McDonald)', signal: 'BUY // DRIFT PERSIST', car30: '+8.2%', precision: '94%' },
    AAPL: { surprise: '+3.8%', sentiment: '+0.59 (Loughran-McDonald)', signal: 'MODERATE BUY // DRIFT', car30: '+5.1%', precision: '91%' }
  };

  return (
    <section id="executive-bento" className="relative py-24 overflow-hidden">
      {/* Soft Ambient Mesh Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/10 w-[30rem] h-[30rem] bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl" />
      </div>

      <div className="container-lux relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Executive Intelligence Bento Grid
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans">
            Interactive Quantitative Models
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Test real-world financial scenarios, algorithmic removal effects, and alpha drift metrics powered by production-grade data pipelines.
          </p>
        </div>

        {/* Bento Grid Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* CARD 1 (7 Cols): Interactive Churn ROI & Revenue Saved Calculator */}
          <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] hover:border-indigo-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl relative group overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Enterprise Churn ROI Simulator</h3>
                    <p className="text-xs text-slate-400">Calibrated LightGBM (p=0.28 threshold)</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 4.2x Decile Lift
                </span>
              </div>

              {/* Sliders Container */}
              <div className="space-y-5 bg-slate-950/40 border border-white/[0.05] rounded-2xl p-4 sm:p-5">
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-300 mb-2">
                    <span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5 text-indigo-400" /> Monthly Contract Revenue</span>
                    <span className="font-mono text-indigo-300">${monthlyRevenue.toLocaleString()} / mo</span>
                  </div>
                  <input
                    type="range"
                    min="15000"
                    max="200000"
                    step="5000"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-300 mb-2">
                    <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-rose-400" /> Natural Annual Churn Rate</span>
                    <span className="font-mono text-rose-300">{churnRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="35"
                    step="1"
                    value={churnRate}
                    onChange={(e) => setChurnRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
                  />
                </div>
              </div>

              {/* Financial Output Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mt-6">
                <div className="bg-slate-950/60 border border-white/[0.05] rounded-2xl p-4">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block mb-1">Naturally At Risk</span>
                  <span className="font-mono text-base sm:text-lg font-bold text-slate-200">
                    ${(naturallyLostRevenue / 1000).toFixed(0)}k <span className="text-xs text-slate-500 font-normal">/ yr</span>
                  </span>
                </div>

                <div className="bg-slate-950/60 border border-emerald-500/20 rounded-2xl p-4">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-emerald-400 block mb-1">Net $ Retained</span>
                  <span className="font-mono text-base sm:text-lg font-bold text-emerald-300">
                    +${(netRetainedValue / 1000).toFixed(0)}k <span className="text-xs text-emerald-500 font-normal">/ yr</span>
                  </span>
                </div>

                <div className="col-span-2 sm:col-span-1 bg-slate-950/60 border border-indigo-500/20 rounded-2xl p-4">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-indigo-400 block mb-1">Retention ROI</span>
                  <span className="font-mono text-base sm:text-lg font-bold text-indigo-300">
                    +{roiMultiplier}%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">Algorithm: Isotonic Calibrated LightGBM</span>
              <a 
                href="https://github.com/Wewake257/Enterprise-Customer-Churn-Intelligence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1 group/link"
              >
                Inspect Codebase <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* CARD 2 (5 Cols): PEAD Capital Markets Signal Radar */}
          <div className="lg:col-span-5 bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] hover:border-violet-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl relative group overflow-hidden">
            <div className="absolute -left-16 -top-16 w-64 h-64 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-violet-500/15 text-violet-400 border border-violet-500/20">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Stock PEAD Alpha Radar</h3>
                    <p className="text-xs text-slate-400">Loughran-McDonald NLP + Drift</p>
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  0.988 AUC
                </span>
              </div>

              {/* Ticker Selector Pills */}
              <div className="flex gap-2 p-1.5 bg-slate-950/60 border border-white/[0.06] rounded-2xl mb-5">
                {(['NVDA', 'MSFT', 'AAPL'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTicker(t)}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                      selectedTicker === t 
                        ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Ticker Metrics Display */}
              <div className="space-y-3.5 bg-slate-950/40 border border-white/[0.05] rounded-2xl p-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Earnings Surprise:</span>
                  <span className="font-mono font-bold text-emerald-400">{tickerInsights[selectedTicker].surprise}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">NLP Sentiment (10-K):</span>
                  <span className="font-mono text-slate-200">{tickerInsights[selectedTicker].sentiment}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">30-Day Cumulative Drift:</span>
                  <span className="font-mono font-bold text-indigo-300">{tickerInsights[selectedTicker].car30}</span>
                </div>
                <div className="pt-2 border-t border-white/[0.06] flex justify-between items-center">
                  <span className="text-[11px] font-semibold uppercase text-slate-400">Alpha Strategy:</span>
                  <span className="text-xs font-bold font-mono text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {tickerInsights[selectedTicker].signal}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">2,000 Earnings Events</span>
              <a 
                href="https://github.com/Wewake257/Stock-Earnings-Sentiment-Intelligence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 font-semibold inline-flex items-center gap-1 group/link"
              >
                View Repository <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* CARD 3 (6 Cols): Multi-Touch Attribution Simulator */}
          <div className="lg:col-span-6 bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl relative group overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Marketing Multi-Touch Attribution</h3>
                    <p className="text-xs text-slate-400">Markov Chain Removal Effects vs Last-Touch</p>
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  586k+ Paths
                </span>
              </div>

              {/* Attribution Model Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-slate-950/60 border border-white/[0.06] rounded-2xl mb-5">
                {[
                  { key: 'lastTouch', label: 'Last-Touch' },
                  { key: 'linear', label: 'Linear' },
                  { key: 'markov', label: 'Markov (Removal)' }
                ].map((m) => (
                  <button
                    key={m.key}
                    onClick={() => setAttributionModel(m.key as any)}
                    className={`py-1.5 text-xs font-semibold rounded-xl transition-all ${
                      attributionModel === m.key 
                        ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {/* Channel Distribution Bars */}
              <div className="space-y-3 bg-slate-950/40 border border-white/[0.05] rounded-2xl p-4">
                {attributionData[attributionModel].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">{item.channel}</span>
                      <span className="font-mono text-cyan-300 font-semibold">{item.share}% <span className="text-slate-500">({item.roas})</span></span>
                    </div>
                    <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-500" 
                        style={{ width: `${item.share}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-400 block">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-emerald-400 font-semibold font-mono">+14.2% ROAS Budget Reallocation</span>
              <a 
                href="https://github.com/Wewake257/Ecommerce-Attribution-CLV-Intelligence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 group/link"
              >
                View Repository <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* CARD 4 (6 Cols): Basel III & Quantitative Risk Suite */}
          <div className="lg:col-span-6 bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] hover:border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl relative group overflow-hidden">
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Basel III PD & Risk Optimization</h3>
                    <p className="text-xs text-slate-400">Regulatory Scorecard & Monte Carlo Stress</p>
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Basel Compliant
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3.5 mb-5">
                <div className="bg-slate-950/60 border border-white/[0.05] rounded-2xl p-4">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block mb-1">PD Scorecard AUC</span>
                  <span className="font-mono text-xl font-bold text-emerald-400">0.887</span>
                  <span className="text-[10px] text-slate-400 block mt-1">WoE Logistic Model</span>
                </div>
                <div className="bg-slate-950/60 border border-white/[0.05] rounded-2xl p-4">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block mb-1">Monte Carlo VaR (99%)</span>
                  <span className="font-mono text-xl font-bold text-indigo-300">10,000</span>
                  <span className="text-[10px] text-slate-400 block mt-1">Iterations Simulated</span>
                </div>
              </div>

              <div className="p-3.5 bg-slate-950/40 border border-white/[0.05] rounded-2xl space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Credit Risk Engine:</span>
                  <span className="font-mono font-semibold text-emerald-400">Calibrated Logistic + WoE</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Fraud Anomaly Pipeline:</span>
                  <span className="font-mono font-semibold text-cyan-400">Isolation Forest (Sub-second)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Capital Optimization:</span>
                  <span className="font-mono font-semibold text-purple-400">Markowitz Efficient Frontier</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">Digital Banking Portfolio</span>
              <a 
                href="https://github.com/Wewake257/Bank-Analytics-Portfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 group/link"
              >
                View Repository <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* CARD 5 (12 Cols): Master Portfolio Architecture Banner */}
          <div className="lg:col-span-12 bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-purple-950/40 backdrop-blur-xl border border-indigo-500/20 hover:border-indigo-500/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <FolderGit2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-sans">
                  Consolidated Data Analytics &amp; Quantitative Architecture
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                  Browse all institutional projects folder-by-folder in a single repository: Churn, PEAD, Attribution, Banking, GE Maritime Voyage Economics, and Zinnia Process Engineering.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href="https://github.com/Wewake257/Data-Analytics-Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all group"
              >
                <span>Browse Folder-Wise Repo</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGridInteractive;
