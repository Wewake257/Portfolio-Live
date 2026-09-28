import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const links = [
  { name: 'About', href: '#about', num: '01' },
  { name: 'Skills', href: '#skills', num: '02' },
  { name: 'Interactive Models', href: '#executive-bento', num: '03' },
  { name: 'Projects', href: '#projects', num: '04' },
  { name: 'Process', href: '#process', num: '05' },
  { name: 'Experience', href: '#experience', num: '06' },
  { name: 'Contact', href: '#contact', num: '07' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('#about');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.querySelector(l.href) as HTMLElement | null);
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(links[i].href);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'pt-3' : 'pt-6'
        }`}
      >
        <div className="container-lux">
          <nav
            className={`flex items-center justify-between gap-6 h-14 px-3 md:px-4 rounded-full border border-border/70 transition-all duration-500 ${
              scrolled ? 'bg-background/70 backdrop-blur-xl shadow-lux' : 'bg-background/30 backdrop-blur-md'
            }`}
          >
            <a href="#" className="pl-3 flex items-center gap-2.5 group">
              <span className="relative w-7 h-7 rounded-full bg-grad-brand shadow-lux-glow">
                <span className="absolute inset-[3px] rounded-full bg-background flex items-center justify-center text-[10px] font-medium mono">VK</span>
              </span>
              <span className="hidden sm:inline display-serif text-lg tracking-tight">Vivek Kumar</span>
            </a>

            <div className="hidden lg:flex items-center gap-7">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-active={active === l.href}
                  className="lux-nav-link flex items-baseline gap-1.5"
                >
                  <span className="mono text-[10px] text-primary/70">{l.num}</span>
                  <span>{l.name}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Wewake257"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hidden sm:inline-flex w-9 h-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/wewake257"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hidden sm:inline-flex w-9 h-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <ThemeToggle />
              <a
                href="#contact"
                className="hidden md:inline-flex ml-1 lux-btn lux-btn-primary !py-2 !px-4 text-xs"
              >
                <span className="relative z-10 flex items-center gap-2">Let's talk</span>
              </a>
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full border border-border/60"
              >
                {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div className="relative h-full container-lux flex flex-col justify-center gap-4 pt-24">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-border/60 py-4 group"
              style={{ animation: open ? `fade-up 0.6s ${i * 60}ms both` : 'none' }}
            >
              <span className="mono text-xs text-primary/70">{l.num}</span>
              <span className="display-serif text-4xl group-hover:lux-text-brand transition-all">{l.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
