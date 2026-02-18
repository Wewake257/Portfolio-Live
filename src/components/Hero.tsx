import { ArrowRight, Download, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Background Orbs */}
      <div className="glow-orb w-96 h-96 top-20 -left-48 animate-glow-pulse" />
      <div className="glow-orb w-80 h-80 bottom-20 -right-40 animate-glow-pulse animation-delay-400" style={{ background: 'radial-gradient(circle, hsl(260 60% 50%) 0%, transparent 70%)' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up">
              <span className="section-title inline-block">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 animate-fade-up animation-delay-200">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text">Vivek Kumar</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mt-4 animate-fade-up animation-delay-400">
              Aspiring Data Science or Business Analyst Intern | People Analytics & HR Intelligence
            </p>
            
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up animation-delay-600">
              Proficient in Power BI, Excel, Python, SQL, and Streamlit with hands-on experience in HR analytics, machine learning models, and business-driven dashboards.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start animate-fade-up animation-delay-800">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                <Download className="w-4 h-4" />
                View Resume
              </a>
              <a href="#projects" className="btn-secondary flex items-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>
          
          {/* Profile Image Space */}
          <div className="flex justify-center lg:justify-end animate-fade-up animation-delay-400">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-float" style={{ transform: 'scale(1.1)' }} />
              <div className="absolute inset-0 rounded-full border border-secondary/20 animate-float animation-delay-200" style={{ transform: 'scale(1.2)' }} />
              
              {/* Profile container */}
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full glass-card flex items-center justify-center overflow-hidden gradient-border">
                <img 
                  src={profilePhoto} 
                  alt="Vivek Kumar - Data Analyst" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-6 py-2 rounded-full">
                <span className="text-sm font-medium text-primary">📍 Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
