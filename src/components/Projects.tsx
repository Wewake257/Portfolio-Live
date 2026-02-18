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
  TrendingUp
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import attritionPredictor2Img from '@/assets/attrition-predictor-2.png';
import weatherApiImg from '@/assets/weather-api-dashboard.png';
import coffeeShopImg from '@/assets/coffee-shop-dashboard.png';
import superstoreImg from '@/assets/superstore-powerbi.png';

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
        githubLink: '#',
        icon: Brain,
      },
      {
        title: 'Attrition Predictor App 2.0',
        description: 'Advanced version of an ML-based attrition prediction system built with an interactive interface.',
        techStack: ['Python', 'Streamlit', 'Pandas'],
        highlights: ['Employee-level risk prediction', 'Interactive data input', 'Real-time prediction output', 'Scalable logic architecture'],
        githubLink: '#',
        icon: Activity,
        image: attritionPredictor2Img,
      },
      {
        title: 'HR Attrition Intelligence (Streamlit)',
        description: 'Streamlit-based application predicting attrition risk based on satisfaction levels across multiple parameters.',
        techStack: ['Python', 'Streamlit', 'EDA'],
        highlights: ['Multi-factor satisfaction scoring', 'Interactive dashboard', 'HR-focused decision support'],
        githubLink: '#',
        icon: TrendingUp,
      },
      {
        title: 'Attrition Predictor App (Demo)',
        description: 'Interactive demo application predicting attrition rates based on user-submitted workforce data.',
        techStack: ['Python', 'Streamlit'],
        highlights: ['Data-driven probability prediction', 'Simple ML-based classification logic'],
        githubLink: '#',
        icon: Users,
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
        githubLink: '#',
        icon: MapPin,
      },
      {
        title: 'Airline Ticket Sale Analysis',
        description: 'Analyzed airline ticket sales data to identify pricing patterns, revenue trends, and seasonal demand.',
        techStack: ['Python', 'Pandas', 'NumPy', 'Jupyter Notebook'],
        highlights: ['Revenue trend analysis', 'Price variability patterns', 'Demand fluctuations'],
        githubLink: '#',
        icon: Plane,
      },
      {
        title: 'Migration & Literacy Analysis',
        description: 'Census 2011 data analysis of Uttarakhand to study migration trends and literacy patterns.',
        techStack: ['Python', 'Data Visualization'],
        highlights: ['District-level migration comparison', 'Literacy distribution patterns'],
        githubLink: '#',
        icon: BarChart3,
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
        githubLink: '#',
        icon: Database,
      },
      {
        title: 'Employee Trend Analysis SQL',
        description: 'Workforce data analysis using SQL queries to identify employee trends and HR insights.',
        techStack: ['SQL'],
        highlights: ['Attrition patterns', 'Tenure distribution', 'Performance insights'],
        githubLink: '#',
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
        githubLink: '#',
        icon: BarChart3,
        image: superstoreImg,
      },
      {
        title: 'Weather API Dashboard',
        description: 'Live weather forecast dashboard built using API integration and Power BI.',
        techStack: ['Power BI', 'API Integration'],
        highlights: ['Real-time data fetching', 'Dynamic visualization'],
        githubLink: '#',
        icon: Cloud,
        image: weatherApiImg,
      },
      {
        title: 'Coffee Shop Sales Excel Project',
        description: 'Sales performance analysis using Excel dashboards and pivot tables.',
        techStack: ['Excel', 'Pivot Tables', 'Charts'],
        highlights: ['Revenue tracking', 'Trend analysis', 'Category performance'],
        githubLink: '#',
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
        githubLink: '#',
        icon: Map,
      },
    ],
  },
];

const colorMap = {
  primary: {
    bg: 'bg-primary/10',
    bgHover: 'bg-primary/20',
    text: 'text-primary',
    border: 'border-primary/20',
    badge: 'bg-primary/15 text-primary border-primary/25',
    glow: 'hover:shadow-[0_0_30px_hsl(189_94%_43%/0.15)]',
  },
  secondary: {
    bg: 'bg-secondary/10',
    bgHover: 'bg-secondary/20',
    text: 'text-secondary',
    border: 'border-secondary/20',
    badge: 'bg-secondary/15 text-secondary border-secondary/25',
    glow: 'hover:shadow-[0_0_30px_hsl(260_60%_50%/0.15)]',
  },
  accent: {
    bg: 'bg-accent/10',
    bgHover: 'bg-accent/20',
    text: 'text-accent',
    border: 'border-accent/20',
    badge: 'bg-accent/15 text-accent border-accent/25',
    glow: 'hover:shadow-[0_0_30px_hsl(172_66%_50%/0.15)]',
  },
};

const ProjectCard = ({ project, color }: { project: Project; color: 'primary' | 'secondary' | 'accent' }) => {
  const [expanded, setExpanded] = useState(false);
  const c = colorMap[color];

  return (
    <div className={`glass-card-hover p-6 flex flex-col h-full transition-all duration-300 ${c.glow}`}>
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center flex-shrink-0`}>
          <project.icon className={`w-5 h-5 ${c.text}`} />
        </div>
        <h4 className="text-base font-semibold leading-tight pt-1">{project.title}</h4>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

      {/* Screenshot placeholder */}
      {project.image ? (
        <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 border border-border/30">
          <img src={project.image} alt={`${project.title} preview`} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className={`w-full aspect-video rounded-lg border border-dashed ${c.border} ${c.bg} flex items-center justify-center mb-4 group cursor-pointer hover:opacity-80 transition-opacity`}>
          <div className="flex flex-col items-center gap-1 text-muted-foreground/50">
            <ImageIcon className="w-6 h-6" />
            <span className="text-xs">Dashboard Preview</span>
          </div>
        </div>
      )}

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.map((tech) => (
          <span key={tech} className={`px-2 py-0.5 text-xs font-medium rounded-md border ${c.badge}`}>
            {tech}
          </span>
        ))}
      </div>

      {/* Expandable details */}
      <div className="mt-auto">
        <button
          onClick={() => setExpanded(!expanded)}
          className={`flex items-center gap-1.5 text-sm font-medium ${c.text} hover:underline transition-all`}
        >
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          {expanded ? 'Hide' : 'View'} Technical Details
        </button>

        <div className={`grid transition-all duration-300 ${expanded ? 'grid-rows-[1fr] mt-3' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
            <ul className="space-y-1.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: `hsl(var(--${color}))` }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* GitHub button */}
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-4 inline-flex items-center gap-2 text-sm font-medium ${c.text} hover:underline`}
      >
        <Github className="w-4 h-4" />
        View on GitHub
        <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  );
};

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories = activeCategory === 'all'
    ? categories
    : categories.filter((cat) => cat.id === activeCategory);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="projects"
      className={`py-24 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="glow-orb w-96 h-96 -bottom-48 -right-48 animate-glow-pulse" style={{ background: 'radial-gradient(circle, hsl(172 66% 50%) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-title">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="gradient-text">Projects Showcase</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            13 projects across ML, Python, SQL, BI dashboards, and geospatial analytics — built for real-world impact.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-primary/20 text-primary border-primary/30'
                : 'bg-muted/30 text-muted-foreground border-border hover:border-primary/30 hover:text-primary'
            }`}
          >
            All Projects
          </button>
          {categories.map((cat) => {
            const c = colorMap[cat.color];
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? `${c.bgHover} ${c.text} ${c.border}`
                    : 'bg-muted/30 text-muted-foreground border-border hover:text-foreground'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Projects by Category */}
        {filteredCategories.map((cat) => {
          const c = colorMap[cat.color];
          return (
            <div key={cat.id} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-lg ${c.bg} flex items-center justify-center`}>
                  <cat.icon className={`w-4 h-4 ${c.text}`} />
                </div>
                <h3 className="text-xl font-semibold">{cat.title}</h3>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${c.badge} border`}>
                  {cat.projects.length} project{cat.projects.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.projects.map((project, idx) => (
                  <div key={project.title} className="animate-fade-up" style={{ animationDelay: `${idx * 80}ms` }}>
                    <ProjectCard project={project} color={cat.color} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Wewake257"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All Repositories
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
