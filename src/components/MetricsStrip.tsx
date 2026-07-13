import SectionHeader from './SectionHeader';

const metrics = [
  { value: '20+', label: 'Shipped projects', hint: 'ML · BI · Python · SQL' },
  { value: '3', label: 'Years of professional experience', hint: 'HR · L&D · Data Science' },
  { value: '5', label: 'Analytics stacks', hint: 'Python · SQL · Power BI · Excel · Streamlit' },
  { value: '25%', label: 'Productivity uplift', hint: 'Training programs at Barbeque Nation' },
];

const MetricsStrip = () => {
  return (
    <section id="highlights" className="container-lux py-24 md:py-32">
      <SectionHeader
        index="04"
        eyebrow="Highlights"
        title="Numbers that shape"
        italic="the story."
        description="A quick snapshot of the impact and range across data science, people analytics, and business intelligence."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 rounded-3xl overflow-hidden lux-glass">
        {metrics.map((m) => (
          <div key={m.label} className="bg-background/40 backdrop-blur-md p-6 md:p-8 flex flex-col gap-2">
            <div className="text-4xl md:text-6xl display-serif lux-text-brand leading-none">{m.value}</div>
            <div className="text-sm text-foreground/90 mt-3">{m.label}</div>
            <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">{m.hint}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricsStrip;
