import { useState, useRef, useCallback } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, ArrowUpRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { z } from 'zod';
import SectionHeader from './SectionHeader';

const EMAILJS_SERVICE_ID = 'service_i2rkrdc';
const EMAILJS_TEMPLATE_ID = 'template_zymdzoc';
const EMAILJS_PUBLIC_KEY = '56b5YVFp8XhtaL6ip';

const RATE_LIMIT_KEY = 'contact_form_submissions';
const MAX_SUBMISSIONS = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be at least 2 characters' }).max(100).regex(/^[a-zA-Z\s'-]+$/, { message: 'Name contains invalid characters' }),
  email: z.string().trim().email({ message: 'Please enter a valid email' }).max(255),
  message: z.string().trim().min(10, { message: 'Message must be at least 10 characters' }).max(1000),
});

type FormErrors = { name?: string; email?: string; message?: string };

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const checkRateLimit = useCallback((): boolean => {
    try {
      const stored = localStorage.getItem(RATE_LIMIT_KEY);
      if (!stored) return true;
      const submissions: number[] = JSON.parse(stored);
      const now = Date.now();
      return submissions.filter((t) => now - t < RATE_LIMIT_WINDOW_MS).length < MAX_SUBMISSIONS;
    } catch { return true; }
  }, []);

  const recordSubmission = useCallback(() => {
    try {
      const stored = localStorage.getItem(RATE_LIMIT_KEY);
      const submissions: number[] = stored ? JSON.parse(stored) : [];
      const now = Date.now();
      const recent = submissions.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      recent.push(now);
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recent));
    } catch {}
  }, []);

  const validate = (): boolean => {
    const r = contactSchema.safeParse(formData);
    if (!r.success) {
      const fe: FormErrors = {};
      r.error.errors.forEach((e) => {
        const f = e.path[0] as keyof FormErrors;
        if (!fe[f]) fe[f] = e.message;
      });
      setErrors(fe);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      setIsSubmitted(true);
      setTimeout(() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }); }, 3000);
      return;
    }
    if (!checkRateLimit()) {
      toast({ title: 'Too many submissions', description: 'Please wait before sending another message.', variant: 'destructive' });
      return;
    }
    if (!validate()) {
      toast({ title: 'Validation error', description: 'Please check the form for errors.', variant: 'destructive' });
      return;
    }
    if (!formRef.current) return;
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      recordSubmission();
      setIsSubmitted(true);
      toast({ title: 'Message sent', description: "Thanks — I'll be in touch soon." });
      setTimeout(() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }); setErrors({}); }, 3000);
    } catch {
      toast({ title: 'Failed to send', description: 'Something went wrong. Please try again later.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const inputBase = 'w-full px-4 py-3.5 rounded-xl bg-surface-2/60 border transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60';

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`container-lux py-24 md:py-32 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <SectionHeader
        index="06"
        eyebrow="Contact"
        title="Let's build something"
        italic="worth measuring."
        description="Open to internships, freelance analytics projects, and interesting conversations. Reply time typically under 24 hours."
      />

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left — direct links */}
        <div className="lg:col-span-5 space-y-4">
          {[
            { icon: Mail, label: 'Email', value: 'm2025anl036@stud.tiss.ac.in', href: 'mailto:m2025anl036@stud.tiss.ac.in' },
            { icon: Phone, label: 'Phone', value: '+91 7351063525', href: 'tel:+917351063525' },
            { icon: Github, label: 'GitHub', value: 'github.com/Wewake257', href: 'https://github.com/Wewake257' },
            { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/wewake257', href: 'https://www.linkedin.com/in/wewake257' },
            { icon: MapPin, label: 'Based in', value: 'Mumbai, India', href: null },
          ].map((c) => {
            const Wrap = c.href ? 'a' : 'div';
            const props = c.href ? { href: c.href, target: c.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {};
            return (
              <Wrap
                key={c.label}
                {...(props as any)}
                className={`lux-glass lux-glass-hover p-5 flex items-center gap-4 group ${c.href ? 'cursor-pointer' : ''}`}
              >
                <div className="w-11 h-11 rounded-xl bg-grad-brand-soft border border-hairline flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="text-sm md:text-base truncate">{c.value}</div>
                </div>
                {c.href && <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />}
              </Wrap>
            );
          })}
        </div>

        {/* Right — form */}
        <div className="lg:col-span-7">
          <div className="lux-glass p-6 md:p-10">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="eyebrow mb-2 block">Your name</label>
                  <input
                    id="name" name="name" type="text" value={formData.name} onChange={onChange} maxLength={100}
                    placeholder="Jane Doe"
                    className={`${inputBase} ${errors.name ? 'border-destructive' : 'border-border/60 focus:border-primary/50'}`}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow mb-2 block">Email</label>
                  <input
                    id="email" name="email" type="email" value={formData.email} onChange={onChange} maxLength={255}
                    placeholder="you@company.com"
                    className={`${inputBase} ${errors.email ? 'border-destructive' : 'border-border/60 focus:border-primary/50'}`}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow mb-2 block">Message</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={onChange} maxLength={1000} rows={6}
                  placeholder="Tell me about the role, project, or idea..."
                  className={`${inputBase} resize-none ${errors.message ? 'border-destructive' : 'border-border/60 focus:border-primary/50'}`}
                />
                <div className="flex justify-between mt-1.5 text-xs">
                  <span className="text-destructive">{errors.message}</span>
                  <span className="text-muted-foreground mono">{formData.message.length}/1000</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="lux-btn lux-btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                      Sending
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-4 h-4" /> Sent
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send message
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
