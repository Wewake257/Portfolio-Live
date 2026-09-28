import { 
  BarChart3, 
  Brain, 
  Database, 
  Users, 
  Wrench, 
  Sparkles, 
  Code2, 
  FileSpreadsheet, 
  LineChart, 
  PieChart, 
  ShieldCheck, 
  Factory,
  TrendingUp,
  GitBranch,
  Layers,
  Cpu,
  Workflow,
  Search,
  Target,
  CheckSquare,
  Boxes,
  Gauge,
  Zap,
  Award,
  Presentation,
  CheckCircle2,
  Sliders,
  Table,
  Binary,
  FileCheck
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const primary = [
  { name: 'Advanced Excel (Power Query M, Power Pivot, Dynamic Arrays)', pct: 95, icon: FileSpreadsheet },
  { name: 'Power BI (DAX, Star-Schema Relational Modeling)', pct: 92, icon: BarChart3 },
  { name: 'SQL (PostgreSQL, MySQL, CTEs, Window Functions)', pct: 90, icon: Database },
  { name: 'Python (Pandas, NumPy, Scikit-Learn, SciPy, LightGBM)', pct: 88, icon: Code2 },
  { name: 'Alteryx & Automated ETL Pipelines', pct: 82, icon: Workflow },
];

const biAndAnalytics = [
  { name: 'Power BI (DAX Measures)', icon: BarChart3 },
  { name: 'Star-Schema Relational Modeling', icon: Layers },
  { name: 'Tableau (LOD & Parameters)', icon: PieChart },
  { name: 'Power Query M Transformations', icon: Workflow },
  { name: 'Power Pivot Data Models', icon: Table },
  { name: 'What-If Sensitivity Tables', icon: Sliders },
  { name: 'KPI Scorecards & MIS Decks', icon: FileSpreadsheet },
  { name: 'Executive Storylining', icon: Presentation },
];

const mlAndQuantitative = [
  { name: 'Credit Risk Scorecards (PD/LGD)', icon: ShieldCheck },
  { name: 'Weight of Evidence (WOE) & IV', icon: Gauge },
  { name: 'Supervised Classification', icon: Binary },
  { name: 'LightGBM & XGBoost', icon: Zap },
  { name: 'Time-Series Forecasting', icon: TrendingUp },
  { name: 'Markowitz MPT & Monte Carlo', icon: Target },
  { name: 'Value at Risk (VaR / CVaR)', icon: ShieldCheck },
  { name: 'Multi-Touch Attribution', icon: Layers },
  { name: 'Markov Chains & Shapley', icon: Brain },
  { name: 'A/B Hypothesis Testing', icon: CheckCircle2 },
];

const processEngineering = [
  { name: 'Lean Six Sigma (DMAIC)', icon: Factory },
  { name: 'Value Stream Mapping (VSM)', icon: Workflow },
  { name: 'Root-Cause Analysis (5-Whys)', icon: Search },
  { name: 'Fishbone Diagramming', icon: GitBranch },
  { name: 'First-Pass Yield (FPY)', icon: Award },
  { name: 'Cycle-Time Reduction', icon: Gauge },
  { name: 'Defect Pareto Analysis', icon: BarChart3 },
  { name: 'SOP Authoring & Compliance', icon: FileCheck },
];

const dataEngineering = [
  { name: 'Automated ETL Pipelines', icon: Cpu },
  { name: 'Schema Validation Scripts', icon: CheckSquare },
  { name: 'Audit Reconciliation Controls', icon: FileCheck },
  { name: 'Roll-Up Variance Validation', icon: Sliders },
  { name: 'Fact-Dimension Modeling', icon: Boxes },
  { name: 'Git & GitHub Version Control', icon: GitBranch },
  { name: 'Streamlit Applications', icon: Code2 },
  { name: 'AWS EC2 Foundations', icon: Database },
];

const domainExpertise = [
  { name: 'Banking & Credit Risk Modeling', icon: ShieldCheck },
  { name: 'Operations Throughput Diagnostics', icon: Gauge },
  { name: 'Enterprise Customer Retention', icon: Users },
  { name: 'Financial Statement & DCF Valuation', icon: LineChart },
  { name: 'HR & Workforce Analytics', icon: Users },
  { name: 'Commercial Logistics & Supply Chain', icon: Boxes },
];

const softSkills = [
  { name: 'Analytical & Critical Thinking', icon: Brain },
  { name: 'Executive Presentation & Decks', icon: Presentation },
  { name: 'Cross-Functional Stakeholder Alignment', icon: Users },
  { name: 'Root-Cause Troubleshooting', icon: Search },
  { name: 'Data-Driven Decision Making', icon: Target },
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
            {biAndAnalytics.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-2/80 hover:bg-primary/10 border border-white/5 hover:border-primary/30 transition-all text-xs text-foreground/90 font-medium group"
              >
                <item.icon className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform shrink-0" />
                <span>{item.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Quantitative Modeling & ML */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-3">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-4 h-4 text-accent" />
            <div className="eyebrow">Predictive ML &amp; Quantitative Risk</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {mlAndQuantitative.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-2/80 hover:bg-accent/10 border border-white/5 hover:border-accent/30 transition-all text-xs text-foreground/90 font-medium group"
              >
                <item.icon className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform shrink-0" />
                <span>{item.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Process Engineering & Lean Six Sigma */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Factory className="w-4 h-4 text-primary" />
            <div className="eyebrow">Process Engineering (Six Sigma)</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {processEngineering.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface-2/80 hover:bg-primary/10 border border-white/5 hover:border-primary/30 transition-all text-xs text-foreground/90 font-medium group"
              >
                <item.icon className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform shrink-0" />
                <span>{item.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Data Engineering & Platforms */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-4 h-4 text-primary" />
            <div className="eyebrow">Data Engineering &amp; ETL</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {dataEngineering.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface-2/80 hover:bg-primary/10 border border-white/5 hover:border-primary/30 transition-all text-xs text-foreground/90 font-medium group"
              >
                <item.icon className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform shrink-0" />
                <span>{item.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Domain Expertise */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <div className="eyebrow">Domain Expertise</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {domainExpertise.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface-2/80 hover:bg-accent/10 border border-white/5 hover:border-accent/30 transition-all text-xs text-foreground/90 font-medium group"
              >
                <item.icon className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform shrink-0" />
                <span>{item.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
