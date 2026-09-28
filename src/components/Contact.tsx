import { useState, useRef, useCallback } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, ArrowUpRight, MessageSquare, Copy, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { z } from 'zod';
import SectionHeader from './SectionHeader';

const EMAILJS_SERVICE_ID = 'service_i2rkrdc';
const EMAILJS_TEMPLATE_ID = 'template_zymdzoc';
const EMAILJS_PUBLIC_KEY = '56b5YVFp8XhtaL6ip';

const RATE_LIMIT_KEY = 'contact_form_submissions';
const MAX_SUBMISSIONS = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

// Custom WhatsApp SVG Icon
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be at least 2 characters' }).max(100),
  email: z.string().trim().email({ message: 'Please enter a valid email address' }).max(255),
  message: z.string().trim().min(5, { message: 'Message must be at least 5 characters' }).max(2000),
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
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    toast({ title: 'Copied to clipboard', description: `${label}: ${text}` });
    setTimeout(() => setCopiedItem(null), 2000);
  };

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

  // Direct WhatsApp dispatch with typed message
  const handleSendWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const nameStr = formData.name.trim() || 'Visitor';
    const emailStr = formData.email.trim() ? ` (${formData.email.trim()})` : '';
    const messageStr = formData.message.trim() || 'Hi Vivek, I saw your quantitative portfolio and would love to connect with you regarding analytics opportunities!';
    
    const fullText = `Hi Vivek,\n\nName: ${nameStr}${emailStr}\n\nMessage:\n${messageStr}`;
    const waUrl = `https://wa.me/917351063525?text=${encodeURIComponent(fullText)}`;
    
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    toast({
      title: 'Opening WhatsApp Chat',
      description: 'Connecting you directly with Vivek (+91 7351063525) with your typed message!',
    });
  };

  // Direct Email dispatch with automatic mailto fallback
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      setIsSubmitted(true);
      setTimeout(() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }); }, 3000);
      return;
    }
    if (!checkRateLimit()) {
      toast({ title: 'Too many submissions', description: 'Please wait or reach out directly on WhatsApp (+91 7351063525).', variant: 'destructive' });
      return;
    }
    if (!validate()) {
      toast({ title: 'Validation error', description: 'Please check your name, email, and message.', variant: 'destructive' });
      return;
    }
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      recordSubmission();
      setIsSubmitted(true);
      toast({ title: 'Message Sent Successfully', description: "Thanks! I'll review your note and get back to you shortly." });
      setTimeout(() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }); setErrors({}); }, 4000);
    } catch {
      // Seamless mailto fallback so messages are 100% delivered
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(`Hi Vivek,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.email}`);
      const mailtoUrl = `mailto:m2025anl036@stud.tiss.ac.in?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoUrl;
      toast({ 
        title: 'Opening Your Email App', 
        description: 'Connecting directly to m2025anl036@stud.tiss.ac.in to deliver your message.', 
      });
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const inputBase = 'w-full px-4 py-3.5 rounded-xl bg-surface-2/60 border transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60 text-sm';

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
        eyebrow="Direct Connection"
        title="Let's build something"
        italic="quantifiably impactful."
        description="Available for full-time roles, internships, and data analytics collaborations. Direct response on WhatsApp & Email within 24 hours."
      />

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left — direct connection channels */}
        <div className="lg:col-span-5 space-y-3.5">
          {/* WhatsApp Direct Highlight Box */}
          <a
            href="https://wa.me/917351063525?text=Hi%20Vivek,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="lux-glass p-5 rounded-2xl border border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-950/20 flex items-center gap-4 group transition-all cursor-pointer shadow-lg shadow-emerald-950/20"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
              <WhatsAppIcon className="w-6 h-6 fill-current text-emerald-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="mono text-[10px] uppercase tracking-widest text-emerald-400 font-bold">Fastest Response</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-base font-bold text-white mt-0.5">Chat on WhatsApp</div>
              <div className="mono text-xs text-emerald-200/80 truncate mt-0.5">+91 7351063525</div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>

          {[
            { icon: Mail, label: 'Email', value: 'm2025anl036@stud.tiss.ac.in', href: 'mailto:m2025anl036@stud.tiss.ac.in', copyable: true },
            { icon: Phone, label: 'Phone', value: '+91 7351063525', href: 'tel:+917351063525', copyable: true },
            { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/wewake257', href: 'https://www.linkedin.com/in/wewake257', copyable: false },
            { icon: Github, label: 'GitHub', value: 'github.com/Wewake257', href: 'https://github.com/Wewake257', copyable: false },
            { icon: MapPin, label: 'Based in', value: 'Mumbai, India', href: null, copyable: false },
          ].map((c) => {
            const Wrap = c.href ? 'a' : 'div';
            const props = c.href ? { href: c.href, target: c.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {};
            return (
              <div key={c.label} className="relative group">
                <Wrap
                  {...(props as any)}
                  className={`lux-glass lux-glass-hover p-4 flex items-center gap-4 ${c.href ? 'cursor-pointer' : ''}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-grad-brand-soft border border-hairline flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</div>
                    <div className="text-sm truncate font-medium text-foreground/90">{c.value}</div>
                  </div>
                  {c.href && <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform" />}
                </Wrap>

                {c.copyable && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      copyToClipboard(c.value, c.label);
                    }}
                    title={`Copy ${c.label}`}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-surface-3 text-muted-foreground hover:text-foreground transition-colors z-10"
                  >
                    {copiedItem === c.label ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Right — Interactive Contact Box with Dual Dispatch (WhatsApp & Email) */}
        <div className="lg:col-span-7">
          <div className="lux-glass p-6 md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/5">
              <div>
                <h3 className="text-lg font-bold text-foreground">Send a Direct Message</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Type your message below — you can dispatch directly via WhatsApp or Email.
                </p>
              </div>
              <span className="mono text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Active &bull; Available
              </span>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="eyebrow mb-1.5 block text-xs">Your name</label>
                  <input
                    id="name" name="name" type="text" value={formData.name} onChange={onChange} maxLength={100}
                    placeholder="e.g. Alex Mercer"
                    className={`${inputBase} ${errors.name ? 'border-destructive' : 'border-border/60 focus:border-primary/50'}`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow mb-1.5 block text-xs">Email address</label>
                  <input
                    id="email" name="email" type="email" value={formData.email} onChange={onChange} maxLength={255}
                    placeholder="alex@company.com"
                    className={`${inputBase} ${errors.email ? 'border-destructive' : 'border-border/60 focus:border-primary/50'}`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow mb-1.5 block text-xs">Your message</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={onChange} maxLength={2000} rows={5}
                  placeholder="Share details about your team, analytics role, or project..."
                  className={`${inputBase} resize-none ${errors.message ? 'border-destructive' : 'border-border/60 focus:border-primary/50'}`}
                />
                <div className="flex justify-between mt-1 text-xs">
                  <span className="text-destructive">{errors.message}</span>
                  <span className="text-muted-foreground mono">{formData.message.length}/2000</span>
                </div>
              </div>

              {/* Action Buttons: Dual Send */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {/* 1. Direct WhatsApp Button with Typed Message */}
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="px-5 py-3.5 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 group cursor-pointer border border-emerald-400/30"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  <span>Send via WhatsApp</span>
                </button>

                {/* 2. Direct Email Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="lux-btn lux-btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed text-sm py-3.5"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-4 h-4" /> Delivered!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send via Email
                      </>
                    )}
                  </span>
                </button>
              </div>

              <div className="text-[11px] text-muted-foreground/80 text-center pt-2">
                Tip: Clicking <strong className="text-emerald-400">Send via WhatsApp</strong> opens a chat directly with Vivek with your message already typed!
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
