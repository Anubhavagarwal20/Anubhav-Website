import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.88 0-1.6.72-1.6 1.6 0 .89.72 1.61 1.6 1.61.89 0 1.6-.72 1.6-1.61 0-.88-.71-1.6-1.6-1.6Z" />
    </svg>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  const email = 'anubhavagarwal2020@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/anubhavagarwal20/';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${email}?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setSentStatus('Opening email client...');
    setTimeout(() => setSentStatus(null), 4000);
  };

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-16 text-[#D7E2EA]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            id="contact-heading"
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-6 sm:mb-8"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Contact
          </h2>
          <p className="text-center font-light uppercase tracking-widest text-[#D7E2EA]/60 text-sm sm:text-base md:text-lg mb-16 sm:mb-20 md:mb-24 max-w-xl mx-auto">
            Let's collaborate on SEO, GEO, E-Commerce, or Performance Growth
          </p>
        </FadeIn>

        {/* Two-Column Grid: Left Contact Info / Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-24 sm:mb-32">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <FadeIn delay={0.1} y={30}>
              <div className="rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/20 bg-[#121212] p-6 sm:p-8 md:p-10 flex flex-col gap-8">
                <div>
                  <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/50 block mb-2">
                    Get In Touch
                  </span>
                  <h3 className="font-medium uppercase tracking-tight text-2xl sm:text-3xl text-[#D7E2EA]">
                    Start A Conversation
                  </h3>
                  <p className="font-light text-sm sm:text-base text-[#D7E2EA]/75 mt-3 leading-relaxed">
                    Available for full-time digital marketing roles, freelance projects, e-commerce consulting, and performance marketing collaborations.
                  </p>
                </div>

                {/* Email Box */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-light uppercase tracking-wider text-[#D7E2EA]/50">
                    Direct Email
                  </span>
                  <div className="flex items-center justify-between gap-2 p-3 sm:p-4 rounded-2xl bg-[#1A1A1A] border border-[#D7E2EA]/15">
                    <a
                      href={`mailto:${email}`}
                      className="text-xs sm:text-sm font-light text-[#D7E2EA] hover:underline truncate"
                    >
                      {email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D7E2EA]/10 hover:bg-[#D7E2EA]/20 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition-colors flex-shrink-0 cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Social & Professional Links */}
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-light uppercase tracking-wider text-[#D7E2EA]/50">
                    Professional Networks
                  </span>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#1A1A1A] border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <LinkedinIcon className="w-4 h-4 text-[#D7E2EA]" />
                        <span className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA]">
                          LinkedIn
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#D7E2EA]/60" />
                    </a>

                    <a
                      href={`mailto:${email}`}
                      className="flex-1 flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#1A1A1A] border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-[#D7E2EA]" />
                        <span className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA]">
                          Mail
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#D7E2EA]/60" />
                    </a>
                  </div>
                </div>

                {/* Location / Status badge */}
                <div className="pt-4 border-t border-[#D7E2EA]/10 flex items-center justify-between text-xs font-light text-[#D7E2EA]/60">
                  <span>Delhi NCR, India</span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open to opportunities
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2} y={30}>
              <form
                onSubmit={handleSubmit}
                className="rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/20 bg-[#121212] p-6 sm:p-8 md:p-10 flex flex-col gap-6"
              >
                <div>
                  <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/50 block mb-2">
                    Send A Message
                  </span>
                  <h3 className="font-medium uppercase tracking-tight text-2xl sm:text-3xl text-[#D7E2EA]">
                    Let's Build Something Great
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-xs uppercase font-light tracking-wider text-[#D7E2EA]/70">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#1A1A1A] border border-[#D7E2EA]/15 text-[#D7E2EA] placeholder-[#D7E2EA]/30 text-sm focus:outline-none focus:border-[#D7E2EA]/60 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-xs uppercase font-light tracking-wider text-[#D7E2EA]/70">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#1A1A1A] border border-[#D7E2EA]/15 text-[#D7E2EA] placeholder-[#D7E2EA]/30 text-sm focus:outline-none focus:border-[#D7E2EA]/60 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-xs uppercase font-light tracking-wider text-[#D7E2EA]/70">
                    Project Details / Inquiry
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your goals, timelines, or role scope..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#1A1A1A] border border-[#D7E2EA]/15 text-[#D7E2EA] placeholder-[#D7E2EA]/30 text-sm focus:outline-none focus:border-[#D7E2EA]/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] bg-[#D7E2EA] text-[#0C0C0C] font-semibold uppercase tracking-widest px-8 py-4 text-sm sm:text-base hover:bg-transparent hover:text-[#D7E2EA] transition-all duration-200 cursor-pointer select-none active:scale-[0.99] mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>

                {sentStatus && (
                  <p className="text-center text-xs font-light text-emerald-400 tracking-wider uppercase mt-1">
                    {sentStatus}
                  </p>
                )}
              </form>
            </FadeIn>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="pt-8 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#D7E2EA]/50">
          <p>© {new Date().getFullYear()} Anubhav Agarwal. All rights reserved.</p>
          <div className="flex items-center gap-6 uppercase tracking-wider">
            <a href="#about" className="hover:text-[#D7E2EA] transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-[#D7E2EA] transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-[#D7E2EA] transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-[#D7E2EA] transition-colors">
              Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
