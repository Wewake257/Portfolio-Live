import { BarChart3, Brain, Database, Users, Wrench, Sparkles, Code2, FileSpreadsheet, LineChart, PieChart, ShieldCheck, Factory } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const primary = [
  { name: 'Advanced Excel (Power Query M, Power Pivot, Dynamic Arrays)', pct: 95, icon: FileSpreadsheet },
  { name: 'Power BI (DAX, Star-Schema Relational Modeling)', pct: 92, icon: BarChart3 },
  { name: 'SQL (PostgreSQL, MySQL, CTEs, Window Functions)', pct: 90, icon: Database },
  { name: 'Python (Pandas, NumPy, Scikit-Learn, SciPy, LightGBM)', pct: 88, icon: Code2 },
  { name: 'Alteryx & Automated ETL Pipelines', pct: 82, icon: LineChart },
];

const biAndAnalytics = [
  'Power BI (DAX Measures)',
  'Star-Schema Relational Modeling',
  'Tableau (LOD & Parameters)',
  'Power Query M Transformations',
  'Power Pivot Data Models',
  'What-If Sensitivity Tables',
  'KPI Scorecards & MIS Decks',
  'Executive Storylining',
];

const mlAndQuantitative = [
  'Credit Risk Scorecards (PD/LGD)',
  'Weight of Evidence (WOE) & IV',
  'Supervised Classification',
  'LightGBM & XGBoost',
  'Time-Series Forecasting',
  'Markowitz MPT & Monte Carlo',
  'Value at Risk (VaR / CVaR)',
  'Multi-Touch Attribution',
  'Markov Chains & Shapley',
  'A/B Hypothesis Testing',
];

const processEngineering = [
  'Lean Six Sigma (DMAIC)',
  'Value Stream Mapping (VSM)',
  'Root-Cause Analysis (5-Whys)',
  'Fishbone Diagramming',
  'First-Pass Yield (FPY)',
  'Cycle-Time Reduction',
  'Defect Pareto Analysis',
  'SOP Authoring & Compliance',
];

const dataEngineering = [
  'Automated ETL Pipelines',
  'Schema Validation Scripts',
  'Audit Reconciliation Controls',
  'Roll-Up Variance Validation',
  'Fact-Dimension Modeling',
  'Git & GitHub Version Control',
  'Streamlit Applications',
  'AWS EC2 Foundations',
];

const domainExpertise = [
  'Banking & Credit Risk Modeling',
  'Operations Throughput Diagnostics',
  'Enterprise Customer Retention',
  'Financial Statement & DCF Valuation',
  'HR & Workforce Analytics',
  'Commercial Logistics & Supply Chain',
];

const softSkills = [
  'Analytical & Critical Thinking',
  'Executive Presentation & Decks',
  'Cross-Functional Stakeholder Alignment',
  'Root-Cause Troubleshooting',
  'Data-Driven Decision Making',
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className={`container-lux py-24 md:py-32 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <SectionHeader
        index="02"
        eyebrow="Skills &amp; Competencies"
        title="Technical Stack &amp;"
        italic="Analytical Rigor."
        description="Curated technical toolkit and domain methodologies verified across 2+ years of industry practice and institutional coursework at TISS Mumbai."
      />

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
        {/* Core proficiency */}
        <div className="lux-glass p-7 md:col-span-3 md:row-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="eyebrow">Core Technical Stack</div>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2 text-foreground">Quantitative &amp; BI Tooling</h3>
            <p className="text-xs text-muted-foreground mb-6">
              Production-tested proficiencies in data wrangling, algorithmic modeling, and executive dashboarding.
            </p>
          </div>

          <div className="space-y-5 my-auto">
            {primary.map((s) => (
              <div key={s.name}>
                <div className="flex items-center justify-between mb-1.5 text-xs">
                  <span className="flex items-center gap-2 font-medium text-foreground/90">
                    <s.icon className="w-4 h-4 text-primary shrink-0" /> {s.name}
                  </span>
                  <span className="mono text-xs text-muted-foreground">{s.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-surface-3 overflow-hidden">
                  <div
                    className="h-full bg-grad-brand transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${s.pct}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Querying, Automation, ETL &amp; Modeling</span>
            <span className="mono text-primary">Python &bull; SQL &bull; Power BI</span>
          </div>
        </div>

        {/* BI & Analytics */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-3">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-4 h-4 text-primary" />
            <div className="eyebrow">BI, Analytics &amp; Reporting</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {biAndAnalytics.map((t) => <span key={t} className="lux-chip lux-chip-primary text-xs">{t}</span>)}
          </div>
        </div>

        {/* Quantitative Modeling & ML */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-3">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-4 h-4 text-accent" />
            <div className="eyebrow">Predictive ML &amp; Quantitative Risk</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {mlAndQuantitative.map((t) => <span key={t} className="lux-chip lux-chip-accent text-xs">{t}</span>)}
          </div>
        </div>

        {/* Process Engineering & Lean Six Sigma */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Factory className="w-4 h-4 text-primary" />
            <div className="eyebrow">Process Engineering (Six Sigma)</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {processEngineering.map((t) => <span key={t} className="lux-chip text-xs">{t}</span>)}
          </div>
        </div>

        {/* Data Engineering & Platforms */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-4 h-4 text-primary" />
            <div className="eyebrow">Data Engineering &amp; ETL</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {dataEngineering.map((t) => <span key={t} className="lux-chip text-xs">{t}</span>)}
          </div>
        </div>

        {/* Domain Expertise */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <div className="eyebrow">Domain Expertise</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {domainExpertise.map((t) => <span key={t} className="lux-chip text-xs">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
