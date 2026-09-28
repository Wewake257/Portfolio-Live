import { BarChart3, Brain, Database, Users, Wrench, Sparkles, Code2, FileSpreadsheet, LineChart, PieChart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const primary = [
  { name: 'Advanced Excel', pct: 92, icon: FileSpreadsheet },
  { name: 'Power BI (DAX, Power Query)', pct: 88, icon: BarChart3 },
  { name: 'SQL', pct: 82, icon: Database },
  { name: 'Python', pct: 85, icon: Code2 },
  { name: 'Streamlit', pct: 75, icon: LineChart },
];

const dataAnalytics = [
  'Dashboard Development',
  'KPI / MIS Reporting',
  'Reporting Automation',
  'Data Tracking',
  'Power Pivot',
  'DAX',
  'Power Query',
];

const dataScience = [
  'LightGBM & XGBoost',
  'Multi-Touch Attribution',
  'Markov Chains & Shapley',
  'Kaplan-Meier Survival S(t)',
  'Probability Calibration',
  'SHAP Explainability',
  'Feature Engineering',
  'Statistical Modeling',
  'Monte Carlo Simulation',
];

const tools = ['Python', 'SQL Server', 'Power BI', 'Streamlit', 'Jupyter', 'Git', 'R', 'QGIS'];

const domain = [
  'Enterprise Churn & Retention',
  'Capital Markets & Financial NLP',
  'E-Commerce & Marketing Attribution',
  'Credit Risk (PD Scoring)',
  'HR & People Analytics',
  'Commercial Voyage Economics',
];

const soft = [
  'Analytical thinking',
  'Problem solving',
  'Stakeholder communication',
  'Presentation',
  'Cross-functional collaboration',
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
        eyebrow="Skills"
        title="A toolkit built for"
        italic="analysis and reporting."
      />

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
        {/* Core proficiency */}
        <div className="lux-glass p-7 md:col-span-3 md:row-span-2 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="eyebrow">Core tools</div>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <h3 className="display-serif text-3xl mb-6">Data analytics stack</h3>
          <div className="space-y-5 mt-auto">
            {primary.map((s) => (
              <div key={s.name}>
                <div className="flex items-center justify-between mb-1.5 text-sm">
                  <span className="flex items-center gap-2">
                    <s.icon className="w-4 h-4 text-primary" /> {s.name}
                  </span>
                  <span className="mono text-xs text-muted-foreground">{s.pct}%</span>
                </div>
                <div className="h-1 rounded-full bg-surface-3 overflow-hidden">
                  <div
                    className="h-full bg-grad-brand transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${s.pct}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics & reporting */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-3">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-4 h-4 text-primary" />
            <div className="eyebrow">Analytics &amp; reporting</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {dataAnalytics.map((t) => <span key={t} className="lux-chip lux-chip-primary">{t}</span>)}
          </div>
        </div>

        {/* Data science & statistics */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-3">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-4 h-4 text-accent" />
            <div className="eyebrow">Data science &amp; statistics</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {dataScience.map((t) => <span key={t} className="lux-chip lux-chip-accent">{t}</span>)}
          </div>
        </div>

        {/* Tools */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-4 h-4 text-primary" />
            <div className="eyebrow">Tools &amp; platforms</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => <span key={t} className="lux-chip">{t}</span>)}
          </div>
        </div>

        {/* Domain */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-primary" />
            <div className="eyebrow">Domain</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {domain.map((t) => <span key={t} className="lux-chip">{t}</span>)}
          </div>
        </div>

        {/* Soft skills */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <PieChart className="w-4 h-4 text-accent" />
            <div className="eyebrow">Soft skills</div>
          </div>
          <ul className="space-y-1.5 text-sm text-foreground/85">
            {soft.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
