import { Target, Database, LineChart, PieChart, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const steps = [
  {
    icon: Target,
    title: 'Define the business question',
    body: 'Clarify what decision the analysis has to support, who the stakeholder is, and what "good" looks like.',
  },
  {
    icon: Database,
    title: 'Prepare the data',
    body: 'Collect, clean and structure the data — handling gaps, duplicates and inconsistent definitions before analysis.',
  },
  {
    icon: LineChart,
    title: 'Explore & analyse',
    body: 'Run EDA and statistical checks to surface patterns, drivers and segments worth acting on.',
  },
  {
    icon: PieChart,
    title: 'Visualise & communicate',
    body: 'Build Excel / Power BI / Streamlit views that make the finding obvious to a non-technical audience.',
  },
  {
    icon: CheckCircle2,
    title: 'Recommend action',
    body: 'Translate the result into a clear recommendation, with the assumptions and limits stated up front.',
  },
];

const HowIWork = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section
      id="process"
      ref={ref as React.RefObject<HTMLElement>}
      className={`container-lux py-24 md:py-32 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <SectionHeader
        index="04"
        eyebrow="How I work"
        title="A repeatable path from"
        italic="question to decision."
      />

      <ol className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.title} className="lux-glass lux-glass-hover p-6 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-grad-brand-soft border border-hairline flex items-center justify-center">
                <s.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Step {i + 1}
              </span>
            </div>
            <h3 className="text-base font-medium leading-snug">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HowIWork;
