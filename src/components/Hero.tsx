import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Sparkles, 
  Brain, 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  ExternalLink, 
  DollarSign, 
  Activity, 
  CheckCircle2, 
  FolderGit2, 
  Code2, 
  Layers 
} from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  // --- Widget 1: Churn ROI Simulator State ---
  const [monthlyRevenue, setMonthlyRevenue] = useState(65000);
  const [churnRate, setChurnRate] = useState(15);
  const annualRevenue = monthlyRevenue * 12;
  const naturallyLost = annualRevenue * (churnRate / 100);
  const savedRevenue = Math.round(naturallyLost * 0.42 * 0.68);
  const programCost = Math.round((annualRevenue / 4000) * 120);
  const netRetained = Math.max(0, savedRevenue - programCost);
  const roiVal = programCost > 0 ? ((netRetained / programCost) * 100).toFixed(0) : '0';

  // --- Widget 2: Attribution State ---
  const [attrModel, setAttrModel] = useState<'lastTouch' | 'linear' | 'markov'>('markov');
  const attrData = {
    lastTouch: [
      { name: 'Paid Search', pct: 45, roas: '2.8x', note: 'Over-credited (+31%)' },
      { name: 'Social Ads', pct: 28, roas: '2.4x', note: 'Assist uncredited' },
      { name: 'Email Retargeting', pct: 14, roas: '6.1x', note: 'Undervalued' },
      { name: 'Direct / Organic', pct: 13, roas: 'N/A', note: 'Baseline' },
    ],
    linear: [
      { name: 'Paid Search', pct: 33, roas: '3.3x', note: 'Equal dilution' },
      { name: 'Social Ads', pct: 29, roas: '2.9x', note: 'Even weight' },
      { name: 'Email Retargeting', pct: 21, roas: '4.8x', note: 'Mid-funnel' },
      { name: 'Direct / Organic', pct: 17, roas: 'N/A', note: 'Evenly distributed' },
    ],
    markov: [
      { name: 'Paid Search', pct: 29, roas: '4.1x', note: 'Calibrated removal' },
      { name: 'Social Ads', pct: 31, roas: '3.6x', note: 'Intent catalyst' },
      { name: 'Email Retargeting', pct: 26, roas: '8.4x', note: '+85% high-intent lift' },
      { name: 'Direct / Organic', pct: 14, roas: 'N/A', note: 'Brand retention' },
    ]
  };

  // --- Widget 3: PEAD Ticker State ---
  const [ticker, setTicker] = useState<'NVDA' | 'MSFT' | 'AAPL'>('NVDA');
  const tickerData = {
    NVDA: { surprise: '+11.2%', car: '+14.6%', signal: 'STRONG BUY // ALPHA', precision: '100%' },
    MSFT: { surprise: '+6.5%', car: '+8.2%', signal: 'BUY // DRIFT PERSIST', precision: '94%' },
    AAPL: { surprise: '+3.8%', car: '+5.1%', signal: 'ACCUMULATE // DRIFT', precision: '91%' }
  };

  return (
    <section id="hero" className="relative min-h-[100svh] pt-28 md:pt-32 pb-16 overflow-hidden">
      {/* Ambient Atmospheric Violet & Indigo Mesh Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[42rem] h-[42rem] bg-indigo-600/15 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute top-1/2 -right-24 w-[36rem] h-[36rem] bg-violet-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-lux relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Badge Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/25 text-indigo-300 text-xs font-medium backdrop-blur-xl shadow-lg">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            <span>M.Sc. Analytics (TISS Mumbai)</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Open to Quantitative &amp; Analytics Roles</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
            <span>Mumbai, India</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* EXECUTIVE BENTO GRID HERO MATRIX                               */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">

          {/* CARD 1: Executive Profile Hero Card (Center / Span 5) */}
          <div className="lg:col-span-5 bg-slate-900/70 backdrop-blur-2xl border border-white/[0.08] hover:border-indigo-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-2xl relative group">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-2 ring-indigo-500/30 shadow-xl shrink-0">
                  <img
                    src={profilePhoto}
                    alt="Vivek Kumar"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                      Vivek Kumar
                    </h1>
                    <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-indigo-300 mt-0.5">
                    Quantitative Data Analyst &amp; ML Engineer
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
                    Tata Institute of Social Sciences (TISS)
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Transforming complex enterprise, capital markets, and digital commerce data into high-conviction predictive algorithms, Basel credit risk models, and revenue-maximizing decisions.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap gap-2.5">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium text-xs shadow-lg shadow-indigo-600/30 inline-flex items-center gap-1.5 transition-all"
              >
                <Download className="w-3.5 h-3.5" /> View Resume
              </a>
              <a
                href="#projects"
                className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-medium text-xs border border-white/[0.08] inline-flex items-center gap-1.5 transition-all"
              >
                Projects <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/Wewake257"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/[0.08] transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/wewake257"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/[0.08] transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* CARD 2: Interactive Churn ROI & Value Simulator (Span 4) */}
          <div className="lg:col-span-4 bg-slate-900/70 backdrop-blur-2xl border border-white/[0.08] hover:border-indigo-500/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl relative group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Churn ROI Calculator</h3>
                    <p className="text-[10px] text-slate-400">Calibrated LightGBM (p=0.28)</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                  4.2x Lift
                </span>
              </div>

              {/* Sliders */}
              <div className="space-y-3 bg-slate-950/50 border border-white/[0.05] rounded-xl p-3 mb-4">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                    <span className="text-slate-400">Monthly Contract Value</span>
                    <span className="font-mono text-indigo-300 font-bold">${monthlyRevenue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="15000"
                    max="150000"
                    step="5000"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                    <span className="text-slate-400">Annual Natural Churn</span>
                    <span className="font-mono text-rose-300 font-bold">{churnRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={churnRate}
                    onChange={(e) => setChurnRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
                  />
                </div>
              </div>

              {/* Dynamic Metric Chips */}
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-emerald-500/20">
                  <span className="text-[9px] uppercase tracking-wider text-emerald-400 block font-medium">Net $ Retained</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-emerald-300">+${(netRetained / 1000).toFixed(0)}k/yr</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-indigo-500/20">
                  <span className="text-[9px] uppercase tracking-wider text-indigo-400 block font-medium">Retention ROI</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-indigo-300">+{roiVal}%</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Model: ROC-AUC 0.842</span>
              <a 
                href="https://github.com/Wewake257/Enterprise-Customer-Churn-Intelligence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1"
              >
                Inspect Repo <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* CARD 3: Multi-Touch Attribution Simulator (Span 3) */}
          <div className="lg:col-span-3 bg-slate-900/70 backdrop-blur-2xl border border-white/[0.08] hover:border-cyan-500/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl relative group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Attribution</h3>
                    <p className="text-[10px] text-slate-400">586k Touchpoints</p>
                  </div>
                </div>
              </div>

              {/* Model Selector Tabs */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-slate-950/60 border border-white/[0.06] rounded-xl mb-3">
                {[
                  { key: 'lastTouch', label: 'Last' },
                  { key: 'linear', label: 'Linear' },
                  { key: 'markov', label: 'Markov' }
                ].map((m) => (
                  <button
                    key={m.key}
                    onClick={() => setAttrModel(m.key as any)}
                    className={`py-1 text-[10px] font-semibold rounded-lg transition-all ${
                      attrModel === m.key 
                        ? 'bg-cyan-600 text-white shadow-md' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {/* Progress Bars */}
              <div className="space-y-2">
                {attrData[attrModel].map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-slate-300 truncate max-w-[120px]">{item.name}</span>
                      <span className="font-mono text-cyan-300 font-bold">{item.pct}%</span>
                    </div>
                    <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-500" 
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-emerald-400 font-medium">
              <span>+14.2% Blended ROAS Reallocation</span>
            </div>
          </div>

          {/* CARD 4: Live GitHub Activity & Consolidated Portfolio (Span 4) */}
          <div className="lg:col-span-4 bg-slate-900/70 backdrop-blur-2xl border border-white/[0.08] hover:border-indigo-500/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl relative group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Live GitHub Portfolio</h3>
                    <p className="text-[10px] text-slate-400">@Wewake257</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Live
                </span>
              </div>

              {/* Simulated Git Heatmap Matrix */}
              <div className="bg-slate-950/50 border border-white/[0.05] rounded-xl p-3 mb-3">
                <div className="flex justify-between text-[10px] text-slate-400 mb-2">
                  <span>2,450+ Contributions</span>
                  <span className="text-indigo-400 font-mono">6 Repos Public</span>
                </div>
                <div className="grid grid-cols-12 gap-1">
                  {[
                    1,2,3,2,1,0,2,3,4,3,2,1,
                    0,1,2,3,4,3,2,1,2,3,4,2,
                    2,3,4,2,1,3,4,2,1,2,3,4
                  ].map((lvl, i) => (
                    <div
                      key={i}
                      className={`h-2.5 rounded-sm transition-all ${
                        lvl === 4 ? 'bg-emerald-400 shadow-sm shadow-emerald-400/50' :
                        lvl === 3 ? 'bg-emerald-600' :
                        lvl === 2 ? 'bg-indigo-600' :
                        lvl === 1 ? 'bg-slate-800' : 'bg-slate-900'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <a
              href="https://github.com/Wewake257/Data-Analytics-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-indigo-300 hover:text-white border border-white/[0.06] text-xs font-semibold flex items-center justify-between transition-all"
            >
              <span>Browse Master Repo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* CARD 5: Core Technical Arsenal (Span 4) */}
          <div className="lg:col-span-4 bg-slate-900/70 backdrop-blur-2xl border border-white/[0.08] hover:border-indigo-500/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl relative group">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/20">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Technical Arsenal</h3>
                  <p className="text-[10px] text-slate-400">Institutional Toolchain</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  { name: 'Python (NumPy/Pandas)', color: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' },
                  { name: 'LightGBM / XGBoost', color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' },
                  { name: 'SQL (PostgreSQL/BigQuery)', color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' },
                  { name: 'Power BI & DAX', color: 'bg-amber-500/10 text-amber-300 border-amber-500/20' },
                  { name: 'Monte Carlo & Markowitz', color: 'bg-violet-500/10 text-violet-300 border-violet-500/20' },
                  { name: 'Markov Chains & Shapley', color: 'bg-rose-500/10 text-rose-300 border-rose-500/20' },
                  { name: 'SHAP Explainability', color: 'bg-sky-500/10 text-sky-300 border-sky-500/20' },
                ].map((sk, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold border ${sk.color}`}
                  >
                    {sk.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Stack Verified</span>
              <span className="text-emerald-400 font-semibold">Production Ready</span>
            </div>
          </div>

          {/* CARD 6: PEAD Stock Alpha Signal Card (Span 4) */}
          <div className="lg:col-span-4 bg-slate-900/70 backdrop-blur-2xl border border-white/[0.08] hover:border-violet-500/40 rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl relative group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-violet-500/15 text-violet-400 border border-violet-500/20">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">PEAD Alpha Signals</h3>
                    <p className="text-[10px] text-slate-400">Post-Earnings Drift Analysis</p>
                  </div>
                </div>

                {/* Ticker Pills */}
                <div className="flex gap-1 p-0.5 bg-slate-950/60 border border-white/[0.06] rounded-lg">
                  {(['NVDA', 'MSFT', 'AAPL'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTicker(t)}
                      className={`px-1.5 py-0.5 text-[9px] font-bold rounded ${
                        ticker === t ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950/50 border border-white/[0.05] rounded-xl p-3 space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-slate-400">Earnings Surprise:</span>
                  <span className="font-mono text-emerald-400 font-bold">{tickerData[ticker].surprise}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">30-Day Cumulative Drift:</span>
                  <span className="font-mono text-indigo-300 font-bold">{tickerData[ticker].car}</span>
                </div>
                <div className="pt-1.5 border-t border-white/[0.06] flex justify-between items-center">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Signal:</span>
                  <span className="text-[10px] font-bold font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {tickerData[ticker].signal}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
              <span className="text-slate-400">2,000 Earnings Events</span>
              <a 
                href="https://github.com/Wewake257/Stock-Earnings-Sentiment-Intelligence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 font-semibold inline-flex items-center gap-1"
              >
                Inspect <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
