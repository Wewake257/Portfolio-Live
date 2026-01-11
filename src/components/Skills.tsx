import { 
  FileSpreadsheet, 
  BarChart3, 
  Database, 
  Code, 
  PieChart, 
  Users, 
  Brain, 
  Handshake, 
  Sparkles 
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const skillCategories = [
    {
      title: 'Data & BI',
      color: 'primary',
      skills: [
        { name: 'Excel', icon: FileSpreadsheet },
        { name: 'Power BI', icon: BarChart3 },
        { name: 'Tableau', icon: PieChart },
        { name: 'SQL', icon: Database },
      ],
    },
    {
      title: 'Programming',
      color: 'secondary',
      skills: [
        { name: 'Python (Pandas, NumPy)', icon: Code },
        { name: 'SQL', icon: Database },
        { name: 'R (basic)', icon: Code },
      ],
    },
    {
      title: 'ML & Analytics',
      color: 'accent',
      skills: [
        { name: 'EDA', icon: BarChart3 },
        { name: 'Feature Engineering', icon: Brain },
        { name: 'Classification Models', icon: PieChart },
        { name: 'Risk Scoring', icon: BarChart3 },
      ],
    },
    {
      title: 'Tools',
      color: 'primary',
      skills: [
        { name: 'Streamlit', icon: Code },
        { name: 'Gradio', icon: Code },
      ],
    },
    {
      title: 'HR Systems',
      color: 'secondary',
      skills: [
        { name: 'HRSS', icon: Users },
        { name: 'LMS', icon: FileSpreadsheet },
        { name: 'Frontlyn', icon: Users },
        { name: 'Betterplace', icon: Users },
        { name: 'ZingHR', icon: Users },
        { name: 'ZingLearn', icon: Users },
      ],
    },
  ];

  const softSkills = [
    { name: 'Analytical Thinking', icon: Brain },
    { name: 'Problem Solving', icon: Sparkles },
    { name: 'Collaboration', icon: Handshake },
    { name: 'Adaptability', icon: Sparkles },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'secondary':
        return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'accent':
        return 'bg-accent/20 text-accent border-accent/30';
      default:
        return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="skills" className={`py-24 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="glow-orb w-72 h-72 bottom-0 right-0 animate-glow-pulse" style={{ background: 'radial-gradient(circle, hsl(260 60% 50%) 0%, transparent 70%)' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-title">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card-hover p-6 animate-fade-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full bg-${category.color}`} style={{ backgroundColor: `hsl(var(--${category.color}))` }} />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium border transition-all duration-300 hover:scale-105 ${getColorClasses(category.color)}`}
                  >
                    <skill.icon className="w-4 h-4" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Soft Skills */}
        <div className="mt-12 glass-card p-8 animate-fade-up animation-delay-600">
          <h3 className="text-xl font-semibold mb-6 text-center">
            <span className="gradient-text">Soft Skills</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="neumorphic px-6 py-4 flex items-center gap-3 hover:shadow-glow transition-all duration-300"
              >
                <skill.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
