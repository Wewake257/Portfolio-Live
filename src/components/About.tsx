import { GraduationCap, MapPin, Sparkles, Award, CheckCircle2, Calendar, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeader from './SectionHeader';

const education = [
  {
    degree: 'M.Sc. in Analytics',
    institution: 'Tata Institute of Social Sciences (TISS), Mumbai',
    year: '2025 – 2027',
    score: 'Score: 78%',
    focus: 'Predictive Analytics, Financial & Risk Modeling, Econometrics, ML, Big Data Infrastructure',
  },
  {
    degree: 'B.Sc. in Management (Hospitality & Hotel Admin)',
    institution: 'AIHM, Chandigarh',
    year: '2019 – 2022',
    score: 'Score: 74%',
    focus: 'Operations research, resource allocation modeling, throughput optimization, variance diagnostics',
  },
  {
    degree: 'Intermediate (12th Grade)',
    institution: 'Little Scholars, Kashipur',
    year: '2018',
    score: 'Score: 74%',
    focus: 'Senior Secondary Board',
  },
  {
    degree: 'High School (10th Grade)',
    institution: 'Little Scholars, Kashipur',
    year: '2016',
    score: 'CGPA: 8.2',
    focus: 'Secondary School Certification',
  },
];

const certifications = [
  {
    year: '2026',
    title: 'Lean Six Sigma Yellow Belt',
    issuer: 'Six Sigma Academy / Udemy',
    detail: 'DMAIC methodology, Value Stream Mapping, cycle-time bottleneck reduction & FPY quality control',
  },
  {
    year: '2026',
    title: 'Introduction to Alteryx for Data Analytics & ETL Automation',
    issuer: 'DataCamp (Jonathan Cornelissen)',
    detail: 'Automated workflow creation, data parsing, join logic, and enterprise ETL pipeline development',
  },
  {
    year: '2025',
    title: 'Complete Data Analyst Bootcamp: Python, SQL, Power BI & Applied ML',
    issuer: 'Udemy (Krish Naik)',
    detail: 'End-to-end data manipulation, SQL joins/CTEs, dimensional modeling, and supervised machine learning',
  },
  {
    year: '2024',
    title: 'Commercial Banking & Financial Analytics Virtual Experience',
    issuer: 'JPMorgan Chase & Co. / Forage',
    detail: 'Credit risk assessment, financial statement ratio analysis, cash-flow forecasting, and executive deck creation',
  },
  {
    year: '2023',
    title: 'Microsoft Excel: Advanced Analytics, Dashboards & Financial Modeling',
    issuer: 'Udemy (Warrick Klimaytys)',
    detail: 'Power Query M, Power Pivot DAX, dynamic arrays, scenario matrices, and financial dashboarding',
  },
];

const verifiedMetrics = [
  { label: 'Verified Experience', value: '2Y 5M', sub: 'Across 4 industry roles' },
  { label: 'ETL Overhead Saved', value: '60%', sub: 'Automated data pipelines' },
  { label: 'Throughput Reliability', value: '+18%', sub: 'Predictive modeling at Jio' },
  { label: 'Productivity Lift', value: '+25%', sub: 'Operations & L&D diagnostics' },
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
        eyebrow="Background & Credentials"
        title="Predictive Modeling &"
        italic="Operational Analytics."
        description="M.Sc. Analytics candidate at TISS Mumbai with 2 years and 5 months of industry experience in operations analytics, predictive modeling, and executive BI reporting."
      />

      {/* Verified Track Record Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {verifiedMetrics.map((m, idx) => (
          <div key={idx} className="lux-glass p-5 border border-white/5 hover:border-primary/30 transition-all">
            <div className="mono text-2xl md:text-3xl font-bold lux-text-brand">{m.value}</div>
            <div className="text-xs font-semibold text-foreground/90 mt-1">{m.label}</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">{m.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Bio column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="lux-glass p-8 md:p-10 relative">
            <div className="eyebrow mb-6">Profile &amp; Focus</div>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 text-pretty">
              I am an <span className="lux-text-brand font-semibold">M.Sc. Analytics candidate at TISS Mumbai</span> with <span className="font-semibold text-foreground">2 years and 5 months</span> of industry experience translating complex business and operational workflows into measurable, data-driven outcomes.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              My hands-on experience bridges predictive machine learning with executive reporting: architecting end-to-end classification engines at <span className="text-foreground font-medium">Jio Platforms Limited</span> (boosting throughput reliability by ~18%), building automated data ingestion pipelines at <span className="text-foreground font-medium">OrgaKnow</span> (reducing manual ETL overhead by 60%), and steering operations analytics at <span className="text-foreground font-medium">Barbeque Nation Hospitality</span> and <span className="text-foreground font-medium">BJT Global</span> (driving a 25% productivity gain and 20% turnover reduction).
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Proficient in Python (Pandas, Scikit-Learn, LightGBM, XGBoost), SQL (CTEs, Window Functions, PostgreSQL, MySQL), Power BI (DAX, Star-Schema), Advanced Excel (Power Query, Power Pivot), and Lean Six Sigma (DMAIC, VSM), I build production analytics platforms that replace guesswork with mathematical certainty.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                'Predictive Risk Modeling',
                'Power BI & DAX Modeling',
                'SQL CTEs & Window Functions',
                'Lean Six Sigma (DMAIC & VSM)',
                'Automated ETL & Alteryx',
                'Operations Throughput Analysis',
                'Executive Storylining & MIS',
              ].map((t) => (
                <span key={t} className="lux-chip text-xs">{t}</span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 text-sm pt-6 border-t border-white/5">
              <div>
                <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Location</div>
                <div className="mt-1 flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Mumbai, India</div>
              </div>
              <div>
                <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Education</div>
                <div className="mt-1 flex items-center gap-2"><GraduationCap className="w-4 h-4 text-accent" /> TISS Mumbai (78%)</div>
              </div>
            </div>
          </div>

          {/* Verified Certifications Section */}
          <div className="lux-glass p-8 md:p-10">
            <div className="flex items-center justify-between mb-6">
              <div className="eyebrow flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                Verified Certifications &amp; Accreditations
              </div>
              <span className="mono text-xs text-muted-foreground">100% Resume Verified</span>
            </div>

            <div className="space-y-4">
              {certifications.map((c, i) => (
                <div key={i} className="p-4 rounded-lg bg-surface-2/40 border border-white/5 hover:border-accent/30 transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span className="font-semibold text-sm text-foreground">{c.title}</span>
                    </div>
                    <span className="mono text-[11px] text-muted-foreground shrink-0">{c.year}</span>
                  </div>
                  <div className="text-xs text-primary/90 mt-1 ml-6 font-medium">{c.issuer}</div>
                  <div className="text-xs text-muted-foreground mt-1 ml-6 leading-relaxed">{c.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education timeline */}
        <div className="lg:col-span-5">
          <div className="lux-glass p-8 md:p-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="eyebrow flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Academic History
                </div>
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>

              <ol className="relative border-l border-border/70 space-y-7 ml-1">
                {education.map((e, i) => (
                  <li key={i} className="pl-6 relative">
                    <span className="absolute -left-[6px] top-1 w-2.5 h-2.5 rounded-full bg-grad-brand shadow-lux-glow" />
                    <div className="flex items-center justify-between">
                      <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">{e.year}</span>
                      <span className="lux-chip lux-chip-primary text-[11px] font-semibold py-0.5 px-2">{e.score}</span>
                    </div>
                    <div className="mt-1 text-base font-semibold text-foreground">{e.degree}</div>
                    <div className="text-xs text-muted-foreground/90 mt-0.5">{e.institution}</div>
                    <div className="mt-2 text-xs text-muted-foreground leading-relaxed bg-surface-2/30 p-2.5 rounded border border-white/5">
                      {e.focus}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-muted-foreground flex items-center justify-between">
              <span>Primary Focus: Advanced Analytics &amp; Decision Science</span>
              <span className="mono text-[11px] text-primary">TISS &bull; AIHM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
