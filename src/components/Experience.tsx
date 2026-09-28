import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const experiences = [
  {
    company: 'Jio Platforms Limited',
    role: 'Predictive Analyst Intern',
    period: 'Jun 2026 – Aug 2026',
    location: 'Mumbai, India',
    type: 'Internship',
    achievements: [
      'Architected an end-to-end Predictive Classification Engine in Python (Scikit-Learn, Pandas) to forecast operational performance and customer behavioral patterns across 100,000+ transaction logs, boosting model reliability by ~18%.',
      'Formulated Success Profile Analysis using supervised classification algorithms to detect early attrition vulnerabilities and identify high-value cohorts, informing proactive retention strategies.',
      'Engineered dynamic Power BI reporting dashboards using complex DAX measures, Star-Schema relational data modeling, and automated KPI alert thresholds to deliver real-time operational insights directly to executive leadership.',
    ],
  },
  {
    company: 'OrgaKnow',
    role: 'Data Science Intern – AI Solutions',
    period: 'Dec 2025 – Feb 2026',
    location: 'India',
    type: 'Internship',
    achievements: [
      'Engineered automated data ingestion and schema validation pipelines in Python processing 10,000+ enterprise records, reducing manual ETL data preparation overhead by 60%.',
      'Designed standardized relational data architecture (fact–dimension models, input mapping dictionaries) to harmonize multi-source transaction datasets across inconsistent operational schemas.',
      'Implemented automated reconciliation audit controls including roll-up validation and period-over-period variance testing to guarantee 100% audit-ready reporting integrity across stakeholder teams.',
    ],
  },
  {
    company: 'BJT Global',
    role: 'HR & Operations Analyst',
    period: 'Dec 2023 – Aug 2024',
    location: 'India',
    type: 'Full-time',
    achievements: [
      'Automated business operations data pipelines by integrating enterprise HRMS data via Python and Excel (Power Query, Power Pivot) for executive reporting and workforce analytics.',
      'Analyzed employee datasets in Python to identify productivity trends and absenteeism anomalies; crafted data-driven executive decks with statistical visualizations for strategic leadership planning.',
      'Authored, version-controlled, and rolled out Standard Operating Procedures (SOPs) and training manuals for six business processes, facilitating team workshops that reduced procedural non-conformance by 15%.',
    ],
  },
  {
    company: 'Barbeque Nation Hospitality',
    role: 'Assistant Manager (L&D / Operations) · Management Trainee',
    period: 'Jun 2022 – Oct 2023',
    location: 'India',
    type: 'Full-time',
    achievements: [
      'Mapped service-delivery workflows (arrival → ordering → fulfillment → exit) across two restaurant units; eliminated seven non-value-adding bottlenecks, reducing average per-cover service time by 12%.',
      'Leveraged advanced Excel (Power Query M transformations, Power Pivot, Dynamic Arrays) and diagnostic KPI monitoring to model unit throughput, driving a 25% operational productivity gain.',
      'Built performance tracking dashboards and conducted daily quality checklist audits, directly contributing to a 20% reduction in staff turnover and a 20% decline in customer complaints.',
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
        eyebrow="Work Experience"
        title="Professional Experience &"
        italic="Industry Internships."
        description="2 Years and 5 Months of verified industry experience across predictive modeling, automated ETL data engineering, and operational KPI analytics."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical rail */}
        <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-border to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={exp.company} className="relative pl-12 md:pl-16 group">
              {/* Node */}
              <div className="absolute left-0 top-1">
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-2xl bg-slate-900 border border-indigo-500/30 flex items-center justify-center shadow-lg group-hover:border-indigo-500 transition-colors">
                  <Briefcase className="w-4 h-4 text-indigo-400" />
                </div>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] hover:border-indigo-500/30 rounded-3xl p-6 md:p-8 transition-all duration-300 shadow-xl">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="mono text-[10px] uppercase tracking-wider text-indigo-400 font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-sans">{exp.company}</h3>
                    <div className="mt-1 text-sm md:text-base font-medium text-indigo-300">{exp.role}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 mt-5">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span>{a}</span>
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
