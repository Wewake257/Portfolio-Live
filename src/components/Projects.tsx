import { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  BarChart3, 
  Code, 
  Database, 
  Map, 
  Brain, 
  ChevronDown, 
  ImageIcon,
  Activity,
  Plane,
  Users,
  Cloud,
  Coffee,
  MapPin,
  TrendingUp,
  DollarSign,
  Briefcase,
  LineChart,
  FileSpreadsheet,
  Calculator,
  Monitor,
  Sparkles
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import attritionPredictor2Img from '@/assets/attrition-predictor-2.png';
import weatherApiImg from '@/assets/weather-api-dashboard.png';
import coffeeShopImg from '@/assets/coffee-shop-dashboard.png';
import superstoreImg from '@/assets/superstore-powerbi.png';
import churnAnalyticsImg from '@/assets/enterprise-churn-analytics.png';
import stockEarningsImg from '@/assets/stock-earnings-intelligence.png';
import ecommerceAttributionImg from '@/assets/ecommerce-attribution-clv.png';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubLink: string;
  icon: React.ElementType;
  image?: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.ElementType;
  color: 'primary' | 'secondary' | 'accent';
  projects: Project[];
}

const categories: Category[] = [
  {
    id: 'flagship',
    title: 'Enterprise & Quantitative Intelligence (Flagship)',
    icon: Sparkles,
    color: 'primary',
    projects: [
      {
        title: 'Enterprise Customer Churn Intelligence & Financial Retention Platform',
        description: 'Institutional machine learning platform predicting customer attrition, calibrating probabilities (Isotonic/Sigmoid), and optimizing Net Retained Revenue ($) via financial expected value threshold tuning.',
        techStack: ['Python', 'LightGBM', 'XGBoost', 'Probability Calibration', 'SHAP Explainability', 'Decile Lift'],
        highlights: [
          '0.842 ROC-AUC & 0.655 PR-AUC model tournament',
          'Calibrated decision threshold at p=0.28 maximizing Net Retained $',
          'Top decile captures 4.2x natural churn rate',
          'Automated inference microservice with prescriptive retention actions'
        ],
        githubLink: 'https://github.com/Wewake257/Enterprise-Customer-Churn-Intelligence',
        icon: Brain,
        image: churnAnalyticsImg,
      },
      {
        title: 'Stock Earnings Surprise & Financial NLP Sentiment Intelligence',
        description: 'Quantitative capital markets intelligence platform analyzing 2,000 quarterly earnings releases across 48 equities using Loughran-McDonald NLP and Post-Earnings Announcement Drift (PEAD) modeling.',
        techStack: ['Python', 'Financial NLP', 'PEAD Anomaly', 'Scikit-Learn', 'SciPy Z-Score', 'Seaborn'],
        highlights: [
          'Domain Loughran-McDonald NLP yielding +18% price reaction correlation boost',
          'Quantified PEAD drift persistence across 30-day holding windows',
          'Champion ML classification tournament achieving 0.988 ROC-AUC',
          '5-tier composite alpha signal delivering 100% precision on Strong Buy catalysts'
        ],
        githubLink: 'https://github.com/Wewake257/Stock-Earnings-Sentiment-Intelligence',
        icon: LineChart,
        image: stockEarningsImg,
      },
      {
        title: 'E-Commerce Marketing Attribution & Customer Lifetime Value (CLV)',
        description: 'Algorithmic multi-touch attribution platform evaluating 586k+ customer touchpoints and 541k+ transactions; built First-Order Markov Chain with Removal Effects, Shapley Values, RFM segmentation, and Kaplan-Meier survival curves.',
        techStack: ['Python', 'Markov Chains', 'Shapley Values', 'Lifelines', 'Kaplan-Meier', 'RFM Segmentation'],
        highlights: [
          'First-Order Markov removal effects resolving 31% Last-Touch over-crediting error',
          'Projected +14.2% blended Return on Ad Spend (ROAS) via budget reallocation',
          'VIP Champions generating 66% of GMV from 22% of customer base',
          'Kaplan-Meier survival curves identifying 90-day churn inflection cliff'
        ],
        githubLink: 'https://github.com/Wewake257/Ecommerce-Attribution-CLV-Intelligence',
        icon: BarChart3,
        image: ecommerceAttributionImg,
      },
      {
        title: 'Digital Banking Analytics & Credit Risk Portfolio Engine',
        description: 'End-to-end quantitative banking analytics engine encompassing Basel-compliant Probability of Default (PD) credit scoring, RFM transaction segmentation, Markowitz/Monte Carlo stress-testing, and real-time fraud anomaly detection.',
        techStack: ['Python', 'Credit Risk (PD)', 'Monte Carlo', 'RFM Segmentation', 'Isolation Forest', 'Markowitz'],
        highlights: [
          'Logistic Regression & WoE credit risk scorecard achieving 0.887 ROC-AUC',
          'Markov & RFM digital banking churn segmentation',
          '10,000-iteration Monte Carlo Value-at-Risk (VaR 99%) portfolio simulation',
          'Isolation Forest fraud detection pipeline processing sub-second transactions'
        ],
        githubLink: 'https://github.com/Wewake257/Bank-Analytics-Portfolio',
        icon: DollarSign,
      },
      {
        title: 'GE Shipping Commercial Voyage Economics & Fleet Analytics',
        description: 'Institutional maritime analytics modeling commercial fleet operations, voyage TCE (Time Charter Equivalent) margins, and bunker fuel consumption curves across global trade routes.',
        techStack: ['Python', 'Maritime Economics', 'TCE Optimization', 'Fuel Efficiency', 'Port Operations'],
        highlights: [
          'Daily TCE margin optimization across Suezmax, Aframax & Capesize vessels',
          'Bunker fuel consumption curves modeled at service vs laden speeds',
          'Fact-Dimension data warehouse architecture mapping global port networks',
          'Demurrage exposure and voyage turnaround latency reduction'
        ],
        githubLink: 'https://github.com/Wewake257/GE-Shipping-Vessel-Analytics',
        icon: Briefcase,
      },
      {
        title: 'Zinnia Process Engineering & Quality Analytics',
        description: 'Industrial process engineering suite featuring automated Value Stream Mapping, cycle-time bottleneck identification, ETL audit reconciliation, and customer retention analytics.',
        techStack: ['Python', 'Process Mining', 'Cycle Time Analytics', 'ETL Audit', 'Quality Engineering'],
        highlights: [
          'End-to-end Value Stream Mapping isolating cycle-time bottlenecks',
          'Operational productivity & first-pass yield quality dashboards',
          'Automated ETL transaction reconciliation and discrepancy flagging',
          'Post-issue customer retention and lifecycle analytics'
        ],
        githubLink: 'https://github.com/Wewake257/Zinnia-Process-Engineering',
        icon: Sparkles,
      },
      {
        title: 'Data Analytics Portfolio (Umbrella)',
        description: 'Comprehensive institutional data analytics & quantitative intelligence portfolio spanning churn, PEAD sentiment, marketing attribution, and banking analytics.',
        techStack: ['Python', 'Machine Learning', 'Quantitative Finance', 'NLP'],
        highlights: ['Cross-domain analytics showcase', 'Churn & retention modeling', 'PEAD sentiment intelligence', 'Marketing attribution engines'],
        githubLink: 'https://github.com/Wewake257/Data-Analytics-Portfolio',
        icon: BarChart3,
      },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning & HR Analytics',
    icon: Brain,
    color: 'primary',
    projects: [
      {
        title: 'AI Retention Intelligence',
        description: 'Built an HR analytics intelligence system to predict employee retention risk using structured workforce data.',
        techStack: ['Python', 'Pandas', 'NumPy', 'Classification Models'],
        highlights: ['Risk scoring logic', 'Feature engineering', 'KPI-weighted modeling', 'Predictive decision support'],
        githubLink: 'https://github.com/Wewake257/AI-Retention-Intelligence',
        icon: Brain,
      },
      {
        title: 'Attrition Predictor App 2.0',
        description: 'Advanced version of an ML-based attrition prediction system built with an interactive interface.',
        techStack: ['Python', 'Streamlit', 'Pandas'],
        highlights: ['Employee-level risk prediction', 'Interactive data input', 'Real-time prediction output', 'Scalable logic architecture'],
        githubLink: 'https://github.com/Wewake257/Attrition-Predictor-APP-2.0-',
        icon: Activity,
        image: attritionPredictor2Img,
      },
      {
        title: 'HR Attrition Intelligence (Streamlit)',
        description: 'Streamlit-based application predicting attrition risk based on satisfaction levels across multiple parameters.',
        techStack: ['Python', 'Streamlit', 'EDA'],
        highlights: ['Multi-factor satisfaction scoring', 'Interactive dashboard', 'HR-focused decision support'],
        githubLink: 'https://github.com/Wewake257/HR-Attrition-Intelligence-',
        icon: TrendingUp,
      },
      {
        title: 'Attrition Predictor App (Demo)',
        description: 'Interactive demo application predicting attrition rates based on user-submitted workforce data.',
        techStack: ['Python', 'Streamlit'],
        highlights: ['Data-driven probability prediction', 'Simple ML-based classification logic'],
        githubLink: 'https://github.com/Wewake257/Attrition-Predictor-APP',
        icon: Users,
      },
    ],
  },
  {
    id: 'finance',
    title: 'Finance & Investment Analytics',
    icon: DollarSign,
    color: 'accent',
    projects: [
      {
        title: 'Portfolio Management & Risk Analysis',
        description: 'Portfolio analytics project analyzing risk-return tradeoffs, diversification, and stock behavior using statistical and simulation techniques.',
        techStack: ['Python', 'NumPy', 'Pandas', 'Monte Carlo'],
        highlights: ['Risk-return analysis', 'Diversification modeling', 'Monte Carlo simulation', 'Statistical analysis'],
        githubLink: 'https://github.com/Wewake257/Portfolio-Management-Risk-Analysis-Python',
        icon: LineChart,
      },
      {
        title: 'Financial Analytics – DCF Valuation',
        description: 'Firm valuation using DCF methodology with forecasting, WACC modeling, and sensitivity analysis.',
        techStack: ['Python', 'DCF', 'WACC', 'Forecasting'],
        highlights: ['Cash flow forecasting', 'WACC calculation', 'Sensitivity analysis', 'Intrinsic valuation'],
        githubLink: 'https://github.com/Wewake257/Financial-Analytics-DCF-Valuation-Python',
        icon: Calculator,
      },
      {
        title: 'Groww Portfolio Financial Analysis',
        description: 'Power BI–driven financial portfolio analytics on Groww investment data with automated cleaning and validation workflows.',
        techStack: ['Power BI', 'Excel', 'Data Cleaning'],
        highlights: ['Automated data validation', 'Returns & allocation tracking', 'Volatility analysis', 'KPI modeling'],
        githubLink: 'https://github.com/Wewake257/Groww-Portfolio-Financial-Analysis-Python-2025',
        icon: TrendingUp,
      },
      {
        title: 'Stocks Portfolio Management (Excel)',
        description: 'Excel-based portfolio management analyzing 5 equities using return modeling, risk metrics, correlation, and optimization.',
        techStack: ['Excel', 'Risk Metrics', 'Correlation'],
        highlights: ['Return modeling', 'Risk-adjusted analysis', 'Correlation matrix', 'Portfolio optimization'],
        githubLink: 'https://github.com/Wewake257/Stocks-Portfolio-Management-Excel-2026',
        icon: FileSpreadsheet,
      },
      {
        title: 'IC Dashboard Automation',
        description: 'AI-powered financial dashboard system ingesting MIS, AOP, and Business Model data to generate executive Excel and HTML dashboards.',
        techStack: ['Python', 'Excel', 'HTML', 'Automation'],
        highlights: ['Multi-source data ingestion', 'Executive reporting', 'Automated dashboards', 'Financial intelligence'],
        githubLink: 'https://github.com/Wewake257/IC-Dashboard-Automation-Financial-Intelligence-System-Python-Excel',
        icon: Briefcase,
      },
      {
        title: 'Financial Statement Analysis',
        description: 'Analysis of corporate financial statements to evaluate profitability, liquidity, and solvency through ratio analysis and trend evaluation.',
        techStack: ['Python', 'Excel', 'Ratio Analysis'],
        highlights: ['Profitability & liquidity ratios', 'Trend analysis', 'Financial health evaluation'],
        githubLink: 'https://github.com/Wewake257/Financial-Statement-Analysis',
        icon: FileSpreadsheet,
      },
      {
        title: 'Financial Reporting Analysis',
        description: 'Structured analysis of financial reports to extract performance insights and support data-driven decision-making.',
        techStack: ['Python', 'Excel', 'Financial Reporting'],
        highlights: ['Report parsing & structuring', 'Performance metrics', 'Decision-ready insights'],
        githubLink: 'https://github.com/Wewake257/Financial-Reporting-Analysis',
        icon: Calculator,
      },
    ],
  },
  {
    id: 'apps',
    title: 'Applications & CRM Systems',
    icon: Monitor,
    color: 'secondary',
    projects: [
      {
        title: 'Client Manager – Tkinter & MySQL',
        description: 'Desktop CRM application built with Tkinter and MySQL for managing clients, projects, and follow-ups with full CRUD functionality.',
        techStack: ['Python', 'Tkinter', 'MySQL'],
        highlights: ['Full CRUD operations', 'Desktop GUI', 'Client & project tracking', 'Follow-up management'],
        githubLink: 'https://github.com/Wewake257/Client-Manager-Tkinter-MySQL',
        icon: Monitor,
      },
      {
        title: 'Client Management System – Django',
        description: 'Django-based client management system with CRUD operations, dashboard view, and structured UI for tracking client data.',
        techStack: ['Django', 'Python', 'SQLite'],
        highlights: ['Web-based CRM', 'Dashboard view', 'Structured UI', 'Client data tracking'],
        githubLink: 'https://github.com/Wewake257/Client-Management-System-Django',
        icon: Briefcase,
      },
    ],
  },
  {
    id: 'python',
    title: 'Python Data Analysis',
    icon: Code,
    color: 'secondary',
    projects: [
      {
        title: 'AirBnB Analysis – Paris',
        description: 'Analyzed Airbnb listings in Paris to explore pricing patterns, availability trends, and neighborhood insights.',
        techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
        highlights: ['Price distribution analysis', 'Neighborhood-level comparisons', 'Availability vs pricing patterns'],
        githubLink: 'https://github.com/Wewake257/AirBnB-Analysis-Python-2026',
        icon: MapPin,
      },
      {
        title: 'Airline Ticket Sale Analysis',
        description: 'Analyzed airline ticket sales data to identify pricing patterns, revenue trends, and seasonal demand.',
        techStack: ['Python', 'Pandas', 'NumPy', 'Jupyter Notebook'],
        highlights: ['Revenue trend analysis', 'Price variability patterns', 'Demand fluctuations'],
        githubLink: 'https://github.com/Wewake257/Airline-Ticket-Sale-Analysis-Python-Project-2025',
        icon: Plane,
      },
      {
        title: 'Migration & Literacy Analysis',
        description: 'Census 2011 data analysis of Uttarakhand to study migration trends and literacy patterns.',
        techStack: ['Python', 'Data Visualization'],
        highlights: ['District-level migration comparison', 'Literacy distribution patterns'],
        githubLink: 'https://github.com/Wewake257/Migration-and-Literacy-Analysis-',
        icon: BarChart3,
      },
      {
        title: 'Supply Chain Data Analysis',
        description: 'End-to-end supply chain data analysis covering inventory, logistics, and operational efficiency metrics.',
        techStack: ['Python', 'Pandas', 'Data Visualization'],
        highlights: ['Inventory analysis', 'Logistics metrics', 'Operational efficiency insights'],
        githubLink: 'https://github.com/Wewake257/Supply-Chain-Data-Analysis',
        icon: Briefcase,
      },
      {
        title: 'JPL Internship – Final Project',
        description: 'Capstone analytics work completed during the JPL internship, applying data analysis techniques to real business problems.',
        techStack: ['Python', 'Data Analysis', 'Reporting'],
        highlights: ['Internship capstone deliverable', 'Applied analytics workflow', 'Business insight generation'],
        githubLink: 'https://github.com/Wewake257/JPL-Internship-Final',
        icon: Code,
      },
    ],
  },
  {
    id: 'sql',
    title: 'SQL Projects',
    icon: Database,
    color: 'accent',
    projects: [
      {
        title: 'Restaurant Orders SQL Project',
        description: 'Designed and analyzed structured restaurant transaction database to extract revenue and operational insights.',
        techStack: ['SQL', 'Joins', 'Aggregations', 'Subqueries'],
        highlights: ['Revenue calculation', 'Order trend analysis', 'Product performance insights'],
        githubLink: 'https://github.com/Wewake257/Restaurant-Orders-SQL-Project-2026',
        icon: Database,
      },
      {
        title: 'Employee Trend Analysis SQL',
        description: 'Workforce data analysis using SQL queries to identify employee trends and HR insights.',
        techStack: ['SQL'],
        highlights: ['Attrition patterns', 'Tenure distribution', 'Performance insights'],
        githubLink: 'https://github.com/Wewake257/Analysing-Employee-trend-SQL-Project-2025',
        icon: Users,
      },
    ],
  },
  {
    id: 'dashboards',
    title: 'Dashboards & Business Intelligence',
    icon: BarChart3,
    color: 'primary',
    projects: [
      {
        title: 'Zomato / IPL / Superstore Power BI',
        description: 'Interactive Power BI dashboards analyzing sales, performance, and operational metrics.',
        techStack: ['Power BI', 'DAX', 'Data Modeling'],
        highlights: ['KPI visualization', 'Interactive filtering', 'Business performance tracking'],
        githubLink: 'https://github.com/Wewake257/Zomato-IPL-Superstore-Data-Power-BI-Dashboard--2025',
        icon: BarChart3,
        image: superstoreImg,
      },
      {
        title: 'Weather API Dashboard',
        description: 'Live weather forecast dashboard built using API integration and Power BI.',
        techStack: ['Power BI', 'API Integration'],
        highlights: ['Real-time data fetching', 'Dynamic visualization'],
        githubLink: 'https://github.com/Wewake257/Weather-API-Dashboard-Power-BI-Project-2025',
        icon: Cloud,
        image: weatherApiImg,
      },
      {
        title: 'Coffee Shop Sales Excel Project',
        description: 'Sales performance analysis using Excel dashboards and pivot tables.',
        techStack: ['Excel', 'Pivot Tables', 'Charts'],
        highlights: ['Revenue tracking', 'Trend analysis', 'Category performance'],
        githubLink: 'https://github.com/Wewake257/Coffee-Shop-Sales-Excel-Project-2024',
        icon: Coffee,
        image: coffeeShopImg,
      },
    ],
  },
  {
    id: 'geo',
    title: 'Geospatial Analytics',
    icon: Map,
    color: 'secondary',
    projects: [
      {
        title: 'QGIS Hospital Range Analysis',
        description: 'Geospatial buffer analysis to study hospital coverage range in New Haldwani.',
        techStack: ['QGIS', 'Spatial Analysis'],
        highlights: ['Buffer mapping', 'Accessibility insights', 'Service coverage visualization'],
        githubLink: 'https://github.com/Wewake257/QGIS-Project',
        icon: Map,
      },
    ],
  },
];

const colorMap = {
  primary: { text: 'text-primary', ring: 'ring-primary/30', chip: 'lux-chip-primary' },
  secondary: { text: 'text-foreground', ring: 'ring-foreground/20', chip: 'lux-chip' },
  accent: { text: 'text-accent', ring: 'ring-accent/30', chip: 'lux-chip-accent' },
} as const;

const ProjectCard = ({ project, color }: { project: Project; color: 'primary' | 'secondary' | 'accent' }) => {
  const [expanded, setExpanded] = useState(false);
  const c = colorMap[color];

  return (
    <article className="lux-glass lux-glass-hover overflow-hidden flex flex-col h-full group">
      {/* Media */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-grad-brand-soft flex items-center justify-center">
            <project.icon className={`w-12 h-12 ${c.text} opacity-40`} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70" />
        <div className="absolute top-3 left-3">
          <span className={`lux-chip ${c.chip}`}>
            <project.icon className="w-3 h-3" />
            {color === 'primary' ? 'Featured' : color === 'accent' ? 'Analytics' : 'Project'}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h4 className="display-serif text-2xl leading-tight text-balance">{project.title}</h4>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((t) => (
            <span key={t} className="lux-chip !text-[10px]">{t}</span>
          ))}
          {project.techStack.length > 4 && (
            <span className="lux-chip !text-[10px]">+{project.techStack.length - 4}</span>
          )}
        </div>

        <div className="mt-auto pt-5">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${expanded ? 'rotate-180' : ''}`} />
            {expanded ? 'Hide details' : 'Details'}
          </button>

          <div className={`grid transition-all duration-500 ${expanded ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <ul className="space-y-1.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 pt-5 border-t border-border/60 flex items-center justify-between">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/90 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <span className={`text-[10px] mono uppercase tracking-widest ${c.text} opacity-70`}>{project.techStack[0]}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.02 });
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = activeCategory === 'all'
    ? categories
    : categories.filter((cat) => cat.id === activeCategory);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="projects"
      className={`container-lux py-24 md:py-32 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="section-eyebrow">
            <span className="mono text-primary">03</span>
            <span>Selected work</span>
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl display-serif text-balance">
            Projects &amp; <em className="display-italic lux-text-brand">case studies.</em>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            30+ shipped projects across machine learning, finance, applications, Python analysis, SQL, business intelligence, and geospatial studies.
          </p>
        </div>
        <a
          href="https://github.com/Wewake257?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="lux-btn lux-btn-ghost self-start md:self-end"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Github className="w-4 h-4" /> All repositories
          </span>
        </a>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-14 no-scrollbar overflow-x-auto pb-1">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-full text-xs mono uppercase tracking-widest border transition-all ${
            activeCategory === 'all'
              ? 'bg-grad-brand text-primary-foreground border-transparent'
              : 'text-muted-foreground border-border/60 hover:border-primary/40 hover:text-foreground'
          }`}
        >
          All · {categories.reduce((n, c) => n + c.projects.length, 0)}
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs mono uppercase tracking-widest border transition-all flex items-center gap-2 whitespace-nowrap ${
              activeCategory === cat.id
                ? 'bg-grad-brand text-primary-foreground border-transparent'
                : 'text-muted-foreground border-border/60 hover:border-primary/40 hover:text-foreground'
            }`}
          >
            <cat.icon className="w-3.5 h-3.5" />
            {cat.title}
            <span className="opacity-60">· {cat.projects.length}</span>
          </button>
        ))}
      </div>

      {/* Projects by category */}
      {filteredCategories.map((cat) => (
        <div key={cat.id} className="mb-20 last:mb-0">
          <div className="flex items-center gap-4 mb-8">
            <cat.icon className={`w-4 h-4 ${colorMap[cat.color].text}`} />
            <h3 className="display-serif text-2xl md:text-3xl">{cat.title}</h3>
            <div className="flex-1 hairline" />
            <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {cat.projects.length} project{cat.projects.length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.projects.map((project, idx) => (
              <div key={project.title} style={{ animation: `fade-up 0.8s ${idx * 80}ms both` }}>
                <ProjectCard project={project} color={cat.color} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;

