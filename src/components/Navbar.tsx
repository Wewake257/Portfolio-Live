import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`nav-glass transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">
          VK
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium link-underline"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Wewake257"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/wewake257"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card mx-4 mt-2 p-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 pt-4 border-t border-border">
              <a
                href="https://github.com/Wewake257"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/wewake257"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
