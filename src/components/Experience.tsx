import { Briefcase, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const experiences = [
    {
      company: 'OrgaKnow',
      role: 'Data Science Intern – AI Solutions',
      period: 'Dec 2025 – Present',
      achievements: [
        'Built HR attrition prediction and employee performance analysis models using Python (Pandas, NumPy) and structured CSV-based pipelines',
        'Performed EDA and developed web-based Streamlit dashboards with role-based access (CHRO, HRBP, Manager)',
        'Implemented classification-style risk scoring, KPI-weighted features, and prescriptive analytics using historical workforce data',
      ],
      color: 'primary',
    },
    {
      company: 'BJT Global',
      role: 'HR Generalist (Remote)',
      period: 'Dec 2023 – Aug 2024',
      achievements: [
        'Refined and enforced HR policies in compliance with labor laws and company goals, fostering a compliant work environment',
        'Spearheaded performance appraisal process, providing constructive feedback and identifying training needs',
        'Maintained and analyzed HR data to generate insights, enabling data-driven decision-making for workforce trends',
        'Designed interactive dashboards using Excel and Power BI for clear visualization of key HR metrics',
      ],
      color: 'secondary',
    },
    {
      company: 'Barbeque Nation',
      role: 'Management Trainee (L&D–HR)',
      period: 'Jun 2022 – Oct 2023',
      achievements: [
        'Designed and executed training programs, boosting productivity by 25% and reducing turnover by 20%',
        'Coordinated workshops and seminars, improving performance by 30% and customer satisfaction by 15%',
        'Created manuals, onboarding materials, and videos for long-term training use',
        'Reviewed and edited training content for accuracy, compliance, and brand alignment',
      ],
      color: 'accent',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return { bg: 'bg-primary/20', text: 'text-primary', border: 'border-primary/30' };
      case 'secondary':
        return { bg: 'bg-secondary/20', text: 'text-secondary', border: 'border-secondary/30' };
      case 'accent':
        return { bg: 'bg-accent/20', text: 'text-accent', border: 'border-accent/30' };
      default:
        return { bg: 'bg-primary/20', text: 'text-primary', border: 'border-primary/30' };
    }
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>} 
      id="experience" 
      className={`py-24 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="glow-orb w-80 h-80 top-1/3 -right-40 animate-glow-pulse" style={{ background: 'radial-gradient(circle, hsl(260 60% 50%) 0%, transparent 70%)' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-title">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="gradient-text">Professional Journey</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color);
            return (
              <div
                key={exp.company}
                className="relative pl-8 pb-12 last:pb-0 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
                )}
                
                {/* Timeline dot */}
                <div className={`absolute left-0 top-2 w-6 h-6 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center`}>
                  <div className={`w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')}`} style={{ backgroundColor: `hsl(var(--${exp.color}))` }} />
                </div>
                
                <div className="glass-card-hover p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.company}</h3>
                      <p className={`${colors.text} font-medium`}>{exp.role}</p>
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-sm`}>
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0`} style={{ backgroundColor: `hsl(var(--${exp.color}))` }} />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
