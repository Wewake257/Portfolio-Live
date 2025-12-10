import { 
  ClipboardCheck, 
  LayoutDashboard, 
  PieChart, 
  Users, 
  Cog, 
  BookOpen, 
  FileText, 
  Map 
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const services = [
    {
      icon: ClipboardCheck,
      title: 'Data Cleaning & Analysis',
      description: 'Transform raw data into clean, structured datasets ready for analysis and insights extraction.',
      color: 'primary',
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboard Development',
      description: 'Create interactive Power BI and Tableau dashboards for real-time business intelligence.',
      color: 'secondary',
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Design compelling visual stories that communicate complex data in an accessible way.',
      color: 'accent',
    },
    {
      icon: Users,
      title: 'HR Analytics',
      description: 'Analyze workforce data to optimize hiring, retention, and employee performance strategies.',
      color: 'primary',
    },
    {
      icon: Cog,
      title: 'Python Automation',
      description: 'Automate repetitive tasks and data processing workflows for improved efficiency.',
      color: 'secondary',
    },
    {
      icon: BookOpen,
      title: 'Training Content',
      description: 'Develop engaging training materials and learning modules for organizational development.',
      color: 'accent',
    },
    {
      icon: FileText,
      title: 'L&D & SOP Creation',
      description: 'Design learning programs and create comprehensive standard operating procedures.',
      color: 'primary',
    },
    {
      icon: Map,
      title: 'GIS Mapping',
      description: 'Perform spatial analysis and create informative geographic visualizations using QGIS.',
      color: 'secondary',
    },
  ];

  const getIconBgClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/20';
      case 'secondary':
        return 'bg-secondary/20';
      case 'accent':
        return 'bg-accent/20';
      default:
        return 'bg-primary/20';
    }
  };

  const getIconColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary';
      case 'secondary':
        return 'text-secondary';
      case 'accent':
        return 'text-accent';
      default:
        return 'text-primary';
    }
  };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="services" className={`py-24 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="glow-orb w-80 h-80 top-1/3 -left-40 animate-glow-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-title">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="gradient-text">What I Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Leveraging my expertise in data analytics and HR to deliver impactful solutions for your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card-hover p-6 group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${getIconBgClass(service.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${getIconColorClass(service.color)}`} />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
