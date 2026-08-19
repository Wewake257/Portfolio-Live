import { Suspense, lazy, useEffect, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';
import MagneticButton from './MagneticButton';

const HeroScene = lazy(() => import('./HeroScene'));

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Ambient radial background */}
      <div className="absolute inset-0 bg-grad-radial pointer-events-none" />

      <div className="container-lux relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* LEFT — content */}
          <div className="lg:col-span-7">
            <div className="section-eyebrow animate-fade-up">
              <span className="mono text-primary">00</span>
              <span>Portfolio · 2026</span>
            </div>

            <h1 className="mt-6 display-serif text-[13vw] sm:text-[9vw] lg:text-[6.5vw] xl:text-[6rem] leading-[0.95] tracking-tight text-balance">
              <span className="block">Vivek</span>
              <span className="block">
                <em className="display-italic lux-text-brand">Kumar</em>
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-foreground/90">
              M.Sc. Analytics Student <span className="text-muted-foreground">|</span> Data Analyst{' '}
              <span className="text-muted-foreground">|</span> HR &amp; People Analytics
            </p>

            <p className="mt-5 max-w-xl text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Turning business and people data into clear insights, dashboards, and decisions.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton href="/resume.pdf" target="_blank" rel="noopener noreferrer" variant="primary">
                <Download className="w-4 h-4" /> View Resume
              </MagneticButton>
              <MagneticButton href="#projects" variant="ghost">
                Explore Projects <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton href="https://www.linkedin.com/in/wewake257" target="_blank" rel="noopener noreferrer" variant="ghost">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </MagneticButton>
              <MagneticButton href="https://github.com/Wewake257" target="_blank" rel="noopener noreferrer" variant="ghost">
                <Github className="w-4 h-4" /> GitHub
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                <Mail className="w-4 h-4" /> Contact
              </MagneticButton>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-primary/60 animate-ping" />
                  <span className="relative w-2 h-2 rounded-full bg-primary" />
                </span>
                Open to analytics internships &amp; roles
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Mumbai, India
              </div>
              <div className="mono text-xs uppercase tracking-widest">
                Excel · Power BI · SQL · Python
              </div>
            </div>
          </div>

          {/* RIGHT — 3D + portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square max-w-[520px] mx-auto">
              {/* Ambient glow */}
              <div className="absolute -inset-10 bg-grad-brand-soft blur-3xl opacity-70 animate-drift pointer-events-none" />

              {/* 3D scene */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                {mounted && !reducedMotion ? (
                  <Suspense fallback={<div className="w-full h-full bg-grad-brand-soft" />}>
                    <HeroScene />
                  </Suspense>
                ) : (
                  <div className="w-full h-full bg-grad-brand opacity-40" />
                )}
              </div>

              {/* Portrait medallion */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-40 h-40 md:w-48 md:h-48 rounded-full lux-glass overflow-hidden shadow-lux-ambient">
                <img
                  src={profilePhoto}
                  alt="Vivek Kumar"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating cards */}
              <div className="hidden md:flex absolute -left-6 top-8 lux-glass px-4 py-3 items-center gap-3 shadow-lux">
                <Sparkles className="w-4 h-4 text-accent" />
                <div>
                  <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Focus</div>
                  <div className="text-sm">HR &amp; People Analytics</div>
                </div>
              </div>

              <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 lux-glass px-4 py-3 items-center gap-3 shadow-lux">
                <div className="w-8 h-8 rounded-full bg-grad-brand" />
                <div>
                  <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">M.Sc. Analytics</div>
                  <div className="text-sm">TISS Mumbai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="mono text-[10px] uppercase tracking-widest">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
