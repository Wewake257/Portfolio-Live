import { MapPin, GraduationCap, Briefcase, BarChart3, FileSpreadsheet, Code, Map, Palette } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const education = [
    { degree: 'M.Sc. Analytics', institution: 'TISS Mumbai', year: '2025–27', icon: GraduationCap },
    { degree: 'B.Sc. Hotel & Hospitality', institution: 'AIHM Chandigarh', year: '2019–22 • 74%', icon: GraduationCap },
    { degree: 'Higher Secondary', institution: 'Little Scholars, Kashipur', year: '74%', icon: GraduationCap },
    { degree: 'Secondary School', institution: 'Little Scholars, Kashipur', year: '8.2 CGPA', icon: GraduationCap },
  ];

  const whatIDo = [
    { title: 'Data Analysis', icon: BarChart3, color: 'text-primary' },
    { title: 'Dashboard Building', icon: FileSpreadsheet, color: 'text-secondary' },
    { title: 'HR Analytics', icon: Briefcase, color: 'text-accent' },
    { title: 'Python Automation', icon: Code, color: 'text-primary' },
    { title: 'SOP & Training Dev', icon: FileSpreadsheet, color: 'text-secondary' },
    { title: 'GIS Mapping', icon: Map, color: 'text-accent' },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="about" className={`py-24 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="glow-orb w-64 h-64 top-1/2 -left-32 animate-glow-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-title">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="gradient-text">Getting to Know Me</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Personal Info Card */}
          <div className="glass-card p-8 animate-fade-up">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Personal Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">VK</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">Vivek Kumar</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Mumbai, India</p>
                </div>
              </div>
            </div>
            
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I am on an exciting transition from HR/L&D into Data Analytics. My background in hospitality and human resources has given me unique insights into people management and organizational dynamics, which I now combine with analytical skills to drive data-informed decisions.
            </p>
          </div>
          
          {/* Education Card */}
          <div className="glass-card p-8 animate-fade-up animation-delay-200">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <edu.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs text-primary mt-1">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* What I Do Section */}
        <div className="mt-12 glass-card p-8 animate-fade-up animation-delay-400">
          <h3 className="text-xl font-semibold mb-6 text-center">
            <span className="gradient-text">What I Do</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {whatIDo.map((item, index) => (
              <div
                key={index}
                className="skill-card flex-col text-center"
              >
                <item.icon className={`w-8 h-8 ${item.color}`} />
                <span className="text-sm font-medium mt-2">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
