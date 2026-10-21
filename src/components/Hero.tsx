import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const socials = [
  { href: 'https://github.com/Wewake257', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/in/wewake257', label: 'LinkedIn', Icon: Linkedin },
  { href: '#contact', label: 'Contact', Icon: Mail },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100svh] pt-28 md:pt-24 overflow-hidden flex items-center">
      <div className="container-lux relative z-10 w-full">
        <div className="relative grid grid-cols-1 lg:grid-cols-3 items-center gap-10 lg:gap-4 min-h-[78svh]">
          {/* Left: name */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-up">
            <p className="text-lg md:text-xl font-semibold text-primary">Hello, I'm</p>
            <h1 className="mt-2 text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[0.95] text-foreground">
              Vivek<br />Kumar
            </h1>
            <p className="mt-6 max-w-xs mx-auto lg:mx-0 text-sm text-muted-foreground leading-relaxed">
              Turning business and people data into clear insights, dashboards, and decisions.
            </p>
          </div>

          {/* Center: photo with glow */}
          <div className="order-1 lg:order-2 relative flex justify-center items-end self-end">
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/40 blur-[90px]" />
            <div className="relative w-64 h-80 md:w-80 md:h-[28rem] overflow-hidden rounded-t-full">
              <img
                src={profilePhoto}
                alt="Vivek Kumar"
                className="w-full h-full object-cover object-bottom scale-125 origin-bottom"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
            </div>
          </div>

          {/* Right: role */}
          <div className="order-3 text-center lg:text-left animate-fade-up">
            <p className="text-lg md:text-xl font-semibold text-primary">M.Sc. Analytics, TISS</p>
            <h2 className="mt-2 text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[0.95]">
              <span className="lux-text-brand">Data Analyst</span>
              <br />
              <span className="text-foreground">&amp; HR Analytics</span>
            </h2>
            <div className="mt-6 flex justify-center lg:justify-start gap-3">
              <a href="#projects" className="lux-btn lux-btn-primary !py-2 !px-4 text-xs">
                <span className="relative z-10">Explore Projects</span>
              </a>
            </div>
          </div>

          {/* Vertical socials */}
          <div className="hidden lg:flex absolute left-0 bottom-8 flex-col gap-5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Resume link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex absolute right-0 bottom-8 items-center gap-2 mono text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            Resume <FileText className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile socials + resume */}
        <div className="lg:hidden mt-8 flex justify-center items-center gap-6">
          {socials.map(({ href, label, Icon }) => (
            <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Icon className="w-5 h-5" />
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mono text-xs tracking-widest uppercase text-muted-foreground hover:text-primary">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
