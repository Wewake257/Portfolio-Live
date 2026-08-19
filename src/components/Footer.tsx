import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="container-lux py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="display-serif text-4xl leading-none">
            Vivek <em className="display-italic lux-text-brand">Kumar</em>
          </div>
          <p className="mt-4 text-muted-foreground max-w-sm">
            M.Sc. Analytics student at TISS Mumbai — data analysis, dashboards and HR / people analytics.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Navigate</div>
          <ul className="space-y-2 text-sm">
            {['About', 'Skills', 'Projects', 'Process', 'Experience', 'Contact'].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1.5 group">
                  {l}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Elsewhere</div>
          <div className="flex flex-col gap-2 text-sm">
            <a href="mailto:m2025anl036@stud.tiss.ac.in" className="text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-2">
              <Mail className="w-4 h-4" /> m2025anl036@stud.tiss.ac.in
            </a>
            <a href="https://github.com/Wewake257" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-2">
              <Github className="w-4 h-4" /> github.com/Wewake257
            </a>
            <a href="https://www.linkedin.com/in/wewake257" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> linkedin.com/in/wewake257
            </a>
          </div>
        </div>
      </div>

      <div className="hairline" />
      <div className="container-lux py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <span>© {year} Vivek Kumar. Designed with intent.</span>
        <span className="mono">Mumbai · IN</span>
      </div>
    </footer>
  );
};

export default Footer;
