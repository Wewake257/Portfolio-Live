import { useState, useRef, useCallback } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { z } from 'zod';

const EMAILJS_SERVICE_ID = 'service_i2rkrdc';
const EMAILJS_TEMPLATE_ID = 'template_zymdzoc';
const EMAILJS_PUBLIC_KEY = '56b5YVFp8XhtaL6ip';

// Rate limiting configuration
const RATE_LIMIT_KEY = 'contact_form_submissions';
const MAX_SUBMISSIONS = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

// Validation schema
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must be less than 100 characters' })
    .regex(/^[a-zA-Z\s'-]+$/, { message: 'Name contains invalid characters' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address' })
    .max(255, { message: 'Email must be less than 255 characters' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must be less than 1000 characters' }),
});

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check rate limiting
  const checkRateLimit = useCallback((): boolean => {
    try {
      const stored = localStorage.getItem(RATE_LIMIT_KEY);
      if (!stored) return true;

      const submissions: number[] = JSON.parse(stored);
      const now = Date.now();
      const recentSubmissions = submissions.filter(
        (time) => now - time < RATE_LIMIT_WINDOW_MS
      );

      return recentSubmissions.length < MAX_SUBMISSIONS;
    } catch {
      return true;
    }
  }, []);

  // Record a submission for rate limiting
  const recordSubmission = useCallback(() => {
    try {
      const stored = localStorage.getItem(RATE_LIMIT_KEY);
      const submissions: number[] = stored ? JSON.parse(stored) : [];
      const now = Date.now();
      const recentSubmissions = submissions.filter(
        (time) => now - time < RATE_LIMIT_WINDOW_MS
      );
      recentSubmissions.push(now);
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
    } catch {
      // Silently fail if localStorage is unavailable
    }
  }, []);

  const validateForm = (): boolean => {
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Bot detection - honeypot check
    if (honeypot) {
      // Silently reject bot submissions
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
      return;
    }

    // Rate limiting check
    if (!checkRateLimit()) {
      toast({
        title: 'Too many submissions',
        description: 'Please wait before sending another message.',
        variant: 'destructive',
      });
      return;
    }

    // Validate form
    if (!validateForm()) {
      toast({
        title: 'Validation error',
        description: 'Please check the form for errors.',
        variant: 'destructive',
      });
      return;
    }

    if (!formRef.current) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      
      recordSubmission();
      setIsSubmitted(true);
      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      }, 3000);
    } catch (error) {
      toast({
        title: 'Failed to send',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'm2025anl036@stud.tiss.ac.in',
      href: 'mailto:m2025anl036@stud.tiss.ac.in',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7351063525',
      href: 'tel:+917351063525',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Wewake257',
      color: 'hover:text-primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/wewake257',
      color: 'hover:text-secondary',
    },
  ];

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} id="contact" className={`py-24 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="glow-orb w-72 h-72 top-0 left-1/2 -translate-x-1/2 animate-glow-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-title">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="gradient-text">Contact Me</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="glass-card p-8 animate-fade-up">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Contact Information
            </h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground ${link.color} transition-all duration-300 hover:scale-110 hover:bg-primary/20`}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8 animate-fade-up animation-delay-200">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Send a Message
            </h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field - hidden from users, visible to bots */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={100}
                  className={`w-full px-4 py-3 rounded-xl bg-muted/50 border ${errors.name ? 'border-destructive' : 'border-border'} focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={255}
                  className={`w-full px-4 py-3 rounded-xl bg-muted/50 border ${errors.email ? 'border-destructive' : 'border-border'} focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={1000}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-muted/50 border ${errors.message ? 'border-destructive' : 'border-border'} focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                )}
                <p className="mt-1 text-xs text-muted-foreground text-right">
                  {formData.message.length}/1000
                </p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
