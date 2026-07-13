import { Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    company: 'OrgaKnow',
    role: 'Data Science Intern — AI Solutions',
    period: 'Dec 2025 — Present',
    location: 'Remote',
    achievements: [
      'Built HR attrition prediction and employee performance analysis models using Python (Pandas, NumPy) and structured CSV-based pipelines',
      'Performed EDA and developed web-based Streamlit dashboards with role-based access (CHRO, HRBP, Manager)',
      'Implemented classification-style risk scoring, KPI-weighted features, and prescriptive analytics using historical workforce data',
    ],
  },
  {
    company: 'BJT Global',
    role: 'HR Generalist',
    period: 'Dec 2023 — Aug 2024',
    location: 'Remote',
    achievements: [
      'Refined and enforced HR policies in compliance with labor laws and company goals, fostering a compliant work environment',
      'Spearheaded the performance appraisal process — providing constructive feedback and identifying training needs',
      'Maintained and analyzed HR data to generate insights, enabling data-driven decision-making for workforce trends',
      'Designed interactive dashboards using Excel and Power BI for clear visualization of key HR metrics',
    ],
  },
  {
    company: 'Barbeque Nation',
    role: 'Management Trainee — L&D · HR',
    period: 'Jun 2022 — Oct 2023',
    location: 'India',
    achievements: [
      'Designed and executed training programs, boosting productivity by 25% and reducing turnover by 20%',
      'Coordinated workshops and seminars, improving performance by 30% and customer satisfaction by 15%',
      'Created manuals, onboarding materials, and videos for long-term training use',
      'Reviewed and edited training content for accuracy, compliance, and brand alignment',
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
        title="Three years, three"
        italic="disciplines converging."
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
                    <h3 className="display-serif text-3xl md:text-4xl leading-none">{exp.company}</h3>
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
