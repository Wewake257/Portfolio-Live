import { Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    company: 'Bartiya Janta Trader Pvt. Ltd.',
    role: 'HR Generalist',
    period: 'Dec 2023 — Current',
    location: 'India',
    achievements: [
      'Manage day-to-day HR operations across onboarding, records management and employee lifecycle documentation',
      'Maintain employee master data and prepare recurring HR reports for management review',
      'Track headcount, attendance and joining/exit data in Excel to keep workforce records reporting-ready',
      'Coordinate across functions on policy queries, compliance documentation and internal communication',
    ],
  },
  {
    company: 'Barbeque Nation · Fulki Communication Pvt. Ltd.',
    role: 'Assistant Learning & Development Manager / HR Generalist',
    period: 'Jan 2023 — Nov 2023',
    location: 'India',
    achievements: [
      'Designed and delivered training programs, improving team productivity and reducing turnover across the units supported',
      'Standardised training SOPs and created manuals, onboarding material and learning content for long-term reuse',
      'Supported the performance appraisal cycle — feedback conversations, documentation and training-need identification',
      'Coordinated workshops with unit managers and business stakeholders, tracking participation and completion',
      'Reviewed learning content for accuracy, compliance and brand alignment before rollout',
    ],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className={`container-lux py-24 md:py-32 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <SectionHeader
        index="05"
        eyebrow="Experience"
        title="HR &amp; L&amp;D roles, read through"
        italic="an analytics lens."
        description="Three years in people-facing roles — process, data and reporting responsibilities that now feed directly into analytics work."
      />

      <div className="relative">
        {/* Vertical rail */}
        <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={exp.company} className="relative pl-14 md:pl-20 group">
              {/* Node */}
              <div className="absolute left-0 top-1">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full lux-glass flex items-center justify-center shadow-lux">
                  <div className="w-2 h-2 rounded-full bg-grad-brand shadow-lux-glow" />
                </div>
              </div>

              <div className="lux-glass lux-glass-hover p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="mono text-[10px] uppercase tracking-widest text-primary mb-1">0{i + 1}</div>
                    <h3 className="display-serif text-2xl md:text-3xl leading-tight">{exp.company}</h3>
                    <div className="mt-2 text-sm md:text-base text-foreground/80">{exp.role}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 text-xs mono">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 mt-4">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm md:text-[15px] text-foreground/85 leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
