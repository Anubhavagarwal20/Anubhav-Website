import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { PrimaryButton, SecondaryButton } from './ui/Buttons';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormData = { name: '', email: '', subject: '', message: '' };

function InputField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required = true,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-medium tracking-wide text-[#A7B1C2] uppercase"
      >
        {label}{required && <span className="text-[#4F8CFF] ml-0.5" aria-label="required">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-[#F4F7FB] placeholder-[#A7B1C2]/40
          focus:outline-none focus:border-[#4F8CFF]/50 focus:bg-white/[0.06] transition-all duration-200"
      />
    </div>
  );
}

function TextAreaField({
  id,
  label,
  value,
  onChange,
  required = true,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-medium tracking-wide text-[#A7B1C2] uppercase"
      >
        {label}{required && <span className="text-[#4F8CFF] ml-0.5" aria-label="required">*</span>}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        rows={5}
        className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-[#F4F7FB] placeholder-[#A7B1C2]/40
          focus:outline-none focus:border-[#4F8CFF]/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
      />
    </div>
  );
}

export function ContactSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const shouldReduce = useReducedMotion();

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('submitting');

    /*
     * ⚠️ INTEGRATION REQUIRED
     * This form currently has no backend. To receive submissions, connect
     * one of the following services and replace this placeholder:
     *   - Formspree (https://formspree.io): set action="https://formspree.io/f/YOUR_ID"
     *   - EmailJS: call emailjs.send() with your service/template IDs
     *   - Custom API endpoint: fetch('https://your-api.com/contact', { method:'POST', body: JSON.stringify(form) })
     *
     * Until connected, the form shows a simulated success message in dev mode.
     */
    await new Promise((r) => setTimeout(r, 1200)); // Remove this once real endpoint is set
    setFormState('success');
    setForm(initialForm);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080B12 0%, #0D1220 100%)' }}
      aria-labelledby="contact-heading"
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(79,140,255,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-padded relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeIn>
            <p className="section-label mb-4">Get in Touch</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              id="contact-heading"
              className="font-display font-bold leading-tight gradient-text mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Let's Build Something
              <br />
              That Gets Noticed
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-[#A7B1C2] text-[15px] leading-relaxed">
              Have a project, a marketing challenge, or an opportunity to collaborate?
              Let's connect and talk about how SEO, content, e-commerce, and digital
              strategy can support your goals.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <PrimaryButton
                onClick={() => {
                  const nameInput = document.getElementById('contact-name');
                  if (nameInput) {
                    nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    nameInput.focus();
                  }
                }}
                showArrow
              >
                Let's Talk
              </PrimaryButton>
              <SecondaryButton
                href="https://www.linkedin.com/in/anubhavagarwal20/"
                external
                showArrow
              >
                <ExternalLink size={14} className="mr-1" />
                Connect on LinkedIn
              </SecondaryButton>
            </div>
            <p className="text-[11px] text-[#A7B1C2]/60 mt-3">
              Direct Email: <span className="text-[#F4F7FB]/70 underline decoration-dotted">[your.email@domain.com — Editable Placeholder]</span>
            </p>
          </FadeIn>
        </div>

        {/* Form */}
        <FadeIn delay={0.2}>
          <div className="max-w-xl mx-auto">
            <div className="p-6 md:p-8 rounded-2xl border border-white/[0.09] bg-[#0A0E1A]/80">

              {formState === 'success' ? (
                <motion.div
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-4 py-8 text-center"
                >
                  <CheckCircle size={48} className="text-[#4F8CFF]" />
                  <h3 className="font-display font-semibold text-xl text-[#F4F7FB]">
                    Message Received
                  </h3>
                  <p className="text-[#A7B1C2] text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="text-xs text-[#4F8CFF] hover:underline mt-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
                  >
                    Send another message
                  </button>
                  <p className="text-[11px] text-[#A7B1C2]/40 border-t border-white/[0.06] pt-4 w-full">
                    ⚠️ Note: Backend integration is not yet configured. See code comments to connect a real form endpoint.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  className="flex flex-col gap-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <InputField
                        id="contact-name"
                        label="Your Name"
                        value={form.name}
                        onChange={(v) => setForm({ ...form, name: v })}
                        placeholder="Anubhav Agarwal"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <InputField
                        id="contact-email"
                        label="Email Address"
                        type="email"
                        value={form.email}
                        onChange={(v) => setForm({ ...form, email: v })}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <InputField
                      id="contact-subject"
                      label="Subject / Project Type"
                      value={form.subject}
                      onChange={(v) => setForm({ ...form, subject: v })}
                      placeholder="e.g. SEO Strategy, E-commerce, Collaboration"
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <TextAreaField
                      id="contact-message"
                      label="Message"
                      value={form.message}
                      onChange={(v) => setForm({ ...form, message: v })}
                      placeholder="Tell me about your project or opportunity…"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <PrimaryButton
                    type="submit"
                    disabled={formState === 'submitting'}
                    showArrow={formState !== 'submitting'}
                    className="w-full justify-center py-3.5"
                  >
                    {formState === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="inline-block"
                          aria-hidden="true"
                        >
                          <Send size={14} />
                        </motion.span>
                        Sending…
                      </span>
                    ) : (
                      "Let's Talk"
                    )}
                  </PrimaryButton>

                  <p className="text-[11px] text-[#A7B1C2]/40 text-center">
                    ⚠️ Backend not yet connected — see code comments to set up form delivery.
                  </p>
                </form>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
