const items = [
  'Quantitative Analytics',
  'LightGBM & XGBoost',
  'Python & SQL',
  'Multi-Touch Attribution',
  'Basel PD Credit Risk',
  'Power BI & DAX',
  'Monte Carlo Simulation',
  'PEAD Alpha Signals',
  'SHAP Explainability',
  'Advanced Excel',
  'Customer Churn Intelligence',
];

const Marquee = () => {
  const doubled = [...items, ...items];
  return (
    <section aria-hidden="true" className="relative py-10 border-y border-border/60 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />
      <div className="marquee-track flex gap-14 whitespace-nowrap">
        {doubled.map((label, i) => (
          <span key={i} className="flex items-center gap-14 text-2xl md:text-3xl display-serif text-muted-foreground/70">
            {label}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60" />
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
