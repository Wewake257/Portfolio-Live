import { ExternalLink, Github, BarChart3, Code, PieChart, Map, Database } from 'lucide-react';

const Projects = () => {
  const featuredProject = {
    title: 'Fulki Communication Pvt. Ltd – Barbeque Nation',
    year: '2023',
    description: 'Comprehensive HR and L&D transformation project for a major hospitality chain.',
    achievements: [
      'Restructured onboarding and induction processes with next-gen learning modules',
      'Designed SOPs and improved communication flow across 4 regions',
      'Reduced paperwork by 30% using Excel, Canva, and Power BI',
    ],
    tags: ['HR Analytics', 'Power BI', 'Excel', 'Canva', 'Process Optimization'],
  };

  const projectCategories = [
    {
      icon: BarChart3,
      title: 'Power BI Dashboards',
      description: 'Interactive business intelligence dashboards for data-driven decisions.',
      color: 'primary',
    },
    {
      icon: Code,
      title: 'Python Projects',
      description: 'Data cleaning, analysis, and automation notebooks.',
      color: 'secondary',
    },
    {
      icon: PieChart,
      title: 'Tableau Visualizations',
      description: 'Compelling visual stories and analytical reports.',
      color: 'accent',
    },
    {
      icon: Database,
      title: 'SQL Projects',
      description: 'Database queries and data manipulation exercises.',
      color: 'primary',
    },
    {
      icon: Map,
      title: 'GIS/QGIS Outputs',
      description: 'Spatial analysis and geographic mapping projects.',
      color: 'secondary',
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
    <section id="projects" className="py-24 relative">
      <div className="glow-orb w-96 h-96 -bottom-48 -right-48 animate-glow-pulse" style={{ background: 'radial-gradient(circle, hsl(172 66% 50%) 0%, transparent 70%)' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-title">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
        </div>
        
        {/* Featured Project */}
        <div className="glass-card p-8 mb-12 animate-fade-up gradient-border">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="section-title m-0">Featured Project</span>
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
              {featuredProject.year}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold mb-4">{featuredProject.title}</h3>
          <p className="text-muted-foreground mb-6">{featuredProject.description}</p>
          
          <div className="space-y-3 mb-6">
            {featuredProject.achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground">{achievement}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {featuredProject.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-muted text-muted-foreground text-sm border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* GitHub Projects */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">
              <span className="gradient-text">GitHub Projects</span>
            </h3>
            <a
              href="https://github.com/Wewake257"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              View All on GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <div
                  key={category.title}
                  className="glass-card-hover p-6 group animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <a
                    href="https://github.com/Wewake257"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm ${colors.text} hover:underline`}
                  >
                    Explore projects
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
