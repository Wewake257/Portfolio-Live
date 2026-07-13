import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const education = [
  { degree: 'M.Sc. in Analytics', institution: 'Tata Institute of Social Sciences, Mumbai', year: '2025 – 2027', tag: 'Pursuing' },
  { degree: 'B.Sc. Hotel & Hospitality Administration', institution: 'AIHM, Chandigarh', year: '2019 – 2022', tag: '74%' },
  { degree: 'Intermediate (12th)', institution: 'Little Scholars, Kashipur', year: '2019', tag: '74%' },
  { degree: 'High School (10th)', institution: 'Little Scholars, Kashipur', year: '2017', tag: '8.2 CGPA' },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`container-lux py-24 md:py-32 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <SectionHeader
        index="01"
        eyebrow="About"
        title="From HR floors to"
        italic="analytics dashboards."
        description="Three years across L&D, HR generalist work, and now data science — I bring a people-first lens to every dataset I touch."
      />

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Bio column */}
        <div className="lg:col-span-7 lux-glass p-8 md:p-10 relative">
          <div className="eyebrow mb-6">Bio</div>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 text-pretty">
            I started in hospitality, moved through <span className="lux-text-brand">Human Resources & L&D</span>, and today I build data products that make workforce decisions <em className="display-italic">measurable</em>. I care about the story behind the numbers — who they represent, what they change, and who acts on them.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Currently pursuing M.Sc. Analytics at TISS Mumbai. I work fluently across Python, SQL, Power BI, and Streamlit — with active projects in attrition modeling, financial analytics, and geospatial studies.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {['People Analytics', 'ML for HR', 'Financial Analytics', 'Business Intelligence', 'Geospatial'].map((t) => (
              <span key={t} className="lux-chip">{t}</span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Location</div>
              <div className="mt-1 flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Mumbai, India</div>
            </div>
            <div>
              <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Focus</div>
              <div className="mt-1 flex items-center gap-2"><Sparkles className="w-4 h-4 text-accent" /> People &amp; BI Analytics</div>
            </div>
          </div>
        </div>

        {/* Education timeline */}
        <div className="lg:col-span-5">
          <div className="lux-glass p-8 md:p-10 h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="eyebrow">Education</div>
              <GraduationCap className="w-4 h-4 text-primary" />
            </div>

            <ol className="relative border-l border-border/70 space-y-8 ml-1">
              {education.map((e, i) => (
                <li key={i} className="pl-6 relative">
                  <span className="absolute -left-[6px] top-1 w-2.5 h-2.5 rounded-full bg-grad-brand shadow-lux-glow" />
                  <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">{e.year}</div>
                  <div className="mt-1 text-base font-medium">{e.degree}</div>
                  <div className="text-sm text-muted-foreground">{e.institution}</div>
                  <div className="mt-2 inline-flex lux-chip lux-chip-primary">{e.tag}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
