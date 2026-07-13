import { BarChart3, Brain, Code2, Database, FileSpreadsheet, LineChart, PieChart, Users, Wrench, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const primary = [
  { name: 'Python', pct: 88, icon: Code2 },
  { name: 'SQL', pct: 82, icon: Database },
  { name: 'Power BI', pct: 90, icon: BarChart3 },
  { name: 'Excel', pct: 92, icon: FileSpreadsheet },
  { name: 'Streamlit', pct: 78, icon: LineChart },
];

const ml = ['EDA', 'Feature Engineering', 'Classification Models', 'Risk Scoring', 'Statistical Analysis'];
const tools = ['Pandas', 'NumPy', 'Streamlit', 'Gradio', 'Tableau', 'QGIS', 'Jupyter'];
const hrSystems = ['HRSS', 'LMS', 'Frontlyn', 'Betterplace', 'ZingHR', 'ZingLearn'];
const soft = ['Analytical thinking', 'Problem solving', 'Collaboration', 'Stakeholder mgmt', 'Adaptability'];

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
        eyebrow="Capabilities"
        title="A stack built for"
        italic="decision-grade analytics."
      />

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[minmax(140px,auto)]">
        {/* Primary skills — tall tile */}
        <div className="lux-glass p-7 md:col-span-3 md:row-span-2 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="eyebrow">Primary</div>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <h3 className="display-serif text-3xl mb-6">Core proficiency</h3>
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

        {/* ML & Analytics */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-3">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-4 h-4 text-accent" />
            <div className="eyebrow">ML & Analytics</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {ml.map((t) => <span key={t} className="lux-chip lux-chip-accent">{t}</span>)}
          </div>
        </div>

        {/* Tools */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-4 h-4 text-primary" />
            <div className="eyebrow">Tools</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => <span key={t} className="lux-chip">{t}</span>)}
          </div>
        </div>

        {/* Pull quote */}
        <div className="lux-glass p-6 md:col-span-4 flex items-center">
          <p className="display-serif text-xl md:text-2xl leading-snug text-balance">
            "The best analytics tell you <em className="display-italic lux-text-brand">what to do next</em>, not just what happened."
          </p>
        </div>

        {/* HR Systems */}
        <div className="lux-glass lux-glass-hover p-6 md:col-span-4">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-primary" />
            <div className="eyebrow">HR Systems</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {hrSystems.map((t) => <span key={t} className="lux-chip">{t}</span>)}
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
                <span className="w-1 h-1 rounded-full bg-primary" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
